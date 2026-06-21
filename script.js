/**
 * TORVEX — script.js
 * Benjamin Torfu · torvex.info
 */
'use strict';

/* ── Theme ──────────────────────────────────────── */
const Theme = (() => {
  const KEY   = 'tv-theme';
  const html  = document.documentElement;
  const btn   = document.getElementById('theme-toggle');

  const apply = theme => {
    html.dataset.theme = theme;
    localStorage.setItem(KEY, theme);
    if (btn) btn.setAttribute('aria-label',
      theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
    );
  };

  const init = () => {
    const stored  = localStorage.getItem(KEY);
    const prefers = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    apply(stored || prefers);

    btn?.addEventListener('click', () => {
      apply(html.dataset.theme === 'dark' ? 'light' : 'dark');
    });

    // Sync across tabs
    window.addEventListener('storage', e => {
      if (e.key === KEY && e.newValue) apply(e.newValue);
    });
  };

  return { init };
})();


/* ── Mobile nav ─────────────────────────────────── */
const MobileNav = (() => {
  const toggle = document.getElementById('nav-hamburger');
  const menu   = document.getElementById('nav-menu');

  const open = () => {
    toggle?.setAttribute('aria-expanded', 'true');
    toggle?.setAttribute('aria-label', 'Close menu');
    menu?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Open menu');
    menu?.classList.remove('open');
    document.body.style.overflow = '';
  };

  const init = () => {
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      toggle.getAttribute('aria-expanded') === 'true' ? close() : open();
    });

    menu.querySelectorAll('.nav-link').forEach(a => a.addEventListener('click', close));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        close();
        toggle.focus();
      }
    });

    document.addEventListener('click', e => {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) close();
    });
  };

  return { init };
})();


/* ── Terminal typewriter ─────────────────────────── */
const Terminal = (() => {
  const el = document.getElementById('terminal-typed');
  const PHRASES = [
    'whoami',
    'Software Engineer',
    'Educator · Problem Solver',
    'AWS Certified',
    'ALX Africa Graduate',
    'ls ~/projects',
    'Building from Adeiso, GH'
  ];

  let pi = 0, ci = 0, deleting = false;
  const SPEED_TYPE = 80, SPEED_DEL = 40, PAUSE = 1800, GAP = 350;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const tick = () => {
    if (!el) return;
    const phrase = PHRASES[pi];

    if (!deleting) {
      el.textContent = phrase.slice(0, ci);
      ci++;
      if (ci > phrase.length) {
        deleting = true;
        return setTimeout(tick, PAUSE);
      }
      return setTimeout(tick, SPEED_TYPE);
    }

    el.textContent = phrase.slice(0, ci);
    ci--;
    if (ci < 0) {
      deleting = false;
      pi = (pi + 1) % PHRASES.length;
      ci = 0;
      return setTimeout(tick, GAP);
    }
    setTimeout(tick, SPEED_DEL);
  };

  const init = () => {
    if (!el) return;
    if (reduced) { el.textContent = PHRASES[0]; return; }
    setTimeout(tick, 900);
  };

  return { init };
})();


/* ── Scroll reveal ──────────────────────────────── */
const Reveal = (() => {
  const init = () => {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(el => el.classList.add('in-view'));
      return;
    }

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

    items.forEach(el => io.observe(el));
  };

  return { init };
})();


/* ── Active nav link ─────────────────────────────── */
const ActiveNav = (() => {
  const init = () => {
    const sections = document.querySelectorAll('section[id]');
    const links    = document.querySelectorAll('.nav-link[href^="#"]');

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(a => {
          const active = a.getAttribute('href') === '#' + entry.target.id;
          a.toggleAttribute('aria-current', active);
        });
      });
    }, { threshold: 0.35, rootMargin: '-10% 0px -50% 0px' });

    sections.forEach(s => io.observe(s));
  };

  return { init };
})();


/* ── Back to top ────────────────────────────────── */
const BackTop = (() => {
  const btn = document.getElementById('back-top');

  const init = () => {
    if (!btn) return;
    const check = () => { btn.hidden = window.scrollY < 400; };
    window.addEventListener('scroll', check, { passive: true });
    check();
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  };

  return { init };
})();


/* ── Star rating ─────────────────────────────────── */
const Stars = (() => {
  const init = (containerSel, inputId) => {
    const container = document.querySelector(containerSel);
    const input     = document.getElementById(inputId);
    if (!container || !input) return;

    const stars = container.querySelectorAll('.star');
    let selected = 0;

    const highlight = n => {
      stars.forEach((s, i) => {
        s.classList.toggle('selected', i < n);
        s.classList.remove('hover');
      });
    };

    stars.forEach((star, i) => {
      star.addEventListener('click', () => {
        selected = i + 1;
        input.value = selected;
        highlight(selected);
      });
      star.addEventListener('mouseenter', () => {
        stars.forEach((s, j) => s.classList.toggle('hover', j <= i));
      });
      star.addEventListener('mouseleave', () => {
        stars.forEach(s => s.classList.remove('hover'));
        highlight(selected);
      });
      star.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); star.click(); }
      });
    });
  };

  return { init };
})();


/* ── Review form ─────────────────────────────────── */
const ReviewForm = (() => {
  const init = () => {
    const form    = document.getElementById('review-form');
    const success = document.getElementById('rv-success');
    const textEl  = document.getElementById('rv-text');
    if (!form) return;

    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (!textEl.value.trim()) {
        textEl.classList.add('is-err');
        textEl.focus();
        return;
      }
      textEl.classList.remove('is-err');

      // Store locally (Formspree not wired for reviews)
      const entry = {
        name:   document.getElementById('rv-name')?.value.trim() || 'Anonymous',
        rating: document.getElementById('rv-rating')?.value || 0,
        text:   textEl.value.trim(),
        ts:     new Date().toISOString()
      };
      const existing = JSON.parse(localStorage.getItem('tv-reviews') || '[]');
      existing.push(entry);
      localStorage.setItem('tv-reviews', JSON.stringify(existing));

      form.reset();
      document.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));
      if (document.getElementById('rv-rating')) document.getElementById('rv-rating').value = 0;

      if (success) { success.hidden = false; setTimeout(() => { success.hidden = true; }, 5000); }
    });
  };

  return { init };
})();


/* ── Contact form ────────────────────────────────── */
const ContactForm = (() => {
  const validate = (el, errId, msg) => {
    const err = document.getElementById(errId);
    if (!el.validity.valid) {
      el.classList.add('is-err');
      if (err) err.textContent = msg;
      return false;
    }
    el.classList.remove('is-err');
    if (err) err.textContent = '';
    return true;
  };

  const init = () => {
    const form    = document.getElementById('contact-form');
    const emailEl = document.getElementById('cf-email');
    const msgEl   = document.getElementById('cf-msg');
    const submitBtn = document.getElementById('cf-submit');
    const success = document.getElementById('cf-success');
    if (!form) return;

    emailEl?.addEventListener('blur', () => validate(emailEl, 'cf-email-err', 'Please enter a valid email.'));
    msgEl?.addEventListener('blur',   () => validate(msgEl, 'cf-msg-err', 'Please write a message.'));

    form.addEventListener('submit', async e => {
      const okEmail = validate(emailEl, 'cf-email-err', 'Please enter a valid email.');
      const okMsg   = validate(msgEl,   'cf-msg-err',   'Please write a message.');
      if (!okEmail || !okMsg) {
        e.preventDefault();
        form.querySelector('.is-err')?.focus();
        return;
      }
      // Let Formspree handle the actual POST
      // Optimistic UI
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }
      // Reset after a moment (Formspree redirects, but in case of fetch mode)
      setTimeout(() => {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Send message'; }
        if (success) { success.hidden = false; setTimeout(() => { success.hidden = true; }, 5000); }
      }, 1500);
    });
  };

  return { init };
})();


/* ── Smooth scroll for anchor links ─────────────── */
const SmoothScroll = (() => {
  const init = () => {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href').slice(1);
        if (!id) return;
        const target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Keep focus accessible
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
      });
    });
  };
  return { init };
})();


/* ── Footer year ────────────────────────────────── */
const Year = () => {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
};


/* ── Boot ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
  MobileNav.init();
  Terminal.init();
  Reveal.init();
  ActiveNav.init();
  BackTop.init();
  Stars.init('.star-row', 'rv-rating');
  ReviewForm.init();
  ContactForm.init();
  SmoothScroll.init();
  Year();
});
