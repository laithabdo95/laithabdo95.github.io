import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const linkedin = 'https://www.linkedin.com/in/laithabdo95';
const github = 'https://github.com/laithabdo95';
const resume = '/Laith_Abdo_iOS_Lead_Resume.pdf';
const email = 'laith_abdo@yahoo.com';

const jobs = [
  { company: 'Access 2 Arabia', role: 'iOS Lead', date: 'Mar 2021 — Present', current: true, body: 'Translating client requirements into mobile solutions, from early prototypes to release. Integrating Apple Pay, rewards, and ID-scanning SDKs, with a focus on architecture, debugging, caching, and automated testing.', tags: ['Technical delivery', 'SDK integration', 'Architecture'] },
  { company: 'Kaizen Plus', role: 'iOS Developer', date: 'Nov 2019 — Mar 2021', body: 'Built complex in-app animations and collaborated with design teams to create polished, responsive mobile experiences.', tags: ['Interaction design', 'Animations'] },
  { company: 'Umniah', role: 'iOS Developer', date: 'Jun 2018 — Nov 2019', body: 'Planned and implemented application logic with supporting tests. Refactored and redesigned an existing production application to improve maintainability and the user experience.', tags: ['Application redesign', 'Testing'] },
  { company: 'MobileNOC', role: 'iOS Developer', date: 'Nov 2017 — Jun 2018', body: 'Developed iOS applications for client projects and adaptive interfaces across multiple screen sizes, including iPad.', tags: ['Native development', 'Adaptive interfaces'] },
];

const skills: [string, string, string[]][] = [
  ['01', 'iOS development', ['SwiftUI', 'UIKit', 'Objective-C', 'iPhone & iPad']],
  ['02', 'Architecture & quality', ['Architecture patterns', 'Design patterns', 'Unit & UI testing', 'Debugging & caching']],
  ['03', 'Tooling & delivery', ['Git', 'Fastlane', 'CocoaPods & SPM', 'Firebase']],
  ['04', 'Integrations', ['Apple Pay', 'Payment gateways: HyperPay, PayFort', 'Rewards systems', 'ID scanning', 'Third-party SDKs']],
];

const marquee = ['SwiftUI', 'UIKit', 'The Composable Architecture', 'MVVM', 'Apple Pay', 'Fastlane', 'Unit & UI testing', 'Objective-C'];

const uwalletScreens = [
  { file: 'uwallet-walkthrough.webp', title: 'Getting started', alt: 'UWallet onboarding screen with customer and merchant account options' },
  { file: 'uwallet-home.webp', title: 'Home', alt: 'UWallet home screen with account and payment controls' },
  { file: 'uwallet-loyalty.webp', title: 'Neqati loyalty', alt: 'UWallet Neqati screen with points, rewards, and referrals' },
  { file: 'uwallet-evoucher.webp', title: 'eVoucher', alt: 'UWallet eVoucher catalog with games, entertainment, and shopping categories' },
];

type App = {
  name: string;
  arabic?: boolean;
  subtitle?: string;
  eyebrow: string;
  body: string;
  tags: string[];
  url: string;
  icon: string;
  iconBg: string;
  iconInk?: string;
  splash: string;
  screen?: { src: string; alt: string; width: number; height: number; glow: string; device?: 'classic' };
};

const apps: App[] = [
  { name: 'Cairo Amman Bank', eyebrow: 'Banking · Access 2 Arabia', body: 'Built and improved the iOS application, with leadership responsibilities on the project. Integrated Apple Wallet, identity verification (IDV), digital onboarding and KYC, a rewards system, and QR scanning. Built with UIKit and MVP.', tags: ['UIKit', 'MVP', 'Mobile banking', 'Project lead', 'Apple Wallet', 'IDV', 'Digital onboarding & KYC', 'Rewards', 'QR scanning'], url: 'https://apps.apple.com/jo/app/cab-mobile-banking/id942919872', icon: 'CAB', iconBg: 'linear-gradient(135deg,#3e7bff,#0b2a73)', splash: 'CAB Mobile Banking', screen: { src: '/projects/cab-home.webp', alt: 'Cairo Amman Bank Signature home screen with account balances, services, and transactions', width: 656, height: 1422, glow: '#3fae4f' } },
  { name: 'MadPay Palestine', eyebrow: 'Fintech · Access 2 Arabia', body: 'Improved the iOS application and led development work. Built with UIKit and MVP, with identity verification (IDV), digital onboarding, and QR scanning.', tags: ['UIKit', 'MVP', 'Digital wallet', 'Dev lead', 'IDV', 'Digital onboarding', 'QR scanning'], url: 'https://apps.apple.com/us/app/madpay-palestine/id1580948267', icon: 'MP', iconBg: 'linear-gradient(135deg,#f4c873,#c98a1e)', iconInk: '#0a1a3f', splash: 'MadPay' },
  { name: 'Amanty', eyebrow: 'Fintech · Access 2 Arabia', body: 'Improved the iOS application and led development work. Built with UIKit and MVP, with identity verification (IDV), digital onboarding, and QR scanning.', tags: ['UIKit', 'MVP', 'Fintech', 'Dev lead', 'IDV', 'Digital onboarding', 'QR scanning'], url: 'https://apps.apple.com/gm/app/amanty/id1618942525', icon: 'A', iconBg: 'linear-gradient(135deg,#5fd3c7,#1b6e8c)', splash: 'Amanty' },
  { name: 'Umniah', eyebrow: 'Telecom · Umniah', body: 'Contributed improvements to the existing application, including an Apple Watch integration and a HealthKit connection that tracks the user’s steps to earn umnicoin rewards.', tags: ['UIKit', 'MVC', 'Apple Watch', 'HealthKit', 'Payment gateways'], url: 'https://apps.apple.com/jo/app/umniah/id786186903', icon: 'U', iconBg: 'linear-gradient(135deg,#a98bff,#4b2db5)', splash: 'Umniah', screen: { src: '/projects/umniah-umnicoin.webp', alt: 'Umniah umnicoin rewards screen with coin balance, daily reward, level, and services', width: 720, height: 1280, glow: '#1fa3b8', device: 'classic' } },
  { name: 'النادي الفيصلي', arabic: true, subtitle: 'Al-Faisaly Club', eyebrow: 'Sports · Umniah', body: 'Built and improved the application, and led development work.', tags: ['UIKit', 'MVC', 'Payment gateways'], url: 'https://apps.apple.com/jo/app/id1441623768', icon: 'F', iconBg: 'linear-gradient(135deg,#5b8cff,#1a3fa8)', splash: 'الفيصلي' },
  { name: 'نادي الوحدات', arabic: true, subtitle: 'Al-Wehdat Club', eyebrow: 'Sports · Umniah', body: 'Built and improved the application, and led development work.', tags: ['UIKit', 'MVC', 'Payment gateways'], url: 'https://apps.apple.com/jo/app/id1441623571', icon: 'W', iconBg: 'linear-gradient(135deg,#5fd38a,#1e7a45)', splash: 'الوحدات' },
];

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg>
);
const Down = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
);

const StoreLink = ({ url, label }: { url: string; label: string }) => (
  <a className="store" href={url} target="_blank" rel="noreferrer" aria-label={'View ' + label + ' on the App Store'}><Arrow />View on the App Store</a>
);

/** Drives scroll effects with plain JS so they run in every browser, Safari included. */
function useScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const flaps = Array.from(document.querySelectorAll<HTMLElement>('.flap'));
    const reveals = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    if (reduce) {
      flaps.forEach((el) => el.style.setProperty('--p', '1'));
      reveals.forEach((el) => el.classList.add('shown'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('shown'); io.unobserve(e.target); } }),
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    );
    reveals.forEach((el) => io.observe(el));

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const max = root.scrollHeight - vh;
      root.style.setProperty('--scroll', String(max > 0 ? window.scrollY / max : 0));
      flaps.forEach((el) => {
        // Sticky slots report their stuck position, so measure the in-flow anchor placed right before each slot.
        const anchor = el.parentElement?.previousElementSibling as HTMLElement | null;
        if (!anchor) return;
        // Stick at the stacked offset, but never so low that a tall card's bottom stays off-screen.
        const slot = el.parentElement as HTMLElement;
        const base = Number(slot.dataset.top ?? 84);
        slot.style.top = Math.min(base, vh - el.offsetHeight - 16) + 'px';
        const top = anchor.getBoundingClientRect().top;
        const start = vh;          // card top at viewport bottom → p = 0
        const end = vh * 0.25;     // card top at 25% of viewport → p = 1
        const p = Math.min(1, Math.max(0, (start - top) / (start - end)));
        el.style.setProperty('--p', p.toFixed(4));
      });
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
}

function App() {
  const [menu, setMenu] = useState(false);
  const [screen, setScreen] = useState(1);
  useScrollEffects();
  const current = uwalletScreens[screen];

  return (
    <div className="pf">
      <a className="skip" href="#main">Skip to content</a>
      <div className="progress" aria-hidden="true" />

      <header className="nav">
        <div className="shell nav-row">
          <a className="brand" href="#top" aria-label="Laith Abdo home"><span className="brand-mark" aria-hidden="true">L</span>Laith Abdo</a>
          <button className="menu" aria-expanded={menu} aria-controls="navigation" onClick={() => setMenu(!menu)}>{menu ? 'Close' : 'Menu'}</button>
          <nav id="navigation" className={menu ? 'open' : ''} aria-label="Main navigation">
            {[['Work', 'work'], ['Journey', 'journey'], ['Toolkit', 'toolkit']].map(([n, id]) => (
              <a key={id} className="navlink" href={'#' + id} onClick={() => setMenu(false)}>{n}</a>
            ))}
            <a className="btn btn-solid btn-sm" href="#contact" onClick={() => setMenu(false)}>Let’s talk</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero">
          <div className="grid-bg" aria-hidden="true" />
          <div className="orb orb-a" aria-hidden="true" />
          <div className="orb orb-b" aria-hidden="true" />
          <div className="orb orb-c" aria-hidden="true" />
          <div className="shell hero-row">
            <div className="hero-copy">
              <div className="pill in d1"><span className="live" aria-hidden="true" />iOS Lead · Amman, Jordan</div>
              <h1 className="in d2">Thoughtful code.<br /><span className="shine">Seamless</span> experiences.</h1>
              <p className="lead in d3">I’m Laith Abdo. I turn complex requirements into intuitive iOS applications — from the first prototype to production.</p>
              <div className="row in d4">
                <a className="btn btn-solid" href="#work">See the apps <Down /></a>
                <a className="btn btn-ghost" href={resume} download>Download résumé <Arrow /></a>
              </div>
              <dl className="stats in d5">
                <div><dt>Shipping iOS since</dt><dd>2017</dd></div>
                <div><dt>Apps shipped to the App Store</dt><dd>20+</dd></div>
                <div><dt>Teams led &amp; built with</dt><dd>4</dd></div>
              </dl>
            </div>
            <div className="hero-visual in d3">
              <div className="fan">
                <div className="ph ph-l"><img src="/projects/uwallet-walkthrough.webp" alt="UWallet getting started screen" width="900" height="1942" /></div>
                <div className="ph ph-r"><img src="/projects/uwallet-loyalty.webp" alt="UWallet Neqati loyalty screen" width="900" height="1942" /></div>
                <div className="ph ph-c"><img src="/projects/uwallet-home.webp" alt="UWallet home screen" width="900" height="1944" /></div>
              </div>
            </div>
          </div>
        </section>

        <div className="ribbon" aria-hidden="true">
          <div className="marquee">
            {[...marquee, ...marquee].map((m, i) => <React.Fragment key={i}><span>{m}</span><span className="star">✦</span></React.Fragment>)}
          </div>
        </div>

        <section id="work" className="section">
          <div className="shell">
            <div className="section-head reveal">
              <div>
                <p className="eyebrow">01 / Selected work</p>
                <h2>Apps built.<br />Experience earned.</h2>
              </div>
              <p className="muted">A top selection from 20+ apps shipped across fintech, banking, telecom, sports and news. Keep scrolling — each app flips into view.</p>
            </div>

            <div className="deck">
              <div className="flap-anchor" aria-hidden="true" />
              <div className="slot" data-top="84">
                <article className="card flap">
                  <div className="bignum" aria-hidden="true">01</div>
                  <div className="card-copy">
                    <p className="eyebrow gold">Featured · Access 2 Arabia</p>
                    <h3>UWallet</h3>
                    <p className="tagline">Payments, vouchers and loyalty in one wallet.</p>
                    <p className="muted">Built onboarding, e-vouchers, eFAWATEERcom, transactions, locator and transfer features, alongside improvements to other services. Worked with SwiftUI, MVVM, the Coordinator pattern and The Composable Architecture (TCA).</p>
                    <div className="chips">{['SwiftUI', 'MVVM', 'Coordinator', 'TCA'].map((t) => <span key={t} className="chip">{t}</span>)}</div>
                    <div className="chips" role="group" aria-label="UWallet screens">
                      {uwalletScreens.map((s, i) => (
                        <button key={s.file} type="button" className={'tab' + (i === screen ? ' tab-on' : '')} aria-pressed={i === screen} onClick={() => setScreen(i)}>{s.title}</button>
                      ))}
                    </div>
                    <div><StoreLink url="https://apps.apple.com/jo/app/uwallet-jo/id1517825593" label="UWallet" /></div>
                  </div>
                  <div className="card-visual">
                    <div className="glow" aria-hidden="true" />
                    <a key={current.file} className="ph ph-lg swap" href={'/projects/' + current.file} target="_blank" rel="noreferrer" aria-label={'View ' + current.title + ' screenshot at full size'}>
                      <img src={'/projects/' + current.file} alt={current.alt} width="900" height="1944" />
                    </a>
                  </div>
                </article>
              </div>

              <div className="flap-anchor" aria-hidden="true" />
              <div className="slot" data-top="100">
                <article className="card flap">
                  <div className="bignum" aria-hidden="true">02</div>
                  <div className="card-copy">
                    <p className="eyebrow">Freelance · iOS Developer</p>
                    <h3>Al Mamlaka</h3>
                    <p className="ar arabic-sub" lang="ar" dir="rtl">قناة المملكة</p>
                    <p className="muted">Built the iOS app for Al Mamlaka TV, Jordan’s public news channel, as a freelance project. Built with UIKit and MVP, with native animations throughout.</p>
                    <div className="chips">{['UIKit', 'MVP', 'Native animations', 'News & media', 'Video'].map((t) => <span key={t} className="chip">{t}</span>)}</div>
                    <div className="row">
                      <StoreLink url="https://apps.apple.com/jo/app/id1409528277" label="Al Mamlaka" />
                      <a className="btn btn-ghost" href="/projects/al-mamlaka-demo.mp4" target="_blank" rel="noreferrer">Watch the demo</a>
                    </div>
                  </div>
                  <div className="card-visual">
                    <div className="glow glow-red" aria-hidden="true" />
                    <a className="ph ph-lg" href="/projects/al-mamlaka-home.webp" target="_blank" rel="noreferrer" aria-label="View Al Mamlaka headlines screenshot at full size">
                      <img src="/projects/al-mamlaka-home.webp" alt="Al Mamlaka headlines screen with a breaking news story card" loading="lazy" width="920" height="2000" />
                    </a>
                  </div>
                </article>
              </div>

              {apps.map((a, i) => (
                <React.Fragment key={a.url}>
                <div className="flap-anchor" aria-hidden="true" />
                <div className="slot" data-top={116 + i * 16}>
                  <article className="card flap">
                    <div className="bignum" aria-hidden="true">{String(i + 3).padStart(2, '0')}</div>
                    <div className="card-copy">
                      <p className="eyebrow">{a.eyebrow}</p>
                      <h3 className={a.arabic ? 'ar' : undefined} lang={a.arabic ? 'ar' : undefined}>{a.name}</h3>
                      {a.subtitle && <p className="tagline">{a.subtitle}</p>}
                      <p className="muted">{a.body}</p>
                      <div className="chips">{a.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
                      <div><StoreLink url={a.url} label={a.subtitle ?? a.name} /></div>
                    </div>
                    <div className="card-visual">
                      {a.screen ? (
                        <>
                          <div className="glow" style={{ background: a.screen.glow, opacity: 0.3 }} aria-hidden="true" />
                          {a.screen.device === 'classic' ? (
                            <div className="classic">
                              <div className="classic-top" aria-hidden="true"><span className="classic-cam" /><span className="classic-speaker" /></div>
                              <a className="classic-screen" href={a.screen.src} target="_blank" rel="noreferrer" aria-label={'View ' + (a.subtitle ?? a.name) + ' screenshot at full size'}>
                                <img src={a.screen.src} alt={a.screen.alt} loading="lazy" width={a.screen.width} height={a.screen.height} />
                              </a>
                              <div className="classic-bottom" aria-hidden="true"><span className="classic-home" /></div>
                            </div>
                          ) : (
                            <a className="ph ph-lg" style={{ height: 'auto', aspectRatio: a.screen.width + ' / ' + a.screen.height }} href={a.screen.src} target="_blank" rel="noreferrer" aria-label={'View ' + (a.subtitle ?? a.name) + ' screenshot at full size'}>
                              <img src={a.screen.src} alt={a.screen.alt} loading="lazy" width={a.screen.width} height={a.screen.height} />
                            </a>
                          )}
                        </>
                      ) : (
                        <div className="ph ph-md">
                          <div className="splash">
                            <div className="icon" style={{ background: a.iconBg, color: a.iconInk ?? '#fff' }}>{a.icon}</div>
                            <div className={a.arabic ? 'ar splash-name' : 'splash-name'}>{a.splash}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                </div>
                </React.Fragment>
              ))}
            </div>
            <p className="note reveal">These 8 are a top selection from 20+ apps I’ve shipped to the App Store, plus private company applications and projects no longer listed.</p>
          </div>
        </section>

        <section id="journey" className="section">
          <div className="shell split">
            <div className="split-head reveal">
              <p className="eyebrow">02 / The journey</p>
              <h2>Experience,<br />in practice.</h2>
              <p className="muted">Building mobile experiences. Taking ownership of the details.</p>
            </div>
            <ol className="timeline">
              {jobs.map((j) => (
                <li key={j.company} className={'tl-item reveal' + (j.current ? ' tl-current' : '')}>
                  <span className="tl-dot" aria-hidden="true" />
                  <p className="tl-date">{j.date}{j.current && ' · Current role'}</p>
                  <h3>{j.role} <span>· {j.company}</span></h3>
                  <p className="muted">{j.body}</p>
                  <div className="chips">{j.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="toolkit" className="section band">
          <div className="shell">
            <div className="reveal head-narrow">
              <p className="eyebrow">03 / The toolkit</p>
              <h2>Native at heart.<br />Versatile by design.</h2>
            </div>
            <div className="tiles">
              {skills.map(([n, title, list]) => (
                <article className="tile reveal" key={n}>
                  <span className="tile-num">{n}</span>
                  <h3>{title}</h3>
                  <div className="chips">{list.map((s) => <span key={s} className="chip">{s}</span>)}</div>
                </article>
              ))}
            </div>
            <div className="tiles two">
              <div className="tile reveal"><p className="eyebrow sm">Education</p><p className="tile-big">Bachelor’s Degree in Computer Science</p><p className="muted">Al al-Bayt University</p></div>
              <div className="tile reveal"><p className="eyebrow sm">Languages</p><p className="tile-big">Arabic · Native</p><p className="muted">English · Professional working proficiency</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="orb orb-contact" aria-hidden="true" />
          <div className="shell contact-inner">
            <p className="eyebrow reveal">04 / Say hello</p>
            <h2 className="reveal">Great experiences start with a <span className="shine">conversation.</span></h2>
            <a className="btn btn-solid btn-lg reveal" href={'mailto:' + email}>{email} <Arrow /></a>
            <div className="row center reveal">
              <a className="btn btn-ghost" href="tel:+962798160928">+962 79 816 0928</a>
              <a className="btn btn-ghost" href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn btn-ghost" href={github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn btn-ghost" href={resume} target="_blank" rel="noreferrer">Résumé</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="shell footer">
        <span>© {new Date().getFullYear()} Laith Abdo · iOS Lead · Amman, Jordan</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
