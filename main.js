const siteContent = {
  brandMark: "M",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Performances", href: "#performances" },
    { label: "Gallery", href: "#gallery" },
    { label: "Booking", href: "#booking" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    label: "Live Musician • MEYSAM HASAN • Guitarist",
    title: "Bringing Live Energy to Every Stage",
    copy:
      "Creating immersive live guitar performances shaped by atmosphere, emotion, and unforgettable stage presence. Available for events, venues, cultural nights, studio sessions, and refined private bookings.",
    primaryAction: {
      label: "Book a Performance",
      href: "#booking",
    },
    secondaryAction: {
      label: "Watch Live Clips",
      href: "#gallery",
    },
  },
  about: {
    label: "Artist Story",
    title: "About the Artist",
    image: {
      src: "./assets/images/artist-about-blue-stage.jpg",
      alt: "Meysam performing live on stage under deep blue lighting",
    },
    paragraphs: [
      "For every audience, Meysam builds a live set that feels cinematic, personal, and fully in tune with the room. From intimate private evenings to larger cultural nights and live venue appearances, the focus remains on mood, presence, and connection.",
      "As the lead guitarist for Ehle Rock, a Calgary-based South Asian rock band, Meysam brings a dynamic performance style catering to the specific requests of the audience. Rooted in both electric and acoustic performance, every arrangement is designed to elevate the moment, bring warmth to the space, and leave a lasting emotional impression long after the final song.",
    ],
    stats: [
      { value: "8+", label: "Years Exp" },
      { value: "30+", label: "Live Sessions" },
    ],
  },
  performances: {
    label: "Capturing the Energy",
    title: "Live Performances",
    archiveLabel: "View Videos",
    archiveHref: "#gallery",
    items: [
      {
        title: "Farhan Saeed World Tour",
        description:
          "Opened for Farhan Saeed during his world tour, delivering a live set shaped by cinematic guitar textures, strong stage presence, and emotional connection.",
        image: "./assets/images/performance-midnight-blue-wide-c.jpg",
        position: "center center",
        glow: "rgba(68, 120, 255, 0.22)",
      },
      {
        title: "Wedding Event Performances",
        description:
          "Performed at a range of wedding events, from the bride's walk-in to live music throughout the celebration, creating a polished and memorable atmosphere from start to finish.",
        image: "./assets/images/performance-wedding-new-wide-a.jpg",
        position: "center center",
        glow: "rgba(180, 122, 92, 0.18)",
      },
      {
        title: "Campus and Community Stages",
        description:
          "Featured performer at multiple university and community events, bringing an engaging live presence and a versatile set tailored to each audience.",
        image: "./assets/images/performance-electric-vocal-crop-c.jpg",
        position: "center 52%",
        glow: "rgba(129, 60, 181, 0.2)",
      },
    ],
  },
  gallery: {
    title: "Gallery / Live Performance",
    items: [
      {
        src: "./assets/images/gallery-1.png",
        alt: "Live guitar performance detail",
        videoUrl: "https://www.youtube.com/shorts/9AllhY-UC2k",
        className: "portrait",
        position: "center center",
        glow: "rgba(71, 128, 255, 0.26)",
      },
      {
        src: "./assets/images/gallery-2.png",
        alt: "Live vocal performance with green stage lighting",
        videoUrl: "https://www.youtube.com/shorts/2fi9kawp5oo",
        className: "small",
        position: "center center",
        glow: "rgba(108, 71, 255, 0.18)",
      },
      {
        src: "./assets/images/gallery-3.jpeg",
        alt: "Solo live guitar performance on stage",
        videoUrl: "https://www.youtube.com/shorts/B67xYwVMQCI",
        className: "tall",
        position: "center center",
        glow: "rgba(42, 99, 217, 0.18)",
      },
      {
        src: "./assets/images/artist-stage-primary.png",
        alt: "Performance portrait with guitar",
        comingSoon: true,
        className: "wide",
        position: "center 14%",
        glow: "rgba(88, 138, 255, 0.22)",
      },
    ],
  },
  booking: {
    label: "Inquiries",
    title: "Book a Performance",
    copy:
      "Available for events, studio sessions, and high-end private acoustic performances. Share your details below and the request will arrive directly in the inbox for follow-up.",
    fields: [
      {
        id: "full-name",
        name: "fullName",
        label: "Full Name",
        type: "text",
        placeholder: "Your name",
        autocomplete: "name",
        required: true,
      },
      {
        id: "email-address",
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "you@example.com",
        autocomplete: "email",
        required: true,
      },
      {
        id: "event-type",
        name: "eventType",
        label: "Event Type",
        type: "select",
        placeholderOption: "Select an event type",
        required: true,
        options: [
          "Live Performance",
          "Private Event",
          "Studio Session",
          "Wedding / Cultural Night",
          "Venue Booking",
        ],
      },
      {
        id: "booking-date",
        name: "date",
        label: "Date",
        type: "date",
        required: true,
      },
      {
        id: "booking-message",
        name: "message",
        label: "Message",
        type: "textarea",
        placeholder: "Tell me about your event, venue, or the atmosphere you want to create.",
        fullWidth: true,
        required: true,
      },
    ],
    submitLabel: "Submit Booking Request",
  },
  footer: {
    mark: "M",
    title: "Live Musician & Guitar Performer Based in Calgary.",
    copy: "Elevating atmosphere through unforgettable live sound.",
    socialLinks: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/meysam.covers/",
        icon: "instagram",
      },
      {
        label: "YouTube",
        href: "https://www.youtube.com/channel/UC2aaBHSsFow0-FJNXFUhESA",
        icon: "youtube",
      },
      {
        label: "Email",
        href: "mailto:mamhasan2004@gmail.com",
        icon: "mail",
      },
    ],
    copyright: "© 2026 All rights reserved.",
  },
};

const bookingRecipientEmail = "mamhasan2004@gmail.com";
const bookingEndpoint = `https://formsubmit.co/ajax/${bookingRecipientEmail}`;
const bookingEmailSubject = "New Meysam booking request";

const iconMap = {
  instagram: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75a4 4 0 0 0-4 4v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4Zm8.88 1.5a1.12 1.12 0 1 1 0 2.25 1.12 1.12 0 0 1 0-2.25ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.75A3.25 3.25 0 1 0 12 15.25 3.25 3.25 0 0 0 12 8.75Z"/>
    </svg>`,
  youtube: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.58 7.19a2.97 2.97 0 0 0-2.09-2.1C17.65 4.6 12 4.6 12 4.6s-5.65 0-7.49.49a2.97 2.97 0 0 0-2.09 2.1C2 9.03 2 12 2 12s0 2.97.42 4.81a2.97 2.97 0 0 0 2.09 2.1c1.84.49 7.49.49 7.49.49s5.65 0 7.49-.49a2.97 2.97 0 0 0 2.09-2.1C22 14.97 22 12 22 12s0-2.97-.42-4.81ZM10.2 15.1V8.9L15.65 12Z"/>
    </svg>`,
  mail: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 5.5h18A1.5 1.5 0 0 1 22.5 7v10A1.5 1.5 0 0 1 21 18.5H3A1.5 1.5 0 0 1 1.5 17V7A1.5 1.5 0 0 1 3 5.5Zm0 1.75v.22L12 13.1l9-5.63v-.22Zm18 9.5V9.53l-8.54 5.34a.88.88 0 0 1-.92 0L3 9.53v7.22Z"/>
    </svg>`,
};

const renderNav = () => `
  <header class="floating-nav">
    <nav class="nav-pill" aria-label="Primary navigation">
      <a class="nav-brand" href="#home" aria-label="Go to home section">${siteContent.brandMark}</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-navigation" aria-label="Open menu">
        <span class="nav-toggle-line"></span>
      </button>
      <ul class="nav-links" id="mobile-navigation">
        ${siteContent.navLinks
          .map(
            ({ label, href }) => `
              <li><a class="nav-link" href="${href}">${label}</a></li>
            `,
          )
          .join("")}
      </ul>
    </nav>
  </header>
`;

const renderHero = () => `
  <section class="section hero" id="home">
    <div class="hero-inner reveal">
      <p class="section-label hero-label">${siteContent.hero.label}</p>
      <h1 class="display-heading hero-title">${siteContent.hero.title}</h1>
      <p class="hero-copy">${siteContent.hero.copy}</p>
      <div class="hero-actions">
        <a class="button button-primary" href="${siteContent.hero.primaryAction.href}">${siteContent.hero.primaryAction.label}</a>
        <a class="button button-secondary" href="${siteContent.hero.secondaryAction.href}">${siteContent.hero.secondaryAction.label}</a>
      </div>
      <div class="scroll-indicator">Scroll</div>
    </div>
  </section>
`;

const renderAbout = () => `
  <section class="section dark-panel reveal" id="about">
    <div class="section-shell about-grid">
      <figure class="image-card about-visual">
        <img src="${siteContent.about.image.src}" alt="${siteContent.about.image.alt}" />
      </figure>
      <div class="about-content">
        <p class="section-label">${siteContent.about.label}</p>
        <h2 class="display-heading">${siteContent.about.title}</h2>
        <div class="about-copy">
          ${siteContent.about.paragraphs
            .map((paragraph) => `<p class="body-copy">${paragraph}</p>`)
            .join("")}
        </div>
        <div class="stats-grid">
          ${siteContent.about.stats
            .map(
              (stat) => `
                <article class="stat-card">
                  <span class="stat-number">${stat.value}</span>
                  <span class="stat-label">${stat.label}</span>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>
`;

const renderPerformances = () => `
  <section class="section reveal" id="performances">
    <div class="section-shell">
      <div class="section-heading-row">
        <div>
          <p class="section-label">${siteContent.performances.label}</p>
          <h2 class="display-heading">
            <a class="section-title-link" href="${siteContent.performances.archiveHref}">${siteContent.performances.title}</a>
          </h2>
        </div>
        <a class="archive-link" href="${siteContent.performances.archiveHref}">${siteContent.performances.archiveLabel}</a>
      </div>
      <div class="performance-grid">
        ${siteContent.performances.items
          .map(
            (item) => `
              <article class="performance-card">
                <div class="performance-card-visual ${item.visualClass ?? ""}" style="--image-position:${item.position}; --card-glow:${item.glow}; --image-fit:${item.fit ?? "cover"}; --visual-image:url('${item.image}');">
                  <img src="${item.image}" alt="${item.title}" />
                </div>
                <div class="performance-card-body">
                  <h3 class="performance-title">${item.title}</h3>
                  <p class="performance-copy">${item.description}</p>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </div>
  </section>
`;

const renderGallery = () => `
  <section class="section dark-panel reveal" id="gallery">
    <div class="section-shell">
      <header class="gallery-header">
        <h2 class="display-heading">${siteContent.gallery.title}</h2>
      </header>
      <div class="gallery-grid">
        ${siteContent.gallery.items
          .map(
            (item) => `
              ${
                item.videoUrl
                  ? `<a class="gallery-item ${item.className}" href="${item.videoUrl}" aria-label="Watch ${item.alt} on YouTube" style="--image-position:${item.position}; --gallery-glow:${item.glow};">
                      <img src="${item.src}" alt="${item.alt}" loading="lazy" />
                      <span class="gallery-play-button" aria-hidden="true"></span>
                    </a>`
                  : `<figure class="gallery-item ${item.className} ${item.comingSoon ? "coming-soon" : ""}" style="--image-position:${item.position}; --gallery-glow:${item.glow};">
                      <img src="${item.src}" alt="${item.alt}" loading="lazy" />
                      ${item.comingSoon ? `<figcaption class="coming-soon-label">Coming Soon</figcaption>` : ""}
                    </figure>`
              }
            `,
          )
          .join("")}
      </div>
    </div>
  </section>
`;

const renderFieldAttributes = (field) =>
  [
    field.required ? "required" : "",
    field.autocomplete ? `autocomplete="${field.autocomplete}"` : "",
  ]
    .filter(Boolean)
    .join(" ");

const renderField = (field) => {
  if (field.type === "select") {
    return `
      <div class="field">
        <label for="${field.id}">${field.label}</label>
        <select id="${field.id}" name="${field.name}" ${renderFieldAttributes(field)}>
          ${
            field.placeholderOption
              ? `<option value="" selected disabled>${field.placeholderOption}</option>`
              : ""
          }
          ${field.options.map((option) => `<option value="${option}">${option}</option>`).join("")}
        </select>
      </div>
    `;
  }

  if (field.type === "textarea") {
    return `
      <div class="field ${field.fullWidth ? "full-width" : ""}">
        <label for="${field.id}">${field.label}</label>
        <textarea id="${field.id}" name="${field.name}" placeholder="${field.placeholder}" ${renderFieldAttributes(field)}></textarea>
      </div>
    `;
  }

  return `
    <div class="field ${field.fullWidth ? "full-width" : ""}">
      <label for="${field.id}">${field.label}</label>
      <input id="${field.id}" name="${field.name}" type="${field.type}" placeholder="${field.placeholder ?? ""}" ${renderFieldAttributes(field)} />
    </div>
  `;
};

const renderBooking = () => `
  <section class="section reveal" id="booking">
    <div class="booking-shell">
      <p class="section-label">${siteContent.booking.label}</p>
      <h2 class="display-heading">${siteContent.booking.title}</h2>
      <p class="booking-copy">${siteContent.booking.copy}</p>
      <form class="booking-card" id="booking-form" action="${bookingEndpoint}" method="POST">
        <input type="hidden" name="_subject" value="${bookingEmailSubject}" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_url" value="" />
        <div class="form-honeypot" aria-hidden="true">
          <label for="booking-company">Company</label>
          <input id="booking-company" type="text" name="_honey" tabindex="-1" autocomplete="off" />
        </div>
        <div class="form-grid">
          ${siteContent.booking.fields.map(renderField).join("")}
        </div>
        <div class="submit-row">
          <button class="button button-primary" type="submit">${siteContent.booking.submitLabel}</button>
          <p class="form-status" id="form-status" aria-live="polite"></p>
        </div>
      </form>
    </div>
  </section>
`;

const renderFooter = () => `
  <footer class="footer reveal" id="contact">
    <div class="section-shell">
      <div class="footer-mark">${siteContent.footer.mark}</div>
      <h2 class="footer-title">${siteContent.footer.title}</h2>
      <p class="footer-copy">${siteContent.footer.copy}</p>
      <div class="social-row">
        ${siteContent.footer.socialLinks
          .map(
            (link) => `
              <a class="social-link" href="${link.href}" aria-label="${link.label}">
                ${iconMap[link.icon]}
              </a>
            `,
          )
          .join("")}
      </div>
      <p class="copyright">${siteContent.footer.copyright}</p>
    </div>
  </footer>
`;

const renderPage = () => `
  <div class="page-shell">
    ${renderNav()}
    <main>
      ${renderHero()}
      ${renderAbout()}
      ${renderPerformances()}
      ${renderGallery()}
      ${renderBooking()}
    </main>
    ${renderFooter()}
  </div>
`;

const app = document.querySelector("#app");
app.innerHTML = renderPage();

const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");
const bookingForm = document.querySelector("#booking-form");
const formStatus = document.querySelector("#form-status");
const bookingSubmitButton = bookingForm?.querySelector('button[type="submit"]');
const bookingDateInput = document.querySelector("#booking-date");
const bookingPageUrlField = bookingForm?.querySelector('input[name="_url"]');

const closeMenu = () => {
  body.classList.remove("menu-open");
  navToggle?.setAttribute("aria-expanded", "false");
};

navToggle?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("menu-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    closeMenu();
  }
});

if (bookingDateInput) {
  const now = new Date();
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60_000)
    .toISOString()
    .split("T")[0];
  bookingDateInput.min = localDate;
}

if (bookingPageUrlField) {
  bookingPageUrlField.value = window.location.href;
}

const setFormStatus = (message, state = "") => {
  if (!formStatus) {
    return;
  }

  formStatus.textContent = message;
  formStatus.className = "form-status";

  if (state) {
    formStatus.classList.add(`is-${state}`);
  }
};

bookingForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!bookingForm.reportValidity()) {
    return;
  }

  const formData = new FormData(bookingForm);

  formData.set("_url", window.location.href);

  if (bookingPageUrlField) {
    bookingPageUrlField.value = window.location.href;
  }

  bookingSubmitButton?.setAttribute("disabled", "true");
  bookingForm.setAttribute("aria-busy", "true");
  setFormStatus("Sending your booking request...", "sending");

  try {
    const response = await fetch(bookingEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    const payload = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(payload?.message || "Unable to send your booking request right now.");
    }

    setFormStatus("Thanks. Your booking request was sent successfully, and a reply can come directly by email.", "success");
    bookingForm.reset();

    if (bookingPageUrlField) {
      bookingPageUrlField.value = window.location.href;
    }
  } catch (error) {
    setFormStatus(error instanceof Error ? error.message : "Unable to send your booking request right now.", "error");
  } finally {
    bookingSubmitButton?.removeAttribute("disabled");
    bookingForm.removeAttribute("aria-busy");
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
  },
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});
