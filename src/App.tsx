import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileCheck2,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';

const phone = '0719327344';
const email = 'martinndirangu516@gmail.com';
const wa = 'https://wa.me/254719327344';

const services = [
  {
    icon: Calculator,
    number: '01',
    title: 'KRA Tax Filing & Returns',
    text: 'Support with tax return preparation, filing and practical tax compliance guidance for individuals and businesses.',
  },
  {
    icon: ClipboardCheck,
    number: '02',
    title: 'Audit & Assurance',
    text: 'Independent audit and assurance support focused on clear reporting, accountability and confidence in financial information.',
  },
  {
    icon: Zap,
    number: '03',
    title: 'eTIMS Installation & Registration',
    text: 'Guidance through eTIMS registration, setup and onboarding so your business can get started with electronic invoicing.',
  },
  {
    icon: BriefcaseBusiness,
    number: '04',
    title: 'Business Advisory',
    text: 'Practical business guidance to support sound decisions, stronger financial processes and sustainable growth.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'KRA Tax Filing & Returns',
    message: '',
  });
  const [error, setError] = useState('');

  const closeMenu = () => setMenuOpen(false);
  const submit = event => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please complete your name, email address and message.');
      return;
    }
    setError('');
    const subject = encodeURIComponent('Client enquiry - ' + form.service);
    const body = encodeURIComponent(
      'Name: ' +
        form.name +
        '\nEmail: ' +
        form.email +
        '\nService: ' +
        form.service +
        '\n\nMessage:\n' +
        form.message
    );
    window.location.href =
      'mailto:' + email + '?subject=' + subject + '&body=' + body;
  };

  return (
    <div className="site-shell">
      <div className="topline">
        <span>PROFESSIONAL ACCOUNTING • TAX • ADVISORY</span>
        <span className="top-contact">
          <Phone size={13} /> {phone} <i />{' '}
          <span>Serving individuals & businesses in Kenya</span>
        </span>
      </div>
      <header className="header">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Martin Wanjau Ndirangu home"
        >
          <span className="brand-mark">
            <BarChart3 size={25} />
          </span>
          <span>
            <strong>
              MWN<span>.</span>
            </strong>
            <small>ACCOUNTING & ADVISORY</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#approach" onClick={closeMenu}>
            Why work with me
          </a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRightIcon />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" />
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" /> TRUSTED FINANCIAL GUIDANCE
            </div>
            <h1>
              Clarity in your
              <br />
              <em>numbers.</em>
              <br />
              Confidence in
              <br />
              your next move.
            </h1>
            <p className="hero-lead">
              Professional audit, taxation and business advisory services to
              help you stay compliant, make informed decisions and move your
              business forward.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#contact">
                Book a consultation <ArrowRight size={17} />
              </a>
              <a className="text-link" href="#services">
                Explore services <ArrowDownRight size={17} />
              </a>
            </div>
            <div className="hero-proof">
              <span>
                <BadgeCheck size={17} /> CPAK professional
              </span>
              <span>
                <ShieldCheck size={17} /> Confidential approach
              </span>
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="Abstract three dimensional financial growth illustration"
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="glass-panel panel-back">
              <span>FINANCIAL CLARITY</span>
              <div className="mini-bars">
                <b />
                <b />
                <b />
                <b />
                <b />
                <b />
                <b />
              </div>
            </div>
            <div className="coin coin-one">KSh</div>
            <div className="coin coin-two">✓</div>
            <div className="glass-panel panel-main">
              <div className="panel-head">
                <span>YOUR FINANCES</span>
                <span className="live-dot">●</span>
              </div>
              <div className="chart-label">A clearer way forward</div>
              <svg
                viewBox="0 0 340 150"
                role="img"
                aria-label="Illustrative rising financial trend"
              >
                <defs>
                  <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#d7b56d" stopOpacity=".35" />
                    <stop offset="100%" stopColor="#d7b56d" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 125 C35 110 45 115 75 92 S125 100 155 70 S205 80 230 48 S285 57 340 12 L340 150 L0 150Z"
                  fill="url(#area)"
                />
                <path
                  d="M0 125 C35 110 45 115 75 92 S125 100 155 70 S205 80 230 48 S285 57 340 12"
                  fill="none"
                  stroke="#d9b86f"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="340" cy="12" r="5" fill="#f5d99a" />
              </svg>
              <div className="panel-foot">
                <span>COMPLIANCE</span>
                <strong>Built on confidence</strong>
              </div>
            </div>
            <div className="floating-note">
              <span className="note-icon">
                <CheckCircle2 size={18} />
              </span>
              <span>
                <b>Stay on track</b>
                <small>Plan with confidence</small>
              </span>
            </div>
            <div className="art-caption">
              STRATEGY <span>×</span> INTEGRITY <span>×</span> RESULTS
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            SCROLL TO DISCOVER <span />
          </a>
        </section>

        <section className="intro-strip">
          <div>
            <span className="strip-number">01 /</span>
            <strong>Professional integrity</strong>
            <small>Careful, responsible service</small>
          </div>
          <div>
            <span className="strip-number">02 /</span>
            <strong>Practical solutions</strong>
            <small>Guidance that makes sense</small>
          </div>
          <div>
            <span className="strip-number">03 /</span>
            <strong>Client focused</strong>
            <small>Your goals come first</small>
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="section-kicker">
            A PROFESSIONAL YOU CAN TALK TO <span>— ABOUT</span>
          </div>
          <div className="about-layout">
            <div>
              <h2>
                Sound numbers.
                <br />
                <em>Stronger decisions.</em>
              </h2>
              <div className="about-stamp">
                <BookOpenCheck size={25} />
                <span>
                  KNOWLEDGE
                  <br />& ACCOUNTABILITY
                </span>
              </div>
            </div>
            <div className="about-text">
              <p className="large-copy">
                I’m <strong>Martin Wanjau Ndirangu</strong>, a Certified Public
                Accountant of Kenya (CPAK), offering audit, taxation and
                business advisory services.
              </p>
              <p>
                My focus is to make financial and compliance matters easier to
                understand, helping individuals and businesses approach their
                responsibilities with clarity and confidence.
              </p>
              <p>
                Whether you need support with tax returns, audit and assurance,
                eTIMS setup or business decisions, let's discuss a practical way
                forward.
              </p>
              <a className="underlined-link" href="#contact">
                Get in touch <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="services-heading">
            <div>
              <div className="section-kicker">
                HOW I CAN HELP <span>— SERVICES</span>
              </div>
              <h2>
                Expertise for every
                <br />
                <em>business chapter.</em>
              </h2>
            </div>
            <p>
              Clear, dependable support for the financial tasks that keep your
              business accountable and moving.
            </p>
          </div>
          <div className="service-grid">
            {services.map(service => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.number}>
                  <div className="service-top">
                    <span>{service.number}</span>
                    <Icon size={26} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a
                    href="#contact"
                    aria-label={'Enquire about ' + service.title}
                  >
                    Discuss this service <ArrowUpRightIcon />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="approach section-pad" id="approach">
          <div className="approach-visual">
            <div className="big-orbit" />
            <div className="approach-core">
              <ShieldCheck size={54} />
              <span>
                TRUST
                <br />
                IN EVERY
                <br />
                DETAIL
              </span>
            </div>
            <div className="orbit-label label-a">INTEGRITY</div>
            <div className="orbit-label label-b">CLARITY</div>
            <div className="orbit-label label-c">CARE</div>
          </div>
          <div className="approach-copy">
            <div className="section-kicker">
              THE DIFFERENCE <span>— MY APPROACH</span>
            </div>
            <h2>
              Professional service.
              <br />
              <em>Personal attention.</em>
            </h2>
            <p>
              Financial matters deserve attention, discretion and clear
              communication. Every engagement starts with understanding what you
              need and agreeing on the right next step.
            </p>
            <ul>
              <li>
                <CheckCircle2 /> Clear communication and practical guidance
              </li>
              <li>
                <CheckCircle2 /> Respect for client confidentiality
              </li>
              <li>
                <CheckCircle2 /> A careful, detail-oriented approach
              </li>
              <li>
                <CheckCircle2 /> Support shaped around your needs
              </li>
            </ul>
            <a className="button button-outline" href="#contact">
              Talk about your needs <ArrowRight size={17} />
            </a>
          </div>
        </section>

        <section className="cta-band">
          <div className="cta-glow" />
          <div>
            <div className="section-kicker">YOUR NEXT STEP STARTS HERE</div>
            <h2>
              Let's make your
              <br />
              <em>numbers work for you.</em>
            </h2>
          </div>
          <a
            className="button button-gold"
            href={wa}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp <ArrowUpRightIcon />
          </a>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-info">
            <div className="section-kicker">
              START A CONVERSATION <span>— CONTACT</span>
            </div>
            <h2>
              Let's talk about
              <br />
              <em>what you need.</em>
            </h2>
            <p>
              Have a question or need professional support? Send an enquiry and
              let's take it from there.
            </p>
            <a className="contact-line" href={'tel:+254719327344'}>
              <span>
                <Phone />
              </span>
              <div>
                <small>CALL DIRECTLY</small>
                <strong>{phone}</strong>
              </div>
              <ArrowUpRightIcon />
            </a>
            <a className="contact-line" href={'mailto:' + email}>
              <span>
                <Mail />
              </span>
              <div>
                <small>EMAIL</small>
                <strong>{email}</strong>
              </div>
              <ArrowUpRightIcon />
            </a>
            <a
              className="contact-line"
              href={wa}
              target="_blank"
              rel="noreferrer"
            >
              <span className="whatsapp-icon">W</span>
              <div>
                <small>WHATSAPP</small>
                <strong>Start a conversation</strong>
              </div>
              <ArrowUpRightIcon />
            </a>
          </div>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-heading">
              <span>CLIENT ENQUIRY</span>
              <Sparkles size={19} />
            </div>
            <label>
              Your name
              <input
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your full name"
                required
              />
            </label>
            <label>
              Email address
              <input
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              Service required
              <select
                value={form.service}
                onChange={e => setForm({ ...form, service: e.target.value })}
              >
                {services.map(s => (
                  <option key={s.number}>{s.title}</option>
                ))}
              </select>
            </label>
            <label>
              Your message
              <textarea
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me briefly how I can help..."
                rows="4"
                required
              />
            </label>
            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}
            <button className="button button-gold form-submit" type="submit">
              Prepare enquiry <ArrowRight size={17} />
            </button>
            <small className="form-note">
              Submitting opens your email app with the enquiry ready to send.
            </small>
          </form>
        </section>
      </main>
      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">
            <BarChart3 size={23} />
          </span>
          <span>
            <strong>
              MWN<span>.</span>
            </strong>
            <small>ACCOUNTING & ADVISORY</small>
          </span>
        </a>
        <p>Professional accounting, audit, taxation & business advisory.</p>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Martin Wanjau Ndirangu. All rights
            reserved.
          </span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        href={wa}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact on WhatsApp"
      >
        W
      </a>
    </div>
  );
}

function ArrowUpRightIcon() {
  return <ArrowRight className="arrow-up-right" size={16} />;
}

export default App;
