import styles from "./page.module.css";
import {
  IoBriefcase,
  IoFlash,
  IoBarChart,
  IoShieldCheckmark,
} from "react-icons/io5";

const APP_URL = "https://job-tracker-one-mocha.vercel.app";

const Logo = () => (
  <div className={styles.logoMark}>
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="7" fill="#6366f1" />
      <text x="5" y="19" fontFamily="monospace" fontWeight="800" fontSize="13" fill="white">&gt;_</text>
    </svg>
    <span className={styles.logoText}>
      hired<span className={styles.logoDot}>.log</span>
    </span>
  </div>
);

const StatusBadge = ({ label, color }: { label: string; color: string }) => (
  <span className={styles.statusBadge} style={{ color, background: `${color}18` }}>{label}</span>
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
            <a href="#how-it-works">How it works</a>
            <a href="#about">About</a>
          </div>
          <div className={styles.navCtas}>
            <a href={APP_URL} className={styles.navLogin}>Login</a>
            <a href={APP_URL} className={styles.btnFilled}>Get Started Free →</a>
          </div>
          <a href={APP_URL} className={styles.btnFilledSm}>Get Started</a>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroLeft}>
          <div className={styles.badge}>✦ Free to use · No credit card needed</div>
          <h1 className={styles.heroH1}>
            Your job hunt.<br />Documented.
          </h1>
          <p className={styles.heroSub}>
            Stop losing track of where you applied. hired.log keeps every application, status, and note in one clean dashboard — so you can focus on landing the job.
          </p>
          <div className={styles.heroCtas}>
            <a href={APP_URL} className={styles.btnFilled}>Start tracking free →</a>
            <a href={APP_URL} className={styles.btnOutline}>See the app</a>
          </div>
          <p className={styles.heroProof}>Built for job hunters who mean business.</p>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.appCard}>
            <div className={styles.appCardHeader}>
              <span className={styles.appCardTitle}>Applications Overview</span>
              <span className={styles.appCardMeta}>Last 30 days</span>
            </div>
            <div className={styles.statRow}>
              <div className={styles.statTile}>
                <span className={styles.statNum} style={{ color: "#6366f1" }}>12</span>
                <span className={styles.statLabel}>Applied</span>
              </div>
              <div className={styles.statTile}>
                <span className={styles.statNum} style={{ color: "#3b82f6" }}>4</span>
                <span className={styles.statLabel}>Active</span>
              </div>
              <div className={styles.statTile}>
                <span className={styles.statNum} style={{ color: "#10b981" }}>2</span>
                <span className={styles.statLabel}>Interviews</span>
              </div>
            </div>
            <div className={styles.statusBar}>
              <div className={styles.statusBarFill} style={{ width: "45%", background: "#6366f1" }} />
              <div className={styles.statusBarFill} style={{ width: "25%", background: "#3b82f6" }} />
              <div className={styles.statusBarFill} style={{ width: "15%", background: "#10b981" }} />
              <div className={styles.statusBarFill} style={{ width: "15%", background: "#ef4444" }} />
            </div>
            <div className={styles.recentList}>
              <div className={styles.recentItem}>
                <div className={styles.recentInfo}>
                  <span className={styles.recentCompany}>Accenture</span>
                  <span className={styles.recentRole}>Software Engineer</span>
                </div>
                <StatusBadge label="Applied" color="#6366f1" />
              </div>
              <div className={styles.recentItem}>
                <div className={styles.recentInfo}>
                  <span className={styles.recentCompany}>Globe Telecom</span>
                  <span className={styles.recentRole}>Product Designer</span>
                </div>
                <StatusBadge label="Interview" color="#10b981" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.section} id="features">
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>Features</div>
          <h2 className={styles.sectionH2}>Everything you need.<br />Nothing you don&apos;t.</h2>
          <p className={styles.sectionSub}>A focused tool built for one job: helping you get a job.</p>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><IoBriefcase /></div>
              <h3>Track Every Application</h3>
              <p>Log the company, role, date, and status. Know exactly where every application stands at a glance.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><IoFlash /></div>
              <h3>AI-Powered Extraction</h3>
              <p>Paste a job description and let AI pull the details for you. Less typing, more applying.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><IoBarChart /></div>
              <h3>Dashboard Insights</h3>
              <p>See your pipeline at a glance — total applied, active, interviews, offers, and rejection rate.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><IoShieldCheckmark /></div>
              <h3>Private & Secure</h3>
              <p>Your data lives in your account, not spreadsheets. Authenticated and secured.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.section} id="how-it-works">
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>How it works</div>
          <h2 className={styles.sectionH2}>Three steps to a cleaner job hunt.</h2>
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
              <p className={styles.stepDesc}>Add companies, roles, and statuses. Use AI to auto-fill from job postings.</p>
            </div>
            <div className={styles.stepDivider} />
            <div className={styles.step}>
              <div className={styles.stepNum}>03</div>
              <h3 className={styles.stepTitle}>Track your progress</h3>
              <p className={styles.stepDesc}>Watch your pipeline. Follow up smarter. Land that offer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection} id="about">
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaH2}>Ready to get organized?</h2>
          <p className={styles.ctaSub}>hired.log is free. Start logging your applications today.</p>
          <a href={APP_URL} className={styles.btnFilledLg}>Get started — it&apos;s free →</a>
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
