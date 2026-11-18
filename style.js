const WORKS = [
  {
    title: 'CoderGirl Magazine Logo',
    category: 'design',
    sortKey: 202611,
    date: 'November 2026',
    medium: 'Brand & Editorial Identity',
    cover: 'codergirl.jpeg',
    variants: [{ label: 'Primary Mark', src: 'codergirl.jpeg' }],
    description:
      'Custom logotype designed for friend Nanada’s publication, CoderGirl Magazine, balancing technical precision with expressive editorial personality across print and digital covers.'
  },
  {
    title: 'Soma (Blue & Red Editions)',
    category: 'design',
    sortKey: 202611,
    date: 'November 2026',
    medium: 'Single Cover Art · 2 Colorways',
    cover: 'somablue.jpeg',
    variants: [
      { label: 'Blue Edition', src: 'somablue.jpeg' },
      { label: 'Red Edition', src: 'somared.jpeg' }
    ],
    description:
      'Dual-edition cover art created for River’s single, contrasting cobalt blue and crimson variants to reflect the track’s sonic duality.'
  },
  {
    title: 'Orange Sunshine',
    category: 'design',
    sortKey: 202610,
    date: 'October – November 2026',
    medium: 'Album Cover System · 5 Color Variants',
    cover: 'osun.orange.jpeg',
    variants: [
      { label: 'Orange', src: 'osun.orange.jpeg' },
      { label: 'Blue', src: 'osun.blue.jpeg' },
      { label: 'Magenta', src: 'osun.magenta.jpeg' },
      { label: 'Pink', src: 'osun.pink.jpeg' },
      { label: 'Purple', src: 'osun.pruple.jpeg' }
    ],
    description:
      'Five-variant album cover series designed for River’s upcoming album. Each edition—Orange, Blue, Magenta, Pink, and Purple—shifts the chromatic mood while maintaining a cohesive visual identity.'
  },
  {
    title: 'inurdreams',
    category: 'design',
    sortKey: 202610,
    date: 'October 2026',
    medium: 'EP Cover Art · Music Packaging',
    cover: 'inurdreams.png',
    variants: [{ label: 'EP Cover', src: 'inurdreams.png' }],
    description:
      'Cover artwork designed for River’s upcoming EP, translating nocturnal textures and dreamlike atmospheres into a unified single-frame sleeve.'
  },
  {
    title: 'Internet Map',
    category: 'artwork',
    sortKey: 202609,
    date: 'September 2026',
    medium: 'Digital Illustration · Speculative Cartography',
    cover: 'internetmap.jpg',
    variants: [{ label: 'Full Map', src: 'internetmap.jpg' }],
    description:
      'Speculative digital illustration mapping the architecture of the internet—translating networks, servers, and online communities into a visual cartography.'
  },
  {
    title: 'Straight Off the Street',
    category: 'design',
    sortKey: 202604,
    date: 'April 2026',
    medium: 'Digital Brand Identity & Video Logo',
    cover: 'sots.jpeg',
    variants: [{ label: 'Digital Logo', src: 'sots.jpeg' }],
    description:
      'Bold digital logomark created for a friend’s street-interview video series, built for crisp legibility across mobile video openers and social channels.'
  },
  {
    title: 'Tonic Brand System',
    category: 'design',
    sortKey: 202602,
    date: 'February – April 2026',
    medium: 'Speculative Brand Identity & Print Collateral',
    cover: 'toniclogo.jpeg',
    variants: [
      { label: 'Primary Logo', src: 'toniclogo.jpeg' },
      { label: 'Title Lockup', src: 'tonictitle.jpeg.jpeg' },
      { label: 'Print 01', src: 'tonicprint.1.jpg' },
      { label: 'Print 02', src: 'tonicprint.2.jpg' },
      { label: 'Thank You Card', src: 'tonicthankyou.jpeg' }
    ],
    description:
      'Complete speculative brand design project created for a Graphic Design and Marketing elective, spanning the core logomark, typographic title lockup, editorial print pieces, and branded thank-you collateral.'
  },
  {
    title: 'Rebirth / Rediscovery',
    category: 'design',
    sortKey: 202509,
    date: 'September 2025',
    medium: 'Graphic Design Poster',
    cover: 'rebirthrediscovery.jpeg',
    variants: [{ label: 'Poster', src: 'rebirthrediscovery.jpeg' }],
    description:
      'Graphic design poster diagramming Conrad’s personal creative process—visualizing cycles of experimentation, deconstruction, and artistic renewal.'
  },
  {
    title: 'Self-Portrait in Circles',
    category: 'artwork',
    sortKey: 202509,
    date: 'September 2025',
    medium: 'Digital Illustration',
    cover: 'selfportrait.jpeg',
    variants: [{ label: 'Digital Portrait', src: 'selfportrait.jpeg' }],
    description:
      'Digital self-portrait built from concentric and overlapping circular forms, balancing geometric structure with expressive portraiture.'
  },
  {
    title: 'Cathedral',
    category: 'artwork',
    sortKey: 202506,
    date: 'June – August 2025',
    medium: 'Illustration · Architectural Study',
    cover: 'cathedral.jpeg',
    variants: [{ label: 'Full Work', src: 'cathedral.jpeg' }],
    description:
      'Inspired by the Cologne Cathedral in Germany and Notre-Dame Cathedral in Paris, reimagining monumental Gothic stonework and vertical tracery in a lush, luminous palette.'
  },
  {
    title: 'Got a Light',
    category: 'artwork',
    sortKey: 202412,
    date: 'December 2024',
    medium: 'Illustration · Art Historical Reinterpretation',
    cover: 'gotalight.JPG',
    variants: [{ label: 'Illustration', src: 'gotalight.JPG' }],
    description:
      'Contemporary reinterpretation of Michelangelo’s Renaissance painting of Adam reaching toward God, reframed in an intimate modern visual narrative.'
  },
  {
    title: 'Urban Scars',
    category: 'artwork',
    sortKey: 202411,
    date: 'November 2024',
    medium: 'Mixed-Media Collage Illustration',
    cover: 'urbanscars.JPG',
    variants: [{ label: 'Collage', src: 'urbanscars.JPG' }],
    description:
      'Mixed-media collage illustration examining climate change and environmental impact—layering fragmented architectural forms and natural textures.'
  },
  {
    title: 'C.R.E.A.M. Vinyl Cover',
    category: 'design',
    sortKey: 202407,
    date: 'July 2024',
    medium: 'Album Packaging · MICA Pre-College',
    cover: 'cream.jpg',
    variants: [{ label: 'Sleeve Design', src: 'cream.jpg' }],
    description:
      'Speculative vinyl album sleeve designed during the MICA Graphic Design Pre-College intensive, exploring bold typographic hierarchy and tactile record packaging.'
  },
  {
    title: 'Escapism',
    category: 'artwork',
    sortKey: 202407,
    date: 'July 2024',
    medium: 'Illustration · MICA Pre-College',
    cover: 'escapism.JPG',
    variants: [{ label: 'Illustration', src: 'escapism.JPG' }],
    description:
      'Illustration created during the MICA Illustration Pre-College program following the graphic design intensive, exploring atmosphere, interiority, and imaginative escape.'
  },
  {
    title: 'Monuments of Worship',
    category: 'artwork',
    sortKey: 202405,
    date: 'May – August 2024',
    medium: 'Pen & Ink on 30 × 30 in Canvas',
    cover: 'monumentsofworship.JPG',
    variants: [{ label: '30 × 30 in Canvas', src: 'monumentsofworship.JPG' }],
    description:
      'All pen-and-ink illustration on a 30 × 30 in canvas uniting sacred architectural landmarks from religions around the world around a central circle—symbolizing the simple, shared values at the core of all faiths.'
  }
];

function createFlourishSVG(mode) {
  const width = mode === 'divider' ? 280 : 640;
  const height = mode === 'divider' ? 34 : 56;
  const cy = height / 2;
  const dots = [];

  function addDot(x, y, size = 2.6) {
    const gx = Math.round(x / 3) * 3;
    const gy = Math.round(y / 3) * 3;
    dots.push(`<rect x="${gx}" y="${gy}" width="${size}" height="${size}" />`);
  }

  for (const dir of [-1, 1]) {
    const span = mode === 'divider' ? 115 : 275;
    const step = mode === 'divider' ? 0.035 : 0.018;

    for (let t = 0.04; t <= 1; t += step) {
      const x = width / 2 + dir * t * span;
      const wave = Math.sin(t * Math.PI * 3) * (mode === 'divider' ? 6 : 11);
      addDot(x, cy + wave, 2.5);
      if (t > 0.25 && t < 0.85) {
        addDot(x, cy - wave * 0.65, 2);
      }
    }

    const curlCenterX = width / 2 + dir * (span - 16);
    for (let a = 0; a < Math.PI * 2.2; a += 0.28) {
      const r = (mode === 'divider' ? 11 : 18) * (1 - a / (Math.PI * 2.5));
      addDot(curlCenterX + dir * Math.cos(a) * r, cy + Math.sin(a) * r, 2.2);
    }
  }

  addDot(width / 2 - 1.5, cy - 1.5, 4);

  const gradId = `fg-${Math.random().toString(36).slice(2, 8)}`;
  return `
    <svg class="flourish-svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
      <defs>
        <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#12b8a6" />
          <stop offset="50%" stop-color="#2264d8" />
          <stop offset="100%" stop-color="#12b8a6" />
        </linearGradient>
      </defs>
      <g fill="url(#${gradId})">
        ${dots.join('')}
      </g>
    </svg>
  `;
}

document.querySelectorAll('[data-flourish]').forEach((el) => {
  el.innerHTML = createFlourishSVG(el.dataset.flourish);
});

const galleryGrid = document.getElementById('gallery-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortToggle = document.getElementById('sort-toggle');
const modal = document.getElementById('work-modal');
const modalImg = document.getElementById('modal-img');
const modalVariants = document.getElementById('modal-variants');
const modalCategory = document.getElementById('modal-category');
const modalDate = document.getElementById('modal-date');
const modalTitle = document.getElementById('modal-title');
const modalMedium = document.getElementById('modal-medium');
const modalDesc = document.getElementById('modal-desc');

let currentFilter = 'all';
let newestFirst = true;
let displayedWorks = [];
let activeWorkIndex = 0;

function renderGallery() {
  const base =
    currentFilter === 'all'
      ? [...WORKS]
      : WORKS.filter((item) => item.category === currentFilter);

  displayedWorks = base.sort((a, b) =>
    newestFirst ? b.sortKey - a.sortKey : a.sortKey - b.sortKey
  );

  galleryGrid.innerHTML = '';

  displayedWorks.forEach((work, index) => {
    const card = document.createElement('article');
    card.className = 'work-card';
    card.tabIndex = 0;

    const variantBadge =
      work.variants.length > 1
        ? `<span class="variant-pill">${work.variants.length} Views</span>`
        : '';

    card.innerHTML = `
      <div class="work-thumb">
        <img src="${work.cover}" alt="${work.title}" loading="lazy" />
        ${variantBadge}
      </div>
      <div class="work-info">
        <h3 class="work-title">${work.title}</h3>
        <span class="work-meta-line">${work.category} &middot; ${work.date}</span>
      </div>
    `;

    card.addEventListener('click', () => openModal(index));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(index);
      }
    });

    galleryGrid.appendChild(card);
  });
}

function openModal(index) {
  activeWorkIndex = index;
  const work = displayedWorks[activeWorkIndex];
  if (!work) return;

  modalCategory.textContent = work.category;
  modalDate.textContent = work.date;
  modalTitle.textContent = work.title;
  modalMedium.textContent = work.medium;
  modalDesc.textContent = work.description;

  modalImg.src = work.variants[0].src;
  modalImg.alt = work.title;

  modalVariants.innerHTML = '';
  if (work.variants.length > 1) {
    work.variants.forEach((variant, vIdx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `variant-btn ${vIdx === 0 ? 'active' : ''}`;
      btn.textContent = variant.label;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.variant-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        modalImg.src = variant.src;
        modalImg.alt = `${work.title} — ${variant.label}`;
      });
      modalVariants.appendChild(btn);
    });
  }

  switchModalTab('details');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function switchModalTab(tabName) {
  document.querySelectorAll('.modal-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.tab === tabName);
  });
  document.getElementById('tab-details').classList.toggle('active', tabName === 'details');
  document.getElementById('tab-about').classList.toggle('active', tabName === 'about');
}

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderGallery();
  });
});

sortToggle.addEventListener('click', () => {
  newestFirst = !newestFirst;
  sortToggle.innerHTML = newestFirst
    ? 'Order: Nov 2026 &rarr; May 2024 &varr;'
    : 'Order: May 2024 &rarr; Nov 2026 &varr;';
  renderGallery();
});

document.querySelectorAll('[data-close-modal]').forEach((el) => {
  el.addEventListener('click', closeModal);
});

document.querySelectorAll('.modal-tab').forEach((tab) => {
  tab.addEventListener('click', () => switchModalTab(tab.dataset.tab));
});

document.getElementById('prev-work').addEventListener('click', () => {
  const prevIdx = (activeWorkIndex - 1 + displayedWorks.length) % displayedWorks.length;
  openModal(prevIdx);
});

document.getElementById('next-work').addEventListener('click', () => {
  const nextIdx = (activeWorkIndex + 1) % displayedWorks.length;
  openModal(nextIdx);
});

document.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') {
    const prevIdx = (activeWorkIndex - 1 + displayedWorks.length) % displayedWorks.length;
    openModal(prevIdx);
  }
  if (e.key === 'ArrowRight') {
    const nextIdx = (activeWorkIndex + 1) % displayedWorks.length;
    openModal(nextIdx);
  }
});

renderGallery();