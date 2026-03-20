const works = [
  {
    title: "в оранжевом орешке",
    note: "Одна из центральных работ страницы.",
    src: "./images/nut-shell.jpg",
    featured: true,
  },
  {
    title: "лаборатория / сцена",
    note: "Линейная работа и повествовательная сцена.",
    src: "./images/lab-walk.jpg",
    featured: false,
  },
  {
    title: "портрет с синим витражом",
    note: "Портретный акцент и холодная палитра.",
    src: "./images/portrait-blue.jpg",
    featured: false,
  },
  {
    title: "фигура на фоне луны",
    note: "Выделенная работа с сильным силуэтом.",
    src: "./images/moon-figure.jpg",
    featured: true,
  },
  {
    title: "персонаж за столом",
    note: "Выделенная работа с лабораторной атмосферой.",
    src: "./images/working-at-desk.jpg",
    featured: true,
  },
  {
    title: "мясной круг",
    note: "Символическая и мрачная композиция.",
    src: "./images/meat-circle.jpg",
    featured: false,
  },
  {
    title: "judgement",
    note: "Графическая работа с жёстким знаком и символикой.",
    src: "./images/judgement.jpg",
    featured: false,
  },
  {
    title: "фигура с тростью",
    note: "Персонажный дизайн и костюмный образ.",
    src: "./images/cane-figure.jpg",
    featured: false,
  },
];

const galleryGrid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

function renderGallery() {
  works.forEach((work) => {
    const card = document.createElement("article");
    card.className = `gallery-card ${work.featured ? "featured" : ""}`;

    card.innerHTML = `
      <img src="${work.src}" alt="${work.title}" loading="lazy" />
      <div class="overlay">
        <h3 class="work-title">${work.title}</h3>
        <p class="work-note">${work.note}</p>
      </div>
    `;

    card.addEventListener("click", () => openLightbox(work));
    galleryGrid.appendChild(card);
  });
}

function openLightbox(work) {
  lightboxImage.src = work.src;
  lightboxImage.alt = work.title;
  lightboxCaption.textContent = work.title;
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxImage.alt = "";
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("active")) {
    closeLightbox();
  }
});

renderGallery();