/**
 * Saimon Furigo — Portfolio Interactivity
 * Handlers: Device Switcher, Carousel Navigation, Clipboard Copy, Desktop Magnifier, Project Modal, Auto-hide Scrollbar
 */

document.addEventListener('DOMContentLoaded', () => {
  initDeviceSwitcher();
  initProjectsCarousel();
  initClipboardEmail();
  initDesktopMagnifier();
  initProjectModal();
  initAutoHideScrollbar();
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
 * 2. Carrossel Horizontal com Navegação Circular e Drag-to-Scroll
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

  // --- Navegação Circular pelas Setas ---
  btnPrev.addEventListener('click', () => {
    const step = getScrollStep();
    // Se estiver no início (tolerância de 15px), salta suavemente para o final
    if (carousel.scrollLeft <= 15) {
      carousel.scrollTo({ left: carousel.scrollWidth, behavior: 'smooth' });
    } else {
      carousel.scrollBy({ left: -step, behavior: 'smooth' });
    }
  });

  btnNext.addEventListener('click', () => {
    const step = getScrollStep();
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    // Se estiver no final (tolerância de 15px), salta suavemente para o início
    if (carousel.scrollLeft >= maxScroll - 15) {
      carousel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      carousel.scrollBy({ left: step, behavior: 'smooth' });
    }
  });

  // --- Drag-to-Scroll com o Mouse no Desktop ---
  let isDown = false;
  let startX = 0;
  let scrollStart = 0;
  let hasMoved = false;

  carousel.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return; // apenas clique com botão primário (esquerdo)
    isDown = true;
    hasMoved = false;
    startX = e.pageX - carousel.offsetLeft;
    scrollStart = carousel.scrollLeft;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const x = e.pageX - carousel.offsetLeft;
    const walk = x - startX;

    // Só ativa o arraste caso haja deslocamento real (acima de 6px)
    if (Math.abs(walk) > 6) {
      hasMoved = true;
      carousel.classList.add('is-dragging');
      carousel.scrollLeft = scrollStart - (walk * 1.3);
    }
  });

  window.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    carousel.classList.remove('is-dragging');
  });

  // Previne cliques acidentais nos cards quando o usuário esteve arrastando o carrossel
  carousel.addEventListener('click', (e) => {
    if (hasMoved) {
      e.preventDefault();
      e.stopPropagation();
      hasMoved = false;
    }
  }, true);
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

/**
 * 4. Lupa Interativa (Zoom Localizado no Cursor do Mockup Desktop)
 */
function initDesktopMagnifier() {
  const container = document.getElementById('symo-zoom-container');
  const img = document.getElementById('symo-desktop-img');

  if (!container || !img) return;

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = 'scale(1.9)';
  });

  container.addEventListener('mouseleave', () => {
    img.style.transformOrigin = 'center center';
    img.style.transform = 'scale(1)';
  });
}

/**
 * 5. Modal Nativo de Detalhes do Projeto (<dialog>)
 */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const openBtn = document.getElementById('open-nms-modal');
  const closeBtn = document.getElementById('close-modal-btn');

  if (!modal || !openBtn) return;

  const openModal = (e) => {
    if (e) e.preventDefault();
    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }
  };

  const closeModal = (e) => {
    if (e) e.preventDefault();
    if (typeof modal.close === 'function') {
      modal.close();
    } else {
      modal.removeAttribute('open');
    }
  };

  openBtn.addEventListener('click', openModal);
  openBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      openModal(e);
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Fecha ao clicar fora do conteúdo (no backdrop escuro)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(e);
    }
  });
}

/**
 * 6. Controle de Visibilidade Dinâmica da Barra de Rolagem (Auto-hide Scrollbar)
 * Baseado no padrão do Symo Finance com interpolação via CSS Houdini
 */
function initAutoHideScrollbar() {
  const activeScrollTimers = new WeakMap();
  let currentHoverTarget = null;
  let hoverTimer = null;

  const isRootTarget = (el) => (
    !el || el === document || el === document.documentElement || el === document.body
  );

  const setRootScrolling = (active) => {
    document.documentElement.classList.toggle('is-scrolling', active);
    if (document.body) {
      document.body.classList.toggle('is-scrolling', active);
    }
  };

  const deactivateScrollbar = (element) => {
    if (!element) return;
    if (isRootTarget(element)) {
      setRootScrolling(false);
    } else if (element.classList) {
      element.classList.remove('is-scrolling');
    }
    const key = isRootTarget(element) ? document.documentElement : element;
    const timer = activeScrollTimers.get(key);
    if (timer) {
      clearTimeout(timer);
      activeScrollTimers.delete(key);
    }
  };

  const activateScrollbar = (element, duration = 1200) => {
    if (!element) return;
    const isRoot = isRootTarget(element);
    const key = isRoot ? document.documentElement : element;

    if (isRoot) {
      setRootScrolling(true);
    } else if (element.classList) {
      element.classList.add('is-scrolling');
    }

    const existingTimer = activeScrollTimers.get(key);
    if (existingTimer) {
      clearTimeout(existingTimer);
    }

    const newTimer = setTimeout(() => {
      if (currentHoverTarget !== key) {
        if (isRoot) {
          setRootScrolling(false);
        } else if (element.classList) {
          element.classList.remove('is-scrolling');
        }
        activeScrollTimers.delete(key);
      }
    }, duration);

    activeScrollTimers.set(key, newTimer);
  };

  // Ativa a scrollbar ao rolar a página (mouse, teclado, barra ou toque) ou container interno
  window.addEventListener('scroll', (event) => {
    const target = isRootTarget(event.target) ? document.documentElement : event.target;
    activateScrollbar(target, 1200);
  }, { capture: true, passive: true });

  // Localiza um container interno rolável (como a área interna do modal)
  const findInnerScrollable = (target) => {
    let el = target;
    while (el && el !== document && el !== document.documentElement && el !== document.body) {
      const style = window.getComputedStyle(el);
      const canScrollY = (style.overflowY === 'auto' || style.overflowY === 'scroll') && el.scrollHeight > el.clientHeight;
      if (canScrollY) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  };

  // Ativa a scrollbar instantaneamente ao girar a roda do mouse
  window.addEventListener('wheel', (event) => {
    const inner = findInnerScrollable(event.target);
    activateScrollbar(inner || document.documentElement, 1200);
  }, { passive: true });

  // Ativa a scrollbar ao navegar pelo teclado (Setas, PageUp/Down, Espaço, Home/End)
  window.addEventListener('keydown', (event) => {
    const scrollKeys = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' ', 'Home', 'End'];
    if (scrollKeys.includes(event.key)) {
      const inner = findInnerScrollable(event.target);
      activateScrollbar(inner || document.documentElement, 1200);
    }
  }, { passive: true });

  // Monitora a posição do cursor: ativa ao aproximar e manter o mouse na calha lateral direita
  document.addEventListener('mousemove', (event) => {
    const inner = findInnerScrollable(event.target);
    let targetScrollable = null;
    let isNearScrollbar = false;

    if (inner) {
      const rect = inner.getBoundingClientRect();
      if (
        event.clientX >= rect.right - 18 &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
      ) {
        targetScrollable = inner;
        isNearScrollbar = true;
      }
    }

    // Se não estiver na barra de um modal interno, verifica a borda direita da janela principal
    if (!isNearScrollbar && event.clientX >= window.innerWidth - 18) {
      targetScrollable = document.documentElement;
      isNearScrollbar = true;
    }

    if (isNearScrollbar && targetScrollable) {
      currentHoverTarget = targetScrollable;

      if (targetScrollable.classList.contains('is-scrolling')) {
        return;
      }

      if (!hoverTimer) {
        hoverTimer = setTimeout(() => {
          if (currentHoverTarget === targetScrollable) {
            activateScrollbar(targetScrollable, 2500);
          }
          hoverTimer = null;
        }, 220);
      }
    } else {
      if (hoverTimer) {
        clearTimeout(hoverTimer);
        hoverTimer = null;
      }
      if (currentHoverTarget) {
        const prev = currentHoverTarget;
        currentHoverTarget = null;
        activateScrollbar(prev, 250);
      }
    }
  }, { passive: true });

  // Esconde ao tirar o mouse da janela
  document.addEventListener('mouseleave', () => {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      hoverTimer = null;
    }
    if (currentHoverTarget) {
      deactivateScrollbar(currentHoverTarget);
      currentHoverTarget = null;
    }
  });
}
