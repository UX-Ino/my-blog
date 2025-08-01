/**
 * 네비게이션, 스크롤, 메뉴 토글 등 UI 인터랙션을 초기화합니다.
 * 클라이언트 환경에서만 호출하세요.
 */
export function initNavigation(): void {
  // 네비게이션 활성화
  const sections = document.querySelectorAll<HTMLElement>('.section');
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');

  function updateActiveNav(): void {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  // 부드러운 스크롤
  navLinks.forEach((link) => {
    link.addEventListener('click', function (e: MouseEvent) {
      e.preventDefault();
      const targetId = (this as HTMLAnchorElement).getAttribute('href')?.substring(1);
      if (!targetId) return;
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // 모바일에서 메뉴 닫기
        if (window.innerWidth <= 1024) {
          toggleMenu();
        }

        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  // 스크롤 애니메이션
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll<HTMLElement>('.fade-in').forEach((el) => {
    observer.observe(el);
  });

  // 모바일 메뉴 토글
  function toggleMenu(): void {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('open');
    }
  }

  // 이벤트 리스너
  window.addEventListener('scroll', updateActiveNav);
  window.addEventListener('load', () => {
    updateActiveNav();

    // 페이지 로드 시 첫 번째 섹션 표시
    setTimeout(() => {
      const firstFadeIn = document.querySelector('.fade-in');
      if (firstFadeIn instanceof HTMLElement) {
        firstFadeIn.classList.add('visible');
      }
    }, 300);
  });

  // 창 크기 변경 시 모바일 메뉴 처리
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      const sidebar = document.getElementById('sidebar');
      if (sidebar) {
        sidebar.classList.remove('open');
      }
    }
  });
} 