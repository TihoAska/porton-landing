(function () {
    'use strict';

    // Address of the app. Log in, Create a camp and Privacy policy links are built from it.
    // Empty means the links stay on this domain (/login, ...). Set it to the app's address when it is known.
    var APP_URL = 'https://kompa-front.vercel.app';

    // Text, copied from the app's own translation files (LANDING.* and HOME.* in en.json / hr.json).
    var TEXT = {
        "en": {
            "NAV.FEATURES": "Features",
            "HOME.SEARCH.DOGS-ONLY": "Show only houses with pets",
            "HOME.SEARCH.NEEDS-CONFIRMATION": "Needs confirmation",
            "HOME.SEARCH.SHOW-HOUSE-DETAILS": "Show house details",
            "RESERVATIONS.MODAL.NIGHTS": "{{count}} nights",
            "RESERVATIONS.MODAL.NIGHTS-ONE": "{{count}} night",
            "RESERVATIONS.HEADER.ALL-TYPES": "All",
            "RESERVATIONS.HEADER.TOOLTIPS.ROW-HEIGHT-SPACIOUS": "Row height: Spacious",
            "RESERVATIONS.HEADER.TOOLTIPS.ROW-HEIGHT-COMFORTABLE": "Row height: Default",
            "RESERVATIONS.HEADER.TOOLTIPS.ROW-HEIGHT-COMPACT": "Row height: Compact",
            "RESERVATIONS.HEADER.ROW-HEIGHT-MODAL-TITLE": "Options",
            "RESERVATIONS.HOUSE": "House",
            "RESERVATIONS.MODAL.LAST-NAME": "Last name",
            "RESERVATIONS.MODAL.RESERVATION-NUMBER": "Reservation number",
            "RESERVATIONS.MODAL.START-DATE": "Start date",
            "RESERVATIONS.MODAL.END-DATE": "End date",
            "RESERVATIONS.MODAL.ADULTS": "Adults",
            "RESERVATIONS.MODAL.BABIES": "Babies",
            "RESERVATIONS.MODAL.PETS": "Pets",
            "RESERVATIONS.MODAL.BABY-CRIBS": "Baby cribs",
            "RESERVATIONS.MODAL.NOTES": "Notes",
            "RESERVATIONS.MODAL.COLOR": "Color",
            "RESERVATIONS.MODAL.CHECK-IN": "Check in",
            "RESERVATIONS.MODAL.CHECK-OUT": "Check out",
            "EXPORT.BUTTON": "Export",
            "EXPORT.CSV": "CSV",
            "EXPORT.JSON": "JSON",
            "EXPORT.EXCEL": "Excel",
            "EXPORT.DAY": "Day",
            "STATISTICS.SELECT.TITLE.METRIC": "Metrics",
            "STATISTICS.GUESTS.COLS.TOTAL": "Total",
            "EXPORT.EXCEL-RAW": "Excel (raw)",
            "EXPORT.EXCEL-TABLE": "Excel (table)",
            "MENU.RESERVATIONS": "Reservations",
            "MONTHS.JANUARY": "January",
            "MONTHS.FEBRUARY": "February",
            "MONTHS.MARCH": "March",
            "MONTHS.APRIL": "April",
            "MONTHS.MAY": "May",
            "MONTHS.JUNE": "June",
            "MONTHS.JULY": "July",
            "MONTHS.AUGUST": "August",
            "MONTHS.SEPTEMBER": "September",
            "MONTHS.OCTOBER": "October",
            "MONTHS.NOVEMBER": "November",
            "MONTHS.DECEMBER": "December",
            "BUTTONS.MONTH": "Month",
            "BUTTONS.SEASON": "Season",
            "BUTTONS.YEAR": "Year",
            "STATISTICS.CHART-TYPES.BAR": "Bar",
            "STATISTICS.CHART-TYPES.LINE": "Line",
            "STATISTICS.CHART-TYPES.PIE": "Pie",
            "STATISTICS.CHART-TYPES.DOUGHNUT": "Doughnut",
            "STATISTICS.METRICS.ADULTS": "Adults",
            "STATISTICS.METRICS.CHILDREN": "Children",
            "STATISTICS.METRICS.PETS": "Pets",
            "STATISTICS.METRICS.BABY-CRIBS": "Baby Cribs",
            "STATISTICS.METRICS.REPAIR-TASKS": "Repair Tasks",
            "STATISTICS.METRICS.HOUSE-CLEANING-TASKS": "House Cleaning Tasks",
            "STATISTICS.METRICS.DECK-CLEANING-TASKS": "Deck Cleaning Tasks",
            "STATISTICS.METRICS.SHEET-CHANGE-TASKS": "Sheet Change Tasks",
            "STATISTICS.METRICS.TOWEL-CHANGE-TASKS": "Towel Change Tasks",
            "STATISTICS.METRICS.UNSCHEDULED-TASKS": "Unscheduled Tasks",
            "STATISTICS.METRICS.TOTAL-TASKS": "Total Tasks",
            "STATISTICS.METRICS.OCCUPANCY": "Occupancy",
            "STATISTICS.METRICS.TOTAL-COMPLETED-TASKS": "Total completed tasks",
            "STATISTICS.METRICS.NUMBER-OF-RESERVATIONS": "Number of reservations",
            "STATISTICS.METRICS.NUMBER-OF-RESERVED-DAYS": "Number of reserved days",
            "STATISTICS.METRICS.RESERVED-PERCENT": "Reserved %",
            "STATISTICS.METRICS.GUEST-RESERVATIONS": "Reservations",
            "STATISTICS.METRICS.GUEST-ARRIVALS-GUESTS": "Arrivals",
            "STATISTICS.METRICS.GUEST-DEPARTURES-GUESTS": "Departures",
            "STATISTICS.METRICS.GUEST-NO-SHOWS": "No-shows",
            "STATISTICS.METRICS.GUEST-INCAMP-GUESTS": "Guests",
            "STATISTICS.METRICS.GUEST-INCAMP-ADULTS": "Adults",
            "STATISTICS.METRICS.GUEST-INCAMP-CHILDREN": "Children",
            "STATISTICS.METRICS.GUEST-INCAMP-PETS": "Pets",
            "STATISTICS.METRICS.GUEST-INCAMP-CRIBS": "Baby cribs",
            "STATISTICS.CHANGE": "Change",
            "HOUSE-TYPES.ALL": "All",
            "HOME.SEARCH.BY-NUMBER": "By number",
            "HOME.SEARCH.BY-TYPE": "By type",
            "HOME.SEARCH.BY-STATUS": "By status",
            "HOME.HOUSE-STATUS.OCCUPIED": "Occupied",
            "HOME.HOUSE-STATUS.ARRIVAL-DAY": "Arrival day",
            "HOME.HOUSE-STATUS.NOT-CLEANED": "Not cleaned",
            "HOME.HOUSE-STATUS.FREE": "Free",
            "HOME.HOUSE-STATUS.INACTIVE": "Inactive",
            "HERO.TITLE": "Your whole camp,",
            "HERO.TITLE_ACCENT": "in one place.",
            "HERO.TEXT": "Reservations, cleaning, repairs, staff. All in one place.",
            "HERO.CTA_PRIMARY": "Get started",
            "FEATURE.F2.TITLE": "Tasks",
            "FEATURE.F2.TEXT": "Cleaning and repairs, from created to cleaned.",
            "FEATURE.F4.TITLE": "Notifications",
            "FEATURE.F4.TEXT": "Notifications about tasks and arrivals arrive straight on the phone.",
            "FEATURE.F6.TITLE": "More camps",
            "FEATURE.F6.TEXT": "Run several camps from one account.",
            "FEATURE.F7.TITLE": "User guide and tutorials",
            "FEATURE.F7.TEXT": "Every part of the app is explained in the user guide and tutorials.",
            "CTA.TITLE": "Start with your camp.",
            "CTA.TEXT": "Create an account and add your first house.",
            "CTA.PRIMARY": "Create a camp",
            "CTA.SECONDARY": "Log in",
            "FOOTER.BLURB": "Software for running a holiday park.",
            "FOOTER.PRODUCT": "Product",
            "FOOTER.COMPANY": "Account",
            "FOOTER.LINK_FEATURES": "Features",
            "FOOTER.LINK_GUIDE": "Tutorials",
            "FOOTER.LINK_LOGIN": "Log in",
            "FOOTER.LINK_SIGNUP": "Create a camp",
            "FOOTER.LINK_PRIVACY": "Privacy policy",
            "FOOTER.COPYRIGHT": "© 2026 Porton",
            "NAV.ARRIVALS": "Arrivals and departures",
            "NAV.DAILY": "Daily Sheet",
            "INTRO.TITLE": "Everything for one working day in a camp",
            "INTRO.TASK_TYPES": "task types",
            "INTRO.TRIAL": "months free",
            "INTRO.LANGUAGES": "languages",
            "INTRO.PLANS": "plans",
            "SHOW.TEAMS.TEXT": "Each worker sees their team and the tasks assigned to them for that day.",
            "NAV.TEAMS": "Teams",
            "INTRO.TASK_TYPES_INFO": "Cleaning, repairs, sheets, towels and more",
            "INTRO.TRIAL_INFO": "First 3 months free",
            "INTRO.LANGUAGES_INFO": "Croatian and English",
            "INTRO.PLANS_INFO": "Standard and Premium",
            "PLANS.STANDARD": "Standard",
            "PLANS.PREMIUM": "Premium",
            "PLANS.PRICE_STANDARD": "100€ / month",
            "PLANS.PRICE_PREMIUM": "200€ / month",
            "PLANS.PLUS": "Everything in Standard, plus:",
            "PLANS.TRIAL": "First 3 months free",
            "PLANS.HOME": "Home",
            "PLANS.CONTENT": "Content management",
            "PLANS.GUIDE": "User guide",
            "PLANS.NOTES": "Notes",
            "PLANS.SCHEDULE": "Work schedule",
            "PLANS.ARCHIVE": "Archive",
            "NAV.RESERVATIONS": "Reservations",
            "NAV.AUTOMATION": "Automation",
            "SHOW.AUTOMATION.TEXT": "Tasks are created for you every day, at the time you choose.",
            "NAV.HOME": "Home",
            "SHOW.HOME.TEXT": "All houses and today's numbers on one screen.",
            "NAV.STATISTICS": "Statistics",
            "SHOW.DAILY.TITLE": "Plan the day for your workers",
            "STEPS.ONE": "Plan your tasks yourself",
            "STEPS.TWO": "You put them into work groups",
            "SHOW.DAILY.TEXT": "Tasks are created for you, you put them into work groups, and each worker sees their team and the tasks for that day.",
            "SHOW.RESERVATIONS.TEXT": "A calendar of all houses and stays on one screen.",
            "SHOW.STATISTICS.TEXT": "Charts and numbers about work and houses, in one place.",
        },
        "hr": {
            "NAV.FEATURES": "Mogućnosti",
            "HOME.SEARCH.DOGS-ONLY": "Prikaži samo kućice s ljubimcima",
            "HOME.SEARCH.NEEDS-CONFIRMATION": "Za potvrdu",
            "HOME.SEARCH.SHOW-HOUSE-DETAILS": "Detalji kućice",
            "RESERVATIONS.MODAL.NIGHTS": "{{count}} dana noćenja",
            "RESERVATIONS.MODAL.NIGHTS-ONE": "{{count}} dan noćenja",
            "RESERVATIONS.HEADER.ALL-TYPES": "Sve",
            "RESERVATIONS.HEADER.TOOLTIPS.ROW-HEIGHT-SPACIOUS": "Visina ćelije: Prostrano",
            "RESERVATIONS.HEADER.TOOLTIPS.ROW-HEIGHT-COMFORTABLE": "Visina ćelije: Zadano",
            "RESERVATIONS.HEADER.TOOLTIPS.ROW-HEIGHT-COMPACT": "Visina ćelije: Kompaktno",
            "RESERVATIONS.HEADER.ROW-HEIGHT-MODAL-TITLE": "Opcije",
            "RESERVATIONS.HOUSE": "Kućica",
            "RESERVATIONS.MODAL.LAST-NAME": "Prezime",
            "RESERVATIONS.MODAL.RESERVATION-NUMBER": "Broj rezervacije",
            "RESERVATIONS.MODAL.START-DATE": "Početak",
            "RESERVATIONS.MODAL.END-DATE": "Kraj",
            "RESERVATIONS.MODAL.ADULTS": "Odrasli",
            "RESERVATIONS.MODAL.BABIES": "Bebe",
            "RESERVATIONS.MODAL.PETS": "Ljubimci",
            "RESERVATIONS.MODAL.BABY-CRIBS": "Krevetići",
            "RESERVATIONS.MODAL.NOTES": "Dodatne informacije",
            "RESERVATIONS.MODAL.COLOR": "Boja",
            "RESERVATIONS.MODAL.CHECK-IN": "Dolazak",
            "RESERVATIONS.MODAL.CHECK-OUT": "Odlazak",
            "EXPORT.BUTTON": "Izvoz",
            "EXPORT.CSV": "CSV",
            "EXPORT.JSON": "JSON",
            "EXPORT.EXCEL": "Excel",
            "EXPORT.DAY": "Dan",
            "STATISTICS.SELECT.TITLE.METRIC": "Metrika",
            "STATISTICS.GUESTS.COLS.TOTAL": "Ukupno",
            "EXPORT.EXCEL-RAW": "Excel (raw)",
            "EXPORT.EXCEL-TABLE": "Excel (tablica)",
            "MENU.RESERVATIONS": "Rezervacije",
            "MONTHS.JANUARY": "Siječanj",
            "MONTHS.FEBRUARY": "Veljača",
            "MONTHS.MARCH": "Ožujak",
            "MONTHS.APRIL": "Travanj",
            "MONTHS.MAY": "Svibanj",
            "MONTHS.JUNE": "Lipanj",
            "MONTHS.JULY": "Srpanj",
            "MONTHS.AUGUST": "Kolovoz",
            "MONTHS.SEPTEMBER": "Rujan",
            "MONTHS.OCTOBER": "Listopad",
            "MONTHS.NOVEMBER": "Studeni",
            "MONTHS.DECEMBER": "Prosinac",
            "BUTTONS.MONTH": "Mjesec",
            "BUTTONS.SEASON": "Sezona",
            "BUTTONS.YEAR": "Godina",
            "STATISTICS.CHART-TYPES.BAR": "Stupčasti",
            "STATISTICS.CHART-TYPES.LINE": "Linijski",
            "STATISTICS.CHART-TYPES.PIE": "Kružni",
            "STATISTICS.CHART-TYPES.DOUGHNUT": "Prstenasti",
            "STATISTICS.METRICS.ADULTS": "Odrasli",
            "STATISTICS.METRICS.CHILDREN": "Djeca",
            "STATISTICS.METRICS.PETS": "Kućni ljubimci",
            "STATISTICS.METRICS.BABY-CRIBS": "Dječji krevetići",
            "STATISTICS.METRICS.REPAIR-TASKS": "Zadaci popravaka",
            "STATISTICS.METRICS.HOUSE-CLEANING-TASKS": "Zadaci čišćenja kućice",
            "STATISTICS.METRICS.DECK-CLEANING-TASKS": "Zadaci čišćenja terase",
            "STATISTICS.METRICS.SHEET-CHANGE-TASKS": "Zadaci promjene posteljine",
            "STATISTICS.METRICS.TOWEL-CHANGE-TASKS": "Zadaci promjene ručnika",
            "STATISTICS.METRICS.UNSCHEDULED-TASKS": "Izvanredni zadaci",
            "STATISTICS.METRICS.TOTAL-TASKS": "Ukupno zadataka",
            "STATISTICS.METRICS.OCCUPANCY": "Popunjenost",
            "STATISTICS.METRICS.TOTAL-COMPLETED-TASKS": "Ukupno završenih zadataka",
            "STATISTICS.METRICS.NUMBER-OF-RESERVATIONS": "Broj rezervacija",
            "STATISTICS.METRICS.NUMBER-OF-RESERVED-DAYS": "Broj rezerviranih dana",
            "STATISTICS.METRICS.RESERVED-PERCENT": "Rezervirano %",
            "STATISTICS.METRICS.GUEST-RESERVATIONS": "Rezervacije",
            "STATISTICS.METRICS.GUEST-ARRIVALS-GUESTS": "Dolasci",
            "STATISTICS.METRICS.GUEST-DEPARTURES-GUESTS": "Odlasci",
            "STATISTICS.METRICS.GUEST-NO-SHOWS": "Nisu došli",
            "STATISTICS.METRICS.GUEST-INCAMP-GUESTS": "Gosti",
            "STATISTICS.METRICS.GUEST-INCAMP-ADULTS": "Odrasli",
            "STATISTICS.METRICS.GUEST-INCAMP-CHILDREN": "Djeca",
            "STATISTICS.METRICS.GUEST-INCAMP-PETS": "Ljubimci",
            "STATISTICS.METRICS.GUEST-INCAMP-CRIBS": "Krevetići",
            "STATISTICS.CHANGE": "Promjena",
            "HOUSE-TYPES.ALL": "Sve",
            "HOME.SEARCH.BY-NUMBER": "Po broju",
            "HOME.SEARCH.BY-TYPE": "Po tipu",
            "HOME.SEARCH.BY-STATUS": "Po statusu",
            "HOME.HOUSE-STATUS.OCCUPIED": "Zauzeta",
            "HOME.HOUSE-STATUS.ARRIVAL-DAY": "Dolazna",
            "HOME.HOUSE-STATUS.NOT-CLEANED": "Neočišćena",
            "HOME.HOUSE-STATUS.FREE": "Slobodna",
            "HOME.HOUSE-STATUS.INACTIVE": "Neaktivna",
            "HERO.TITLE": "Cijeli vaš kamp,",
            "HERO.TITLE_ACCENT": "na jednom mjestu.",
            "HERO.TEXT": "Rezervacije, čišćenje, popravci, osoblje. Sve na jednom mjestu.",
            "HERO.CTA_PRIMARY": "Započni",
            "FEATURE.F2.TITLE": "Zadaci",
            "FEATURE.F2.TEXT": "Čišćenje i popravci, od zadavanja do čišćenja.",
            "FEATURE.F4.TITLE": "Obavijesti",
            "FEATURE.F4.TEXT": "Obavijesti o zadacima i dolascima stižu izravno na mobitel.",
            "FEATURE.F6.TITLE": "Više kampova",
            "FEATURE.F6.TEXT": "Vodite više kampova s jednog računa.",
            "FEATURE.F7.TITLE": "Korisnički priručnik i upute",
            "FEATURE.F7.TEXT": "Svaki dio aplikacije objašnjen je u priručniku i uputama.",
            "CTA.TITLE": "Krenite sa svojim kampom.",
            "CTA.TEXT": "Napravite račun i dodajte prvu kućicu.",
            "CTA.PRIMARY": "Napravi kamp",
            "CTA.SECONDARY": "Prijava",
            "FOOTER.BLURB": "Softver za vođenje kampa.",
            "FOOTER.PRODUCT": "Proizvod",
            "FOOTER.COMPANY": "Račun",
            "FOOTER.LINK_FEATURES": "Mogućnosti",
            "FOOTER.LINK_GUIDE": "Upute",
            "FOOTER.LINK_LOGIN": "Prijava",
            "FOOTER.LINK_SIGNUP": "Napravi kamp",
            "FOOTER.LINK_PRIVACY": "Politika privatnosti",
            "FOOTER.COPYRIGHT": "© 2026 Porton",
            "NAV.ARRIVALS": "Dolasci i odlasci",
            "NAV.DAILY": "Dnevni list",
            "INTRO.TITLE": "Sve za jedan radni dan u kampu",
            "INTRO.TASK_TYPES": "vrsta zadataka",
            "INTRO.TRIAL": "mjeseca besplatno",
            "INTRO.LANGUAGES": "jezika",
            "INTRO.PLANS": "plana",
            "SHOW.TEAMS.TEXT": "Svaki radnik vidi svoj tim i zadatke koji su mu dodijeljeni za taj dan.",
            "NAV.TEAMS": "Timovi",
            "INTRO.TASK_TYPES_INFO": "Čišćenje, popravci, posteljina, ručnici i drugo",
            "INTRO.TRIAL_INFO": "Prva 3 mjeseca besplatno",
            "INTRO.LANGUAGES_INFO": "Hrvatski i engleski",
            "INTRO.PLANS_INFO": "Standard i Premium",
            "PLANS.STANDARD": "Standard",
            "PLANS.PREMIUM": "Premium",
            "PLANS.PRICE_STANDARD": "100€ / mjesec",
            "PLANS.PRICE_PREMIUM": "200€ / mjesec",
            "PLANS.PLUS": "Sve iz Standard plana, plus:",
            "PLANS.TRIAL": "Prva 3 mjeseca besplatno",
            "PLANS.HOME": "Pregled",
            "PLANS.CONTENT": "Upravljanje sadržajem",
            "PLANS.GUIDE": "Korisnički priručnik",
            "PLANS.NOTES": "Bilješke",
            "PLANS.SCHEDULE": "Raspored",
            "PLANS.ARCHIVE": "Arhiva",
            "NAV.RESERVATIONS": "Rezervacije",
            "NAV.AUTOMATION": "Automatizacija",
            "SHOW.AUTOMATION.TEXT": "Zadaci se kreiraju sami svaki dan, u vrijeme koje odaberete.",
            "NAV.HOME": "Pregled",
            "SHOW.HOME.TEXT": "Sve kućice i današnji brojevi na jednom ekranu.",
            "NAV.STATISTICS": "Statistika",
            "SHOW.DAILY.TITLE": "Planirajte dan za svoje radnike",
            "STEPS.ONE": "Zadatke isplanirajte sami",
            "STEPS.TWO": "Rasporedite ih u radne grupe",
            "SHOW.DAILY.TEXT": "Zadaci se kreiraju sami, rasporedite ih u radne grupe, a svaki radnik vidi svoj tim i zadatke za taj dan.",
            "SHOW.RESERVATIONS.TEXT": "Kalendar svih kućica i boravaka na jednom ekranu.",
            "SHOW.STATISTICS.TEXT": "Grafikoni i brojke o radu i kućicama, na jednom mjestu.",
        }
    };


    var lang = 'hr';
    try {
        lang = localStorage.getItem('porton-lang') || 'hr';
    } catch (e) { /* storage blocked: stay on the default */ }
    if (!TEXT[lang]) lang = 'hr';

    function t(key) {
        return TEXT[lang][key] || key;
    }



    // ---- animations on the pictures: a cursor goes round the screen like in the app's tutorials ----
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var CURSOR = '<svg width="14" height="21" viewBox="0 0 16 24" aria-hidden="true"><path d="M1 1 L1 19 L5.3 15 L8.4 22 L11 20.9 L8 14.1 L13.6 14.1 Z" fill="#111827" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round" /></svg>';

    function sleep(ms) {
        return new Promise(function (resolve) { setTimeout(resolve, ms); });
    }

    // Where the middle of an element is, in the picture's own (unscaled) pixels.
    function centerOf(el, inner, scale) {
        var r = el.getBoundingClientRect();
        var i = inner.getBoundingClientRect();
        return { x: (r.left - i.left + r.width / 2) / scale, y: (r.top - i.top + r.height / 2) / scale };
    }

    function placeCursor(cursor, x, y, ms) {
        cursor.style.transitionDuration = ms + 'ms';
        cursor.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    }

    // The cursor goes to something, presses it (it sinks in for a moment), and lets go.
    async function press(inner, scale, cursor, el, alive, ms) {
        var c = centerOf(el, inner, scale);
        placeCursor(cursor, c.x - 4, c.y - 2, ms || 1000);
        await sleep((ms || 1000) + 250); if (!alive()) return false;
        cursor.classList.add('down');
        el.classList.add('demo-pressed');
        await sleep(220);
        cursor.classList.remove('down');
        el.classList.remove('demo-pressed');
        return alive();
    }

    // Types a text into a field one letter at a time.
    async function typeInto(input, text, alive) {
        input.classList.add('demo-focus');
        for (var i = 1; i <= text.length; i++) {
            input.value = text.slice(0, i);
            await sleep(130); if (!alive()) return false;
        }
        await sleep(250);
        input.classList.remove('demo-focus');
        return alive();
    }

    // Reservations: pick the nights with the mouse, fill in the Create reservation window, press Create.
    function resScript(box, inner, scale, cursor, alive) {
        var rows = Array.prototype.slice.call(inner.querySelectorAll('tbody tr'));
        var row = rows.filter(function (r) { return /Olive/.test(r.firstElementChild.textContent); })[0];
        var pic = box._pic;
        if (!row || !pic || !pic.dialog) return Promise.resolve();
        var cells = row.querySelectorAll('td');
        var first = 3, last = 5;
        var head = row.firstElementChild;
        var at = function (col) { return centerOf(cells[col], inner, scale); };
        var p = at(first);
        return (async function () {
            placeCursor(cursor, p.x + 480, p.y - 160, 0);
            await sleep(600); if (!alive()) return;
            placeCursor(cursor, p.x - 8, p.y, 1100);
            await sleep(1400); if (!alive()) return;
            cursor.classList.add('down');
            head.classList.add('active-row');
            // As in the app: the first cell is the start and, until the drag moves on, the end too (a full border all round).
            cells[first].classList.add('selected-cell', 'selection-start', 'selection-end');
            for (var col = first + 1; col <= last; col++) {
                await sleep(240); if (!alive()) return;
                var c = at(col);
                placeCursor(cursor, c.x - 8, c.y, 380);
                await sleep(380); if (!alive()) return;
                // The end of the selection moves with the mouse, so the newest cell always has the right edge.
                cells[col - 1].classList.remove('selection-end');
                cells[col].classList.add('selected-cell', 'selection-end');
            }
            await sleep(400); if (!alive()) return;
            cursor.classList.remove('down');

            // The window opens with the dates already in it.
            var modal = document.createElement('div');
            modal.className = 'demo-modal';
            modal.innerHTML = '<div class="demo-modal-mask"></div><div class="demo-modal-box guide-pic-reservations-window">' + pic.dialog + '</div>';
            inner.firstElementChild.appendChild(modal);
            void modal.offsetWidth;
            modal.classList.add('open');
            // The table itself goes soft and dim (no layer on top of it, so there is no box edge to see).
            var table = inner.querySelector('.reservations-container');
            if (table) table.classList.add('demo-blur');
            await sleep(900); if (!alive()) return;

            var inputs = modal.querySelectorAll('.form-col .field input');
            if (!(await press(inner, scale, cursor, inputs[0], alive, 1100))) return;
            if (!(await typeInto(inputs[0], 'Novak', alive))) return;
            if (!(await press(inner, scale, cursor, inputs[1], alive, 800))) return;
            if (!(await typeInto(inputs[1], 'R-1042', alive))) return;
            await sleep(500); if (!alive()) return;
            var buttons = modal.querySelectorAll('.right-buttons .p-button');
            if (!(await press(inner, scale, cursor, buttons[buttons.length - 1], alive, 1000))) return;

            // Create: the window closes and the stay is in the table.
            modal.classList.remove('open');
            if (table) table.classList.remove('demo-blur');
            await sleep(250);
            modal.remove();
            for (var j = first; j <= last; j++) {
                cells[j].classList.remove('selected-cell', 'selection-start', 'selection-end');
                cells[j].classList.add('reserved-cell', 'guide-res-color-1', 'border-top-important', 'border-bottom-important');
                if (j === first) cells[j].classList.add('reservation-start', 'border-left-important');
                if (j > first && j < last) cells[j].classList.add('reservation-middle');
                if (j === last) cells[j].classList.add('reservation-end', 'border-right-important');
            }
            head.classList.remove('active-row');
            cells[first].innerHTML = '<div class="reservation-item"><i class="pi pi-arrows-alt handle-icon"></i><span class="reservation-name">Novak</span></div>';
            cells[first + 1].innerHTML = '<div class="reservation-numbers"><div class="adults-count">2 <i class="fa-solid fa-person"></i></div></div>';
            placeCursor(cursor, p.x + 520, p.y + 60, 900);
            await sleep(1200); if (!alive()) return;
        })();
    }

    var SCRIPTS = { res: resScript };

    // Plays a picture's animation once, while it is on screen. If the visitor scrolls away before it is over it starts again from the
    // beginning when the picture comes back, until it has played all the way through once. After that it stays as it ended
    // (box._played, and the class "played") and never runs again.
    async function runLoop(box) {
        if (box._running || box._played || reduceMotion) return;
        box._running = true;
        var token = box._token;
        var kind = box.getAttribute('data-anim');
        var alive = function () { return box._token === token && box._visible; };
        if (alive()) {
            drawOne(box, true);
            var inner = box.firstElementChild;
            var cursor = document.createElement('div');
            cursor.className = 'demo-cursor';
            cursor.innerHTML = CURSOR;
            inner.appendChild(cursor);
            await SCRIPTS[kind](box, inner, box._scale || 1, cursor, alive);
            if (alive()) {
                // Finished: the cursor goes away and the picture stays in its final state.
                if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
                box._played = true;
                box.classList.add('played');
                wireInteractive(box);
            }
        }
        if (box._token === token) box._running = false;
    }

    var watcher = window.IntersectionObserver ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            e.target._visible = e.isIntersecting;
            if (e.isIntersecting) runLoop(e.target);
        });
    }, { threshold: 0.35 }) : null;

    // ---- count-up: when Pregled and Statistika come into view, their numbers count up from 0 and their graphs draw at the same time (once) ----
    // Pregled shows a day with something going on (the app's own copy has 0 arrivals and 0 departures).
    var HOME_DEMO = [
        null,
        { value: 2, total: 5, line: 'M0,26 L20,26 L40,20 L60,20 L80,14 L100,14' },
        { value: 3, total: 6, line: 'M0,26 L20,22 L40,22 L60,16 L80,16 L100,10' },
        { value: 2, total: 0, line: 'M0,26 L25,26 L50,20 L75,20 L100,14' }
    ];
    function patchHome(box) {
        var tiles = box.querySelectorAll('.metrics-grid .metric-tile');
        HOME_DEMO.forEach(function (d, i) {
            var tile = tiles[i];
            if (!d || !tile) return;
            var val = tile.querySelector('.metric-value');
            var node = val && Array.prototype.filter.call(val.childNodes, function (n) { return n.nodeType === 3; })[0];
            if (node) node.nodeValue = d.value + (d.total ? ' ' : '');
            var tot = tile.querySelector('.metric-value-total');
            if (tot && d.total) tot.textContent = '/ ' + d.total;
            var line = tile.querySelector('.spark-line');
            var area = tile.querySelector('.spark-area');
            if (line) line.setAttribute('d', d.line);
            if (area) area.setAttribute('d', d.line + ' L100,28 L0,28 Z');
        });
    }
    var clipCount = 0;
    function countItems(box) {
        var kind = box.getAttribute('data-pic');
        var items = [];
        // A number in the first text of an element (4, +12.5, 1284): it counts up from 0 with the same number of decimals.
        function numItem(el, delay, dur) {
            if (!el) return;
            var node = Array.prototype.filter.call(el.childNodes, function (n) { return n.nodeType === 3 && /\d/.test(n.nodeValue); })[0];
            var m = node && /^(\s*[+-]?)(\d+)([.,](\d+))?([\s\S]*)$/.exec(node.nodeValue);
            if (!m) return;
            var dec = m[4] ? m[4].length : 0;
            var sep = m[3] ? m[3].charAt(0) : '.';
            var target = parseFloat(m[2] + (m[4] ? '.' + m[4] : ''));
            items.push({
                delay: delay, dur: dur, el: el,
                set: function (p) {
                    var v = target * p;
                    node.nodeValue = m[1] + (dec ? v.toFixed(dec).replace('.', sep) : String(Math.round(v))) + m[5];
                }
            });
        }
        if (kind === 'home') {
            Array.prototype.forEach.call(box.querySelectorAll('.metrics-grid .metric-tile'), function (tile, i) {
                numItem(tile.querySelector('.metric-value'), i * 150, 1700);
                var sp = tile.querySelector('.metric-sparkline');
                if (sp) items.push({ delay: i * 150, dur: 1700, set: function (p) { sp.style.clipPath = 'inset(0 ' + ((1 - p) * 100) + '% 0 0)'; }, done: function () { sp.style.clipPath = ''; } });
            });
        } else if (kind === 'stats') {
            Array.prototype.forEach.call(box.querySelectorAll('.usage-tile'), function (tile, i) {
                numItem(tile.querySelector('.usage-value'), (i % 5) * 100, 1500);
                numItem(tile.querySelector('.usage-hint'), (i % 5) * 100, 1500);
            });
            Array.prototype.forEach.call(box.querySelectorAll('.stat-value'), function (el) { numItem(el, 250, 2000); });
            Array.prototype.forEach.call(box.querySelectorAll('svg.plot'), function (svg) {
                // Bars grow up from the bottom line.
                var bars = Array.prototype.slice.call(svg.querySelectorAll('rect.bar')).map(function (r) {
                    return { r: r, y: parseFloat(r.getAttribute('y')), h: parseFloat(r.getAttribute('height')) };
                });
                if (bars.length) items.push({ delay: 250, dur: 2000, set: function (p) { bars.forEach(function (b) { b.r.setAttribute('height', b.h * p); b.r.setAttribute('y', b.y + b.h * (1 - p)); }); } });
                // Lines (with their areas and dots) are drawn from the left, by a window that opens to the right.
                var shapes = Array.prototype.slice.call(svg.children).filter(function (n) { return /^(polygon|polyline|circle)$/.test(n.tagName); });
                if (shapes.length) {
                    var NS = 'http://www.w3.org/2000/svg';
                    var id = 'plot-clip-' + (++clipCount);
                    var defs = document.createElementNS(NS, 'defs');
                    var cp = document.createElementNS(NS, 'clipPath');
                    var rect = document.createElementNS(NS, 'rect');
                    cp.setAttribute('id', id);
                    rect.setAttribute('x', '0'); rect.setAttribute('y', '0'); rect.setAttribute('width', '0'); rect.setAttribute('height', '272');
                    cp.appendChild(rect); defs.appendChild(cp);
                    var g = document.createElementNS(NS, 'g');
                    g.setAttribute('clip-path', 'url(#' + id + ')');
                    svg.insertBefore(defs, shapes[0]);
                    svg.insertBefore(g, shapes[0]);
                    shapes.forEach(function (s) { g.appendChild(s); });
                    items.push({ delay: 250, dur: 2000, set: function (p) { rect.setAttribute('width', 38 + 540 * p); }, done: function () { g.removeAttribute('clip-path'); } });
                }
            });
        }
        return items;
    }
    // Draws the picture with its starting numbers (0, empty graphs), ready for playCount.
    function prepCount(box) {
        var kind = box.getAttribute('data-pic');
        if (kind !== 'home' && kind !== 'stats') return;
        if (kind === 'home') patchHome(box);
        box._count = null;
        if (reduceMotion || !countWatcher || box._counted) return;
        box._count = countItems(box);
        box._count.forEach(function (it) { it.set(0); });
    }
    function playCount(box) {
        var items = box._count;
        if (!items || box._counted) return;
        box._counted = true;
        // A number keeps the room of its final size, so the graph next to it does not move while it counts.
        items.forEach(function (it) {
            if (!it.el || it.el.className.indexOf('metric-value') === -1) return;
            it.set(1);
            it.el.style.minWidth = it.el.offsetWidth + 'px';
            it.set(0);
        });
        var t0 = performance.now();
        function frame(now) {
            var all = true;
            items.forEach(function (it) {
                var p = Math.max(0, Math.min(1, (now - t0 - it.delay) / it.dur));
                if (p < 1) all = false;
                var e = 1 - Math.pow(1 - p, 3);
                if (e !== it._e) { it._e = e; it.set(e); }
            });
            if (!all) requestAnimationFrame(frame);
            else items.forEach(function (it) { if (it.done) it.done(); if (it.el) it.el.style.minWidth = ''; });
        }
        requestAnimationFrame(frame);
    }
    var countWatcher = window.IntersectionObserver ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (!e.isIntersecting) return;
            countWatcher.unobserve(e.target);
            playCount(e.target);
        });
    }, { threshold: 0.3 }) : null;

    // ---- the app's own pages, drawn from the app's copies (assets/app/pictures.js, made from the guide's pictures) ----
    // Each copy is drawn at a fixed width and scaled down to fit its half of the page, and cut at a set height.
    function drawOne(box, keepToken) {
        var all = window.PORTON_PICTURES;
        var pic = all && all[lang] && all[lang][box.getAttribute('data-pic')];
        if (!pic) return;
        box.innerHTML = '<div class="shot-inner"><div class="' + pic.cls + '">' + pic.html + '</div></div>';
        box._pic = pic;
        // Rezervacije on a phone: the menu button (the row height, colours and export in one) is there from the start, not only after the animation.
        var sw = box.querySelector('.year-switcher');
        if (sw && !sw.querySelector('.mobile-picker-btn')) {
            var mb = document.createElement('span');
            mb.className = 'icon-btn mobile-picker-btn';
            mb.innerHTML = '<i class="pi pi-bars"></i>';
            sw.appendChild(mb);
        }
        box.setAttribute('data-ready', '1');
        if (!keepToken) box._token = (box._token || 0) + 1;
        fitOne(box);
        wireInteractive(box);
        // After the wiring, which redraws parts of Statistika from what is on screen: the zeros go on the numbers that stay.
        prepCount(box);
    }

    // ---- the few things in the copies that really work: search the houses, change the Statistics tabs, tick the Automation boxes ----
    function wireInteractive(box) {
        var kind = box.getAttribute('data-pic');
        // The reservations picture is only clickable once its animation has played through (or when there is no animation).
        if (kind === 'res') {
            if (box._played || reduceMotion) { box.removeAttribute('aria-hidden'); wireRes(box); }
            return;
        }
        if (kind !== 'home' && kind !== 'stats' && kind !== 'automation') return;
        // They can be clicked and typed in, so screen readers must not skip them.
        box.removeAttribute('aria-hidden');
        if (kind === 'home') wireHome(box);
        if (kind === 'stats') wireStats(box);
        if (kind === 'automation') wireAutomation(box);
    }

    // The settings button next to the tiles: the tiles shake and can be dragged into a new order. Click the button again to stop.
    function wireTiles(box) {
        if (box._tilesWired) return;
        var btn = box.querySelector('.layout-btn');
        var grid = box.querySelector('.metrics-grid');
        if (!btn || !grid) return;
        box._tilesWired = true;
        var editing = false, drag = null;
        btn.setAttribute('role', 'button');
        btn.setAttribute('tabindex', '0');
        btn.setAttribute('aria-pressed', 'false');
        btn.classList.add('tiles-btn');
        function tiles() { return Array.prototype.slice.call(grid.querySelectorAll('.metric-tile')); }
        function toggle() {
            editing = !editing;
            box.classList.toggle('tiles-editing', editing);
            btn.setAttribute('aria-pressed', editing ? 'true' : 'false');
            tiles().forEach(function (t, i) { t.style.setProperty('--shake-delay', (-(i % 4) * 0.07) + 's'); t.classList.toggle('shake-alt', i % 2 === 1); });
        }
        btn.addEventListener('click', toggle);
        btn.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
        // Screen pixels per page pixel (the picture is drawn scaled).
        function ratio(el) { return el.getBoundingClientRect().width / (el.offsetWidth || 1) || 1; }

        grid.addEventListener('pointerdown', function (e) {
            if (!editing || (e.pointerType === 'mouse' && e.button !== 0)) return;
            var tile = e.target.closest ? e.target.closest('.metric-tile') : null;
            if (!tile || !grid.contains(tile)) return;
            var r = tile.getBoundingClientRect();
            var gr = grid.getBoundingClientRect();
            var slots = tiles().map(function (o) {
                var q = o.getBoundingClientRect();
                return { l: q.left - gr.left, r: q.right - gr.left, t: q.top - gr.top, b: q.bottom - gr.top, cx: (q.left + q.right) / 2 - gr.left, cy: (q.top + q.bottom) / 2 - gr.top };
            });
            drag = { tile: tile, id: e.pointerId, gx: e.clientX - r.left, gy: e.clientY - r.top, s: ratio(tile), slots: slots };
            tile.classList.add('dragging');
            try { tile.setPointerCapture(e.pointerId); } catch (err) {}
            e.preventDefault();
        });
        grid.addEventListener('pointermove', function (e) {
            if (!drag || e.pointerId !== drag.id) return;
            var t = drag.tile;
            function place() {
                t.style.transform = 'none';
                var r = t.getBoundingClientRect();
                var tx = (e.clientX - drag.gx - r.left) / drag.s, ty = (e.clientY - drag.gy - r.top) / drag.s;
                t.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(1.04)';
            }
            place();
            // Which slot is the pointer over? The slots are measured once when the drag starts, so tiles that are
            // still sliding into place cannot be hit by mistake (that made them jump back and forth).
            var g = grid.getBoundingClientRect();
            var px = e.clientX - g.left, py = e.clientY - g.top;
            var target = -1, best = 1e9;
            drag.slots.forEach(function (sl, i) {
                if (px >= sl.l && px <= sl.r && py >= sl.t && py <= sl.b) { var d = Math.abs(px - sl.cx) + Math.abs(py - sl.cy); if (d < best) { best = d; target = i; } }
            });
            var order = tiles();
            var from = order.indexOf(t);
            if (target < 0 || target === from) return;
            var before = new Map();
            order.forEach(function (o) { if (o !== t) before.set(o, o.getBoundingClientRect()); });
            order.splice(from, 1);
            order.splice(target, 0, t);
            order.forEach(function (o) { grid.appendChild(o); });
            order.forEach(function (o) {
                if (o === t) return;
                var a = o.getBoundingClientRect(), b = before.get(o);
                var dx = (b.left - a.left) / drag.s, dy = (b.top - a.top) / drag.s;
                if (!dx && !dy) return;
                o.style.transition = 'none';
                o.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
                void o.offsetWidth;
                o.style.transition = 'transform .18s ease';
                o.style.transform = '';
            });
            place();
        });
        function end(e) {
            if (!drag || (e && e.pointerId !== drag.id)) return;
            var t = drag.tile;
            t.classList.remove('dragging');
            t.style.transition = 'transform .18s ease';
            t.style.transform = '';
            setTimeout(function () { t.style.transition = ''; }, 220);
            drag = null;
        }
        grid.addEventListener('pointerup', end);
        grid.addEventListener('pointercancel', end);
    }

    function wireHome(box) {
        var input = box.querySelector('input');
        if (!input) return;
        wireTiles(box);
        input.removeAttribute('readonly');
        input.removeAttribute('tabindex');
        input.setAttribute('aria-label', input.getAttribute('placeholder') || '');

        // Which houses the paw and the tick keep, as in the app: the paw keeps houses with a dog in today's reservation (these are
        // occupied), the tick keeps houses whose cleaning is finished but not yet confirmed (green, with no confirmed mark).
        var cards = Array.prototype.slice.call(box.querySelectorAll('.house-card'));
        [0, 4, 12].forEach(function (i) { if (cards[i]) cards[i].setAttribute('data-dogs', '1'); });
        [9, 10, 11].forEach(function (i) { if (cards[i]) cards[i].setAttribute('data-unconfirmed', '1'); });

        var on = { dogs: false, unconfirmed: false, details: false };
        var sort = 'number';
        var grid = box.querySelector('.house-grid');
        var STATUS_ORDER = ['OCCUPIED', 'ARRIVAL-DAY', 'NOT-CLEANED', 'FREE', 'INACTIVE'];
        var STATUS_OF = { 'occupied': 'OCCUPIED', 'available-with-arrival': 'ARRIVAL-DAY', 'available-with-tasks': 'NOT-CLEANED', 'available': 'FREE', 'inactive': 'INACTIVE' };
        function statusOf(card) {
            for (var k in STATUS_OF) { if (card.classList.contains(k)) return STATUS_OF[k]; }
            return 'FREE';
        }
        // The type is the name without its last word (Villa Aurora is Villa, Mobile Home Breeze is Mobile Home).
        function typeOf(card) {
            var words = (card.querySelector('.house-name-text') || card).textContent.trim().split(/\s+/);
            return words.length > 1 ? words.slice(0, -1).join(' ') : words[0];
        }
        function visible(card) { return card.style.display !== 'none'; }

        function apply() {
            var q = input.value.trim().toLowerCase();
            var shown = 0;
            cards.forEach(function (card) {
                var name = (card.querySelector('.house-name-text') || card).textContent.toLowerCase();
                var show = (!q || name.indexOf(q) !== -1) &&
                    (!on.dogs || card.hasAttribute('data-dogs')) &&
                    (!on.unconfirmed || card.hasAttribute('data-unconfirmed'));
                card.style.display = show ? '' : 'none';
                if (show) shown++;
            });
            var count = box.querySelector('.table-card-title .accent-pill');
            if (count) count.textContent = String(shown);

            // Order and group the houses as the app does: by number (one list), by type or by status (groups under a heading).
            if (!grid) return;
            Array.prototype.slice.call(grid.querySelectorAll('.type-divider')).forEach(function (d) { d.parentNode.removeChild(d); });
            var keyOf = sort === 'type' ? typeOf : statusOf;
            var keys = [];
            if (sort === 'status') { keys = STATUS_ORDER; }
            else if (sort === 'type') { cards.forEach(function (c) { var k = typeOf(c); if (keys.indexOf(k) === -1) keys.push(k); }); }
            var frag = document.createDocumentFragment();
            if (sort === 'number') {
                cards.forEach(function (c) { frag.appendChild(c); });
            } else {
                keys.forEach(function (k) {
                    var group = cards.filter(function (c) { return keyOf(c) === k; });
                    var seen = group.filter(visible).length;
                    if (!seen) { group.forEach(function (c) { frag.appendChild(c); }); return; }
                    var d = document.createElement('div');
                    d.className = 'type-divider';
                    d.appendChild(document.createTextNode(sort === 'status' ? (TEXT[lang]['HOME.HOUSE-STATUS.' + k] || k) : k));
                    if (sort === 'status') {
                        var n = document.createElement('span');
                        n.className = 'accent-pill tabular-nums';
                        n.textContent = String(seen);
                        d.appendChild(document.createTextNode(' '));
                        d.appendChild(n);
                    }
                    frag.appendChild(d);
                    group.forEach(function (c) { frag.appendChild(c); });
                });
            }
            grid.appendChild(frag);
            // The grouped lists are taller, so the picture is measured again.
            fitOne(box);
        }
        input.addEventListener('input', apply);

        // The sort box: a small list under it with the app's three choices.
        var select = box.querySelector('.p-select.filter-select');
        if (select) {
            var SORTS = [
                { v: 'number', icon: 'pi pi-sort-numeric-up', key: 'HOME.SEARCH.BY-NUMBER' },
                { v: 'type', icon: 'pi pi-sort-alpha-up', key: 'HOME.SEARCH.BY-TYPE' },
                { v: 'status', icon: 'pi pi-filter', key: 'HOME.SEARCH.BY-STATUS' }
            ];
            var shownIcon = select.querySelector('.selected-sort-option-content i');
            var shownLabel = select.querySelector('.selected-sort-option-label');
            var menu = document.createElement('div');
            menu.className = 'sort-menu';
            menu.setAttribute('role', 'listbox');
            menu.hidden = true;
            var opts = SORTS.map(function (o) {
                var b = document.createElement('button');
                b.type = 'button';
                b.className = 'sort-option';
                b.setAttribute('role', 'option');
                b.setAttribute('data-sort', o.v);
                b.innerHTML = '<i class="' + o.icon + '"></i><span></span>';
                b.lastChild.textContent = TEXT[lang][o.key] || '';
                menu.appendChild(b);
                return b;
            });
            select.appendChild(menu);
            select.setAttribute('role', 'combobox');
            select.setAttribute('tabindex', '0');
            select.setAttribute('aria-haspopup', 'listbox');
            select.setAttribute('aria-expanded', 'false');
            if (shownLabel) select.setAttribute('aria-label', shownLabel.textContent);

            function mark() {
                opts.forEach(function (b) { b.setAttribute('aria-selected', b.getAttribute('data-sort') === sort ? 'true' : 'false'); });
            }
            function open(focusIndex) {
                menu.hidden = false;
                select.setAttribute('aria-expanded', 'true');
                mark();
                var i = typeof focusIndex === 'number' ? focusIndex : SORTS.map(function (o) { return o.v; }).indexOf(sort);
                opts[i < 0 ? 0 : i].focus();
            }
            function close(refocus) {
                menu.hidden = true;
                select.setAttribute('aria-expanded', 'false');
                if (refocus) select.focus();
            }
            function choose(v) {
                sort = v;
                var o = SORTS.filter(function (x) { return x.v === v; })[0];
                if (shownIcon) shownIcon.className = o.icon;
                if (shownLabel) { shownLabel.textContent = TEXT[lang][o.key] || ''; select.setAttribute('aria-label', shownLabel.textContent); }
                close(true);
                apply();
            }
            select.addEventListener('click', function (e) {
                var opt = e.target.closest ? e.target.closest('.sort-option') : null;
                if (opt) { choose(opt.getAttribute('data-sort')); return; }
                if (menu.hidden) open(); else close(false);
            });
            select.addEventListener('keydown', function (e) {
                var onOpt = document.activeElement && document.activeElement.classList.contains('sort-option');
                if (!onOpt) {
                    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') { e.preventDefault(); open(); }
                    return;
                }
                var i = opts.indexOf(document.activeElement);
                if (e.key === 'ArrowDown') { e.preventDefault(); opts[(i + 1) % opts.length].focus(); }
                else if (e.key === 'ArrowUp') { e.preventDefault(); opts[(i + opts.length - 1) % opts.length].focus(); }
                else if (e.key === 'Escape') { e.preventDefault(); close(true); }
                else if (e.key === 'Tab') { close(false); }
            });
            document.addEventListener('click', function (e) {
                if (!document.body.contains(select)) return;
                if (!select.contains(e.target)) close(false);
            });
        }

        // The paw, the tick and the eye are buttons.
        var pills = box.querySelectorAll('.filter-pill');
        // The eye: a coloured strip under each house with made-up dates and guests (counted from today, so they always look current).
        // The colour is the app's: red while the guests are in, light red for a stay that has not started, green when nothing is booked.
        // [first day, last night, status, adults, dogs, babies, cribs]; a card with no entry has no booking. Dogs only where the paw keeps the house.
        var STAYS = {
            0: [-2, 3, 'occupied', 2, 1, 0, 0], 1: [1, 5, 'arrival', 4, 0, 0, 0], 2: [2, 4, 'arrival', 2, 0, 1, 1],
            3: [1, 7, 'arrival', 2, 0, 0, 0], 4: [-1, 4, 'occupied', 2, 1, 0, 0], 6: [3, 6, 'arrival', 3, 0, 0, 0],
            7: [2, 8, 'arrival', 2, 0, 1, 0], 9: [4, 9, 'arrival', 5, 0, 0, 0], 10: [0, 3, 'arrival', 2, 0, 1, 1],
            12: [-3, 1, 'occupied', 2, 1, 0, 0], 13: [1, 3, 'arrival', 4, 0, 0, 0], 14: [-4, 0, 'occupied', 3, 0, 0, 0],
            16: [5, 11, 'arrival', 2, 0, 0, 0]
        };
        function day(offset) {
            var d = new Date();
            d.setDate(d.getDate() + offset);
            return ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.';
        }
        function stripHtml(st) {
            if (!st) {
                return '<div class="house-detail-strip available"><div class="detail-date-row"><i class="fa fa-chevron-left detail-nav-arrow" style="visibility:hidden"></i><span class="detail-date">----- - -----</span><i class="fa fa-chevron-right detail-nav-arrow" style="visibility:hidden"></i></div><div class="detail-occupancy hidden"></div><div class="detail-note hidden"></div></div>';
            }
            var occ = '';
            if (st[3]) occ += '<div class="occ-item"><span>' + st[3] + '</span><i class="fa-solid fa-person"></i></div>';
            if (st[4]) occ += '<div class="occ-item"><span>' + st[4] + '</span><i class="fa-solid fa-paw"></i></div>';
            if (st[5]) occ += '<div class="occ-item"><span>' + st[5] + '</span><i class="fa-solid fa-baby"></i></div>';
            if (st[6]) occ += '<div class="occ-item"><span>' + st[6] + '</span><i class="fa-solid fa-baby-carriage"></i></div>';
            return '<div class="house-detail-strip ' + st[2] + '"><div class="detail-date-row"><i class="fa fa-chevron-left detail-nav-arrow" style="visibility:hidden"></i><span class="detail-date">' +
                day(st[0]) + ' - ' + day(st[1] + 1) + '</span><i class="fa fa-chevron-right detail-nav-arrow" style="visibility:hidden"></i></div><div class="detail-occupancy' +
                (occ ? '' : ' hidden') + '">' + occ + '</div><div class="detail-note hidden"></div></div>';
        }
        function setDetails(showIt) {
            cards.forEach(function (card, i) {
                var existing = card.querySelector('.house-detail-strip');
                if (existing) existing.parentNode.removeChild(existing);
                if (showIt) card.insertAdjacentHTML('beforeend', stripHtml(STAYS[i]));
            });
            fitOne(box);
        }

        [['dogs', pills[0], 'HOME.SEARCH.DOGS-ONLY'], ['unconfirmed', pills[1], 'HOME.SEARCH.NEEDS-CONFIRMATION'], ['details', pills[2], 'HOME.SEARCH.SHOW-HOUSE-DETAILS']].forEach(function (p) {
            var pill = p[1];
            if (!pill) return;
            var label = TEXT[lang][p[2]] || '';
            pill.setAttribute('role', 'button');
            pill.setAttribute('tabindex', '0');
            pill.setAttribute('aria-pressed', 'false');
            pill.setAttribute('aria-label', label);
            pill.setAttribute('title', label);
            function toggle() {
                on[p[0]] = !on[p[0]];
                pill.classList.toggle('active', on[p[0]]);
                pill.setAttribute('aria-pressed', on[p[0]] ? 'true' : 'false');
                if (p[0] === 'details') setDetails(on.details); else apply();
            }
            pill.addEventListener('click', toggle);
            pill.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
            });
        });
    }

    function wireStats(box) {
        var bar = box.querySelector('.tab-bar');
        var data = window.PORTON_PICTURES && window.PORTON_PICTURES[lang] && window.PORTON_PICTURES[lang].statsTabs;
        if (!bar || !data) return;
        var page = bar.parentNode;
        var body = document.createElement('div');
        body.className = 'stats-body';
        while (bar.nextSibling) body.appendChild(bar.nextSibling);
        page.appendChild(body);
        var overview = body.innerHTML;
        var items = bar.querySelectorAll('.tab-item');
        var stats = null;

        // Draw one tab. The year, month and period boxes and the charts are made to work by assets/stats-demo.js.
        function show(i) {
            items.forEach(function (other, k) { other.classList.toggle('active', k === i); });
            body.innerHTML = i === 0 ? overview : data[i] || overview;
            if (stats) stats.afterRender(i);
            fitOne(box);
        }

        if (window.PortonStats) {
            stats = window.PortonStats.wire(box, {
                t: function (key) { return TEXT[lang][key] || key; },
                fit: function () { fitOne(box); },
                redraw: show
            });
        }

        items.forEach(function (item, i) {
            item.setAttribute('role', 'button');
            item.setAttribute('tabindex', '0');
            item.addEventListener('click', function () { show(i); });
            item.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(i); }
            });
        });
        show(0);
    }

    // Reservations, once the animation is over: choose nights by clicking or dragging over free cells in a row, the Create reservation
    // window opens with those dates, and Create puts the stay in the table. Nights are written the app's way (one night, or N nights).
    function wireRes(box) {
        var inner = box.firstElementChild;
        var pic = box._pic;
        var root = inner && inner.firstElementChild;
        var table = inner && inner.querySelector('table.reservation-table');
        if (!table || !pic || !pic.dialog || !root || inner._resWired) return;
        inner._resWired = true;
        box.classList.add('live');

        var year = parseInt((inner.querySelector('.year-switcher .year') || {}).textContent, 10) || 2026;
        var days = Array.prototype.map.call(table.querySelectorAll('thead th.day-header'), function (th) {
            var m = /(\d+)\.(\d+)\./.exec(th.textContent);
            return m ? { d: parseInt(m[1], 10), m: parseInt(m[2], 10) } : null;
        });
        function two(n) { return ('0' + n).slice(-2); }
        function dateText(dt) { return two(dt.getDate()) + '.' + two(dt.getMonth() + 1) + '.' + dt.getFullYear(); }
        function free(td) { return !!td && td.tagName === 'TD' && !td.classList.contains('reserved-cell') && !td.classList.contains('past-date'); }
        function cellsOf(row) { return row.querySelectorAll('td'); }

        var drag = null;       // { row, anchor, lo, hi } while the mouse is down
        var modal = null;
        var picked = null;     // the nights the open window is for

        function clearSelection() {
            table.querySelectorAll('.selected-cell').forEach(function (c) { c.classList.remove('selected-cell', 'selection-start', 'selection-end'); });
            table.querySelectorAll('.row-header.active-row').forEach(function (h) { h.classList.remove('active-row'); });
        }
        function paint(row, lo, hi) {
            clearSelection();
            var cells = cellsOf(row);
            for (var i = lo; i <= hi; i++) {
                cells[i].classList.add('selected-cell');
                if (i === lo) cells[i].classList.add('selection-start');
                if (i === hi) cells[i].classList.add('selection-end');
            }
            row.firstElementChild.classList.add('active-row');
        }
        function indexOfCell(td) { return Array.prototype.indexOf.call(cellsOf(td.parentNode), td); }

        table.addEventListener('pointerdown', function (e) {
            if (modal || (e.pointerType === 'mouse' && e.button !== 0)) return;
            var td = e.target.closest ? e.target.closest('td') : null;
            if (!free(td)) return;
            var i = indexOfCell(td);
            drag = { row: td.parentNode, anchor: i, lo: i, hi: i };
            paint(drag.row, i, i);
        });
        table.addEventListener('pointerover', function (e) {
            if (!drag) return;
            var td = e.target.closest ? e.target.closest('td') : null;
            if (!td || td.parentNode !== drag.row) return;
            var cells = cellsOf(drag.row);
            var to = indexOfCell(td);
            var step = to >= drag.anchor ? 1 : -1;
            var end = drag.anchor;
            // The choice stops at the first booked or past day.
            for (var i = drag.anchor + step; step > 0 ? i <= to : i >= to; i += step) {
                if (!free(cells[i])) break;
                end = i;
            }
            drag.lo = Math.min(drag.anchor, end);
            drag.hi = Math.max(drag.anchor, end);
            paint(drag.row, drag.lo, drag.hi);
        });
        document.addEventListener('pointerup', function () {
            if (!drag) return;
            var d = drag;
            drag = null;
            if (document.body.contains(table)) openWindow(d.row, d.lo, d.hi);
        });
        document.addEventListener('pointercancel', function () {
            if (!drag) return;
            drag = null;
            clearSelection();
        });

        function closeWindow() {
            if (!modal) return;
            var m = modal;
            if (m._fields) m._fields.closePop();
            modal = null;
            picked = null;
            document.removeEventListener('keydown', onKey);
            m.classList.remove('open');
            var cont = inner.querySelector('.reservations-container');
            if (cont) cont.classList.remove('demo-blur');
            clearSelection();
            setTimeout(function () { if (m.parentNode) m.parentNode.removeChild(m); }, 250);
        }
        function onKey(e) {
            if (e.key === 'Escape') { e.preventDefault(); if (modal && modal._fields && modal._fields.closePop()) return; closeWindow(); }
        }

        // ---- the fields of the stay window, as in the app: typing, numbers 0 to 10, a calendar and a time box ----
        function indexOfDate(dt) {
            if (dt.getFullYear() !== year) return -1;
            for (var i = 0; i < days.length; i++) if (days[i] && days[i].m === dt.getMonth() + 1 && days[i].d === dt.getDate()) return i;
            return -1;
        }
        function addDays(dt, n) { return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + n); }
        // The first and last night of a choice, or null when it is not possible (outside the year, past days, or on another stay).
        function rangeOf(row, start, end, own) {
            var lo = indexOfDate(start), hi = indexOfDate(addDays(end, -1));
            if (lo < 0 || hi < lo) return null;
            var cells = cellsOf(row);
            for (var j = lo; j <= hi; j++) {
                var c = cells[j];
                if (!c) return null;
                var mine = own && j >= own.lo && j <= own.hi;
                if (!mine && !free(c)) return null;
            }
            return { lo: lo, hi: hi };
        }
        function stayFields(form, st, row, own, onChange) {
            var loc = lang === 'hr' ? 'hr-HR' : 'en-GB';
            var texts = form.querySelectorAll('.form-col .field input');
            [texts[0], texts[1]].forEach(function (inp, k) {
                inp.removeAttribute('readonly');
                inp.removeAttribute('tabindex');
                inp.setAttribute('maxlength', k === 0 ? '30' : '40');
                inp.addEventListener('input', function () { onChange(); });
            });
            var counts = form.querySelectorAll('.p-inputnumber-input');
            Array.prototype.forEach.call(counts, function (c) {
                c.removeAttribute('readonly');
                c.removeAttribute('tabindex');
                c.setAttribute('inputmode', 'numeric');
                c.setAttribute('maxlength', '2');
                c.addEventListener('focus', function () { try { c.select(); } catch (e) { } });
                c.addEventListener('input', function () {
                    var v = c.value.replace(/\D/g, '');
                    if (v !== '') v = String(Math.min(10, parseInt(v, 10)));
                    c.value = v;
                    onChange();
                });
                c.addEventListener('blur', function () { if (c.value === '') c.value = '0'; });
                c.addEventListener('keydown', function (e) {
                    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
                    e.preventDefault();
                    c.value = String(Math.max(0, Math.min(10, (parseInt(c.value, 10) || 0) + (e.key === 'ArrowUp' ? 1 : -1))));
                    onChange();
                });
            });
            var area = form.querySelector('textarea');
            if (area) { area.removeAttribute('readonly'); area.removeAttribute('tabindex'); area.setAttribute('maxlength', '300'); area.addEventListener('input', function () { onChange(); }); }

            var pickers = form.querySelectorAll('.p-datepicker-input');
            var dateIn = Array.prototype.filter.call(pickers, function (el) { return /\d\d\.\d\d\.\d{4}/.test(el.value); });
            var timeIn = Array.prototype.filter.call(pickers, function (el) { return /^\d\d:\d\d$/.test(el.value); });
            var note = form.querySelector('.nights-note');
            var colorSel = form.querySelector('.p-select');
            var range = null;
            var pop = null, popOff = null;

            function closePop() {
                if (!pop) return false;
                if (pop.parentNode) pop.parentNode.removeChild(pop);
                pop = null;
                if (popOff) { document.removeEventListener('pointerdown', popOff, true); popOff = null; }
                return true;
            }
            function sync() {
                var nights = Math.round((st.end - st.start) / 864e5);
                range = nights >= 1 ? rangeOf(row, st.start, st.end, own) : null;
                if (dateIn[0]) dateIn[0].value = dateText(st.start);
                if (dateIn[1]) dateIn[1].value = dateText(st.end);
                if (timeIn[0]) timeIn[0].value = st.tin;
                if (timeIn[1]) timeIn[1].value = st.tout;
                dateIn.forEach(function (el) { if (range) el.removeAttribute('aria-invalid'); else el.setAttribute('aria-invalid', 'true'); });
                if (note) {
                    note.innerHTML = '<i class="pi pi-moon"></i> ';
                    if (nights >= 1) note.appendChild(document.createTextNode((TEXT[lang][nights === 1 ? 'RESERVATIONS.MODAL.NIGHTS-ONE' : 'RESERVATIONS.MODAL.NIGHTS'] || '').replace('{{count}}', String(nights))));
                }
                var swatch = colorSel && colorSel.querySelector('.color-item');
                if (swatch) swatch.className = 'color-item guide-res-swatch-' + st.color;
                if (range && !own) paint(row, range.lo, range.hi);
                onChange();
            }
            function mk(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
            function btn(cls, icon, label, action) {
                var b = mk('button', cls);
                b.type = 'button';
                b.setAttribute('aria-label', label);
                b.innerHTML = '<i class="pi ' + icon + '"></i>';
                b.addEventListener('click', function (e) { e.preventDefault(); action(); });
                return b;
            }
            function openPop(host, el) {
                closePop();
                pop = el;
                host.appendChild(el);
                popOff = function (e) { if (pop && !pop.contains(e.target) && !host.contains(e.target)) closePop(); };
                document.addEventListener('pointerdown', popOff, true);
            }
            function openCal(which, host) {
                var base = which === 0 ? st.start : st.end;
                var vy = base.getFullYear(), vm = base.getMonth();
                var el = mk('div', 'pf-pop pf-cal');
                function draw() {
                    el.innerHTML = '';
                    var head = mk('div', 'pf-head');
                    head.appendChild(btn('pf-nav', 'pi-chevron-left', '<', function () { vm--; if (vm < 0) { vm = 11; vy--; } draw(); }));
                    head.appendChild(mk('span', 'pf-title', new Date(vy, vm, 1).toLocaleDateString(loc, { month: 'long', year: 'numeric' })));
                    head.appendChild(btn('pf-nav', 'pi-chevron-right', '>', function () { vm++; if (vm > 11) { vm = 0; vy++; } draw(); }));
                    el.appendChild(head);
                    var grid = mk('div', 'pf-grid');
                    for (var w = 0; w < 7; w++) grid.appendChild(mk('span', 'pf-wd', new Date(2024, 0, 1 + w).toLocaleDateString(loc, { weekday: 'short' })));
                    var first = new Date(vy, vm, 1);
                    var lead = (first.getDay() + 6) % 7;
                    for (var i = 0; i < 42; i++) {
                        var d = addDays(first, i - lead);
                        var b = mk('button', 'pf-day', String(d.getDate()));
                        b.type = 'button';
                        if (d.getMonth() !== vm) b.classList.add('other');
                        if (+d === +(which === 0 ? st.start : st.end)) b.classList.add('on');
                        (function (dd) {
                            b.addEventListener('click', function (e) {
                                e.preventDefault();
                                if (which === 0) st.start = dd; else st.end = dd;
                                closePop();
                                sync();
                            });
                        })(d);
                        grid.appendChild(b);
                    }
                    el.appendChild(grid);
                }
                draw();
                openPop(host, el);
            }
            function openTime(which, host) {
                var key = which === 0 ? 'tin' : 'tout';
                var el = mk('div', 'pf-pop pf-time');
                function part(idx, max) {
                    var col = mk('div', 'pf-col');
                    var val = mk('span', 'pf-val');
                    function get() { return parseInt(st[key].split(':')[idx], 10); }
                    function set(n) {
                        var p = st[key].split(':');
                        p[idx] = two(((n % (max + 1)) + max + 1) % (max + 1));
                        st[key] = p.join(':');
                        val.textContent = p[idx];
                        sync();
                    }
                    val.textContent = st[key].split(':')[idx];
                    col.appendChild(btn('pf-nav', 'pi-chevron-up', '+', function () { set(get() + 1); }));
                    col.appendChild(val);
                    col.appendChild(btn('pf-nav', 'pi-chevron-down', '-', function () { set(get() - 1); }));
                    return col;
                }
                el.appendChild(part(0, 23));
                el.appendChild(mk('span', 'pf-sep', ':'));
                el.appendChild(part(1, 59));
                openPop(host, el);
            }
            function openColors(host) {
                var el = mk('div', 'pf-pop pf-colors');
                for (var c = 0; c < 10; c++) {
                    var b = mk('button', 'pf-sw color-item guide-res-swatch-' + c);
                    b.type = 'button';
                    b.setAttribute('aria-label', String(c + 1));
                    if (c === st.color) b.classList.add('on');
                    (function (idx) {
                        b.addEventListener('click', function (e) { e.preventDefault(); st.color = idx; closePop(); sync(); });
                    })(c);
                    el.appendChild(b);
                }
                openPop(host, el);
            }
            if (colorSel) {
                var chost = colorSel.parentNode;
                chost.classList.add('pf-host');
                var copen = function (e) {
                    if (e) e.preventDefault();
                    if (pop && pop.parentNode === chost) { closePop(); return; }
                    openColors(chost);
                };
                colorSel.addEventListener('click', copen);
                colorSel.setAttribute('role', 'button');
                colorSel.setAttribute('tabindex', '0');
                colorSel.setAttribute('aria-haspopup', 'dialog');
                colorSel.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); copen(); } });
            }
            [dateIn, timeIn].forEach(function (list, kind) {
                list.forEach(function (inp, which) {
                    var host = inp.closest('.half-field') || inp.parentNode;
                    host.classList.add('pf-host');
                    var open = function (e) {
                        if (e) e.preventDefault();
                        if (pop && pop.parentNode === host) { closePop(); return; }
                        if (kind === 0) openCal(which, host); else openTime(which, host);
                    };
                    inp.addEventListener('click', open);
                    var drop = inp.parentNode.querySelector('.p-datepicker-dropdown, .p-datepicker-input-icon-container');
                    if (drop) drop.addEventListener('click', open);
                    inp.setAttribute('aria-haspopup', 'dialog');
                });
            });
            form.closePop = closePop;
            sync();
            return {
                range: function () { return range; },
                valid: function () { return !!(range && texts[0].value.trim() && texts[1].value.trim()); },
                values: function () {
                    var c = function (i) { return String(parseInt((counts[i] || {}).value, 10) || 0); };
                    return { name: texts[0].value.trim(), number: texts[1].value.trim(), adults: c(0), pets: c(1), babies: c(2), cribs: c(3), notes: area ? area.value.trim() : '', color: st.color, start: st.start, end: st.end, tin: st.tin, tout: st.tout };
                },
                closePop: closePop
            };
        }
        function placeStay(row, lo, hi, v) {
            var cells = cellsOf(row);
            for (var j = lo; j <= hi; j++) {
                var c = cells[j];
                c.classList.remove('selected-cell', 'selection-start', 'selection-end');
                c.classList.add('reserved-cell', 'guide-res-color-' + (v.color == null ? 1 : v.color), 'border-top-important', 'border-bottom-important');
                if (j === lo) c.classList.add('reservation-start', 'border-left-important');
                if (j > lo && j < hi) c.classList.add('reservation-middle');
                if (j === hi) c.classList.add('reservation-end', 'border-right-important');
                c.innerHTML = '';
            }
            var s = cells[lo];
            s.setAttribute('data-number', v.number);
            s.setAttribute('data-adults', v.adults);
            s.setAttribute('data-pets', v.pets);
            s.setAttribute('data-babies', v.babies);
            s.setAttribute('data-cribs', v.cribs);
            s.setAttribute('data-notes', v.notes || '');
            s.setAttribute('data-tin', v.tin || '16:00');
            s.setAttribute('data-tout', v.tout || '10:00');
            var item = document.createElement('div');
            item.className = 'reservation-item';
            item.innerHTML = '<i class="pi pi-arrows-alt handle-icon"></i><span class="reservation-name"></span>';
            item.lastChild.textContent = v.name;
            s.appendChild(item);
            if (hi > lo) {
                cells[lo + 1].innerHTML = '<div class="reservation-numbers"><div class="adults-count"><span></span> <i class="fa-solid fa-person"></i></div></div>';
                cells[lo + 1].querySelector('.adults-count span').textContent = v.adults;
            }
        }
        function clearStay(row, lo, hi) {
            var cells = cellsOf(row);
            for (var j = lo; j <= hi; j++) {
                var c = cells[j];
                Array.prototype.slice.call(c.classList).forEach(function (k) {
                    if (k === 'reserved-cell' || /^guide-res-color-/.test(k) || /^reservation-(start|middle|end)$/.test(k) || /^border-(top|bottom|left|right)-important$/.test(k)) c.classList.remove(k);
                });
                c.innerHTML = '';
            }
            ['data-number', 'data-adults', 'data-pets', 'data-babies', 'data-cribs', 'data-notes', 'data-tin', 'data-tout'].forEach(function (a) { cells[lo].removeAttribute(a); });
        }

        function create() {
            if (!picked || !modal || !modal._fields) return;
            var f = modal._fields;
            var r = f.range();
            if (!f.valid() || !r) return;
            // As in the app, Create does nothing until the last name and the reservation number are both filled in.
            placeStay(picked.row, r.lo, r.hi, f.values());
            closeWindow();
        }

        function openWindow(row, lo, hi) {
            if (modal) return;
            picked = { row: row, lo: lo, hi: hi };
            paint(row, lo, hi);
            var nights = hi - lo + 1;
            var first = days[lo], last = days[hi];
            var start = new Date(year, first.m - 1, first.d);
            var end = new Date(year, last.m - 1, last.d + 1);   // the day after the last night, as the app has it

            modal = document.createElement('div');
            modal.className = 'demo-modal live-modal';
            modal.innerHTML = '<div class="demo-modal-mask"></div><div class="demo-modal-box guide-pic-reservations-window">' + pic.dialog + '</div>';
            var house = modal.querySelector('.house-number-text');
            if (house) house.textContent = row.firstElementChild.textContent.trim();
            var createBtn = null;
            function refreshCreate() { if (createBtn) setDisabled(createBtn, !(modal && modal._fields && modal._fields.valid())); }
            var fields = stayFields(modal.querySelector('.p-dialog'), { start: start, end: end, tin: '16:00', tout: '10:00', color: 1 }, row, null, refreshCreate);
            modal._fields = fields;
            var inputs = modal.querySelectorAll('.form-col .field input');
            [inputs[0], inputs[1]].forEach(function (inp) {
                inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); create(); } });
            });
            function asButton(el, action, label) {
                if (!el) return;
                el.setAttribute('role', 'button');
                el.setAttribute('tabindex', '0');
                if (label) el.setAttribute('aria-label', label);
                el.addEventListener('click', action);
                el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); action(); } });
            }
            var buttons = modal.querySelectorAll('.right-buttons .p-button');
            asButton(buttons[0], closeWindow);
            asButton(buttons[buttons.length - 1], create);
            createBtn = buttons[buttons.length - 1];
            refreshCreate();
            asButton(modal.querySelector('.p-dialog-close-button'), closeWindow, buttons[0] ? buttons[0].textContent.trim() : '');
            modal.querySelector('.demo-modal-mask').addEventListener('click', closeWindow);

            root.appendChild(modal);
            void modal.offsetWidth;
            modal.classList.add('open');
            var cont = inner.querySelector('.reservations-container');
            if (cont) cont.classList.add('demo-blur');
            document.addEventListener('keydown', onKey);
            if (inputs[0]) inputs[0].focus({ preventScroll: true });
        }
        // ---- a stay already in the table: click it to open the Edit reservation window (Save, Delete), as in the app ----
        var counters = {};
        function setDisabled(el, off) {
            if (!el) return;
            el.classList.toggle('p-disabled', !!off);
            el.setAttribute('aria-disabled', off ? 'true' : 'false');
        }
        // Every stay gets a reservation number and its guests once, so the window and the export always agree.
        function numberStays() {
            var base = year === 2026 ? 1000 : 800;
            var n = counters[year] || 0;
            Array.prototype.forEach.call(table.querySelectorAll('tbody td.reservation-start'), function (td) {
                if (td.hasAttribute('data-number')) return;
                var cells = cellsOf(td.parentNode);
                var i = indexOfCell(td);
                var ad = cells[i + 1] && cells[i + 1].querySelector('.adults-count');
                td.setAttribute('data-number', 'R-' + (base + (++n)));
                td.setAttribute('data-adults', String(ad ? parseInt(ad.textContent, 10) || 0 : 0));
                td.setAttribute('data-pets', '0');
                td.setAttribute('data-babies', '0');
                td.setAttribute('data-cribs', '0');
            });
            counters[year] = n;
        }
        numberStays();

        function runStart(cells, idx) {
            for (var i = idx; i >= 0; i--) {
                if (cells[i].classList.contains('reservation-start')) return i;
                if (i < idx && cells[i].classList.contains('reservation-end')) return -1;
                if (!cells[i].classList.contains('reserved-cell')) return -1;
            }
            return -1;
        }
        function runEnd(cells, lo) {
            var j = lo;
            while (j + 1 < cells.length && !cells[j].classList.contains('reservation-end') &&
                cells[j + 1].classList.contains('reserved-cell') && !cells[j + 1].classList.contains('reservation-start')) j++;
            return j;
        }
        function asButton(el, action, label) { asBtn(el, action, label); }
        function dialogFrom(html) {
            var w = document.createElement('div');
            w.innerHTML = html;
            return w.querySelector('.p-dialog');
        }

        function openView(td) {
            if (modal) return;
            var row = td.parentNode;
            var cells = cellsOf(row);
            var lo = runStart(cells, indexOfCell(td));
            if (lo < 0 || !pic.editDialog) return;
            var hi = runEnd(cells, lo);
            numberStays();
            var sc = cells[lo];
            var orig = { name: (sc.querySelector('.reservation-name') || {}).textContent || '', number: sc.getAttribute('data-number') || '' };
            var nights = hi - lo + 1;
            var first = days[lo], last = days[hi];
            var start = new Date(year, first.m - 1, first.d);
            var end = new Date(year, last.m - 1, last.d + 1);

            picked = { row: row, lo: lo, hi: hi };
            modal = document.createElement('div');
            modal.className = 'demo-modal live-modal';
            modal.innerHTML = '<div class="demo-modal-mask"></div><div class="demo-modal-box guide-pic-reservations-window">' + pic.editDialog + '</div>';
            var box = modal.querySelector('.demo-modal-box');
            var form = box.querySelector('.p-dialog');
            var house = form.querySelector('.house-number-text');
            if (house) house.textContent = rowName(row);
            var inputs = form.querySelectorAll('.form-col .field input');
            inputs[0].value = orig.name;
            inputs[1].value = orig.number;
            var counts = form.querySelectorAll('.p-inputnumber-input');
            ['data-adults', 'data-pets', 'data-babies', 'data-cribs'].forEach(function (a, i) { if (counts[i]) counts[i].value = sc.getAttribute(a) || '0'; });
            var area = form.querySelector('textarea');
            if (area) area.value = sc.getAttribute('data-notes') || '';
            var del = form.querySelector('.left-buttons .p-button');
            var rb = form.querySelectorAll('.right-buttons .p-button');
            var cancelBtn = rb[0], saveBtn = rb[rb.length - 1];
            var fields = null, before = null;
            function same(a, b) {
                return a.name === b.name && a.number === b.number && a.adults === b.adults && a.pets === b.pets && a.babies === b.babies && a.cribs === b.cribs &&
                    a.notes === b.notes && a.color === b.color && +a.start === +b.start && +a.end === +b.end && a.tin === b.tin && a.tout === b.tout;
            }
            // Save is off until something is changed and the fields are valid (as in the app).
            function refreshSave() {
                if (!fields || !saveBtn) return;
                setDisabled(saveBtn, !(fields.valid() && !same(fields.values(), before)));
            }
            var colorNow = 1;
            Array.prototype.forEach.call(sc.classList, function (k) { var m = /^guide-res-color-(\d+)$/.exec(k); if (m) colorNow = parseInt(m[1], 10); });
            fields = stayFields(form, { start: start, end: end, tin: sc.getAttribute('data-tin') || '16:00', tout: sc.getAttribute('data-tout') || '10:00', color: colorNow }, row, { lo: lo, hi: hi }, refreshSave);
            modal._fields = fields;
            before = fields.values();
            refreshSave();

            function swapTo(dlg) { box.replaceChild(dlg, form); }
            function swapBack(dlg) { box.replaceChild(form, dlg); if (inputs[0]) inputs[0].focus({ preventScroll: true }); }

            function save() {
                if (saveBtn.classList.contains('p-disabled')) return;
                var dlg = dialogFrom(pic.confirmDialog);
                var rows = [];
                var colorRows = [];
                var now = fields.values();
                if (fields.closePop) fields.closePop();
                [['LAST-NAME', 'name'], ['RESERVATION-NUMBER', 'number'], ['START-DATE', 'start'], ['CHECK-IN', 'tin'], ['END-DATE', 'end'], ['CHECK-OUT', 'tout'],
                 ['ADULTS', 'adults'], ['PETS', 'pets'], ['BABIES', 'babies'], ['BABY-CRIBS', 'cribs'], ['COLOR', 'color'], ['NOTES', 'notes']].forEach(function (k) {
                    var o = before[k[1]], n = now[k[1]];
                    if (k[1] === 'color' && o !== n) colorRows.push(rows.length);
                    if (o instanceof Date) { if (+o === +n) return; o = dateText(o); n = dateText(n); }
                    else if (o === n) return;
                    rows.push([T('RESERVATIONS.MODAL.' + k[0]), o === '' ? '-' : o, n === '' ? '-' : n]);
                });
                function swatchBg(i) {
                    var t = document.createElement('div');
                    t.className = 'guide-res-swatch-' + i;
                    t.style.cssText = 'position:absolute;visibility:hidden;width:1px;height:1px';
                    form.appendChild(t);
                    var c = getComputedStyle(t).backgroundColor;
                    form.removeChild(t);
                    return c;
                }
                var content = dlg.querySelector('.p-dialog-content');
                content.innerHTML = '';
                rows.forEach(function (r) {
                    var d = document.createElement('div');
                    d.className = 'change-row';
                    d.innerHTML = '<span class="change-label"></span><span class="change-values"><span></span><i class="pi pi-arrow-right"></i><b></b></span>';
                    d.querySelector('.change-label').textContent = r[0];
                    d.querySelectorAll('.change-values span')[0].textContent = r[1];
                    d.querySelector('.change-values b').textContent = r[2];
                    content.appendChild(d);
                });
                colorRows.forEach(function (ri) {
                    var d = content.children[ri];
                    function chip(host, i) {
                        host.textContent = '';
                        var c = document.createElement('i');
                        c.className = 'pf-chip';
                        c.style.background = swatchBg(i);
                        host.appendChild(c);
                    }
                    chip(d.querySelectorAll('.change-values span')[0], before.color);
                    chip(d.querySelector('.change-values b'), now.color);
                });
                var fb = dlg.querySelectorAll('.p-dialog-footer .p-button');
                var back = function () { swapBack(dlg); };
                asButton(fb[0], back);
                asButton(dlg.querySelector('.p-dialog-close-button'), back, fb[0] ? fb[0].textContent.trim() : '');
                asButton(fb[1], function () {
                    var r = fields.range();
                    if (!r) { swapBack(dlg); return; }
                    if (r.lo === lo && r.hi === hi) {
                        // Same nights: keep the cells as they are and change only the words and numbers.
                        var nameEl = sc.querySelector('.reservation-name');
                        if (nameEl) nameEl.textContent = now.name;
                        ['number', 'adults', 'pets', 'babies', 'cribs', 'notes', 'tin', 'tout'].forEach(function (a) { sc.setAttribute('data-' + a, now[a]); });
                        for (var q = lo; q <= hi; q++) {
                            Array.prototype.slice.call(cells[q].classList).forEach(function (k) { if (/^guide-res-color-/.test(k)) cells[q].classList.remove(k); });
                            cells[q].classList.add('guide-res-color-' + now.color);
                        }
                        var ac = hi > lo ? cells[lo + 1].querySelector('.adults-count') : null;
                        if (ac) ac.innerHTML = now.adults + ' <i class="fa-solid fa-person"></i>';
                    } else {
                        clearStay(row, lo, hi);
                        placeStay(row, r.lo, r.hi, now);
                    }
                    closeWindow();
                });
                swapTo(dlg);
                if (fb[1]) fb[1].focus({ preventScroll: true });
            }

            function remove() {
                var dlg = dialogFrom(pic.deleteDialog);
                var typed = dlg.querySelector('.delete-field input');
                typed.value = '';
                typed.removeAttribute('readonly');
                typed.removeAttribute('tabindex');
                var fb = dlg.querySelectorAll('.p-dialog-footer .p-button');
                var delBtn = fb[fb.length - 1];
                function matches() {
                    var expected = inputs[0].value.trim().toLowerCase();
                    return !!expected && typed.value.trim().toLowerCase() === expected;
                }
                function refreshDel() { setDisabled(delBtn, !matches()); }
                typed.addEventListener('input', refreshDel);
                typed.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); if (matches()) doDelete(); } });
                refreshDel();
                function doDelete() {
                    if (!matches()) return;
                    clearStay(row, lo, hi);
                    closeWindow();
                }
                var back = function () { swapBack(dlg); };
                asButton(fb[0], back);
                asButton(dlg.querySelector('.p-dialog-close-button'), back, fb[0] ? fb[0].textContent.trim() : '');
                asButton(delBtn, doDelete);
                swapTo(dlg);
                typed.focus({ preventScroll: true });
            }

            asButton(cancelBtn, closeWindow);
            asButton(saveBtn, save);
            asButton(del, remove);
            asButton(form.querySelector('.p-dialog-close-button'), closeWindow, cancelBtn ? cancelBtn.textContent.trim() : '');
            modal.querySelector('.demo-modal-mask').addEventListener('click', closeWindow);
            inputs[0].addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); save(); } });
            inputs[1].addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); save(); } });

            root.appendChild(modal);
            void modal.offsetWidth;
            modal.classList.add('open');
            var cont = inner.querySelector('.reservations-container');
            if (cont) cont.classList.add('demo-blur');
            document.addEventListener('keydown', onKey);
            inputs[0].focus({ preventScroll: true });
        }

        table.addEventListener('click', function (e) {
            if (modal || drag) return;
            var td = e.target.closest ? e.target.closest('td') : null;
            if (td && td.classList.contains('reserved-cell')) openView(td);
        });

        // ---- the controls above the table: house type, year, row height and export ----
        var ui = { cell: 30, type: 'all' };
        var snaps = {};                // the table of a year that is not on screen
        var SEASONS = [2025, 2026];    // the made-up camp has two seasons, as the arrows in the app stop at the first and the last
        var thead = table.querySelector('thead');
        var tbody = table.querySelector('tbody');
        var yearEl = inner.querySelector('.year-nav .year');
        var nav = inner.querySelectorAll('.year-nav .icon-btn');
        var T = function (k) { return TEXT[lang][k] || ''; };

        function readHead() {
            year = parseInt((yearEl || {}).textContent, 10) || year;
            days = Array.prototype.map.call(table.querySelectorAll('thead th.day-header'), function (th) {
                var m = /(\d+)\.(\d+)\./.exec(th.textContent);
                return m ? { d: parseInt(m[1], 10), m: parseInt(m[2], 10) } : null;
            });
        }
        function asBtn(el, action, label) {
            if (!el) return;
            el.setAttribute('role', 'button');
            el.setAttribute('tabindex', '0');
            if (label) { el.setAttribute('aria-label', label); el.setAttribute('title', label); }
            el.addEventListener('click', action);
            el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); action(); } });
        }
        function rowName(tr) { return tr.firstElementChild.textContent.trim(); }
        // The type is the name without its last word (Villa Aurora is Villa), as on Pregled.
        function typeOfName(name) {
            var w = name.split(/\s+/);
            return w.length > 1 ? w.slice(0, -1).join(' ') : w[0];
        }
        function applyType() {
            Array.prototype.forEach.call(tbody.querySelectorAll('tr'), function (tr) {
                tr.style.display = ui.type === 'all' || typeOfName(rowName(tr)) === ui.type ? '' : 'none';
            });
            fitOne(box);
        }
        function applyHeight() {
            Array.prototype.forEach.call(tbody.querySelectorAll('td'), function (td) {
                td.classList.remove('height-25-important', 'height-30-important', 'height-40-important');
                td.classList.add('height-' + ui.cell + '-important');
            });
            // Taller rows make a taller table, so the picture is measured again (otherwise it spills over the next section).
            fitOne(box);
        }

        // Row height: the three buttons next to the colours button.
        var tool = inner.querySelector('.density-buttons .tool-group');
        var dens = tool ? tool.querySelectorAll(':scope > .icon-btn') : [];
        var DENSITY = [[40, 'SPACIOUS'], [30, 'COMFORTABLE'], [25, 'COMPACT']];
        DENSITY.forEach(function (d, i) {
            var btn = dens[i + 1];
            if (!btn) return;
            asBtn(btn, function () {
                ui.cell = d[0];
                Array.prototype.forEach.call(dens, function (other, k) { if (k >= 1 && k <= 3) other.classList.toggle('active', other === btn); });
                Array.prototype.forEach.call(dens, function (other, k) { if (k >= 1 && k <= 3) other.setAttribute('aria-pressed', other === btn ? 'true' : 'false'); });
                applyHeight();
            }, T('RESERVATIONS.HEADER.TOOLTIPS.ROW-HEIGHT-' + d[1]));
            btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
        });

        // The palette button opens the Row marking colors window as a picture to look at: nothing inside it can be changed.
        function openMarking() {
            if (modal || !pic.markingDialog) return;
            modal = document.createElement('div');
            modal.className = 'demo-modal live-modal view-only';
            modal.innerHTML = '<div class="demo-modal-mask"></div><div class="demo-modal-box guide-pic-reservations-window">' + pic.markingDialog + '</div>';
            var dlg = modal.querySelector('.p-dialog');
            var foot = modal.querySelectorAll('.p-dialog-footer .p-button');
            Array.prototype.forEach.call(foot, function (b) { asBtn(b, closeWindow); });
            asBtn(modal.querySelector('.p-dialog-close-button'), closeWindow, foot[0] ? foot[0].textContent.trim() : '');
            modal.querySelector('.demo-modal-mask').addEventListener('click', closeWindow);
            root.appendChild(modal);
            void modal.offsetWidth;
            modal.classList.add('open');
            var cont = inner.querySelector('.reservations-container');
            if (cont) cont.classList.add('demo-blur');
            document.addEventListener('keydown', onKey);
            if (foot[0]) foot[0].focus({ preventScroll: true });
        }
        if (dens[0]) {
            var markTitle = dialogFrom(pic.markingDialog || '<div class="p-dialog"></div>').querySelector('.p-dialog-title');
            asBtn(dens[0], openMarking, markTitle ? markTitle.textContent.trim() : '');
            dens[0].setAttribute('aria-haspopup', 'dialog');
        }

        // House type: keeps the rows of one type.
        var typeEl = inner.querySelector('.house-type-tabs-wrapper .p-select');
        if (typeEl && window.PortonStats && window.PortonStats.dropdown) {
            var types = [];
            Array.prototype.forEach.call(tbody.querySelectorAll('tr'), function (tr) {
                var ty = typeOfName(rowName(tr));
                if (types.indexOf(ty) === -1) types.push(ty);
            });
            window.PortonStats.dropdown(typeEl, {
                name: T('RESERVATIONS.HOUSE'),
                options: [{ value: 'all', label: T('RESERVATIONS.HEADER.ALL-TYPES') }].concat(types.map(function (ty) { return { value: ty, label: ty }; })),
                value: 'all',
                onChange: function (v) { ui.type = v; closeWindow(); applyType(); }
            });
        }

        // Year: the arrows move between the two seasons. 2025 is over (every day is past), so nothing there can be chosen.
        var STAYS_2025 = [
            [0, 0, 3, 3, 'Kovač', 2], [0, 5, 11, 5, 'Bianchi', 4], [1, 1, 5, 1, 'Dupont', 3], [1, 7, 10, 8, 'Jensen', 2],
            [2, 0, 2, 6, 'Huber', 2], [2, 3, 8, 2, 'Nowak', 5], [3, 2, 6, 4, 'Moreau', 2], [4, 0, 4, 7, 'Lindqvist', 3],
            [4, 6, 11, 3, 'Fischer', 4], [5, 1, 3, 2, 'Rossi', 2], [6, 4, 9, 1, 'Kuhn', 2], [7, 0, 5, 5, 'Weber', 6],
            [8, 2, 4, 8, 'Santos', 2], [9, 3, 8, 6, 'Olsen', 4], [10, 0, 2, 4, 'Meier', 3], [10, 5, 9, 7, 'Dubois', 2],
            [11, 1, 6, 3, 'Costa', 2], [12, 4, 11, 2, 'Horvat', 5], [13, 0, 3, 1, 'Berg', 2], [14, 2, 7, 5, 'Silva', 3],
            [15, 6, 10, 4, 'Ricci', 2], [16, 0, 4, 6, 'Haas', 4], [16, 7, 11, 8, 'Lund', 2]
        ];
        function build2025() {
            var rows = Array.prototype.map.call(tbody.querySelectorAll('tr'), rowName);
            var label = {};
            Array.prototype.forEach.call(thead.querySelectorAll('th.day-header'), function (th, i) {
                var dd = days[i];
                if (!dd) return;
                label[new Date(2026, dd.m - 1, dd.d).getDay()] = th.textContent.trim().split(/\s+/)[0];
            });
            var houseHead = thead.querySelector('.house-header').textContent;
            var dates = [];
            for (var i = 0; i < 12; i++) dates.push(new Date(2025, 6, 14 + i));
            var head = '<tr><th class="house-header">' + houseHead + '</th>' + dates.map(function (dt) {
                var dow = dt.getDay();
                return '<th class="day-header' + (dow === 6 ? ' saturday-column-day' : dow === 0 ? ' sunday-column-day' : '') + '" style="height: 36px"><div>' +
                    label[dow] + ' ' + dt.getDate() + '.' + (dt.getMonth() + 1) + '.</div></th>';
            }).join('') + '</tr>';
            var body = rows.map(function (name, r) {
                var cells = '';
                for (var c = 0; c < 12; c++) {
                    var dow = dates[c].getDay();
                    var cls = 'past-date' + (dow === 6 ? ' saturday-column-day' : dow === 0 ? ' sunday-column-day' : '');
                    var inner2 = '';
                    STAYS_2025.forEach(function (st) {
                        if (st[0] !== r || c < st[1] || c > st[2]) return;
                        cls += ' reserved-cell guide-res-color-' + st[3] + ' border-top-important border-bottom-important';
                        if (c === st[1]) cls += ' reservation-start border-left-important';
                        if (c > st[1] && c < st[2]) cls += ' reservation-middle';
                        if (c === st[2]) cls += ' reservation-end border-right-important';
                        if (c === st[1]) inner2 = '<div class="reservation-item"><i class="pi pi-arrows-alt handle-icon"></i><span class="reservation-name">' + st[4] + '</span></div>';
                        else if (c === st[1] + 1) inner2 = '<div class="reservation-numbers"><div class="adults-count">' + st[5] + ' <i class="fa-solid fa-person"></i></div></div>';
                    });
                    cells += '<td class="' + cls + '">' + inner2 + '</td>';
                }
                return '<tr><th class="row-header">' + name + '</th>' + cells + '</tr>';
            }).join('');
            thead.innerHTML = head;
            tbody.innerHTML = body;
        }
        function paintNav() {
            [[nav[0], year <= SEASONS[0], year - 1], [nav[1], year >= SEASONS[SEASONS.length - 1], year + 1]].forEach(function (x) {
                if (!x[0]) return;
                x[0].classList.toggle('disabled', x[1]);
                x[0].setAttribute('aria-disabled', x[1] ? 'true' : 'false');
                x[0].setAttribute('aria-label', String(x[2]));
            });
        }
        function showYear(target) {
            if (target === year || SEASONS.indexOf(target) === -1) return;
            closeWindow();
            clearSelection();
            snaps[year] = { head: thead.innerHTML, body: tbody.innerHTML };
            if (yearEl) yearEl.textContent = String(target);
            if (snaps[target]) { thead.innerHTML = snaps[target].head; tbody.innerHTML = snaps[target].body; }
            else {
                // The first season's weekday names are read before its table is replaced.
                var keepYear = year;
                build2025();
                year = keepYear;
            }
            readHead();
            numberStays();
            applyHeight();
            applyType();
            paintNav();
        }
        if (nav[0]) asBtn(nav[0], function () { if (!nav[0].classList.contains('disabled')) showYear(year - 1); });
        if (nav[1]) asBtn(nav[1], function () { if (!nav[1].classList.contains('disabled')) showYear(year + 1); });
        paintNav();

        // Export: the list of stays as a file, in the app's own format and column names.
        function staysList() {
            var out = [];
            var count = 0;
            Array.prototype.forEach.call(tbody.querySelectorAll('tr'), function (tr) {
                var cells = cellsOf(tr);
                for (var i = 0; i < cells.length; i++) {
                    if (!cells[i].classList.contains('reservation-start')) continue;
                    var j = i;
                    while (j + 1 < cells.length && !cells[j].classList.contains('reservation-end') &&
                        cells[j + 1].classList.contains('reserved-cell') && !cells[j + 1].classList.contains('reservation-start')) j++;
                    var nameEl = cells[i].querySelector('.reservation-name');
                    var adultsEl = cells[i + 1] && cells[i + 1].querySelector('.adults-count');
                    var mine = cells[i].hasAttribute('data-number');
                    count++;
                    var a = days[i], b = days[j];
                    if (!a || !b) continue;
                    out.push({
                        house: rowName(tr),
                        last: nameEl ? nameEl.textContent : '',
                        number: mine ? cells[i].getAttribute('data-number') : 'R-' + (1000 + count),
                        start: new Date(year, a.m - 1, a.d),
                        end: new Date(year, b.m - 1, b.d + 1),        // the day after the last night, as the app exports it
                        adults: mine ? parseInt(cells[i].getAttribute('data-adults'), 10) : (adultsEl ? parseInt(adultsEl.textContent, 10) || 0 : 0),
                        babies: mine ? parseInt(cells[i].getAttribute('data-babies'), 10) : 0,
                        pets: mine ? parseInt(cells[i].getAttribute('data-pets'), 10) : 0,
                        cribs: mine ? parseInt(cells[i].getAttribute('data-cribs'), 10) : 0,
                        note: mine ? (cells[i].getAttribute('data-notes') || '') : '',
                        color: (function () { var m = /guide-res-color-(\d+)/.exec(cells[i].className); return m ? parseInt(m[1], 10) : 0; })(),
                        type: typeOfName(rowName(tr))
                    });
                }
            });
            out.sort(function (x, y) { return x.start - y.start; });
            return out;
        }
        // Saving a file and the Excel library are shared with the Statistics export (assets/stats-demo.js).
        var download = window.PortonExport.download;
        var withXlsx = window.PortonExport.withXlsx;
        // The app's own list of reservation colours (light), used by its Excel (table) file.
        var XLS_COLORS = ['#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA', '#FFE4BA', '#E8BAFF', '#BAF2FF', '#FFC9BA', '#D4FFBA', '#FFBAEC'];
        function xlsColor(index) {
            var m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(XLS_COLORS[index % XLS_COLORS.length]);
            var opacity = 0.7 + 0.5 * 0.3;     // the app's default tint
            var blend = function (c) { return ('0' + Math.round(255 - (255 - parseInt(c, 16)) * opacity).toString(16)).slice(-2); };
            return ('FF' + blend(m[1]) + blend(m[2]) + blend(m[3])).toUpperCase();
        }
        function stampName() {
            var n = new Date();
            var p2 = function (v) { return ('0' + v).slice(-2); };
            return (lang === 'hr' ? 'rezervacije' : 'reservations') + '_' + p2(n.getDate()) + '.' + p2(n.getMonth() + 1) + '.' + n.getFullYear() + '_' + p2(n.getHours()) + 'h' + p2(n.getMinutes()) + 'm';
        }
        function exportXlsxRaw(X, cols, rows, name) {
            var matrix = [cols.map(function (c) { return c[0]; })].concat(rows.map(function (r) { return cols.map(function (c) { return c[1](r); }); }));
            var ws = X.utils.aoa_to_sheet(matrix);
            ws['!cols'] = cols.map(function (_, i) {
                var longest = 8;
                matrix.forEach(function (line) { longest = Math.max(longest, String(line[i] == null ? '' : line[i]).length); });
                return { wch: Math.min(60, longest + 2) };
            });
            cols.forEach(function (_, i) { var c = ws[X.utils.encode_cell({ r: 0, c: i })]; if (c) c.s = { font: { bold: true } }; });
            var wb = X.utils.book_new();
            X.utils.book_append_sheet(wb, ws, name.slice(0, 31));
            download(name + '.xlsx', 'application/octet-stream', X.write(wb, { bookType: 'xlsx', type: 'array' }));
        }
        function exportXlsxTable(X, rows) {
            var labels = lang === 'hr'
                ? { adults: 'Odrasli', pets: 'Ljubimci', babies: 'Bebe', cribs: 'Krevetići', note: 'Napomena' }
                : { adults: 'Adults', pets: 'Pets', babies: 'Babies', cribs: 'Cribs', note: 'Note' };
            var dates = days.filter(Boolean).map(function (d) { return new Date(year, d.m - 1, d.d); });
            var head = ['House'].concat(dates.map(function (d) { return d.toLocaleDateString('en-US', { weekday: 'short' }) + ' ' + d.getDate() + '.' + (d.getMonth() + 1) + '.'; }));
            var wb = X.utils.book_new();
            var types = [];
            rows.forEach(function (r) { if (types.indexOf(r.type) === -1) types.push(r.type); });
            types.forEach(function (type) {
                var mine = rows.filter(function (r) { return r.type === type; });
                var houses = [];
                mine.forEach(function (r) { if (houses.indexOf(r.house) === -1) houses.push(r.house); });
                var data = [head];
                var meta = {};
                houses.forEach(function (h, hi) {
                    var line = [h];
                    dates.forEach(function (d, di) {
                        var hit = mine.filter(function (r) { return r.house === h && r.start <= d && d < r.end; })[0];
                        line.push(hit && +hit.start === +d ? (hit.last || hit.number) : '');
                        if (hit) meta[(hi + 1) + ',' + (di + 1)] = hit;
                    });
                    data.push(line);
                });
                var ws = X.utils.aoa_to_sheet(data);
                for (var c = 1; c < head.length; c++) {
                    var hc = ws[X.utils.encode_cell({ r: 0, c: c })];
                    if (!hc) continue;
                    var wd = head[c].split(' ')[0];
                    hc.s = { font: wd === 'Sat' ? { color: { rgb: 'EF4444' }, bold: true } : wd === 'Sun' ? { color: { rgb: 'DC2626' }, bold: true } : { bold: true }, alignment: { horizontal: 'center', vertical: 'center' } };
                }
                Object.keys(meta).forEach(function (key) {
                    var rc = key.split(',');
                    var r = parseInt(rc[0], 10), c = parseInt(rc[1], 10);
                    var res = meta[key];
                    var addr = X.utils.encode_cell({ r: r, c: c });
                    var cell = ws[addr] || (ws[addr] = { t: 's', v: '' });
                    var d = dates[c - 1];
                    var last = new Date(res.end.getFullYear(), res.end.getMonth(), res.end.getDate() - 1);
                    var edge = { style: 'thin', color: { rgb: '000000' } };
                    var border = { top: edge, bottom: edge };
                    if (+d === +res.start) border.left = edge;
                    if (+d === +last) border.right = edge;
                    cell.s = { fill: { patternType: 'solid', fgColor: { rgb: xlsColor(res.color) } }, alignment: { horizontal: 'center', vertical: 'center' }, font: { bold: !!cell.v }, border: border };
                    if (cell.v) {
                        var det = [];
                        if (res.adults) det.push(labels.adults + ': ' + res.adults);
                        if (res.pets) det.push(labels.pets + ': ' + res.pets);
                        if (res.babies) det.push(labels.babies + ': ' + res.babies);
                        if (res.cribs) det.push(labels.cribs + ': ' + res.cribs);
                        if (res.note) det.push('', labels.note + ': ' + res.note);
                        if (det.length) cell.c = [{ t: det.join('\n') }];
                    }
                });
                ws['!cols'] = [{ wch: 10 }].concat(dates.map(function () { return { wch: 12 }; }));
                X.utils.book_append_sheet(wb, ws, String(type).slice(0, 31));
            });
            if (!wb.SheetNames.length) return;
            download(stampName() + '.xlsx', 'application/octet-stream', X.write(wb, { bookType: 'xlsx', type: 'array', cellStyles: true }));
        }
        function exportAs(kind) {
            var loc = lang === 'hr' ? 'hr' : 'en';
            var cols = [
                [T('RESERVATIONS.HOUSE'), function (r) { return r.house; }],
                [T('RESERVATIONS.MODAL.LAST-NAME'), function (r) { return r.last; }],
                [T('RESERVATIONS.MODAL.RESERVATION-NUMBER'), function (r) { return r.number; }],
                [T('RESERVATIONS.MODAL.START-DATE'), function (r) { return r.start.toLocaleDateString(loc); }],
                [T('RESERVATIONS.MODAL.END-DATE'), function (r) { return r.end.toLocaleDateString(loc); }],
                [T('RESERVATIONS.MODAL.ADULTS'), function (r) { return r.adults; }],
                [T('RESERVATIONS.MODAL.BABIES'), function (r) { return r.babies; }],
                [T('RESERVATIONS.MODAL.PETS'), function (r) { return r.pets; }],
                [T('RESERVATIONS.MODAL.BABY-CRIBS'), function (r) { return r.cribs; }],
                [T('RESERVATIONS.MODAL.NOTES'), function (r) { return r.note; }]
            ];
            var rows = staysList();
            var name = 'rezervacije-' + year;
            if (kind === 'xlsx-raw') { withXlsx(function (X) { exportXlsxRaw(X, cols, rows, name); }); return; }
            if (kind === 'xlsx-table') { withXlsx(function (X) { exportXlsxTable(X, rows); }); return; }
            if (kind === 'json') {
                var objects = rows.map(function (r) {
                    var o = {};
                    cols.forEach(function (c) { o[c[0]] = c[1](r); });
                    return o;
                });
                var doc = {};
                doc[T('MENU.RESERVATIONS')] = objects;
                download(name + '.json', 'application/json;charset=utf-8', JSON.stringify(doc, null, 2));
                return;
            }
            function cell(v) {
                var text = String(v === null || v === undefined ? '' : v);
                return /[",\r\n]/.test(text) ? '"' + text.replace(/"/g, '""') + '"' : text;
            }
            var lines = [cols.map(function (c) { return cell(c[0]); }).join(',')].concat(rows.map(function (r) {
                return cols.map(function (c) { return cell(c[1](r)); }).join(',');
            }));
            download(name + '.csv', 'text/csv;charset=utf-8', '﻿' + lines.join('\r\n'));
        }

        var exp = inner.querySelector('.guide-res-export .icon-btn');
        if (exp) {
            var host = exp.parentNode;
            var emenu = document.createElement('div');
            emenu.className = 'dd-menu res-export-menu';
            emenu.hidden = true;
            emenu.setAttribute('role', 'menu');
            var items = [
                { kind: 'csv', html: '<i class="pi pi-file" style="color: var(--p-orange-500)"></i><span class="dd-text"></span>', text: T('EXPORT.CSV') },
                { kind: 'json', html: '<span class="dd-json">{ }</span><span class="dd-text"></span>', text: T('EXPORT.JSON') },
                { kind: 'xlsx-raw', html: '<i class="pi pi-file-excel" style="color: var(--p-green-600)"></i><span class="dd-text"></span>', text: T('EXPORT.EXCEL-RAW') },
                { kind: 'xlsx-table', html: '<i class="pi pi-file-excel" style="color: var(--p-green-600)"></i><span class="dd-text"></span>', text: T('EXPORT.EXCEL-TABLE') }
            ];
            var ebtns = items.map(function (it) {
                var b = document.createElement('button');
                b.type = 'button';
                b.className = 'dd-option';
                b.setAttribute('role', 'menuitem');
                b.innerHTML = it.html;
                b.querySelector('.dd-text').textContent = it.text;
                b.addEventListener('click', function () { exportAs(it.kind); closeExport(true); });
                emenu.appendChild(b);
                return b;
            });
            host.appendChild(emenu);
            exp.setAttribute('aria-haspopup', 'menu');
            exp.setAttribute('aria-expanded', 'false');
            var openExport = function () {
                withXlsx(function () { });     // start loading the Excel library so the file is quick
                emenu.hidden = false;
                exp.setAttribute('aria-expanded', 'true');
                ebtns[0].focus({ preventScroll: true });
            };
            var closeExport = function (refocus) {
                if (emenu.hidden) return;
                emenu.hidden = true;
                exp.setAttribute('aria-expanded', 'false');
                if (refocus) exp.focus({ preventScroll: true });
            };
            asBtn(exp, function () { if (emenu.hidden) openExport(); else closeExport(false); }, T('EXPORT.BUTTON'));
            emenu.addEventListener('keydown', function (e) {
                var i = ebtns.indexOf(document.activeElement);
                if (e.key === 'ArrowDown') { e.preventDefault(); ebtns[(i + 1) % ebtns.length].focus(); }
                else if (e.key === 'ArrowUp') { e.preventDefault(); ebtns[(i + ebtns.length - 1) % ebtns.length].focus(); }
                else if (e.key === 'Escape') { e.preventDefault(); closeExport(true); }
                else if (e.key === 'Tab') { closeExport(false); }
            });
            document.addEventListener('click', function (e) {
                if (!document.body.contains(host)) return;
                if (!host.contains(e.target)) closeExport(false);
            });
        }

        // ---- on a phone: the row height, colours and export buttons are one menu button, which opens the Options window (as in the app) ----
        var mbtn = inner.querySelector('.year-switcher .mobile-picker-btn');
        if (mbtn) {
            var optTitle = T('RESERVATIONS.HEADER.ROW-HEIGHT-MODAL-TITLE');
            var openOptions = function () {
                if (modal) return;
                modal = document.createElement('div');
                modal.className = 'demo-modal live-modal options-modal';
                var heights = [[40, 'SPACIOUS'], [30, 'COMFORTABLE'], [25, 'COMPACT']];
                var list = heights.map(function (h) {
                    return '<span class="opt-btn' + (ui.cell === h[0] ? ' on' : '') + '" data-h="' + h[0] + '">' + T('RESERVATIONS.HEADER.TOOLTIPS.ROW-HEIGHT-' + h[1]) + '</span>';
                }).join('');
                var markLabel = dens[0] ? (dens[0].getAttribute('aria-label') || '') : '';
                modal.innerHTML = '<div class="demo-modal-mask"></div><div class="demo-modal-box guide-pic-reservations-window">' +
                    '<div class="p-dialog p-component" style="width: 300px">' +
                    '<div class="p-dialog-header"><span class="p-dialog-title"></span><div class="p-dialog-header-actions">' +
                    '<span class="p-button p-component p-button-icon-only p-button-secondary p-button-rounded p-button-text p-dialog-close-button"><i class="pi pi-times"></i></span></div></div>' +
                    '<div class="p-dialog-content"><div class="opt-list">' + list +
                    '<span class="opt-btn opt-outlined" data-act="mark"><i class="pi pi-palette"></i><span class="opt-label"></span></span>' +
                    '<span class="opt-btn opt-outlined" data-act="export" aria-expanded="false"><i class="pi pi-upload"></i><span class="opt-label"></span></span>' +
                    '<div class="opt-export" hidden></div>' +
                    '</div></div></div></div>';
                modal.querySelector('.p-dialog-title').textContent = optTitle;
                modal.querySelector('[data-act="mark"] .opt-label').textContent = markLabel;
                modal.querySelector('[data-act="export"] .opt-label').textContent = T('EXPORT.BUTTON');
                var optBtns = modal.querySelectorAll('.opt-btn');
                Array.prototype.forEach.call(optBtns, function (b) { b.setAttribute('role', 'button'); b.setAttribute('tabindex', '0'); });
                Array.prototype.forEach.call(modal.querySelectorAll('.opt-btn[data-h]'), function (b, i) {
                    asBtn(b, function () { if (dens[i + 1]) dens[i + 1].click(); closeWindow(); });
                });
                asBtn(modal.querySelector('[data-act="mark"]'), function () { closeWindow(); openMarking(); });
                var expList = modal.querySelector('.opt-export');
                [['csv', 'EXPORT.CSV'], ['json', 'EXPORT.JSON'], ['xlsx-raw', 'EXPORT.EXCEL-RAW'], ['xlsx-table', 'EXPORT.EXCEL-TABLE']].forEach(function (it) {
                    var b = document.createElement('span');
                    b.className = 'opt-btn opt-sub';
                    b.textContent = T(it[1]);
                    expList.appendChild(b);
                    asBtn(b, function () { exportAs(it[0]); closeWindow(); });
                });
                var expBtn = modal.querySelector('[data-act="export"]');
                asBtn(expBtn, function () {
                    var open = expList.hidden;
                    if (open) withXlsx(function () { });
                    expList.hidden = !open;
                    expBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
                });
                asBtn(modal.querySelector('.p-dialog-close-button'), closeWindow, optTitle);
                modal.querySelector('.demo-modal-mask').addEventListener('click', closeWindow);
                root.appendChild(modal);
                void modal.offsetWidth;
                modal.classList.add('open');
                var cont = inner.querySelector('.reservations-container');
                if (cont) cont.classList.add('demo-blur');
                document.addEventListener('keydown', onKey);
            };
            asBtn(mbtn, openOptions, optTitle);
            mbtn.setAttribute('aria-haspopup', 'dialog');
        }

    }

    function wireAutomation(box) {
        var check = '<span class="p-checkbox-icon pi pi-check"></span>';
        // The "every N days" fields, as in the app: 1 to 365, arrows step by one, and they only work while their box is ticked.
        var MIN_DAYS = 1, MAX_DAYS = 365;
        function clampDays(n) { return Math.min(MAX_DAYS, Math.max(MIN_DAYS, n)); }
        function stepDays(num, dir) {
            var field = num.querySelector('input');
            if (!field || num.classList.contains('p-disabled')) return;
            var cur = parseInt(field.value, 10);
            field.value = String(isNaN(cur) ? clampDays(dir > 0 ? 1 : MIN_DAYS) : clampDays(cur + dir));
            field._last = field.value;
        }
        box.querySelectorAll('.p-inputnumber').forEach(function (num) {
            var field = num.querySelector('input');
            if (!field) return;
            field.removeAttribute('tabindex');
            field.setAttribute('inputmode', 'numeric');
            field.addEventListener('input', function () {
                field.value = field.value.replace(/\D/g, '').slice(0, 3);
            });
            field.addEventListener('blur', function () {
                if (num.classList.contains('p-disabled')) return;
                var n = parseInt(field.value, 10);
                field.value = String(isNaN(n) ? (field._last || '1') : clampDays(n));
                field._last = field.value;
            });
            field.addEventListener('keydown', function (e) {
                if (e.key === 'ArrowUp') { e.preventDefault(); stepDays(num, 1); }
                else if (e.key === 'ArrowDown') { e.preventDefault(); stepDays(num, -1); }
            });
        });
        // The hour and minute boxes of "Create tasks at": the app offers the hours 00 to 23 and the minutes 00, 15, 30 and 45.
        var openMenu = null;
        function closeMenu(refocus) {
            if (!openMenu) return;
            var sel = openMenu.parentNode;
            openMenu.parentNode.removeChild(openMenu);
            openMenu = null;
            sel.setAttribute('aria-expanded', 'false');
            if (refocus) sel.focus({ preventScroll: true });
        }
        box.querySelectorAll('.run-at-row .p-select').forEach(function (sel, idx) {
            var isHour = idx % 2 === 0;
            var values = isHour ? Array.from({ length: 24 }, function (_, i) { return i; }) : [0, 15, 30, 45];
            sel.setAttribute('role', 'combobox');
            sel.setAttribute('tabindex', '0');
            sel.setAttribute('aria-haspopup', 'listbox');
            sel.setAttribute('aria-expanded', 'false');
            function open() {
                if (sel.classList.contains('p-disabled')) return;
                closeMenu(false);
                var label = sel.querySelector('.p-select-label');
                var menu = document.createElement('div');
                menu.className = 'am-menu';
                menu.setAttribute('role', 'listbox');
                values.forEach(function (v) {
                    var t = (v < 10 ? '0' : '') + v;
                    var o = document.createElement('button');
                    o.type = 'button';
                    o.className = 'am-opt' + (label && label.textContent === t ? ' on' : '');
                    o.setAttribute('role', 'option');
                    o.textContent = t;
                    o.addEventListener('click', function (e) {
                        e.stopPropagation();
                        if (label) label.textContent = t;
                        closeMenu(true);
                    });
                    menu.appendChild(o);
                });
                sel.appendChild(menu);
                openMenu = menu;
                sel.setAttribute('aria-expanded', 'true');
                var on = menu.querySelector('.on');
                if (on) menu.scrollTop = on.offsetTop - menu.clientHeight / 2 + on.offsetHeight / 2;
            }
            sel.addEventListener('click', function (e) {
                if (e.target.closest('.am-menu')) return;
                if (openMenu && openMenu.parentNode === sel) closeMenu(false); else open();
            });
            sel.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') { e.preventDefault(); open(); var on = openMenu && (openMenu.querySelector('.on') || openMenu.firstChild); if (on) on.focus({ preventScroll: true }); }
                else if (e.key === 'Escape') closeMenu(true);
            });
        });
        if (!box._menuClose) {
            box._menuClose = true;
            document.addEventListener('click', function (e) { if (openMenu && !e.target.closest('.am-menu') && !openMenu.parentNode.contains(e.target)) closeMenu(false); });
            document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(true); });
        }
        if (box._autoWired) return;     // the click listener must only be added once, even if the picture is drawn again
        box._autoWired = true;
        box.addEventListener('click', function (e) {
            var sw = e.target.closest('.run-at-row');
            if (sw && sw.querySelector('.p-toggleswitch') && !e.target.closest('.p-select')) {
                var toggle = sw.querySelector('.p-toggleswitch');
                var on = !toggle.classList.contains('p-toggleswitch-checked');
                toggle.classList.toggle('p-toggleswitch-checked', on);
                sw.querySelectorAll('.p-select').forEach(function (s) { s.classList.toggle('p-disabled', !on); });
                return;
            }
            var btn = e.target.closest('.p-inputnumber-button');
            if (btn) {
                stepDays(btn.closest('.p-inputnumber'), btn.classList.contains('p-inputnumber-increment-button') ? 1 : -1);
                return;
            }
            var row = e.target.closest('.cleanup-row-controls');
            var cb = row && row.querySelector('.p-checkbox');
            if (!cb || e.target.closest('.p-inputnumber')) return;
            var checked = !cb.classList.contains('p-checkbox-checked');
            cb.classList.toggle('p-checkbox-checked', checked);
            cb.querySelector('.p-checkbox-box').innerHTML = checked ? check : '';
            var num = row.querySelector('.p-inputnumber');
            if (num) {
                num.classList.toggle('p-disabled', !checked);
                var field = num.querySelector('input');
                if (field) {
                    // Ticking the box puts 5 in the field (the app does the same); unticking empties it.
                    field.value = checked ? '5' : '';
                    field._last = field.value;
                    if (checked) field.removeAttribute('readonly'); else field.setAttribute('readonly', '');
                }
            }
        });
    }

    function drawPictures() {
        document.querySelectorAll('.shot[data-pic]').forEach(function (box) {
            drawOne(box, false);
            box._running = false;
            if (box._count && countWatcher && !box._counted) countWatcher.observe(box);
            if (!box.hasAttribute('data-anim')) return;
            if (watcher && !box._watched) { box._watched = true; watcher.observe(box); }
            else if (box._visible) runLoop(box);
        });
    }

    function fitOne(box) {
        var inner = box.firstElementChild;
        // On a phone some pictures are drawn narrower (so their text stays readable) and cut shorter (data-w-sm, data-h-sm).
        var small = window.innerWidth < 600;
        var minWidth = parseFloat(box.getAttribute(small && box.hasAttribute('data-w-sm') ? 'data-w-sm' : 'data-w'));
        var maxHeight = parseFloat(box.getAttribute(small && box.hasAttribute('data-h-sm') ? 'data-h-sm' : 'data-h'));
        // Real size (never zoomed in): the page is drawn as wide as its box, so a wide screen simply shows more of it.
        // Only when the box is narrower than the picture needs is the picture scaled down to fit.
        var zoom = parseFloat(box.getAttribute('data-zoom')) || 1;
        var scale = Math.min(zoom, box.clientWidth / minWidth);
        box._scale = scale;
        inner.style.width = box.clientWidth / scale + 'px';
        inner.style.transform = 'scale(' + scale + ')';
        var cut = inner.offsetHeight > maxHeight;
        box.style.height = Math.round(Math.min(inner.offsetHeight, maxHeight) * scale) + 'px';
        box.classList.toggle('cut', cut);
    }

    function fitPictures() {
        document.querySelectorAll('.shot[data-ready]').forEach(fitOne);
    }

    // ---- drawing in: the lime marks and lines draw themselves and the big numbers count up, once, when they come into view ----
    var reveal = !reduceMotion && !!window.IntersectionObserver;
    if (reveal) document.documentElement.classList.add('js-reveal');
    var markWatcher = reveal ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (!e.isIntersecting) return;
            markWatcher.unobserve(e.target);
            e.target.classList.add('drawn');
            // When the stroke is drawn the mark goes back to its normal look (also for a title whose letters are black on the lime).
            e.target.addEventListener('animationend', function () { e.target.classList.add('done'); }, { once: true });
            if (e.target.parentNode) e.target.parentNode._drawn = true;
        });
    }, { threshold: 0.6, rootMargin: '0px 0px -10% 0px' }) : null;
    // The loose lime lines of a section are drawn when the section is half in view.
    if (reveal) {
        var strokeWatcher = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (!e.isIntersecting) return;
                strokeWatcher.unobserve(e.target);
                Array.prototype.forEach.call(e.target.querySelectorAll('.strokes'), function (st) { st.classList.add('drawn'); });
            });
        }, { threshold: 0.15 });
        document.querySelectorAll('.page-strokes').forEach(function (sec) { strokeWatcher.observe(sec); });
        // The four big numbers: the bar grows and the number counts up from 0, one after the other.
        var figWatcher = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (!e.isIntersecting) return;
                figWatcher.unobserve(e.target);
                var fig = e.target.querySelector('.intro-figure');
                if (!fig) return;
                var delay = Array.prototype.indexOf.call(e.target.parentNode.children, e.target) * 150;
                var target = parseInt(fig._target, 10) || 0;
                fig.style.setProperty('--d', (delay / 1000) + 's');
                fig.classList.add('shown');
                var t0 = performance.now();
                (function frame(now) {
                    var p = Math.max(0, Math.min(1, (now - t0 - delay) / 1300));
                    fig.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
                    if (p < 1) requestAnimationFrame(frame);
                })(t0);
            });
        }, { threshold: 0.5 });
        document.querySelectorAll('.intro-number').forEach(function (num) {
            var fig = num.querySelector('.intro-figure');
            if (!fig) return;
            fig._target = fig.textContent;
            fig.textContent = '0';
            figWatcher.observe(num);
        });
    }

    // ---- text and links ----
    function applyText() {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            el.hidden = !TEXT[lang][key];
            el.textContent = TEXT[lang][key] || '';
            // A green stroke over the first words of a title (data-mark-en / data-mark-hr = how many words)
            var count = parseInt(el.getAttribute('data-mark-' + lang), 10);
            if (count && el.textContent) {
                var words = el.textContent.split(' ');
                var mark = document.createElement('span');
                mark.className = 'mark';
                mark.textContent = words.slice(0, count).join(' ');
                mark.setAttribute('data-text', mark.textContent);
                // A title that has been drawn once stays drawn when the language changes; a new one is watched until it is on screen.
                if (markWatcher) { if (el._drawn) mark.classList.add('done'); else markWatcher.observe(mark); }
                el.textContent = '';
                el.appendChild(mark);
                if (words.length > count) { el.appendChild(document.createTextNode(' ' + words.slice(count).join(' '))); }
            }
        });
        document.querySelectorAll('.lang button').forEach(function (b) {
            b.classList.toggle('active', b.getAttribute('data-lang') === lang);
        });
        drawPictures();
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

    applyText();
    applyLinks();
    wireLang();
    window.addEventListener('resize', fitPictures);
    // The icon and text fonts arrive a moment later and change the pictures' height.
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitPictures);
})();
