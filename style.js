const WORKS = [
  {
    title: 'CoderGirl Magazine Logo',
    category: 'Design',
    sortKey: 202611,
    date: 'November 2026',
    medium: 'Logo & Editorial Design',
    cover: 'codergirl.jpeg',
    variants: [{ label: 'Logo', src: 'codergirl.jpeg' }],
    description:
      'I designed this logo in November 2026 for my friend Nanada’s magazine, CoderGirl. I wanted the lettering to feel sharp and structured while still having a warm editorial personality for the cover.'
  },
  {
    title: 'Soma (Blue & Red Editions)',
    category: 'Design',
    sortKey: 202611,
    date: 'November 2026',
    medium: 'Single Cover Art · 2 Color Variants',
    cover: 'somablue.jpeg',
    variants: [
      { label: 'Blue', src: 'somablue.jpeg' },
      { label: 'Red', src: 'somared.jpeg' }
    ],
    description:
      'Two color variants—blue and red—that I designed in November 2026 for a single my friend River is working on, playing with two opposite moods for the same cover.'
  },
  {
    title: 'Orange Sunshine',
    category: 'Design',
    sortKey: 202610,
    date: 'October – November 2026',
    medium: 'Album Cover Series · 5 Color Variants',
    cover: 'osun.orange.jpeg',
    variants: [
      { label: 'Orange', src: 'osun.orange.jpeg' },
      { label: 'Blue', src: 'osun.blue.jpeg' },
      { label: 'Magenta', src: 'osun.magenta.jpeg' },
      { label: 'Pink', src: 'osun.pink.jpeg' },
      { label: 'Purple', src: 'osun.pruple.jpeg' }
    ],
    description:
      'A five-color album cover series (orange, blue, magenta, pink, and purple) created in October and November 2026 for another one of River’s upcoming albums.'
  },
  {
    title: 'inurdreams',
    category: 'Design',
    sortKey: 202610,
    date: 'October 2026',
    medium: 'EP Cover Design',
    cover: 'inurdreams.png',
    variants: [{ label: 'EP Cover', src: 'inurdreams.png' }],
    description:
      'Album cover I designed in October 2026 for my friend River’s upcoming EP, matching the hazy, late-night feel of the tracks.'
  },
  {
    title: 'Internet Map',
    category: 'Artwork',
    sortKey: 202609,
    date: 'September 2026',
    medium: 'Digital Illustration',
    cover: 'internetmap.jpg',
    variants: [{ label: 'Full Map', src: 'internetmap.jpg' }],
    description:
      'A digital illustration from September 2026 mapping out a speculative version of the internet—turning invisible networks, pathways, and corners of the web into a physical geography.'
  },
  {
    title: 'Straight Off the Street Logo',
    category: 'Design',
    sortKey: 202604,
    date: 'April 2026',
    medium: 'Digital Logo Design',
    cover: 'sots.jpeg',
    variants: [{ label: 'Logo', src: 'sots.jpeg' }],
    description:
      'A digital logo I designed in April 2026 for a friend’s street-interview video series, made to read clearly on mobile video intros and social posts.'
  },
  {
    title: 'Tonic Brand & Print System',
    category: 'Design',
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
      'A speculative brand design project I built between February and April 2026 for a graphic design and marketing elective, including the primary logo, title lockup, print layouts, and a branded thank-you card.'
  },
  {
    title: 'Rebirth / Rediscovery',
    category: 'Design',
    sortKey: 202509,
    date: 'September 2025',
    medium: 'Graphic Design Poster',
    cover: 'rebirthrediscovery.jpeg',
    variants: [{ label: 'Poster', src: 'rebirthrediscovery.jpeg' }],
    description:
      'A graphic design poster I drew in September 2025 mapping out my own creative process—how ideas break apart, evolve, and come back together.'
  },
  {
    title: 'Self-Portrait in Circles',
    category: 'Artwork',
    sortKey: 202509,
    date: 'September 2025',
    medium: 'Digital Illustration · Portraiture',
    cover: 'selfportrait.jpeg',
    variants: [{ label: 'Portrait', src: 'selfportrait.jpeg' }],
    description:
      'A digital self-portrait I made in September 2025, constructing facial structure, light, and expression out of layered circular shapes.'
  },
  {
    title: 'Cathedral',
    category: 'Artwork',
    sortKey: 202506,
    date: 'June – August 2025',
    medium: 'Architectural Illustration',
    cover: 'cathedral.jpeg',
    variants: [{ label: 'Illustration', src: 'cathedral.jpeg' }],
    description:
      'Inspired by the Cologne Cathedral in Germany and Notre-Dame Cathedral in Paris, I made this piece over summer 2025 to reimagine traditional Gothic stonework and arches in a lush, bright color palette.'
  },
  {
    title: 'Got a Light',
    category: 'Artwork',
    sortKey: 202412,
    date: 'December 2024',
    medium: 'Illustration',
    cover: 'gotalight.JPG',
    variants: [{ label: 'Illustration', src: 'gotalight.JPG' }],
    description:
      'An illustration from December 2024 inspired by the Renaissance painting of Adam reaching toward God, reinterpreted in an everyday contemporary scene.'
  },
  {
    title: 'Urban Scars',
    category: 'Artwork',
    sortKey: 202411,
    date: 'November 2024',
    medium: 'Collage Illustration',
    cover: 'urbanscars.JPG',
    variants: [{ label: 'Collage', src: 'urbanscars.JPG' }],
    description:
      'A collage illustration I made in November 2024 about climate change, piecing together urban fragments and natural textures to show how cities leave lasting marks on the environment.'
  },
  {
    title: 'C.R.E.A.M. Vinyl Cover',
    category: 'Design',
    sortKey: 202407,
    date: 'July 2024',
    medium: 'Speculative Album Cover · MICA Pre-College',
    cover: 'cream.jpg',
    variants: [{ label: 'Vinyl Sleeve', src: 'cream.jpg' }],
    description:
      'A speculative vinyl album cover I designed in July 2024 during the MICA graphic design pre-college program.'
  },
  {
    title: 'Escapism',
    category: 'Artwork',
    sortKey: 202407,
    date: 'July 2024',
    medium: 'Illustration · MICA Pre-College',
    cover: 'escapism.JPG',
    variants: [{ label: 'Illustration', src: 'escapism.JPG' }],
    description:
      'An illustration I made in July 2024 during MICA’s illustration program immediately following my graphic design intensive.'
  },
  {
    title: 'Monuments of Worship',
    category: 'Artwork',
    sortKey: 202405,
    date: 'May – August 2024',
    medium: 'Pen & Ink on 30 × 30 in Canvas',
    cover: 'monumentsofworship.JPG',
    variants: [{ label: '30 × 30 in Canvas', src: 'monumentsofworship.JPG' }],
    description:
      'An all pen-and-ink architectural illustration drawn on a 30 × 30 inch canvas between May and August 2024. I brought together sacred buildings from religions around the world around a simple central circle representing the shared human values at the core of all faiths.'
  }
];

/* Procedural Dotted Baroque Filigree Generator (Solid Cobalt, Medium Blue & Sky Blue) */
function renderFlourish(type) {
  const shadows = [];
  const mainDots = [];
  const highlights = [];

  function dot(x, y, size = 2.6, tone = 'main') {
    const sx = Math.round(x / 3) * 3;
    const sy = Math.round(y / 3) * 3;
    shadows.push(`<rect x="${sx + 2}" y="${sy + 2}" width="${size}" height="${size}" />`);
    if (tone === 'light') {
      highlights.push(`<rect x="${sx}" y="${sy}" width="${size}" height="${size}" />`);
    } else {
      mainDots.push(`<rect x="${sx}" y="${sy}" width="${size}" height="${size}" />`);
    }
  }

  function spiral(cx, cy, maxR, dir, turns = 2.2, step = 0.22) {
    for (let a = 0; a < Math.PI * turns; a += step) {
      const r = maxR * (1 - a / (Math.PI * (turns + 0.4)));
      dot(cx + dir * Math.cos(a) * r, cy + Math.sin(a) * r, 2.4, a > Math.PI ? 'light' : 'main');
    }
  }

  if (type === 'crown' || type === 'scroll-wide') {
    const w = 720;
    const h = 68;
    const cy = h / 2;

    // Central diamond & twin spirals
    dot(w / 2 - 2, cy - 2, 4, 'main');
    dot(w / 2 - 2, cy - 11, 2.5, 'light');
    dot(w / 2 - 2, cy + 7, 2.5, 'light');
    spiral(w / 2 - 18, cy, 13, -1, 2.1, 0.25);
    spiral(w / 2 + 18, cy, 13, 1, 2.1, 0.25);

    for (const dir of [-1, 1]) {
      for (let t = 0.08; t <= 1; t += 0.014) {
        const x = w / 2 + dir * t * 320;
        const primaryWave = Math.sin(t * Math.PI * 3.5) * 14;
        const secondaryWave = Math.cos(t * Math.PI * 7) * 5;
        dot(x, cy + primaryWave, 2.6, 'main');
        if (t > 0.15 && t < 0.92) {
          dot(x, cy - primaryWave * 0.55 + secondaryWave, 2.2, 'light');
        }
      }

      // Curl offshoots along the vine
      spiral(w / 2 + dir * 135, cy - 10, 15, dir, 2.0, 0.24);
      spiral(w / 2 + dir * 235, cy + 9, 14, -dir, 2.0, 0.24);
      spiral(w / 2 + dir * 326, cy, 18, dir, 2.3, 0.2);
    }

    return wrapSVG(w, h, shadows, mainDots, highlights);
  }

  if (type === 'medallion') {
    const w = 440;
    const h = 48;
    const cy = h / 2;

    dot(w / 2 - 2, cy - 2, 3.8, 'main');
    spiral(w / 2 - 14, cy, 11, -1, 2.0, 0.26);
    spiral(w / 2 + 14, cy, 11, 1, 2.0, 0.26);

    for (const dir of [-1, 1]) {
      for (let t = 0.12; t <= 1; t += 0.022) {
        const x = w / 2 + dir * t * 185;
        const y = cy + Math.sin(t * Math.PI * 3) * 9;
        dot(x, y, 2.4, 'main');
        if (Math.sin(t * Math.PI * 9) > 0.4) {
          dot(x, y - 5, 2, 'light');
        }
      }
      spiral(w / 2 + dir * 190, cy, 13, dir, 2.2, 0.22);
    }

    return wrapSVG(w, h, shadows, mainDots, highlights);
  }

  if (type === 'corner') {
    const w = 42;
    const h = 42;
    for (let t = 0; t <= 1; t += 0.12) {
      dot(4 + t * 28, 4 + Math.sin(t * Math.PI) * 3, 2.2, 'main');
      dot(4 + Math.sin(t * Math.PI) * 3, 4 + t * 28, 2.2, 'main');
    }
    spiral(15, 15, 9, 1, 1.9, 0.3);
    return wrapSVG(w, h, shadows, mainDots, highlights);
  }

  if (type === 'rail-left' || type === 'rail-right') {
    const w = 44;
    const h = 760;
    const dir = type === 'rail-left' ? 1 : -1;
    const cx = w / 2;

    for (let t = 0.02; t <= 0.98; t += 0.008) {
      const y = t * h;
      const x = cx + Math.sin(t * Math.PI * 6) * 10 * dir;
      dot(x, y, 2.4, 'main');
      if (Math.cos(t * Math.PI * 12) > 0.35) {
        dot(x + dir * 5, y + 2, 2, 'light');
      }
    }

    for (const frac of [0.12, 0.36, 0.62, 0.88]) {
      spiral(cx + dir * 4, h * frac, 13, dir, 2.2, 0.24);
    }

    return wrapSVG(w, h, shadows, mainDots, highlights);
  }

  return '';
}

function wrapSVG(w, h, shadows, mainDots, highlights) {
  return `
    <svg class="flourish-svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
      <g fill="#82b8ff" opacity="0.75">${shadows.join('')}</g>
      <g fill="#1038b9">${mainDots.join('')}</g>
      <g fill="#2b6de0">${highlights.join('')}</g>
    </svg>
  `;
}

document.querySelectorAll('[data-flourish]').forEach((el) => {
  el.innerHTML = renderFlourish(el.dataset.flourish);
});

/* Gallery Filtering, Chronological Sorting & Modal Lightbox */
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
let visibleWorks = [];
let activeIndex = 0;

function renderGallery() {
  const filtered =
    currentFilter === 'all'
      ? [...WORKS]
      : WORKS.filter((item) => item.category.toLowerCase() === currentFilter);

  visibleWorks = filtered.sort((a, b) =>
    newestFirst ? b.sortKey - a.sortKey : a.sortKey - b.sortKey
  );

  galleryGrid.innerHTML = '';

  visibleWorks.forEach((work, index) => {
    const card = document.createElement('article');
    card.className = 'work-card';
    card.tabIndex = 0;

    const variantBadge =
      work.variants.length > 1
        ? `<span class="variant-count">${work.variants.length} views</span>`
        : '';

    card.innerHTML = `
      <div class="work-thumb">
        <img src="${work.cover}" alt="${work.title}" loading="lazy" />
        ${variantBadge}
      </div>
      <div class="work-caption">
        <h3 class="work-title">${work.title}</h3>
        <p class="work-sub">${work.category} &middot; ${work.date}</p>
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
  activeIndex = index;
  const work = visibleWorks[activeIndex];
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
    ? 'Newest First (Nov 2026 &rarr; May 2024)'
    : 'Oldest First (May 2024 &rarr; Nov 2026)';
  renderGallery();
});

document.querySelectorAll('[data-close-modal]').forEach((el) => {
  el.addEventListener('click', closeModal);
});

document.querySelectorAll('.modal-tab').forEach((tab) => {
  tab.addEventListener('click', () => switchModalTab(tab.dataset.tab));
});

document.getElementById('prev-work').addEventListener('click', () => {
  const prev = (activeIndex - 1 + visibleWorks.length) % visibleWorks.length;
  openModal(prev);
});

document.getElementById('next-work').addEventListener('click', () => {
  const next = (activeIndex + 1) % visibleWorks.length;
  openModal(next);
});

document.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') {
    const prev = (activeIndex - 1 + visibleWorks.length) % visibleWorks.length;
    openModal(prev);
  }
  if (e.key === 'ArrowRight') {
    const next = (activeIndex + 1) % visibleWorks.length;
    openModal(next);
  }
});

renderGallery();
