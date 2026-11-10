/**
 * Saimon Furigo — Portfolio Interactivity
 * Handlers: Device Switcher, Carousel Navigation, Clipboard Copy
 */

document.addEventListener('DOMContentLoaded', () => {
  initDeviceSwitcher();
  initProjectsCarousel();
  initClipboardEmail();
});

/**
 * 1. Device Frame Switcher (Desktop vs Mobile Mockup no Symo Finance)
 */
function initDeviceSwitcher() {
  const btnDesktop = document.getElementById('view-desktop-btn');
  const btnMobile = document.getElementById('view-mobile-btn');
  const viewDesktop = document.getElementById('symo-desktop-view');
  const viewMobile = document.getElementById('symo-mobile-view');

  if (!btnDesktop || !btnMobile || !viewDesktop || !viewMobile) return;

  btnDesktop.addEventListener('click', () => {
    // Ativa botão Desktop
    btnDesktop.classList.add('bg-primary-container', 'text-on-primary-container', 'font-semibold', 'shadow-md');
    btnDesktop.classList.remove('text-on-surface-variant');

    // Desativa botão Mobile
    btnMobile.classList.remove('bg-primary-container', 'text-on-primary-container', 'font-semibold', 'shadow-md');
    btnMobile.classList.add('text-on-surface-variant');

    // Transição visual
    viewDesktop.classList.remove('hidden');
    viewDesktop.classList.add('flex');
    viewMobile.classList.add('hidden');
    viewMobile.classList.remove('flex');
  });

  btnMobile.addEventListener('click', () => {
    // Ativa botão Mobile
    btnMobile.classList.add('bg-primary-container', 'text-on-primary-container', 'font-semibold', 'shadow-md');
    btnMobile.classList.remove('text-on-surface-variant');

    // Desativa botão Desktop
    btnDesktop.classList.remove('bg-primary-container', 'text-on-primary-container', 'font-semibold', 'shadow-md');
    btnDesktop.classList.add('text-on-surface-variant');

    // Transição visual
    viewDesktop.classList.add('hidden');
    viewDesktop.classList.remove('flex');
    viewMobile.classList.remove('hidden');
    viewMobile.classList.add('flex');
  });
}

/**
 * 2. Carrossel Horizontal Estilo Streaming
 */
function initProjectsCarousel() {
  const carousel = document.getElementById('projects-carousel');
  const btnPrev = document.getElementById('carousel-prev');
  const btnNext = document.getElementById('carousel-next');

  if (!carousel || !btnPrev || !btnNext) return;

  const getScrollStep = () => {
    const card = carousel.querySelector('.project-card');
    return card ? card.offsetWidth + 24 : 380;
  };

  btnPrev.addEventListener('click', () => {
    carousel.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
  });

  btnNext.addEventListener('click', () => {
    carousel.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
  });
}

/**
 * 3. Botão Interativo de Copiar E-mail
 */
function initClipboardEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  const copyText = document.getElementById('copy-text');
  const copyIcon = document.getElementById('copy-icon');

  if (!copyBtn || !copyText || !copyIcon) return;

  copyBtn.addEventListener('click', () => {
    const email = 'shxsaimondev@gmail.com';

    navigator.clipboard.writeText(email).then(() => {
      const originalText = copyText.textContent;
      const originalIcon = copyIcon.textContent;

      copyText.textContent = 'Copiado!';
      copyIcon.textContent = 'check_circle';
      copyBtn.classList.add('bg-emerald-600', 'text-white');

      setTimeout(() => {
        copyText.textContent = originalText;
        copyIcon.textContent = originalIcon;
        copyBtn.classList.remove('bg-emerald-600', 'text-white');
      }, 2500);
    }).catch(err => {
      console.error('Falha ao copiar:', err);
    });
  });
}
