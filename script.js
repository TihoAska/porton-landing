(function () {
    'use strict';

    // Address of the app. Log in, Create a camp and Privacy policy links are built from it.
    // Empty means the links stay on this domain (/login, ...). Set it to the app's address when it is known.
    var APP_URL = '';

    // Text, copied from the app's own translation files (LANDING.* and HOME.* in en.json / hr.json).
    var TEXT = {
        "en": {
            "NAV.GROUP_OVERVIEW": "Overview",
            "NAV.GROUP_WORK": "Work",
            "NAV.DASHBOARD": "Home",
            "NAV.FEATURES": "Features",
            "NAV.YOUR_CAMP": "Your camp",
            "HERO.BADGE": "Software for holiday parks",
            "HERO.TITLE": "Your whole camp,",
            "HERO.TITLE_ACCENT": "in one place.",
            "HERO.TEXT": "Reservations, housekeeping, repairs and staff schedules together, so everyone knows what to do today.",
            "HERO.CTA_PRIMARY": "Get started",
            "KPI.OCCUPIED": "Occupied",
            "KPI.OCCUPIED_SUB": "houses today",
            "KPI.ARRIVALS": "Arrivals",
            "KPI.ARRIVALS_SUB": "today",
            "KPI.DEPARTURES": "Departures",
            "KPI.DEPARTURES_SUB": "today",
            "KPI.OPEN_TASKS": "Open tasks",
            "KPI.OPEN_TASKS_SUB": "all teams",
            "KPI.CLEANING": "Cleaning",
            "KPI.CLEANING_SUB": "in progress",
            "KPI.REPAIRS": "Repairs",
            "KPI.REPAIRS_SUB": "waiting",
            "FEATURES.EYEBROW": "Made for camps",
            "FEATURES.TITLE": "Everything a camp needs, nothing it does not.",
            "FEATURE.F1.TITLE": "Reservations",
            "FEATURE.F1.TEXT": "A calendar of every house and every stay.",
            "FEATURE.F2.TITLE": "Tasks",
            "FEATURE.F2.TEXT": "Cleaning and repairs, from created to confirmed.",
            "FEATURE.F3.TITLE": "Teams",
            "FEATURE.F3.TEXT": "Put staff in teams and set work schedules.",
            "FEATURE.F4.TITLE": "Notifications",
            "FEATURE.F4.TEXT": "Staff get a message when something is for them.",
            "FEATURE.F5.TITLE": "Statistics",
            "FEATURE.F5.TEXT": "Occupancy and work, in charts.",
            "FEATURE.F6.TITLE": "More camps",
            "FEATURE.F6.TEXT": "Run several camps from one account.",
            "CTA.EYEBROW": "Ready when you are",
            "CTA.TITLE": "Start with your camp.",
            "CTA.TEXT": "Create an account and add your first house.",
            "CTA.PRIMARY": "Create a camp",
            "CTA.SECONDARY": "Log in",
            "FOOTER.BLURB": "Software for running a holiday park.",
            "FOOTER.PRODUCT": "Product",
            "FOOTER.COMPANY": "Account",
            "FOOTER.LINK_FEATURES": "Features",
            "FOOTER.LINK_LOGIN": "Log in",
            "FOOTER.LINK_SIGNUP": "Create a camp",
            "FOOTER.LINK_PRIVACY": "Privacy policy",
            "FOOTER.COPYRIGHT": "© 2026 Porton",
            "HOUSES.TITLE": "Houses",
            "HOUSES.SORT": "By number",
            "HOUSES.DOGS": "Show only houses with pets",
            "HOUSES.CONFIRM": "Needs confirmation",
            "HOUSES.DETAILS": "Show house details",
            "HOUSES.SEARCH": "Search houses",
            "HOUSES.LEGEND_FREE_CLEANED": "Free (Cleaned)",
            "HOUSES.LEGEND_FREE_NOT_CLEANED": "Free (Not cleaned)",
            "HOUSES.LEGEND_OCCUPIED": "Occupied",
            "HOUSES.LEGEND_ARRIVAL": "Arrival day (Cleaned)",
            "HOUSES.LEGEND_INACTIVE": "Inactive"
        },
        "hr": {
            "NAV.GROUP_OVERVIEW": "Pregled",
            "NAV.GROUP_WORK": "Rad",
            "NAV.DASHBOARD": "Početna",
            "NAV.FEATURES": "Mogućnosti",
            "NAV.YOUR_CAMP": "Vaš kamp",
            "HERO.BADGE": "Softver za kampove",
            "HERO.TITLE": "Cijeli vaš kamp,",
            "HERO.TITLE_ACCENT": "na jednom mjestu.",
            "HERO.TEXT": "Rezervacije, čišćenje, popravci i rasporedi osoblja na jednom mjestu, pa svatko zna što je danas na redu.",
            "HERO.CTA_PRIMARY": "Započni",
            "KPI.OCCUPIED": "Zauzeto",
            "KPI.OCCUPIED_SUB": "kućica danas",
            "KPI.ARRIVALS": "Dolasci",
            "KPI.ARRIVALS_SUB": "danas",
            "KPI.DEPARTURES": "Odlasci",
            "KPI.DEPARTURES_SUB": "danas",
            "KPI.OPEN_TASKS": "Otvoreni zadaci",
            "KPI.OPEN_TASKS_SUB": "svi timovi",
            "KPI.CLEANING": "Čišćenje",
            "KPI.CLEANING_SUB": "u tijeku",
            "KPI.REPAIRS": "Popravci",
            "KPI.REPAIRS_SUB": "na čekanju",
            "FEATURES.EYEBROW": "Napravljeno za kampove",
            "FEATURES.TITLE": "Sve što kamp treba, ništa suvišno.",
            "FEATURE.F1.TITLE": "Rezervacije",
            "FEATURE.F1.TEXT": "Kalendar svih kućica i svih boravaka.",
            "FEATURE.F2.TITLE": "Zadaci",
            "FEATURE.F2.TEXT": "Čišćenje i popravci, od zadavanja do potvrde.",
            "FEATURE.F3.TITLE": "Timovi",
            "FEATURE.F3.TEXT": "Rasporedite osoblje u timove i rasporede rada.",
            "FEATURE.F4.TITLE": "Obavijesti",
            "FEATURE.F4.TEXT": "Osoblje dobije obavijest kad je nešto za njih.",
            "FEATURE.F5.TITLE": "Statistika",
            "FEATURE.F5.TEXT": "Popunjenost i rad, u grafikonima.",
            "FEATURE.F6.TITLE": "Više kampova",
            "FEATURE.F6.TEXT": "Vodite više kampova s jednog računa.",
            "CTA.EYEBROW": "Spremni kad i vi",
            "CTA.TITLE": "Krenite sa svojim kampom.",
            "CTA.TEXT": "Napravite račun i dodajte prvu kućicu.",
            "CTA.PRIMARY": "Napravi kamp",
            "CTA.SECONDARY": "Prijava",
            "FOOTER.BLURB": "Softver za vođenje kampa.",
            "FOOTER.PRODUCT": "Proizvod",
            "FOOTER.COMPANY": "Račun",
            "FOOTER.LINK_FEATURES": "Mogućnosti",
            "FOOTER.LINK_LOGIN": "Prijava",
            "FOOTER.LINK_SIGNUP": "Napravi kamp",
            "FOOTER.LINK_PRIVACY": "Politika privatnosti",
            "FOOTER.COPYRIGHT": "© 2026 Porton",
            "HOUSES.TITLE": "Kućice",
            "HOUSES.SORT": "Po broju",
            "HOUSES.DOGS": "Prikaži samo kućice s ljubimcima",
            "HOUSES.CONFIRM": "Za potvrdu",
            "HOUSES.DETAILS": "Detalji kućice",
            "HOUSES.SEARCH": "Pretraži kućice",
            "HOUSES.LEGEND_FREE_CLEANED": "Slobodna (Očišćena)",
            "HOUSES.LEGEND_FREE_NOT_CLEANED": "Slobodna (Neočišćena)",
            "HOUSES.LEGEND_OCCUPIED": "Zauzeta",
            "HOUSES.LEGEND_ARRIVAL": "Dolazna (Očišćena)",
            "HOUSES.LEGEND_INACTIVE": "Neaktivna"
        }
    };

    var NAV = [
        { key: 'NAV.GROUP_OVERVIEW', items: [
            { id: 'dashboard', label: 'NAV.DASHBOARD', icon: 'grid', href: 'hero' }
        ] },
        { key: 'NAV.GROUP_WORK', items: [
            { id: 'features', label: 'NAV.FEATURES', icon: 'star', href: 'platform' }
        ] }
    ];
    // Which sidebar link is lit for each section while scrolling.
    var SECTION_NAV = { hero: 'dashboard', kpis: 'dashboard', houses: 'dashboard', platform: 'features' };
    var SECTIONS = ['hero', 'kpis', 'houses', 'platform', 'demo'];

    // Made-up numbers and names for the demo.
    var KPIS = [
        ['OCCUPIED', '48', true], ['ARRIVALS', '12', false], ['DEPARTURES', '9', false],
        ['OPEN_TASKS', '17', true], ['CLEANING', '6', false], ['REPAIRS', '3', false]
    ];
    // Houses of the houses widget: name, state (available, tasks, occupied, arrival, inactive), task icons.
    var HOUSES = [
        ['Villa Aurora', 'occupied', ['bed', 'home']], ['Villa Marina', 'tasks', ['home']], ['Studio Bay', 'occupied', ['umbrella']],
        ['Villa Olive', 'tasks', ['wrench']], ['Villa Lavender', 'occupied', ['bookmark']], ['Studio Pine', 'occupied', []],
        ['Villa Coral', 'tasks', ['wrench']], ['Studio Dune', 'occupied', ['home']], ['Villa Harbor', 'tasks', ['home']],
        ['Mobile Home Breeze', 'available', []]
    ];
    var FEATURES = [['F1', 'calendar'], ['F2', 'checks'], ['F3', 'users'], ['F4', 'bell'], ['F5', 'bars'], ['F6', 'building']];

    var lang = 'hr';
    try {
        lang = localStorage.getItem('porton-lang') || 'hr';
    } catch (e) { /* storage blocked: stay on the default */ }
    if (!TEXT[lang]) lang = 'hr';

    function t(key) {
        return TEXT[lang][key] || key;
    }

    function icon(name) {
        return '<svg class="icon"><use href="#i-' + name + '"/></svg>';
    }

    // ---- parts built from the arrays above ----
    function buildNav() {
        var html = '';
        NAV.forEach(function (group) {
            html += '<div class="nav-group" data-i18n="' + group.key + '"></div>';
            group.items.forEach(function (item) {
                html += '<a href="#' + item.href + '" class="nav-item" data-nav="' + item.id + '">' + icon(item.icon) +
                    '<span data-i18n="' + item.label + '"></span></a>';
            });
        });
        document.getElementById('nav').innerHTML = html;
    }

    function buildKpis() {
        document.getElementById('kpis').innerHTML = KPIS.map(function (k) {
            return '<div class="kpi' + (k[2] ? ' selected' : '') + '"><div class="kpi-title" data-i18n="KPI.' + k[0] + '"></div>' +
                '<div class="kpi-value">' + k[1] + '</div><div class="kpi-sub" data-i18n="KPI.' + k[0] + '_SUB"></div></div>';
        }).join('');
    }

    function buildHouses() {
        document.getElementById('hw-count').textContent = HOUSES.length;
        document.getElementById('hw-grid').innerHTML = HOUSES.map(function (h) {
            return '<div class="hw-house hw-' + h[1] + '"><span class="hw-name">' + h[0] + '</span>' +
                '<span class="hw-icons">' + h[2].map(icon).join('') + '</span></div>';
        }).join('');
    }

    function buildFeatures() {
        document.getElementById('features').innerHTML = FEATURES.map(function (f) {
            return '<div class="card"><div class="feature-icon">' + icon(f[1]) + '</div>' +
                '<h3 class="card-title" data-i18n="FEATURE.' + f[0] + '.TITLE"></h3>' +
                '<p class="card-text" data-i18n="FEATURE.' + f[0] + '.TEXT"></p></div>';
        }).join('');
    }

    // ---- text and links ----
    function applyText() {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            el.textContent = t(el.getAttribute('data-i18n'));
        });
        document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
            el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
        });
        document.querySelectorAll('.lang button').forEach(function (b) {
            b.classList.toggle('active', b.getAttribute('data-lang') === lang);
        });
    }

    function applyLinks() {
        document.querySelectorAll('[data-app-link]').forEach(function (a) {
            a.setAttribute('href', APP_URL + a.getAttribute('data-app-link'));
        });
    }

    // ---- behaviour ----
    function wireLang() {
        document.querySelectorAll('.lang button').forEach(function (b) {
            b.addEventListener('click', function () {
                lang = b.getAttribute('data-lang');
                try { localStorage.setItem('porton-lang', lang); } catch (e) { /* ignore */ }
                applyText();
            });
        });
    }

    // A clicked sidebar link stays lit for a moment (several links point at the same section), otherwise the lit link follows the scroll.
    var clicked = null, clickedTimer = null, current = 'hero';

    function paintNav() {
        var active = clicked || SECTION_NAV[current];
        document.querySelectorAll('.nav-item').forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('data-nav') === active);
        });
    }

    function onScroll() {
        var line = window.innerHeight * 0.35;
        var now = 'hero';
        SECTIONS.forEach(function (id) {
            var el = document.getElementById(id);
            if (el && el.getBoundingClientRect().top <= line) now = id;
        });
        if (now !== current) {
            current = now;
            paintNav();
        }
    }

    function wireNav() {
        document.querySelectorAll('.nav-item').forEach(function (a) {
            a.addEventListener('click', function () {
                clicked = a.getAttribute('data-nav');
                clearTimeout(clickedTimer);
                clickedTimer = setTimeout(function () { clicked = null; paintNav(); }, 1400);
                paintNav();
            });
        });
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    buildNav();
    buildKpis();
    buildHouses();
    buildFeatures();
    applyText();
    applyLinks();
    wireLang();
    wireNav();
    paintNav();
})();
