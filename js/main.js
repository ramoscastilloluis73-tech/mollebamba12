// ===================================================
// MOLLEBAMBA — Tesoro Andino | Main v2.1
// ===================================================

/* ─── UTILIDADES ─────────────────────────────────── */

function el(id) { return document.getElementById(id); }
function qs(sel, ctx = document) { return ctx.querySelector(sel); }
function qsa(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

function imgFallback(src, fallbackIcon = 'fa-image') {
  return `onerror="this.parentElement.innerHTML='<div class=\\"card__media-placeholder\\"><i class=\\"fas ${fallbackIcon}\\"></i></div>'"`;
}

/* ─── LOADING SCREEN ─────────────────────────────── */

function initLoading() {
  const screen = el('loading-screen');
  if (!screen) return;
  window.addEventListener('load', () => {
    setTimeout(() => screen.classList.add('hidden'), 1800);
  });
}

/* ─── RENDER: CARDS CULTURALES ───────────────────── */

function renderCards(containerId, items) {
  const container = el(containerId);
  if (!container || !items?.length) return;

  container.innerHTML = items.map((item, i) => {
    const imgSrc = item.imagen || '';
    const nombre = item.nombre || item.titulo || '';
    const tag    = item.tag || '';

    const mediaHtml = imgSrc
      ? `<div class="card__media">
           <img src="${imgSrc}" alt="${nombre}" loading="lazy">
           <div class="card__media-overlay"></div>
           ${tag ? `<span class="card__tag">${tag}</span>` : ''}
         </div>`
      : `<div class="card__media" style="background:var(--color-hueso-dk); display:flex; align-items:center; justify-content:center; min-height:200px;">
           <i class="fas fa-landmark" style="font-size:2.5rem; color:var(--color-tierra-md); opacity:0.4;"></i>
           ${tag ? `<span class="card__tag">${tag}</span>` : ''}
         </div>`;

    return `
      <article class="card reveal reveal-delay-${(i % 3) + 1}">
        ${mediaHtml}
        <div class="card__body">
          <h3 class="card__title">${nombre}</h3>
          <p class="card__text">${item.descripcion || ''}</p>
        </div>
      </article>`;
  }).join('');

  observeReveal(container);
}

/* ─── RENDER: GALERÍA ────────────────────────────── */

function renderGaleria(containerId, imagenes) {
  const container = el(containerId);
  if (!container || !imagenes?.length) return;

  container.innerHTML = imagenes.map((img, i) => `
    <a href="${img.src}"
       data-lightbox="galeria-mollebamba"
       data-title="${img.alt}"
       class="foto reveal"
       data-caption="${img.caption || img.alt}"
       style="transition-delay:${i * 0.07}s">
      <img src="${img.src}" alt="${img.alt}" loading="lazy">
    </a>
  `).join('');

  observeReveal(container);
}

/* ─── RENDER: TESTIMONIOS ────────────────────────── */

function renderTestimonios(containerId, items) {
  const container = el(containerId);
  if (!container || !items?.length) return;

  container.innerHTML = items.map((t, i) => {
    const stars = Array.from({ length: 5 }, (_, k) =>
      `<i class="fas fa-star${k >= t.estrellas ? ' empty' : ''}"></i>`
    ).join('');
    const inicial = (t.nombre || 'V')[0].toUpperCase();

    return `
      <article class="testimonio-card reveal reveal-delay-${(i % 3) + 1}">
        <div class="testimonio-stars">${stars}</div>
        <p class="testimonio-text">${t.comentario}</p>
        <div class="testimonio-autor">
          <div class="testimonio-avatar">${inicial}</div>
          <div>
            <p class="testimonio-nombre">${t.nombre}</p>
            <p class="testimonio-ciudad"><i class="fas fa-map-marker-alt" style="margin-right:0.3rem; color:var(--color-terracota);"></i>${t.ciudad}</p>
          </div>
        </div>
      </article>`;
  }).join('');

  observeReveal(container);
}

/* ─── RENDER: FESTIVIDADES ───────────────────────── */

function renderFestividades(containerId, items) {
  const container = el(containerId);
  if (!container || !items?.length) return;

  container.innerHTML = items.map((f, i) => `
    <div class="mes-card reveal reveal-delay-${(i % 4) + 1}">
      <div class="mes-card__month">${f.icono || '📅'} ${f.mes}</div>
      <h4 class="mes-card__title">${f.dia ? `${f.dia} · ` : ''}${f.nombre}</h4>
      <p class="mes-card__desc">${f.descripcion}</p>
    </div>
  `).join('');

  observeReveal(container);
}

/* ─── RENDER: SERVICIOS TURÍSTICOS ──────────────── */

function renderServiciosTurismo() {
  const container = el('servicios-container');
  if (!container) return;

  const lugares = datosMollebamba?.serviciosTurismo;
  if (!lugares?.length) {
    container.innerHTML = `
      <div class="card--flat" style="text-align:center; color:var(--color-gris);">
        <i class="fas fa-map" style="font-size:2rem; margin-bottom:0.75rem; opacity:0.4;"></i>
        <p>Próximamente más destinos turísticos.</p>
      </div>`;
    return;
  }

  container.innerHTML = lugares.map((lugar, i) => {
    const imagenSrc = lugar.imagen || 'imagenes/imagen.png';

    const transporteHTML = lugar.servicios?.length
      ? lugar.servicios.map(serv => {
          const tel = serv.contacto.replace(/[^0-9+]/g, '');
          const telLimpio = tel.startsWith('+') ? tel.substring(1) : tel;
          const waLink = `https://wa.me/${telLimpio}?text=Hola, me gustaría información sobre transporte a ${encodeURIComponent(lugar.nombre)}`;
          return `
            <div class="transport-item">
              <div class="transport-item-info">
                <strong>${serv.nombre}</strong>
                <span>${serv.tipo}</span>
                <small><i class="fas fa-phone" style="margin-right:0.3rem; color:var(--color-tierra);"></i>${serv.contacto}</small>
              </div>
              <a href="${waLink}" class="btn-whatsapp" target="_blank" rel="noopener">
                <i class="fab fa-whatsapp"></i> Consultar
              </a>
            </div>`;
        }).join('')
      : '<p style="font-size:0.85rem; color:var(--color-gris);">Sin servicios registrados aún.</p>';

    return `
      <article class="servicio-card reveal reveal-delay-${(i % 2) + 1}">
        <div class="servicio-card__media">
          <img src="${imagenSrc}" alt="${lugar.nombre}" loading="lazy">
          <span class="servicio-card__media-label">📍 Destino turístico</span>
        </div>
        <div class="servicio-card__body">
          <h3 class="servicio-card__title">${lugar.nombre}</h3>
          <p class="servicio-card__location">
            <i class="fas fa-location-dot"></i>${lugar.ubicacion || 'Mollebamba, La Libertad'}
          </p>
          <p class="servicio-card__desc">${lugar.descripcion || ''}</p>
          <p class="servicio-card__transport-title">
            <i class="fas fa-van-shuttle"></i> Opciones de transporte
          </p>
          <div class="transport-list">${transporteHTML}</div>
        </div>
      </article>`;
  }).join('');

  observeReveal(container);
}

/* ─── SCROLL REVEAL ──────────────────────────────── */

let revealObserver;

function observeReveal(root = document) {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
  }
  qsa('.reveal', root).forEach(el => revealObserver.observe(el));
}

/* ─── NAVBAR ─────────────────────────────────────── */

function initNavbar() {
  const menuIcon = qs('.menu-icon');
  const navLinks = qs('.nav-links');
  if (!menuIcon || !navLinks) return;

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const bars = qsa('span', menuIcon);
    bars[0]?.style.setProperty('transform', navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '');
    bars[1]?.style.setProperty('opacity',   navLinks.classList.contains('active') ? '0' : '1');
    bars[2]?.style.setProperty('transform', navLinks.classList.contains('active') ? 'rotate(-45deg) translate(5px, -5px)' : '');
  });

  qsa('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // Highlight activo en scroll
  const sections = qsa('section[id]');
  const navItems  = qsa('.nav-links a[href^="#"]');

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(a => a.classList.remove('active-link'));
        const link = qs(`.nav-links a[href="#${entry.target.id}"]`);
        link?.classList.add('active-link');
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(s => sectionObserver.observe(s));
}

/* ─── BTN VOLVER ARRIBA ──────────────────────────── */

function initBtnArriba() {
  const btn = el('btn-arriba');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ─── HERO PARALLAX (CORREGIDO) ──────────────────── */

function initHeroParallax() {
  const bg = qs('.hero-bg');
  if (!bg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Inicialmente no hay escala extra, solo movimiento vertical ligero
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const offset = window.scrollY;
        if (offset < window.innerHeight * 1.2) {
          // Movimiento suave sin modificar escala
          const y = offset * 0.15;
          bg.style.transform = `translateY(${y}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ─── CONTADOR ANIMADO ───────────────────────────── */

function animateCounter(element, end, duration = 1500) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.floor(eased * end);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const counters = qsa('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.count);
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* ─── LIGHTBOX: configurar Lightbox2 ─────────────── */

function initLightbox() {
  if (typeof lightbox === 'undefined') return;
  lightbox.option({
    resizeDuration: 300,
    wrapAround: true,
    albumLabel: "Imagen %1 de %2",
    fadeDuration: 250,
    imageFadeDuration: 250
  });
}

/* ─── FORMULARIO ─────────────────────────────────── */

function initFormulario() {
  const form = qs('form[data-form="contacto"]');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    const btn = form.querySelector('.form-submit');
    if (!btn) return;
    btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Enviando...';
    btn.disabled = true;
  });
}

/* ─── HERO BG (CORREGIDO) ────────────────────────── */

function initHeroBg() {
  const bg = qs('.hero-bg');
  if (!bg) return;
  // Ya no es necesario cambiar la escala, porque empezamos con scale(1)
  // Solo nos aseguramos de que la imagen esté visible
  bg.style.opacity = '1';
}

/* ─── INIT ───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof datosMollebamba === 'undefined') {
    console.error('[Mollebamba] datosMollebamba no está definido. Verifica que data.js está cargado antes de main.js.');
    return;
  }

  // Contenido dinámico
  renderCards('danzas-container',      datosMollebamba.danzas);
  renderCards('platos-container',      datosMollebamba.platos);
  renderCards('artesanias-container',  datosMollebamba.artesanias);
  renderCards('tradiciones-container', datosMollebamba.tradiciones);
  renderGaleria('galeria-container',   datosMollebamba.galeria);
  renderTestimonios('testimonios-container', datosMollebamba.testimonios);
  renderFestividades('calendario-container', datosMollebamba.festividades);
  renderServiciosTurismo();

  // UI & efectos
  initLoading();
  initNavbar();
  initBtnArriba();
  initHeroParallax();   // ← parallax más suave y sin scale
  initHeroBg();         // ← ya no cambia scale, solo se asegura visibilidad
  initCounters();
  initLightbox();
  initFormulario();

  // Reveal global
  observeReveal(document);
});
