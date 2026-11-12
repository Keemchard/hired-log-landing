import styles from "./page.module.css";
import {
  IoBriefcase,
  IoFlash,
  IoBarChart,
  IoShieldCheckmark,
  IoApps,
  IoDocumentText,
  IoRibbon,
  IoChatbubbles,
  IoExtensionPuzzle,
} from "react-icons/io5";

const APP_URL = "https://hired-log.vercel.app";

const Logo = () => (
  <div className={styles.logoMark}>
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="7" fill="#2563eb" />
      <text x="5" y="19" fontFamily="monospace" fontWeight="800" fontSize="13" fill="white">&gt;_</text>
    </svg>
    <span className={styles.logoText}>
      hired<span className={styles.logoDot}>.log</span>
    </span>
  </div>
);

const StatusBadge = ({ label, color }: { label: string; color: string }) => (
  <span className={styles.statusBadge}>
    <span className={styles.statusDot} style={{ background: color }} />
    {label}
  </span>
);

export default function Home() {
  return (
    <div className={styles.wrapper}>

      {/* NAV */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Logo />
          <div className={styles.navLinks}>
            <a href="#features">Features</a>
            <a href="#ai-tools">AI tools</a>
            <a href="#how-it-works">How it works</a>
          </div>
          <div className={styles.navCtas}>
            <a href={APP_URL} className={styles.navLogin}>Log in</a>
            <a href={APP_URL} className={styles.btnFilled}>Get started free</a>
          </div>
          <a href={APP_URL} className={styles.btnFilledSm}>Get started</a>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <p className={styles.badge}>Free to use — no credit card needed</p>
          <h1 className={styles.heroH1}>
            Track every application.<br />Land the offer.
          </h1>
          <p className={styles.heroSub}>
            Log jobs, visualize your pipeline, generate cover letters, match your resume, and prep for interviews — all in one place.
          </p>
          <div className={styles.heroCtas}>
            <a href={APP_URL} className={styles.btnFilled}>Start tracking free</a>
            <a href={APP_URL} className={styles.btnOutline}>See the app</a>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.appCard}>
            <div className={styles.appCardHeader}>
              <span className={styles.appCardTitle}>Applications overview</span>
              <span className={styles.appCardMeta}>Last 30 days</span>
            </div>
            <div className={styles.statRow}>
              <div className={styles.statTile}>
                <span className={styles.statNumAccent}>12</span>
                <span className={styles.statLabel}>Applied</span>
              </div>
              <div className={styles.statTile}>
                <span className={styles.statNum}>4</span>
                <span className={styles.statLabel}>Active</span>
              </div>
              <div className={styles.statTile}>
                <span className={styles.statNum}>2</span>
                <span className={styles.statLabel}>Interviews</span>
              </div>
            </div>
            <div className={styles.statusBar}>
              <div className={styles.statusBarFill} />
            </div>
            <div className={styles.recentList}>
              <div className={styles.recentItem}>
                <div className={styles.recentInfo}>
                  <span className={styles.recentCompany}>Accenture</span>
                  <span className={styles.recentRole}>Software Engineer</span>
                </div>
                <StatusBadge label="Applied" color="#2563eb" />
              </div>
              <div className={styles.recentItem}>
                <div className={styles.recentInfo}>
                  <span className={styles.recentCompany}>Globe Telecom</span>
                  <span className={styles.recentRole}>Product Designer</span>
                </div>
                <StatusBadge label="Interview" color="#4cc38a" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className={styles.section} id="features">
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>Core features</div>
          <h2 className={styles.sectionH2}>Everything you need to manage your job hunt</h2>
          <p className={styles.sectionSub}>Track, visualize, analyze, and stay organized — from first application to signed offer.</p>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><IoBriefcase /></div>
              <h3>Application tracking</h3>
              <p>Log company, role, date, salary, contacts, and status. Know exactly where every application stands.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><IoApps /></div>
              <h3>Kanban board</h3>
              <p>Drag and drop applications between stages. See your entire pipeline from applied to offer.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><IoBarChart /></div>
              <h3>Analytics & insights</h3>
              <p>Response rates, interview rates, weekly trends, application funnel, work mode distribution, and more.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><IoExtensionPuzzle /></div>
              <h3>Chrome extension</h3>
              <p>Save jobs directly from LinkedIn, Indeed, and Kalibrr with one click. No copy-pasting needed.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><IoShieldCheckmark /></div>
              <h3>Private & secure</h3>
              <p>Your data lives in your account, not spreadsheets. Authenticated, encrypted, and yours alone.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><IoFlash /></div>
              <h3>Fast & flexible</h3>
              <p>Search, filter, sort by any field. Dark and light themes. Mobile-responsive. Built for speed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI TOOLS */}
      <section className={styles.sectionAlt} id="ai-tools">
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>AI tools</div>
          <h2 className={styles.sectionH2}>Your career assistant, built in</h2>
          <p className={styles.sectionSub}>Powered by Gemini — extraction, generation, analysis, and coaching in every feature.</p>

          <div className={styles.aiGrid}>
            <div className={styles.aiCard}>
              <div className={styles.aiCardIcon}>
                <IoFlash />
              </div>
              <div className={styles.aiCardContent}>
                <h3>Auto-fill from job posting</h3>
                <p>Paste a job description or screenshot — AI extracts company, role, location, salary, and more. Less typing, more applying.</p>
              </div>
              <div className={styles.aiCardTag}>Text + image</div>
            </div>

            <div className={styles.aiCard}>
              <div className={styles.aiCardIcon}>
                <IoDocumentText />
              </div>
              <div className={styles.aiCardContent}>
                <h3>Cover letter generator</h3>
                <p>Generate tailored cover letters for any application. Select a job, add your background, and get a polished letter instantly.</p>
              </div>
              <div className={styles.aiCardTag}>One-click</div>
            </div>

            <div className={styles.aiCard}>
              <div className={styles.aiCardIcon}>
                <IoRibbon />
              </div>
              <div className={styles.aiCardContent}>
                <h3>Resume match score</h3>
                <p>Paste your resume and a job description — get a match percentage, matched and missing skills, strengths, and actionable suggestions.</p>
              </div>
              <div className={styles.aiCardTag}>ATS analysis</div>
            </div>

            <div className={styles.aiCard}>
              <div className={styles.aiCardIcon}>
                <IoChatbubbles />
              </div>
              <div className={styles.aiCardContent}>
                <h3>Interview prep</h3>
                <p>Practice with AI-generated questions tailored to your role — behavioral, technical, and situational. Get rated with feedback on every answer.</p>
              </div>
              <div className={styles.aiCardTag}>8 questions per session</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.section} id="how-it-works">
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>How it works</div>
          <h2 className={styles.sectionH2}>Three steps to a smarter job hunt</h2>
          <div className={styles.stepsRow}>
            <div className={styles.step}>
              <div className={styles.stepNum}>01</div>
              <h3 className={styles.stepTitle}>Create your account</h3>
              <p className={styles.stepDesc}>Sign up free with email or Google. Takes under a minute.</p>
            </div>
            <div className={styles.stepDivider} />
            <div className={styles.step}>
              <div className={styles.stepNum}>02</div>
              <h3 className={styles.stepTitle}>Log your applications</h3>
              <p className={styles.stepDesc}>Add manually, use AI auto-fill, or save directly from job boards with the Chrome extension.</p>
            </div>
            <div className={styles.stepDivider} />
            <div className={styles.step}>
              <div className={styles.stepNum}>03</div>
              <h3 className={styles.stepTitle}>Analyze, prep, and get the offer</h3>
              <p className={styles.stepDesc}>Track your pipeline, spot patterns, generate cover letters, match your resume, and ace your interviews.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection} id="about">
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaH2}>Ready to land that offer?</h2>
          <p className={styles.ctaSub}>hired.log is free — tracking, analytics, AI tools, and all. Start now.</p>
          <a href={APP_URL} className={styles.btnFilledLg}>Get started — it&apos;s free</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Logo />
          <span className={styles.footerCredit}>Made by <strong>KC</strong> · 2026</span>
        </div>
      </footer>

    </div>
  );
}
