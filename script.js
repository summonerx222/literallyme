const works = [
  {
    title: "оранжевый орешек",
    note: "моя любимая работа. автопортрет, личная тема.",
    src: "./nut-shell.jpg",
    featured: true,
  },
  {
    title: "лаборатория / сцена",
    note: "Альзур и Марн - учитель и ученик, ксенохимики.",
    src: "./lab-walk.jpg",
    featured: false,
  },
  {
    title: "Енох",
    note: "портрет, холодная палитра, витраж. тяжесть.",
    src: "./portrait-blue.jpg",
    featured: false,
  },
  {
    title: "вампир - охотник на вампиров",
    note: "много деталей, силуэт, Йен.",
    src: "./moon-figure.jpg",
    featured: true,
  },
  {
    title: "самостоятельная работа",
    note: "мой любимый Марн. учится и старается.",
    src: "./working-at-desk.jpg",
    featured: true,
  },
  {
    title: "тяжесть тела",
    note: "символизм, че поделать.",
    src: "./meat-circle.jpg",
    featured: false,
  },
  {
    title: "judgement",
    note: "доктор Пурнелл - работа для Cry of Fear zine.",
    src: "./judgement.jpg",
    featured: false,
  },
  {
    title: "Марн с тростью",
    note: "образ, дизайн и отсылка на геншин импакт.",
    src: "./cane-figure.jpg",
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
