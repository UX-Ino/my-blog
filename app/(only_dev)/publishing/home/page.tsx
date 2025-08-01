'use client';
import '../../../../assets/style/style.scss';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    import('@/app/_scripts/navigation').then((mod) => {
      if (typeof window !== 'undefined' && mod?.initNavigation) {
        mod.initNavigation();
      }
    });
  }, []);

  return (
    <html lang="ko" className="">
      <body>
        <div id="wrap">
          <div className="bg-decoration">
            <div className="bg-circle"></div>
            <div className="bg-circle"></div>
            <div className="bg-circle"></div>
          </div>

          <button className="menu-toggle" onclick="toggleMenu()">
            ☰
          </button>

          <div className="container">
            <aside className="sidebar" id="sidebar">
              <div className="profile-section">
                <div className="profile-image">🌸</div>
                <div className="logo">Ino Code</div>
                <div className="role-badge">Web Publisher</div>
              </div>

              <ul className="nav-menu">
                <li>
                  <a href="#intro" className="nav-link active">
                    🏠 Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="nav-link">
                    👋 About
                  </a>
                </li>
                <li>
                  <a href="#experience" className="nav-link">
                    💼 Experience
                  </a>
                </li>
                <li>
                  <a href="#skills" className="nav-link">
                    ⚡ Skills
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="nav-link">
                    🎨 Portfolio
                  </a>
                </li>
              </ul>

              <div className="sidebar-footer">
                <div className="contact-info">
                  <div>
                    📧 <a href="mailto:newjihol@naver.com">newjihol@naver.com</a>
                  </div>
                  <div>📱 010-7668-4200</div>
                  <div>
                    🔗 <a href="https://ino-code.vercel.app/blog">ino code blog</a>
                  </div>
                </div>
              </div>
            </aside>

            <main className="main-content">
              <section id="intro" className="intro section fade-in">
                <h1>코딩, 즐기면 두려울 게 없다!</h1>
                <div className="role">Web Publisher & Frontend Developer</div>
                <div className="description">변화를 두려워하지 않는 웹 퍼블리셔,</div>
                <div className="description">오늘도 즐겁게 배우고 나누는 Ino입니다. 💫</div>
              </section>

              <section id="about" className="section fade-in">
                <h2 className="section-title">About Me</h2>
                <div className="about-grid">
                  <div className="stats-card">
                    <div className="stat-item">
                      <span className="stat-number">“This, Too, Shall Pass” — </span>
                      <span className="stat-label">
                        모든 즐거운 일도, 힘든 일도 결국엔 지나갑니다.
                      </span>
                    </div>
                  </div>
                  <div className="card">
                    <div className="about-text">
                      <p>안녕하세요, 웹 퍼블리셔 정인호입니다!</p>
                      <p>
                        좋은 일이 있어도 들뜨지 않고, 어려운 일이 있어도 낙담하지 않으려 합니다.
                        항상 같은 마음으로 UX 팀의 일원으로서 중심을 지키며 일하고 있습니다.
                      </p>
                      <p>
                        웹 퍼블리싱은 능숙하게 다룰 수 있으며, 최근에는 프론트엔드 영역에도 관심이
                        생겨 Next.js로 포트폴리오를 제작해보았습니다. 새로운 기술을 배우는 과정이
                        즐겁고, 그 경험을 통해 더 넓은 시야로 작업을 바라보고 있습니다.
                      </p>
                      <p>
                        다양한 직군과 협업하는 역할인 만큼, 서로 간의 원활한 소통과 배려를 가장
                        중요하게 생각합니다. 모두가 즐겁고 긍정적인 분위기 속에서 일할 수 있도록 늘
                        노력하고 있습니다.
                      </p>
                      <div className="experience-period">자기소개 더보기</div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="experience" className="section fade-in">
                <h2 className="section-title">Experience</h2>
                <div className="experience-item">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">이트라이브</h3>
                      <div className="experience-company">UX 그룹</div>
                    </div>
                    <div className="experience-period">2022 - 현재</div>
                  </div>
                  <div className="experience-description">
                    <dl>
                      <dt>웹사이트 운영 PM [썬더잡, 극동방송] </dt>
                      <dd>
                        현업과의 커뮤니케이션을 통해 업무 요구사항을 정리하고, 파트별로 업무를
                        분배하여 운영 프로젝트를 총괄 관리
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        웹사이트 리뉴얼 PA [롯데호텔 채널시스템 리뉴얼, 에버랜드 앱, T멤버십 글로벌
                        여행]
                      </dt>
                      <dd>
                        퍼블리싱 파트로 투입되어 각 프로젝트의 구조를 파악하고, 요구에 맞는 페이지
                        마크업을 진행
                      </dd>
                    </dl>
                    <dl>
                      <dt>웹사이트 리뉴얼 PL [MG 제주연수원]</dt>
                      <dd>
                        퍼블리싱 파트 PL로 참여하여 퍼블리싱 요건 정의, 공통 컴포넌트 설계 및 제작,
                        업무 분배 및 마크업 작업 총괄
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className="experience-item">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">투비</h3>
                      <div className="experience-company">퍼블리싱팀</div>
                    </div>
                    <div className="experience-period">2021.06 – 2022.04</div>
                  </div>
                  <div className="experience-description">
                    <dl>
                      <dt>웹사이트 리뉴얼 PA [전북은행 스마트뱅킹 고도화]</dt>
                      <dd>CMS 기반으로 퍼블리싱 컴포넌트 설계 및 페이지 구현 담당</dd>
                    </dl>
                  </div>
                </div>
                <div className="experience-item">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">상록에스</h3>
                      <div className="experience-company">퍼블리싱팀</div>
                    </div>
                    <div className="experience-period">2020.09 – 2021.05</div>
                  </div>
                  <div className="experience-description">
                    <dl>
                      <dt>교과목 디지털 콘텐츠 제작 PA</dt>
                      <dd>
                        교육사별 수학, 과학, 체육 등 주요 과목의 수업 콘텐츠를 디지털 형태로 제작
                      </dd>
                    </dl>
                  </div>
                </div>
              </section>

              <section id="skills" className="section fade-in">
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid">
                  <div className="skill-category">
                    <span className="skill-icon">🎨</span>
                    <h3>Markup & Styling</h3>
                    <div className="skills-list">
                      <span className="skill-tag">HTML5</span>
                      <span className="skill-tag">CSS3</span>
                      <span className="skill-tag">SCSS</span>
                      <span className="skill-tag">Bootstrap</span>
                      <span className="skill-tag">Tailwind</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <span className="skill-icon">⚡</span>
                    <h3>JavaScript</h3>
                    <div className="skills-list">
                      <span className="skill-tag">ES6+</span>
                      <span className="skill-tag">jquery</span>
                      <span className="skill-tag">JavaScript</span>
                      <span className="skill-tag">Vue</span>
                      <span className="skill-tag">Next.js</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <span className="skill-icon">🛠️</span>
                    <h3>Tools & Others</h3>
                    <div className="skills-list">
                      <span className="skill-tag">Git</span>
                      <span className="skill-tag">Figma</span>
                      <span className="skill-tag">웹접근성</span>
                      <span className="skill-tag">SEO</span>
                      <span className="skill-tag">성능최적화</span>
                    </div>
                  </div>
                </div>
              </section>

              <section id="portfolio" className="section fade-in">
                <h2 className="section-title">Portfolio</h2>
                <div className="portfolio-grid">
                  <div className="portfolio-item">
                    <div className="portfolio-header">
                      <div className="portfolio-icon">🏢</div>
                      <h3 className="portfolio-title">롯데호텔 채널시스템 리뉴얼</h3>
                      <span className="portfolio-type">호텔 홈페이지</span>
                    </div>
                    <div className="portfolio-content">
                      <p className="portfolio-description">
                        롯데호텔의 글로벌 브랜드 통합 사이트 리뉴얼 프로젝트로, 다양한 국가와 호텔
                        브랜드의 채널을 하나의 시스템으로 통합하여 일관된 UI/UX를 제공하는 것을
                        목표로 진행되었습니다. 퍼블리싱 파트 PA로 참여하여 호텔 상세, 객실,
                        프로모션, 예약 등 다수의 페이지 마크업을 담당하였으며, 다국어 지원과 반응형
                        웹 구현을 고려해 글로벌 사용자 경험을 개선하는 데 기여하였습니다. 디자인
                        가이드를 기반으로 한 컴포넌트 재사용성과 유지보수성을 높이기 위한 구조
                        설계에도 참여하였습니다.
                      </p>
                      <div className="tech-stack">
                        <span className="tech-item">HTML5</span>
                        <span className="tech-item">CSS3</span>
                        <span className="tech-item">JavaScript</span>
                        <span className="tech-item">SCSS</span>
                      </div>
                      <div className="portfolio-features">
                        ✨ 반응형 웹 , 다국어 지원, SEO 최적화
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-header">
                      <div className="portfolio-icon">🛍️</div>
                      <h3 className="portfolio-title">MG-제주연수원</h3>
                      <span className="portfolio-type">기업 홈페이지</span>
                    </div>
                    <div className="portfolio-content">
                      <p className="portfolio-description">
                        MG새마을금고 제주연수원의 교육 및 연수 정보를 보다 효과적으로 전달하고,
                        사용자의 접근성과 편의성을 높이기 위한 웹사이트 리뉴얼 프로젝트입니다.
                        퍼블리싱 파트 PL로 참여하여 요구사항 정의부터 마크업 구조 설계, 공통
                        컴포넌트 제작, 페이지 퍼블리싱까지 전반적인 퍼블리싱 업무를 리딩했습니다.
                        모바일 및 다양한 브라우저 환경에서도 최적의 UX를 제공할 수 있도록 반응형 웹
                        기준에 따라 구현하였으며, 관리 효율성을 고려한 컴포넌트 기반 구조로
                        재정비하였습니다.
                      </p>
                      <div className="tech-stack">
                        <span className="tech-item">HTML5</span>
                        <span className="tech-item">CSS3</span>
                        <span className="tech-item">JavaScript</span>
                        <span className="tech-item">Vue</span>
                      </div>
                      <div className="portfolio-features">✨ 반응형 웹, 웹 접근성 , SEO 최적화</div>
                    </div>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-header">
                      <div className="portfolio-icon">📊</div>
                      <h3 className="portfolio-title">금융 서비스 대시보드</h3>
                      <span className="portfolio-type">웹 애플리케이션</span>
                    </div>
                    <div className="portfolio-content">
                      <p className="portfolio-description">
                        복잡한 금융 데이터를 시각화하는 대시보드 프로젝트입니다. 차트와 테이블이
                        많은 화면에서도 직관적인 정보 전달이 가능하도록 레이아웃과 타이포그래피에
                        특별히 신경 썼습니다.
                      </p>
                      <div className="tech-stack">
                        <span className="tech-item">Vue.js</span>
                        <span className="tech-item">Chart.js</span>
                        <span className="tech-item">SCSS</span>
                        <span className="tech-item">Element UI</span>
                      </div>
                      <div className="portfolio-features">
                        ✨ 실시간 데이터 바인딩, 반응형 차트, 필터링, 데이터 시각화
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
