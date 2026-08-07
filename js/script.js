/**

* =========================================================
* GREEN INFINITY
* Official Website — Version 1.0
* Institute of Materials Research and Engineering (IMRE)
*
* Main JavaScript
* =========================================================
  */

"use strict";

/* =========================================================

1. DOM ELEMENTS
   ========================================================= */

const siteHeader = document.getElementById("site-header");
const menuToggle = document.getElementById("menu-toggle");
const mobileNavigation = document.getElementById("mobile-navigation");
const backToTop = document.getElementById("back-to-top");
const currentYear = document.getElementById("current-year");

const navigationLinks = document.querySelectorAll(
".nav-link"
);

const mobileNavigationLinks = document.querySelectorAll(
".mobile-navigation a"
);

/* =========================================================
2. CURRENT YEAR
========================================================= */

if (currentYear) {
currentYear.textContent = new Date().getFullYear();
}

/* =========================================================
3. MOBILE NAVIGATION
========================================================= */

function openMobileNavigation() {

```
if (!menuToggle || !mobileNavigation) {
    return;
}

menuToggle.classList.add("active");

mobileNavigation.classList.add("open");

menuToggle.setAttribute(
    "aria-expanded",
    "true"
);

menuToggle.setAttribute(
    "aria-label",
    "Close navigation menu"
);
```

}

function closeMobileNavigation() {

```
if (!menuToggle || !mobileNavigation) {
    return;
}

menuToggle.classList.remove("active");

mobileNavigation.classList.remove("open");

menuToggle.setAttribute(
    "aria-expanded",
    "false"
);

menuToggle.setAttribute(
    "aria-label",
    "Open navigation menu"
);
```

}

function toggleMobileNavigation() {

```
if (!mobileNavigation) {
    return;
}

const isOpen =
    mobileNavigation.classList.contains("open");

if (isOpen) {
    closeMobileNavigation();
} else {
    openMobileNavigation();
}
```

}

if (menuToggle) {

```
menuToggle.addEventListener(
    "click",
    toggleMobileNavigation
);
```

}

/* =========================================================
4. CLOSE MOBILE MENU AFTER NAVIGATION
========================================================= */

mobileNavigationLinks.forEach((link) => {

```
link.addEventListener(
    "click",
    () => {

        closeMobileNavigation();

    }
);
```

});

/* =========================================================
5. CLOSE MOBILE MENU WITH ESCAPE
========================================================= */

document.addEventListener(
"keydown",
(event) => {

```
    if (event.key !== "Escape") {
        return;
    }

    closeMobileNavigation();

}
```

);

/* =========================================================
6. HEADER SCROLL EFFECT
========================================================= */

function updateHeaderOnScroll() {

```
if (!siteHeader) {
    return;
}

if (window.scrollY > 40) {

    siteHeader.classList.add(
        "scrolled"
    );

} else {

    siteHeader.classList.remove(
        "scrolled"
    );

}
```

}

window.addEventListener(
"scroll",
updateHeaderOnScroll,
{
passive: true
}
);

updateHeaderOnScroll();

/* =========================================================
7. ACTIVE NAVIGATION
========================================================= */

const pageSections = document.querySelectorAll(
"main section[id]"
);

function updateActiveNavigation() {

```
if (!pageSections.length) {
    return;
}

const scrollPosition =
    window.scrollY +
    160;

let currentSection = "";

pageSections.forEach((section) => {

    const sectionTop =
        section.offsetTop;

    const sectionHeight =
        section.offsetHeight;

    if (
        scrollPosition >= sectionTop &&
        scrollPosition <
            sectionTop + sectionHeight
    ) {

        currentSection =
            section.getAttribute("id");

    }

});


navigationLinks.forEach((link) => {

    const href =
        link.getAttribute("href");

    if (
        href ===
        `#${currentSection}`
    ) {

        link.classList.add(
            "active"
        );

    } else {

        link.classList.remove(
            "active"
        );

    }

});
```

}

window.addEventListener(
"scroll",
updateActiveNavigation,
{
passive: true
}
);

window.addEventListener(
"resize",
updateActiveNavigation
);

updateActiveNavigation();

/* =========================================================
8. SMOOTH INTERNAL NAVIGATION
========================================================= */

const internalLinks =
document.querySelectorAll(
'a[href^="#"]'
);

internalLinks.forEach((link) => {

```
link.addEventListener(
    "click",
    (event) => {

        const targetId =
            link.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target =
            document.querySelector(
                targetId
            );

        if (!target) {
            return;
        }

        event.preventDefault();

        const headerHeight =
            siteHeader
                ? siteHeader.offsetHeight
                : 0;

        const targetPosition =
            target.getBoundingClientRect()
                .top +
            window.scrollY -
            headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

        closeMobileNavigation();

    }
);
```

});

/* =========================================================
9. BACK TO TOP BUTTON
========================================================= */

function updateBackToTop() {

```
if (!backToTop) {
    return;
}

if (window.scrollY > 600) {

    backToTop.classList.add(
        "visible"
    );

} else {

    backToTop.classList.remove(
        "visible"
    );

}
```

}

window.addEventListener(
"scroll",
updateBackToTop,
{
passive: true
}
);

updateBackToTop();

if (backToTop) {

```
backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);
```

}

/* =========================================================
10. SCROLL REVEAL
========================================================= */

const revealElements =
document.querySelectorAll(
".research-card, " +
".value-item, " +
".team-profile, " +
".news-card, " +
".publications-layout, " +
".contact-grid"
);

if (
"IntersectionObserver" in window &&
revealElements.length
) {

```
const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(
                (entry) => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }

                    entry.target.classList.add(
                        "reveal",
                        "is-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }
            );

        },
        {
            threshold: 0.12,
            rootMargin:
                "0px 0px -50px 0px"
        }
    );


revealElements.forEach(
    (element) => {

        element.classList.add(
            "reveal"
        );

        revealObserver.observe(
            element
        );

    }
);
```

} else {

```
revealElements.forEach(
    (element) => {

        element.classList.add(
            "is-visible"
        );

    }
);
```

}

/* =========================================================
11. CONTACT FORM
========================================================= */

const contactForm =
document.getElementById(
"contact-form"
);

if (contactForm) {

```
contactForm.addEventListener(
    "submit",
    () => {

        /*
         * The form currently uses a mailto action.
         *
         * The browser will open the user's default
         * email application with the form information.
         *
         * A server-side form service can be added later
         * if Green Infinity requires direct web submissions.
         */

    }
);
```

}

/* =========================================================
12. HANDLE RESIZE
========================================================= */

window.addEventListener(
"resize",
() => {

```
    /*
     * If the visitor expands the browser from mobile
     * to desktop while the mobile menu is open,
     * close the mobile navigation.
     */

    if (
        window.innerWidth > 760
    ) {

        closeMobileNavigation();

    }

}
```

);

/* =========================================================
13. INITIAL PAGE STATE
========================================================= */

document.addEventListener(
"DOMContentLoaded",
() => {

```
    updateHeaderOnScroll();
    updateBackToTop();
    updateActiveNavigation();

}
```

);

