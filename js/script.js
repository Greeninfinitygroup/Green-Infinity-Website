/**

* =========================================================
* GREEN INFINITY — OFFICIAL WEBSITE
* Version 1.0
* Main JavaScript
* GitHub Pages Ready
* =========================================================
*
* This file provides:
* * Mobile navigation
* * Sticky header behaviour
* * Active navigation highlighting
* * Smooth anchor navigation
* * Scroll reveal animations
* * Back-to-top button
* * Dynamic copyright year
* * Basic contact-form validation
* * Accessibility improvements
*
* No external JavaScript libraries are required.
* =========================================================
  */

"use strict";

/* =========================================================
01. DOM ELEMENTS
========================================================= */

const siteHeader = document.getElementById("site-header");
const menuToggle = document.getElementById("menu-toggle");
const mobileNavigation = document.getElementById("mobile-navigation");
const backToTop = document.getElementById("back-to-top");
const contactForm = document.getElementById("contact-form");
const currentYear = document.getElementById("current-year");

/* =========================================================
02. MOBILE NAVIGATION
========================================================= */

/**

* Opens and closes the mobile navigation menu.
  */
  function toggleMobileNavigation() {

  if (!menuToggle || !mobileNavigation) {
  return;
  }

  const isOpen = menuToggle.classList.toggle("active");

  mobileNavigation.classList.toggle("open", isOpen);

  menuToggle.setAttribute(
  "aria-expanded",
  String(isOpen)
  );

  menuToggle.setAttribute(
  "aria-label",
  isOpen
  ? "Close navigation menu"
  : "Open navigation menu"
  );

  /*

  * Prevent background scrolling while the mobile menu
  * is open.
    */
    document.body.classList.toggle(
    "menu-open",
    isOpen
    );
    }

/**

* Close the mobile navigation.
  */
  function closeMobileNavigation() {

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

  document.body.classList.remove("menu-open");
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
03. MOBILE NAVIGATION LINKS
========================================================= */

if (mobileNavigation) {

```
const mobileLinks =
    mobileNavigation.querySelectorAll("a");

mobileLinks.forEach((link) => {

    link.addEventListener(
        "click",
        closeMobileNavigation
    );

});
```

}

/* =========================================================
04. CLOSE MENU WITH ESCAPE KEY
========================================================= */

document.addEventListener(
"keydown",
(event) => {

```
    if (
        event.key === "Escape" &&
        mobileNavigation &&
        mobileNavigation.classList.contains("open")
    ) {

        closeMobileNavigation();

        if (menuToggle) {
            menuToggle.focus();
        }

    }

}
```

);

/* =========================================================
05. CLOSE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
"click",
(event) => {

```
    if (
        !mobileNavigation ||
        !menuToggle ||
        !mobileNavigation.classList.contains("open")
    ) {
        return;
    }

    const clickedInsideMenu =
        mobileNavigation.contains(event.target);

    const clickedMenuButton =
        menuToggle.contains(event.target);

    if (
        !clickedInsideMenu &&
        !clickedMenuButton
    ) {

        closeMobileNavigation();

    }

}
```

);

/* =========================================================
06. STICKY HEADER
========================================================= */

/**

* Adds a shadow to the header once the visitor
* starts scrolling.
  */
  function updateHeader() {

  if (!siteHeader) {
  return;
  }

  if (window.scrollY > 20) {

  ```
   siteHeader.classList.add("scrolled");
  ```

  } else {

  ```
   siteHeader.classList.remove("scrolled");
  ```

  }

}

/* =========================================================
07. BACK TO TOP
========================================================= */

/**

* Displays the back-to-top button after the visitor
* has scrolled sufficiently down the page.
  */
  function updateBackToTop() {

  if (!backToTop) {
  return;
  }

  if (window.scrollY > 600) {

  ```
   backToTop.classList.add("visible");
  ```

  } else {

  ```
   backToTop.classList.remove("visible");
  ```

  }

}

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
08. SCROLL PERFORMANCE
========================================================= */

/*

* requestAnimationFrame prevents excessive layout
* calculations when the user scrolls.
  */

let scrollTicking = false;

function handleScroll() {

```
if (!scrollTicking) {

    window.requestAnimationFrame(() => {

        updateHeader();
        updateBackToTop();
        updateActiveNavigation();

        scrollTicking = false;

    });

    scrollTicking = true;

}
```

}

window.addEventListener(
"scroll",
handleScroll,
{
passive: true
}
);

/* =========================================================
09. ACTIVE NAVIGATION
========================================================= */

const navigationLinks =
document.querySelectorAll(
".nav-link"
);

const pageSections =
document.querySelectorAll(
"main section[id]"
);

/**

* Highlights the navigation item corresponding
* to the section currently visible.
  */
  function updateActiveNavigation() {

  if (
  !navigationLinks.length ||
  !pageSections.length
  ) {
  return;
  }

  const scrollPosition =
  window.scrollY + 160;

  let currentSectionId = "home";

  pageSections.forEach((section) => {

  ```
   const sectionTop =
       section.offsetTop;

   if (
       scrollPosition >= sectionTop
   ) {

       currentSectionId =
           section.id;

   }
  ```

  });

  navigationLinks.forEach((link) => {

  ```
   const targetId =
       link.getAttribute("href");

   const isActive =
       targetId === `#${currentSectionId}`;

   link.classList.toggle(
       "active",
       isActive
   );

   if (isActive) {

       link.setAttribute(
           "aria-current",
           "page"
       );

   } else {

       link.removeAttribute(
           "aria-current"
       );

   }
  ```

  });

}

/* =========================================================
10. SMOOTH ANCHOR NAVIGATION
========================================================= */

const anchorLinks =
document.querySelectorAll(
'a[href^="#"]'
);

anchorLinks.forEach((link) => {

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
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

        /*
         * Update the URL hash without causing
         * the browser to jump unexpectedly.
         */
        if (
            window.history &&
            window.history.pushState
        ) {

            window.history.pushState(
                null,
                "",
                targetId
            );

        }

    }
);
```

});

/* =========================================================
11. SCROLL REVEAL
========================================================= */

/**

* Elements are automatically given the .reveal class
* and animated when they enter the viewport.
  */
  const revealElements =
  document.querySelectorAll(
  ".section-header, " +
  ".about-introduction, " +
  ".about-values, " +
  ".research-card, " +
  ".highlight-content, " +
  ".highlight-visual, " +
  ".team-image-wrapper, " +
  ".team-content, " +
  ".publications-content, " +
  ".news-card, " +
  ".contact-information, " +
  ".contact-form-wrapper"
  );

revealElements.forEach((element) => {

```
element.classList.add("reveal");
```

});

/**

* Respect the user's reduced-motion preference.
  */
  const prefersReducedMotion =
  window.matchMedia(
  "(prefers-reduced-motion: reduce)"
  ).matches;

/**

* IntersectionObserver is used when available.
  */
  if (
  "IntersectionObserver" in window &&
  !prefersReducedMotion
  ) {

  const revealObserver =
  new IntersectionObserver(
  (entries, observer) => {

  ```
           entries.forEach((entry) => {

               if (!entry.isIntersecting) {
                   return;
               }

               entry.target.classList.add(
                   "visible"
               );

               observer.unobserve(
                   entry.target
               );

           });

       },
       {
           threshold: 0.12,
           rootMargin: "0px 0px -40px 0px"
       }
   );
  ```

  revealElements.forEach((element) => {

  ```
   revealObserver.observe(element);
  ```

  });

} else {

```
/*
 * If reduced motion is enabled or IntersectionObserver
 * is unavailable, display the content immediately.
 */
revealElements.forEach((element) => {

    element.classList.add(
        "visible"
    );

});
```

}

/* =========================================================
12. RESEARCH CARD STAGGER
========================================================= */

const researchCards =
document.querySelectorAll(
".research-card"
);

researchCards.forEach(
(card, index) => {

```
    card.style.transitionDelay =
        `${index * 80}ms`;

}
```

);

/* =========================================================
13. NEWS CARD STAGGER
========================================================= */

const newsCards =
document.querySelectorAll(
".news-card"
);

newsCards.forEach(
(card, index) => {

```
    card.style.transitionDelay =
        `${index * 80}ms`;

}
```

);

/* =========================================================
14. DYNAMIC COPYRIGHT YEAR
========================================================= */

if (currentYear) {

```
currentYear.textContent =
    new Date().getFullYear();
```

}

/* =========================================================
15. CONTACT FORM
========================================================= */

/**

* The current contact form uses a mailto action because
* GitHub Pages is a static hosting platform and does not
* provide a server-side form handler.
*
* This validation improves the visitor experience before
* the user's email application opens.
  */

if (contactForm) {

```
contactForm.addEventListener(
    "submit",
    (event) => {

        const name =
            document.getElementById("name");

        const email =
            document.getElementById("email");

        const message =
            document.getElementById("message");


        if (
            !name ||
            !email ||
            !message
        ) {
            return;
        }


        const nameValue =
            name.value.trim();

        const emailValue =
            email.value.trim();

        const messageValue =
            message.value.trim();


        /*
         * Basic validation.
         */
        if (
            !nameValue ||
            !emailValue ||
            !messageValue
        ) {

            event.preventDefault();

            alert(
                "Please complete all required fields."
            );

            return;

        }


        /*
         * Browser-level email validation is normally
         * sufficient, but this additional check catches
         * obvious malformed addresses.
         */
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
            !emailPattern.test(
                emailValue
            )
        ) {

            event.preventDefault();

            alert(
                "Please enter a valid email address."
            );

            email.focus();

            return;

        }

    }
);
```

}

/* =========================================================
16. RESPONSIVE MENU SAFETY
========================================================= */

/**

* If the browser is resized from mobile to desktop,
* ensure that the mobile menu state is cleared.
  */
  const mobileBreakpoint =
  window.matchMedia(
  "(min-width: 901px)"
  );

function handleDesktopResize() {

```
if (mobileBreakpoint.matches) {

    closeMobileNavigation();

}
```

}

mobileBreakpoint.addEventListener(
"change",
handleDesktopResize
);

/* =========================================================
17. INITIAL STATE
========================================================= */

updateHeader();
updateBackToTop();
updateActiveNavigation();

/* =========================================================
18. PAGE VISIBILITY
========================================================= */

/**

* When a visitor returns to the tab, refresh the
* navigation state.
  */
  document.addEventListener(
  "visibilitychange",
  () => {

  ```
   if (
       document.visibilityState === "visible"
   ) {

       updateHeader();
       updateBackToTop();
       updateActiveNavigation();

   }
  ```

  }
  );

/* =========================================================
19. IMAGE ERROR HANDLING
========================================================= */

/**

* Prevent broken images from creating distracting
* empty image areas.
  */
  const images =
  document.querySelectorAll(
  "img"
  );

images.forEach((image) => {

```
image.addEventListener(
    "error",
    () => {

        image.classList.add(
            "image-load-error"
        );

    }
);
```

});

/* =========================================================
END OF GREEN INFINITY JAVASCRIPT
========================================================= */

