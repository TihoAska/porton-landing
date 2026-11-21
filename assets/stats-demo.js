/* Statistika picture: the dropdowns work, with made-up numbers.
   The options (periods, chart types, metrics, years that cannot be the same in the comparison) follow the app's statistics page.
   The drawing of the bars and lines follows the guide's own chart pictures. All numbers are invented. */
(function () {
    'use strict';

    var MONTH_KEYS = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    var YEARS = [2026, 2025, 2024];
    var PERIODS = ['month', 'season', 'year'];
    // ---- saving files, shared with the Reservations export in script.js ----
    var xlsxLoading = null;
    var PortonExport = {
        download: function (name, mime, data) {
            var blob = new Blob([data], { type: mime });
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = name;
            document.body.appendChild(a);
            a.click();
            setTimeout(function () { URL.revokeObjectURL(url); if (a.parentNode) a.parentNode.removeChild(a); }, 600);
        },
        // Excel files are written by the same library the app uses (xlsx-js-style), loaded from a public script host the first time it is needed.
        withXlsx: function (done) {
            if (window.XLSX) { done(window.XLSX); return; }
            if (!xlsxLoading) {
                xlsxLoading = new Promise(function (ok, fail) {
                    var sc = document.createElement('script');
                    sc.src = 'https://cdn.jsdelivr.net/npm/xlsx-js-style@1.2.0/dist/xlsx.bundle.js';
                    sc.onload = function () { ok(window.XLSX); };
                    sc.onerror = function () { xlsxLoading = null; fail(); };
                    document.head.appendChild(sc);
                });
            }
            xlsxLoading.then(done, function () { if (window.console) console.warn('Excel library could not be loaded'); });
        },
        // The app's export of a table (CSV, JSON or Excel): headers is a list of titles, rows a list of lists. A JSON file puts the rows under `parent`.
        table: function (kind, fileName, parent, headers, rows) {
            var safe = fileName.replace(/[\\/:*?"<>|]+/g, '-').trim() || 'export';
            if (kind === 'json') {
                var objects = rows.map(function (r) {
                    var o = {};
                    headers.forEach(function (h, i) { o[h] = r[i] == null ? null : r[i]; });
                    return o;
                });
                var doc = {};
                doc[parent] = objects;
                PortonExport.download(safe + '.json', 'application/json;charset=utf-8', JSON.stringify(doc, null, 2));
                return;
            }
            var matrix = [headers].concat(rows.map(function (r) { return r.map(function (v) { return v == null ? '' : v; }); }));
            if (kind === 'csv') {
                var text = matrix.map(function (line) {
                    return line.map(function (v) { var c = String(v); return /[",\r\n]/.test(c) ? '"' + c.replace(/"/g, '""') + '"' : c; }).join(',');
                }).join('\r\n');
                PortonExport.download(safe + '.csv', 'text/csv;charset=utf-8', '\ufeff' + text);
                return;
            }
            PortonExport.withXlsx(function (X) {
                var ws = X.utils.aoa_to_sheet(matrix);
                ws['!cols'] = headers.map(function (_, i) {
                    var longest = 8;
                    matrix.forEach(function (line) { longest = Math.max(longest, String(line[i] == null ? '' : line[i]).length); });
                    return { wch: Math.min(60, longest + 2) };
                });
                headers.forEach(function (_, i) { var c = ws[X.utils.encode_cell({ r: 0, c: i })]; if (c) c.s = { font: { bold: true } }; });
                var wb = X.utils.book_new();
                X.utils.book_append_sheet(wb, ws, safe.slice(0, 31));
                PortonExport.download(safe + '.xlsx', 'application/octet-stream', X.write(wb, { bookType: 'xlsx', type: 'array' }));
            });
        },
        // The list under an export button: CSV, JSON, Excel (as in the app). Returns nothing; `choose(kind)` is called with 'csv', 'json' or 'xlsx'.
        menu: function (btn, host, t, choose) {
            var m = document.createElement('div');
            m.className = 'dd-menu export-menu';
            m.hidden = true;
            m.setAttribute('role', 'menu');
            var items = [
                ['csv', '<i class="pi pi-file" style="color: var(--p-orange-500)"></i>', t('EXPORT.CSV')],
                ['json', '<span class="dd-json">{ }</span>', t('EXPORT.JSON')],
                ['xlsx', '<i class="pi pi-file-excel" style="color: var(--p-green-600)"></i>', t('EXPORT.EXCEL')]
            ];
            var bs = items.map(function (it) {
                var b = document.createElement('button');
                b.type = 'button';
                b.className = 'dd-option';
                b.setAttribute('role', 'menuitem');
                b.innerHTML = it[1] + '<span class="dd-text"></span>';
                b.querySelector('.dd-text').textContent = it[2];
                b.addEventListener('click', function () { choose(it[0]); close(true); });
                m.appendChild(b);
                return b;
            });
            host.appendChild(m);
            function open() {
                PortonExport.withXlsx(function () { });
                m.hidden = false;
                btn.setAttribute('aria-expanded', 'true');
                bs[0].focus({ preventScroll: true });
            }
            function close(refocus) {
                if (m.hidden) return;
                m.hidden = true;
                btn.setAttribute('aria-expanded', 'false');
                if (refocus) btn.focus({ preventScroll: true });
            }
            btn.setAttribute('role', 'button');
            btn.setAttribute('tabindex', '0');
            btn.setAttribute('aria-haspopup', 'menu');
            btn.setAttribute('aria-expanded', 'false');
            btn.setAttribute('aria-label', t('EXPORT.BUTTON'));
            var toggle = function () { if (m.hidden) open(); else close(false); };
            btn.addEventListener('click', toggle);
            btn.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
            m.addEventListener('keydown', function (e) {
                var i = bs.indexOf(document.activeElement);
                if (e.key === 'ArrowDown') { e.preventDefault(); bs[(i + 1) % bs.length].focus(); }
                else if (e.key === 'ArrowUp') { e.preventDefault(); bs[(i + bs.length - 1) % bs.length].focus(); }
                else if (e.key === 'Escape') { e.preventDefault(); close(true); }
                else if (e.key === 'Tab') { close(false); }
            });
            document.addEventListener('click', function (e) {
                if (!document.body.contains(host)) return;
                if (!host.contains(e.target)) close(false);
            });
        }
    };
    window.PortonExport = PortonExport;

    var COLORS = ['--p-cyan-500', '--p-orange-500', '--p-green-500', '--p-pink-500', '--p-purple-500', '--p-yellow-500', '--p-red-500', '--p-blue-500', '--p-teal-500', '--p-indigo-500', '--p-lime-500'];
    var HOUSES = ['Villa Aurora', 'Premium 21', 'Studio Bay', 'Villa Olive', 'Deluxe 32', 'Studio Pine', 'Comfort 14', 'Studio Dune', 'Glamping 5',
        'Mobile Home Breeze', 'Family 08', 'Studio Wave', 'Premium 22', 'Mobile Home Sun', 'Comfort 15', 'Studio Palm', 'Glamping 6', 'Studio Reef'];
    var W = 600, H = 272;

    // March to November, the season, as the guide's charts have it (a year view has twelve months, so January, February and December are 0).
    var SEASON_DATA = {
        guests: [0, 12, 38, 96, 148, 131, 52, 16, 0],
        adults: [0, 9, 27, 69, 105, 93, 37, 12, 0],
        babies: [0, 3, 11, 27, 43, 38, 15, 4, 0],
        dogs_d: [0, 2, 6, 14, 22, 19, 9, 4, 0],
        cribs: [0, 0, 1, 2, 4, 3, 1, 0, 0],
        repair: [0, 1, 2, 4, 6, 5, 3, 1, 0],
        houseClean: [0, 6, 14, 28, 52, 47, 22, 9, 0],
        deckClean: [0, 3, 9, 17, 31, 28, 12, 5, 0],
        sheet: [0, 3, 7, 14, 26, 23, 10, 4, 0],
        towel: [0, 2, 6, 12, 22, 19, 9, 3, 0],
        unscheduled: [0, 0, 1, 2, 4, 3, 1, 0, 0],
        reservations: [0, 6, 14, 31, 44, 40, 15, 4, 0],
        arrivals: [0, 9, 30, 74, 112, 98, 40, 13, 0],
        departures: [0, 8, 28, 70, 108, 100, 45, 14, 0],
        no_shows: [0, 0, 1, 2, 3, 2, 1, 0, 0]
    };
    var OCCUPANCY = {
        2026: [0, 8, 31, 62, 88, 84, 40, 11, 0],
        2025: [0, 5, 26, 55, 81, 79, 33, 9, 0],
        2024: [0, 4, 23, 48, 71, 69, 29, 8, 0]
    };
    var YEAR_FACTOR = { 2026: 1, 2025: 0.88, 2024: 0.74 };

    // The general statistics metrics (statistics.service.ts generalMetrics), then the extra ones the year comparison has.
    var GENERAL = [
        ['guests', 'GUEST-INCAMP-GUESTS'], ['adults', 'ADULTS'], ['babies', 'CHILDREN'], ['dogs_d', 'PETS'], ['cribs', 'BABY-CRIBS'],
        ['repair', 'REPAIR-TASKS'], ['houseClean', 'HOUSE-CLEANING-TASKS'], ['deckClean', 'DECK-CLEANING-TASKS'], ['sheet', 'SHEET-CHANGE-TASKS'],
        ['towel', 'TOWEL-CHANGE-TASKS'], ['unscheduled', 'UNSCHEDULED-TASKS'], ['totalTasks', 'TOTAL-TASKS']
    ];
    var COMPARE = [
        ['occupancy', 'OCCUPANCY'], ['reservations', 'GUEST-RESERVATIONS'], ['arrivals', 'GUEST-ARRIVALS-GUESTS'], ['departures', 'GUEST-DEPARTURES-GUESTS'],
        ['no_shows', 'GUEST-NO-SHOWS'], ['guests', 'GUEST-INCAMP-GUESTS'], ['adults', 'GUEST-INCAMP-ADULTS'], ['babies', 'GUEST-INCAMP-CHILDREN'],
        ['dogs_d', 'GUEST-INCAMP-PETS'], ['cribs', 'GUEST-INCAMP-CRIBS'], ['repair', 'REPAIR-TASKS'], ['houseClean', 'HOUSE-CLEANING-TASKS'],
        ['deckClean', 'DECK-CLEANING-TASKS'], ['sheet', 'SHEET-CHANGE-TASKS'], ['towel', 'TOWEL-CHANGE-TASKS'], ['unscheduled', 'UNSCHEDULED-TASKS'],
        ['totalTasks', 'TOTAL-TASKS']
    ];

    // ---------- numbers ----------
    function hash(str) {
        var h = 2166136261;
        for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
        return ((h >>> 0) % 10000) / 10000;
    }

    function seasonArray(key) {
        if (key === 'totalTasks') {
            return SEASON_DATA.repair.map(function (_, i) {
                return SEASON_DATA.repair[i] + SEASON_DATA.houseClean[i] + SEASON_DATA.deckClean[i] + SEASON_DATA.sheet[i] + SEASON_DATA.towel[i] + SEASON_DATA.unscheduled[i];
            });
        }
        return SEASON_DATA[key];
    }

    /** One value per month (January to December) for a metric, a year and a house. */
    function monthly(key, year, house) {
        var f = YEAR_FACTOR[year] || 1;
        var houseF = house && house !== 'All' ? 0.04 + 0.1 * hash(house) : 1;
        var out = [];
        for (var m = 0; m < 12; m++) {
            var si = m - 2;
            var base = 0;
            if (key === 'occupancy') {
                base = si >= 0 && si < 9 ? OCCUPANCY[year][si] : 0;
                out.push(base);
                continue;
            }
            base = si >= 0 && si < 9 ? seasonArray(key)[si] : 0;
            var wobble = year === 2026 ? 1 : 0.9 + 0.2 * hash(key + year + m);
            out.push(Math.round(base * f * wobble * houseF));
        }
        return out;
    }

    function daysIn(year, monthIdx) { return new Date(year, monthIdx + 1, 0).getDate(); }

    /** The points of a chart: labels and one value per label. A month shows one point a day. */
    function series(key, state, year, house, t) {
        var m12 = monthly(key, year, house);
        var labels = [];
        var values = [];
        if (state.period === 'year') {
            for (var i = 0; i < 12; i++) { labels.push(t('MONTHS.' + MONTH_KEYS[i])); values.push(m12[i]); }
        } else if (state.period === 'season') {
            for (var s = 2; s < 11; s++) { labels.push(t('MONTHS.' + MONTH_KEYS[s])); values.push(m12[s]); }
        } else {
            var n = daysIn(year, state.month);
            var weights = [];
            var total = 0;
            for (var d = 1; d <= n; d++) {
                var w = 0.55 + 0.9 * hash(key + year + state.month + d);
                weights.push(w);
                total += w;
            }
            for (var k = 0; k < n; k++) {
                labels.push(String(k + 1));
                if (key === 'occupancy') {
                    var o = m12[state.month] === 0 ? 0 : m12[state.month] * (0.8 + 0.4 * hash(key + year + state.month + k));
                    values.push(Math.max(0, Math.min(100, Math.round(o))));
                } else {
                    values.push(Math.round(m12[state.month] * weights[k] / total));
                }
            }
        }
        return { labels: labels, values: values };
    }

    function sum(a) { return a.reduce(function (x, y) { return x + y; }, 0); }

    function niceMax(v) {
        if (v <= 0) return 4;
        var bases = [1, 10, 100, 1000, 10000];
        var mults = [1, 2, 2.5, 4, 5];
        for (var b = 0; b < bases.length; b++) {
            for (var m = 0; m < mults.length; m++) {
                var step = bases[b] * mults[m];
                if (step * 4 >= v * 1.05) return step * 4;
            }
        }
        return Math.ceil(v);
    }

    // ---------- drawing (the guide's own chart code, with any number of points) ----------
    function yGrid(max, left, top, bottom, unit) {
        var out = '';
        for (var i = 0; i <= 4; i++) {
            var y = bottom - ((bottom - top) * i) / 4;
            out += '<line x1="' + left + '" y1="' + y + '" x2="' + (W - 8) + '" y2="' + y + '" class="grid" /><text x="' + (left - 6) + '" y="' + (y + 4) + '" text-anchor="end">' + Math.round((max * i) / 4) + (unit || '') + '</text>';
        }
        return out;
    }

    function skipFor(n) { return n > 20 ? 3 : n > 12 ? 2 : 1; }

    function barChart(labels, sets, max) {
        var left = 44, top = 12, bottom = 236;
        var n = labels.length;
        var slot = (W - 8 - left) / n;
        var bw = Math.min(36, (slot * 0.8) / Math.max(1, sets.length));
        var bars = '';
        sets.forEach(function (s, k) {
            s.values.forEach(function (value, i) {
                var h = ((bottom - top) * value) / max;
                var x = left + slot * i + (slot - bw * sets.length) / 2 + bw * k;
                bars += '<rect x="' + x + '" y="' + (bottom - h) + '" width="' + bw + '" height="' + h + '" style="fill: var(' + s.color + ')" class="bar" />';
            });
        });
        var skip = skipFor(n);
        var text = '';
        labels.forEach(function (l, i) {
            if (i % skip === 0) text += '<text x="' + (left + slot * i + slot / 2) + '" y="' + (bottom + 18) + '" text-anchor="middle">' + l + '</text>';
        });
        return '<svg class="plot" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none">' + yGrid(max, left, top, bottom) + bars + text + '</svg>';
    }

    function lineChart(labels, sets, max, unit) {
        var left = 44, top = 12, bottom = 236;
        var n = labels.length;
        var step = (W - 32 - left) / Math.max(1, n - 1);
        function pt(value, i) { return [left + step * i, bottom - ((bottom - top) * value) / max]; }
        var out = '';
        sets.forEach(function (s) {
            var pts = s.values.map(function (v, i) { return pt(v, i).join(','); }).join(' ');
            out += '<polygon points="' + left + ',' + bottom + ' ' + pts + ' ' + (left + step * (s.values.length - 1)) + ',' + bottom + '" style="fill: color-mix(in srgb, var(' + s.color + ') 20%, transparent)" />' +
                '<polyline points="' + pts + '" style="stroke: var(' + s.color + ')" class="line" />';
            s.values.forEach(function (v, i) {
                var p = pt(v, i);
                out += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + (n > 12 ? 2 : 3) + '" style="fill: var(' + s.color + ')" />';
            });
        });
        var skip = skipFor(n);
        var text = '';
        labels.forEach(function (l, i) {
            if (i % skip === 0) text += '<text x="' + (left + step * i) + '" y="' + (bottom + 18) + '" text-anchor="middle">' + l + '</text>';
        });
        return '<svg class="plot" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none">' + yGrid(max, left, top, bottom, unit) + out + text + '</svg>';
    }

    function pieChart(sets, doughnut) {
        var cx = 300, cy = 126, r = 108, inner = doughnut ? r * 0.58 : 0;
        var total = sum(sets.map(function (s) { return sum(s.values); }));
        if (!total) return '<svg class="plot" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none"></svg>';
        var angle = -Math.PI / 2;
        var out = '';
        sets.forEach(function (s) {
            var value = sum(s.values);
            if (!value) return;
            var a2 = angle + (value / total) * Math.PI * 2;
            var full = value === total;
            function p(radius, a) { return [cx + radius * Math.cos(a), cy + radius * Math.sin(a)]; }
            var d;
            if (full) {
                d = 'M' + (cx - r) + ',' + cy + 'a' + r + ',' + r + ' 0 1,0 ' + 2 * r + ',0a' + r + ',' + r + ' 0 1,0 ' + (-2 * r) + ',0';
                if (inner) d += 'M' + (cx - inner) + ',' + cy + 'a' + inner + ',' + inner + ' 0 1,1 ' + 2 * inner + ',0a' + inner + ',' + inner + ' 0 1,1 ' + (-2 * inner) + ',0';
            } else {
                var large = a2 - angle > Math.PI ? 1 : 0;
                var o1 = p(r, angle), o2 = p(r, a2);
                if (inner) {
                    var i1 = p(inner, a2), i2 = p(inner, angle);
                    d = 'M' + o1 + 'A' + r + ',' + r + ' 0 ' + large + ',1 ' + o2 + 'L' + i1 + 'A' + inner + ',' + inner + ' 0 ' + large + ',0 ' + i2 + 'Z';
                } else {
                    d = 'M' + cx + ',' + cy + 'L' + o1 + 'A' + r + ',' + r + ' 0 ' + large + ',1 ' + o2 + 'Z';
                }
            }
            out += '<path d="' + d + '" fill-rule="evenodd" style="fill: var(' + s.color + '); stroke: var(--surface-1, #1b2020); stroke-width: 2" />';
            angle = a2;
        });
        return '<svg class="plot" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none">' + out + '</svg>';
    }

    // ---------- dropdowns ----------
    var registry = [];
    var listening = false;

    function closeAll(except) {
        registry = registry.filter(function (d) { return document.body.contains(d.el); });
        registry.forEach(function (d) { if (d.el !== except) d.close(false); });
    }

    function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

    /** Make a drawn p-select or p-multiselect work. cfg: options [{value,label}], value (or values, with multi), filter, onChange. */
    function dropdown(el, cfg) {
        if (!listening) {
            listening = true;
            document.addEventListener('click', function (e) {
                registry.forEach(function (d) { if (!d.el.contains(e.target)) d.close(false); });
            });
        }
        var multi = !!cfg.multi;
        var label = el.querySelector(multi ? '.p-multiselect-label' : '.p-select-label');
        var menu = document.createElement('div');
        menu.className = 'dd-menu';
        menu.hidden = true;
        var search = null;
        if (cfg.filter) {
            var head = document.createElement('div');
            head.className = 'dd-head';
            head.innerHTML = '<input type="text" class="dd-search" autocomplete="off" />';
            search = head.firstChild;
            search.setAttribute('aria-label', cfg.name || '');
            menu.appendChild(head);
        }
        var list = document.createElement('div');
        list.className = 'dd-list';
        list.setAttribute('role', 'listbox');
        if (multi) list.setAttribute('aria-multiselectable', 'true');
        menu.appendChild(list);
        el.appendChild(menu);

        var current = multi ? cfg.values.slice() : cfg.value;
        var buttons = [];
        cfg.options.forEach(function (o) {
            var b = document.createElement('button');
            b.type = 'button';
            b.className = 'dd-option';
            b.setAttribute('role', 'option');
            b.setAttribute('data-value', String(o.value));
            b.innerHTML = (multi ? '<span class="dd-box"><i class="pi pi-check"></i></span>' : '') + '<span class="dd-text">' + esc(o.label) + '</span>';
            list.appendChild(b);
            buttons.push({ b: b, o: o });
        });

        function isOn(v) { return multi ? current.indexOf(v) !== -1 : current === v; }
        function paint() {
            buttons.forEach(function (x) {
                var on = isOn(x.o.value);
                x.b.setAttribute('aria-selected', on ? 'true' : 'false');
                x.b.classList.toggle('on', on);
            });
            if (label) {
                label.textContent = multi
                    ? cfg.options.filter(function (o) { return isOn(o.value); }).map(function (o) { return o.label; }).join(', ')
                    : (cfg.options.filter(function (o) { return o.value === current; })[0] || { label: '' }).label;
            }
        }
        paint();

        el.setAttribute('role', 'combobox');
        el.setAttribute('tabindex', '0');
        el.setAttribute('aria-haspopup', 'listbox');
        el.setAttribute('aria-expanded', 'false');
        if (cfg.name) el.setAttribute('aria-label', cfg.name);

        function visibleButtons() { return buttons.filter(function (x) { return !x.b.hidden; }).map(function (x) { return x.b; }); }
        function open() {
            closeAll(el);
            menu.hidden = false;
            el.setAttribute('aria-expanded', 'true');
            var vb = visibleButtons();
            var target = search || vb.filter(function (b) { return b.classList.contains('on'); })[0] || vb[0];
            if (target) target.focus({ preventScroll: true });
            var on = menu.querySelector('.dd-option.on');
            if (on && !search) list.scrollTop = Math.max(0, on.offsetTop - 40);
        }
        function close(refocus) {
            if (menu.hidden) return;
            menu.hidden = true;
            el.setAttribute('aria-expanded', 'false');
            if (search) { search.value = ''; buttons.forEach(function (x) { x.b.hidden = false; }); }
            if (refocus) el.focus({ preventScroll: true });
        }
        function choose(v) {
            if (multi) {
                var i = current.indexOf(v);
                if (i === -1) current.push(v); else current.splice(i, 1);
                // keep the app's order of the list
                current = cfg.options.map(function (o) { return o.value; }).filter(function (x) { return current.indexOf(x) !== -1; });
                paint();
                cfg.onChange(current.slice());
            } else {
                current = v;
                paint();
                close(true);
                cfg.onChange(v);
            }
        }
        function valueOf(b) {
            var raw = b.getAttribute('data-value');
            var o = buttons.filter(function (x) { return String(x.o.value) === raw; })[0];
            return o ? o.o.value : raw;
        }

        el.addEventListener('click', function (e) {
            var opt = e.target.closest ? e.target.closest('.dd-option') : null;
            if (opt) { choose(valueOf(opt)); return; }
            if (e.target.closest && e.target.closest('.dd-menu')) return;
            if (menu.hidden) open(); else close(false);
        });
        if (search) {
            search.addEventListener('input', function () {
                var q = search.value.trim().toLowerCase();
                buttons.forEach(function (x) { x.b.hidden = !!q && x.o.label.toLowerCase().indexOf(q) === -1; });
            });
        }
        el.addEventListener('keydown', function (e) {
            var active = document.activeElement;
            var inMenu = active && menu.contains(active);
            if (!inMenu) {
                if (e.target !== el) return;
                if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') { e.preventDefault(); open(); }
                return;
            }
            var vb = visibleButtons();
            var i = vb.indexOf(active);
            if (e.key === 'ArrowDown') { e.preventDefault(); (vb[i + 1] || vb[0] || active).focus({ preventScroll: true }); if (vb[i + 1]) vb[i + 1].scrollIntoView({ block: 'nearest' }); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); if (i > 0) { vb[i - 1].focus({ preventScroll: true }); vb[i - 1].scrollIntoView({ block: 'nearest' }); } else if (search) search.focus(); }
            else if (e.key === 'Escape') { e.preventDefault(); close(true); }
            else if (e.key === 'Tab') { close(false); }
        });
        registry.push({ el: el, close: close });
    }

    // ---------- the page ----------
    function selectHtml(width) {
        return '<div class="p-select p-component p-inputwrapper p-inputwrapper-filled filter-select p-select-sm"' + (width ? ' style="width: ' + width + '"' : '') +
            '><span class="p-select-label"></span><div class="p-select-dropdown"><span class="pi pi-chevron-down"></span></div></div>';
    }

    function wire(box, ctx) {
        var t = ctx.t;
        var page = box.querySelector('.stats-body');
        if (!page) return;
        var state = {
            year: 2026, period: 'season', month: 6,
            chartType: 'bar', house: 'All', metrics: ['guests', 'dogs_d'],
            years: [2026, 2025], compareMetric: 'occupancy'
        };

        function monthOptions() { return MONTH_KEYS.map(function (k, i) { return { value: i, label: t('MONTHS.' + k) }; }); }
        function periodFactor() {
            var f = YEAR_FACTOR[state.year] || 1;
            if (state.period === 'year') return f * 1.12;
            if (state.period === 'month') {
                var shape = [0, 0, 0, 0.08, 0.26, 0.65, 1, 0.89, 0.35, 0.11, 0, 0];
                return f * shape[state.month] / 3.34;
            }
            return f;
        }

        // The year, (month,) period boxes: the same on every tab, so a change on one is kept on the others.
        function renderToolbar(onChange) {
            var tb = page.querySelector('.stats-toolbar');
            if (!tb) return;
            var html = selectHtml() + (state.period === 'month' ? selectHtml() : '') + selectHtml();
            tb.innerHTML = html;
            var els = tb.querySelectorAll('.p-select');
            var i = 0;
            dropdown(els[i++], {
                name: t('BUTTONS.YEAR'), options: YEARS.map(function (y) { return { value: y, label: String(y) }; }), value: state.year,
                onChange: function (v) { state.year = v; onChange(); }
            });
            if (state.period === 'month') {
                dropdown(els[i++], { name: t('BUTTONS.MONTH'), options: monthOptions(), value: state.month, onChange: function (v) { state.month = v; onChange(); } });
            }
            dropdown(els[i], {
                name: t('BUTTONS.SEASON'), options: PERIODS.map(function (p) { return { value: p, label: t('BUTTONS.' + p.toUpperCase()) }; }), value: state.period,
                onChange: function (v) { state.period = v; onChange(true); }
            });
        }

        function scaleTiles() {
            var f = periodFactor();
            page.querySelectorAll('.tile-value, .tile-detail').forEach(function (el) {
                el.childNodes.forEach(function (node) {
                    if (node.nodeType !== 3) return;
                    var m = /^(\s*)(\d+)(\s.*)?$/.exec(node.nodeValue);
                    if (!m || /^\d+\.\s*\d/.test(node.nodeValue.trim())) return;
                    node.nodeValue = m[1] + Math.round(parseInt(m[2], 10) * f) + (m[3] || '');
                });
            });
        }

        function scaleUsage() {
            var cards = page.querySelectorAll('.table-card');
            var card = cards[1];
            if (!card) return;
            var base = [642, 154, 41];
            var f = periodFactor();
            card.querySelectorAll('.usage-value').forEach(function (el, i) { el.textContent = String(Math.round(base[i] * f)); });
        }

        function tileHtml(name, value, color) {
            return '<div class="stat-tile" style="background: color-mix(in srgb, var(' + color + ') 20%, transparent); border-color: transparent"><span class="stat-label">' + esc(name) +
                '</span><span class="stat-value tabular-nums">' + value + '</span></div>';
        }

        var generalPanel, comparePanel;
        var lastGeneral = null, lastCompare = null;     // the numbers on show, for the export

        function renderGeneral() {
            var panel = generalPanel;
            if (!panel) return;
            // The colours go by place in the choice, so the first is always cyan and the second orange, as in the picture.
            var sets = state.metrics.map(function (key, pos) {
                var idx = GENERAL.map(function (g) { return g[0]; }).indexOf(key);
                var s;
                if (key === 'totalTasks') {
                    var parts = ['repair', 'houseClean', 'deckClean', 'sheet', 'towel', 'unscheduled'].map(function (k) { return series(k, state, state.year, state.house, t); });
                    s = { labels: parts[0].labels, values: parts[0].values.map(function (_, i) { return sum(parts.map(function (p) { return p.values[i]; })); }) };
                } else {
                    s = series(key, state, state.year, state.house, t);
                }
                return { key: key, color: COLORS[pos % COLORS.length], values: s.values, labels: s.labels, name: t('STATISTICS.METRICS.' + GENERAL[idx][1]) };
            });
            var labels = sets.length ? sets[0].labels : series('guests', state, state.year, state.house, t).labels;
            lastGeneral = { labels: labels, sets: sets };
            var max = niceMax(Math.max.apply(null, [0].concat(sets.map(function (s) { return Math.max.apply(null, [0].concat(s.values)); }))));
            var area = panel.querySelector('.chart-area');
            if (state.chartType === 'line') area.innerHTML = lineChart(labels, sets, max);
            else if (state.chartType === 'pie') area.innerHTML = pieChart(sets, false);
            else if (state.chartType === 'doughnut') area.innerHTML = pieChart(sets, true);
            else area.innerHTML = barChart(labels, sets, max);
            panel.querySelector('.stat-tiles').innerHTML = sets.map(function (s) { return tileHtml(s.name, sum(s.values), s.color); }).join('');
        }

        function renderCompare() {
            var panel = comparePanel;
            if (!panel) return;
            var idx = COMPARE.map(function (c) { return c[0]; }).indexOf(state.compareMetric);
            var isOcc = state.compareMetric === 'occupancy';
            var sets = state.years.map(function (y, k) {
                var s;
                if (state.compareMetric === 'totalTasks') {
                    var parts = ['repair', 'houseClean', 'deckClean', 'sheet', 'towel', 'unscheduled'].map(function (kk) { return series(kk, state, y, 'All', t); });
                    s = { labels: parts[0].labels, values: parts[0].values.map(function (_, i) { return sum(parts.map(function (p) { return p.values[i]; })); }) };
                } else {
                    s = series(state.compareMetric, state, y, 'All', t);
                }
                return { year: y, color: COLORS[k], values: s.values, labels: s.labels };
            });
            var max = isOcc ? 100 : niceMax(Math.max.apply(null, [0].concat(sets.map(function (s) { return Math.max.apply(null, [0].concat(s.values)); }))));
            panel.querySelector('.chart-area').innerHTML = lineChart(sets[0].labels, sets, max, isOcc ? '%' : '');
            function total(s) { return isOcc ? Math.round(sum(s.values) / s.values.length) : sum(s.values); }
            var a = total(sets[0]), b = total(sets[1]);
            lastCompare = { sets: sets, a: a, b: b };
            var change = b ? ((a - b) / b) * 100 : 0;
            var unit = isOcc ? '<span class="stat-unit">%</span>' : '';
            var up = change >= 0;
            panel.querySelector('.stat-tiles').innerHTML =
                tileHtml(String(sets[0].year), a + unit, COLORS[0]) +
                '<div class="stat-tile change-tile"><span class="stat-label">' + esc(t('STATISTICS.CHANGE')) + '</span><span class="stat-value tabular-nums ' + (up ? 'up' : 'down') + '">' +
                (up ? '+' : '') + change.toFixed(1) + '<span class="stat-unit">%</span></span></div>' +
                tileHtml(String(sets[1].year), b + unit, COLORS[1]);
            void idx;
        }

        function wireGeneral(panel) {
            generalPanel = panel;
            var actions = panel.querySelector('.panel-actions');
            var typeEl = actions && actions.querySelector('.p-select');
            if (typeEl) {
                dropdown(typeEl, {
                    name: panel.querySelector('.panel-title').textContent,
                    options: ['bar', 'line', 'pie', 'doughnut'].map(function (k) { return { value: k, label: t('STATISTICS.CHART-TYPES.' + k.toUpperCase()) }; }),
                    value: state.chartType, onChange: function (v) { state.chartType = v; renderGeneral(); ctx.fit(); }
                });
            }
            var fields = panel.querySelectorAll('.panel-controls .field');
            var houseEl = fields[0] && fields[0].querySelector('.p-select');
            var metricEl = fields[1] && fields[1].querySelector('.p-multiselect');
            if (houseEl) {
                var names = HOUSES.slice().sort(function (a, b) { return a.localeCompare(b, undefined, { numeric: true }); });
                dropdown(houseEl, {
                    name: t('HOUSE-TYPES.ALL'), filter: false,
                    options: [{ value: 'All', label: t('HOUSE-TYPES.ALL') }].concat(names.map(function (n) { return { value: n, label: n }; })),
                    value: state.house, onChange: function (v) { state.house = v; renderGeneral(); ctx.fit(); }
                });
            }
            if (metricEl) {
                dropdown(metricEl, {
                    multi: true, filter: true, name: panel.querySelector('.panel-title').textContent,
                    options: GENERAL.map(function (g) { return { value: g[0], label: t('STATISTICS.METRICS.' + g[1]) }; }),
                    values: state.metrics, onChange: function (v) { state.metrics = v; renderGeneral(); ctx.fit(); }
                });
            }
            var up = actions && actions.querySelector('.pi-upload');
            if (up) {
                var title = panel.querySelector('.panel-title').textContent;
                PortonExport.menu(up.parentNode, actions, t, function (kind) {
                    var d = lastGeneral;
                    if (!d) return;
                    var pie = state.chartType === 'pie' || state.chartType === 'doughnut';
                    var headers, rows;
                    if (pie) {
                        headers = [t('STATISTICS.SELECT.TITLE.METRIC'), title];
                        rows = d.sets.map(function (s) { return [s.name, sum(s.values)]; });
                    } else {
                        headers = [state.period === 'month' ? t('EXPORT.DAY') : t('BUTTONS.MONTH')].concat(d.sets.map(function (s) { return s.name; }));
                        rows = d.labels.map(function (l, i) { return [String(l)].concat(d.sets.map(function (s) { return s.values[i] == null ? null : s.values[i]; })); });
                    }
                    PortonExport.table(kind, 'statistika-general', title, headers, rows);
                });
            }
            renderGeneral();
        }

        function wireCompare(panel) {
            comparePanel = panel;
            var selects = Array.prototype.slice.call(panel.querySelectorAll('.panel-actions .p-select'));
            var swap = panel.querySelector('.swap-years');
            var metricEl = panel.querySelector('.panel-controls .p-select');
            function yearsBox(k) {
                return function () {
                    var other = state.years[k === 0 ? 1 : 0];
                    return YEARS.filter(function (y) { return y !== other; }).map(function (y) { return { value: y, label: String(y) }; });
                };
            }
            function build() {
                // The year lists leave out the year the other box has, so the two are never the same.
                [0, 1].forEach(function (k) {
                    var old = selects[k];
                    var fresh = old.cloneNode(false);
                    fresh.innerHTML = '<span class="p-select-label"></span><div class="p-select-dropdown"><span class="pi pi-chevron-down"></span></div>';
                    old.parentNode.replaceChild(fresh, old);
                    selects[k] = fresh;
                    dropdown(fresh, {
                        name: panel.querySelector('.panel-title').textContent, options: yearsBox(k)(), value: state.years[k],
                        onChange: function (v) { state.years[k] = v; build(); renderCompare(); ctx.fit(); }
                    });
                });
            }
            var upC = panel.querySelector('.panel-actions .pi-upload');
            if (upC) {
                var titleC = panel.querySelector('.panel-title').textContent;
                PortonExport.menu(upC.parentNode, upC.parentNode.parentNode, t, function (kind) {
                    var d = lastCompare;
                    if (!d) return;
                    // The change of the first year against the second, in percent (one decimal), as the app exports it.
                    var pct = function (x, y) { return x == null || !y ? null : Math.round(((x - y) / y) * 1000) / 10; };
                    var headers = [t('BUTTONS.MONTH'), String(d.sets[0].year), String(d.sets[1].year), t('STATISTICS.CHANGE') + ' (%)'];
                    var rows = d.sets[0].labels.map(function (l, i) {
                        var x = d.sets[0].values[i], y = d.sets[1].values[i];
                        return [String(l), x == null ? null : x, y == null ? null : y, pct(x, y)];
                    });
                    rows.push([t('STATISTICS.GUESTS.COLS.TOTAL'), d.a, d.b, pct(d.a, d.b)]);
                    PortonExport.table(kind, 'statistika-year-compare', titleC, headers, rows);
                });
            }
            build();
            if (swap) {
                swap.setAttribute('role', 'button');
                swap.setAttribute('tabindex', '0');
                var doSwap = function () { state.years = [state.years[1], state.years[0]]; build(); renderCompare(); ctx.fit(); };
                swap.addEventListener('click', doSwap);
                swap.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); doSwap(); } });
            }
            if (metricEl) {
                dropdown(metricEl, {
                    filter: true, name: panel.querySelector('.panel-title').textContent,
                    options: COMPARE.map(function (c) { return { value: c[0], label: t('STATISTICS.METRICS.' + c[1]) }; }),
                    value: state.compareMetric, onChange: function (v) { state.compareMetric = v; renderCompare(); ctx.fit(); }
                });
            }
            renderCompare();
        }

        // The guest tab's two tables (Rekordne rezervacije, Po vrsti gostiju): the export is made from the table on show, with the app's columns.
        function wireTables() {
            var cards = page.querySelectorAll('.table-card');
            Array.prototype.forEach.call(cards, function (card, k) {
                var actions = card.querySelector('.table-card-actions');
                var btn = actions && actions.querySelector('.icon-btn');
                if (!btn) return;
                var title = card.querySelector('.table-card-title').textContent.trim();
                var num = function (txt) { var n = parseFloat(String(txt).replace(',', '.')); return isFinite(n) ? n : txt; };
                var cellText = function (td) { var v = td.querySelector('.cell-value'); return (v || td).textContent.trim(); };
                // "7" with "9 (Berg)" underneath is exported as "7 (9 (Berg))", as the app does.
                var ranked = function (td) {
                    var v = td.querySelector('.cell-value'), sub = td.querySelector('.cell-sub');
                    return v ? v.textContent.trim() + (sub ? ' (' + sub.textContent.trim() + ')' : '') : '';
                };
                PortonExport.menu(btn, actions, t, function (kind) {
                    var heads = Array.prototype.map.call(card.querySelectorAll('thead th'), function (th) { return th.textContent.trim(); });
                    var headers = [title].concat(heads.slice(1).filter(function (h) { return h !== ''; }));
                    var rows = Array.prototype.map.call(card.querySelectorAll('tbody tr'), function (tr) {
                        var tds = tr.querySelectorAll('td');
                        var name = tds[0].textContent.trim();
                        if (k === 0) return [name, num(cellText(tds[1])), cellText(tds[2]), cellText(tds[3]), cellText(tds[4])];
                        return [name, num(cellText(tds[1])), ranked(tds[2]), ranked(tds[3]), ranked(tds[4]), num(cellText(tds[5]))];
                    });
                    PortonExport.table(kind, k === 0 ? 'rekordne-rezervacije' : 'po-vrsti-gostiju', title, headers, rows);
                });
            });
        }

        // Called after the page body has been filled with a tab's pictures.
        function afterRender(tabIndex) {
            var changed = function () { refresh(tabIndex); };
            renderToolbar(changed);
            if (tabIndex === 0) {
                scaleUsage();
                var panels = page.querySelectorAll('.chart-grid .chart-panel');
                if (panels[0]) wireGeneral(panels[0]);
                if (panels[1]) wireCompare(panels[1]);
            } else {
                scaleTiles();
                if (tabIndex === 1) wireTables();
            }
            ctx.fit();
        }

        function refresh(tabIndex) {
            // A new period changes the numbers everywhere, so the tab is drawn again from its original picture (the chart choices are kept).
            ctx.redraw(tabIndex);
        }

        return { afterRender: afterRender };
    }

    window.PortonStats = { wire: wire, dropdown: dropdown };
})();
