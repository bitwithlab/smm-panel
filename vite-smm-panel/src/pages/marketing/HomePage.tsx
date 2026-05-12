import { Link } from 'react-router-dom';
import MarketingNav from '../../components/MarketingNav';
import MarketingFooter from '../../components/MarketingFooter';
import '../../styles/pages/home.css';

const marqueeItems = [
  'First-hour response',
  'Team reply queue',
  'Brand voice library',
  'AI reply drafting',
  'Sentiment filter',
  'Competitor benchmark',
  'Agency white-label',
  'bKash · Nagad · Card',
];

const faqs = [
  {
    open: true,
    q: 'Is this a bot that fakes likes and comments?',
    a: (
      <>
        No. EngageFlow organizes the response workflow for <em>your own</em> team and the pages
        you manage — it does not fabricate engagement on accounts you don't control. We connect
        via official Meta and X APIs where possible.
      </>
    ),
  },
  {
    q: 'Which platforms are supported?',
    a: 'Facebook (pages and profiles you manage), Instagram (business and creator accounts), and X / Twitter. TikTok, YouTube Shorts, and LinkedIn modules are on the Phase 3 roadmap.',
  },
  {
    q: 'How does billing work in Bangladesh?',
    a: "We accept bKash, Nagad, Rocket, and international cards via SSLCommerz. Invoices in BDT or USD, annual plans get a 15% discount, and there's a seven-day free trial with no card up front.",
  },
  {
    q: 'Can agencies resell under their own brand?',
    a: 'Yes. The Agency plan includes white-label domain, logo, PDF report branding, sub-account provisioning, and reseller pricing you control.',
  },
  {
    q: "What's your compliance posture?",
    a: 'Per-account rate limits, queue-based scheduling, official APIs where available, and a human review checkpoint on every scheduled reply. We publish acceptable-use guidelines and ban accounts that attempt inauthentic behavior.',
  },
];

export default function HomePage() {
  return (
    <div className="p-home">
      <MarketingNav />

      <section className="hero">
        <div className="hero-grid">
          <div>
            <span className="eyebrow dot">Live · serving 2,400+ brands in Bangladesh</span>
            <h1 className="display">
              Your posts deserve <em>real momentum</em> — from minute one.
            </h1>
            <p className="lead">
              EngageFlow organizes the first-hour response workflow for your own social posts —
              across Facebook, Instagram and X/Twitter. Your team answers faster, replies stay
              on-brand, and your analytics show which content actually moved.
            </p>
            <div className="hero-ctas">
              <Link to="/signup" className="btn lg primary">
                Start 7-day trial →
              </Link>
              <Link to="/features" className="btn lg ghost">
                Explore features
              </Link>
            </div>
            <div className="hero-stats">
              <div>
                <div className="n">2,400+</div>
                <div className="l">Active brands</div>
              </div>
              <div>
                <div className="n">1.2M</div>
                <div className="l">Posts monitored</div>
              </div>
              <div>
                <div className="n">94%</div>
                <div className="l">On-time response</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hv-row">
              <div className="hv-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div>engageflow.app / live</div>
            </div>
            <div className="hv-card">
              <div className="hv-head">
                <div className="plat sm fb">f</div>
                <div style={{ flex: 1 }}>
                  <div className="hv-handle">@rahimfashionhouse</div>
                  <div className="hv-meta">42 min ago · 184 reactions · 34 comments</div>
                </div>
                <span
                  className="chip dot"
                  style={{
                    background: 'rgba(23,128,61,.18)',
                    color: '#a7f3be',
                    borderColor: 'transparent',
                  }}
                >
                  On track
                </span>
              </div>
              <div className="hv-bar">
                <div className="hv-fill" style={{ width: '68%' }}></div>
              </div>
            </div>
            <div className="hv-card">
              <div className="hv-head">
                <div className="plat sm ig">◉</div>
                <div style={{ flex: 1 }}>
                  <div className="hv-handle">@rahim.store.bd</div>
                  <div className="hv-meta">2 hr ago · 312 likes · 47 comments</div>
                </div>
                <span
                  className="chip dot"
                  style={{
                    background: 'rgba(23,128,61,.18)',
                    color: '#a7f3be',
                    borderColor: 'transparent',
                  }}
                >
                  On track
                </span>
              </div>
              <div className="hv-bar">
                <div className="hv-fill" style={{ width: '82%' }}></div>
              </div>
            </div>
            <div className="hv-card">
              <div className="hv-head">
                <div className="plat sm x">𝕏</div>
                <div style={{ flex: 1 }}>
                  <div className="hv-handle">@rahim_live</div>
                  <div className="hv-meta">1 hr ago · 2.1K impressions</div>
                </div>
                <span
                  className="chip dot warn"
                  style={{
                    background: 'rgba(180,83,9,.2)',
                    color: '#fbbf77',
                    borderColor: 'transparent',
                  }}
                >
                  Needs reply
                </span>
              </div>
              <div className="hv-bar">
                <div className="hv-fill" style={{ width: '55%' }}></div>
              </div>
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: '.7rem',
                color: 'rgba(255,255,255,.35)',
                marginTop: '.8rem',
                textAlign: 'right',
              }}
            >
              next scan in 03:12
            </div>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          {marqueeItems.map((m, i) => (
            <span key={`a-${i}`}>{m}</span>
          ))}
          {marqueeItems.map((m, i) => (
            <span key={`b-${i}`}>{m}</span>
          ))}
        </div>
      </div>

      <section className="blk plat-strip">
        <div className="section-inner">
          <div className="section-head">
            <div className="section-num">01 · Platforms</div>
            <h2>Three platforms, one inbox.</h2>
            <p>
              Every post from every connected account lands in a single reviewable queue. Respond,
              schedule, or delegate without switching tabs.
            </p>
          </div>
          <div className="plat-grid">
            <div className="plat-col">
              <div
                className="plat fb"
                style={{ width: '46px', height: '46px', fontSize: '1.2rem', borderRadius: '12px' }}
              >
                f
              </div>
              <h3>Facebook</h3>
              <p>Track six reaction types and every comment thread on pages your team manages.</p>
              <ul>
                <li>Reaction mix analytics</li>
                <li>Comment triage queue</li>
                <li>First-hour velocity report</li>
              </ul>
            </div>
            <div className="plat-col">
              <div
                className="plat ig"
                style={{ width: '46px', height: '46px', fontSize: '1.2rem', borderRadius: '12px' }}
              >
                ◉
              </div>
              <h3>Instagram</h3>
              <p>
                Monitor likes and comments on feed, reels, and carousels — flag brand mentions in
                DMs.
              </p>
              <ul>
                <li>Explore ranking signal</li>
                <li>Hashtag performance</li>
                <li>Story mention alerts</li>
              </ul>
            </div>
            <div className="plat-col">
              <div
                className="plat x"
                style={{ width: '46px', height: '46px', fontSize: '1.2rem', borderRadius: '12px' }}
              >
                𝕏
              </div>
              <h3>X / Twitter</h3>
              <p>Thread replies, quote tweets, and repost signals — timeline algorithm priority.</p>
              <ul>
                <li>Reply chain capture</li>
                <li>Repost tracking</li>
                <li>Impression breakdown</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="blk steps-section">
        <div className="section-inner">
          <div className="section-head">
            <div className="section-num">02 · How it works</div>
            <h2>Four steps to a faster response.</h2>
            <p>
              Built to be operational on day one. No training required — your team can work the
              queue straight from notifications.
            </p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-num">01</div>
              <h4>Connect accounts</h4>
              <p>Authorize your pages through official platform OAuth. No passwords required.</p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <h4>Detect new posts</h4>
              <p>We scan your connected profiles on a 5-minute cadence and enqueue every post.</p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <h4>Review &amp; reply</h4>
              <p>
                Your team picks from a brand-voice library or an AI draft — approve, edit, or skip.
              </p>
            </div>
            <div className="step">
              <div className="step-num">04</div>
              <h4>Measure</h4>
              <p>First-hour velocity, reach uplift, and reply effectiveness land in weekly reports.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="blk testi-section">
        <div className="section-inner">
          <div className="section-head">
            <div className="section-num" style={{ color: 'var(--lime)' }}>
              03 · Why teams switch
            </div>
            <h2>From missed windows to momentum.</h2>
            <p>
              Feedback from the first ninety days of SMB, creator, and agency rollouts in Dhaka,
              Chittagong, and Sylhet.
            </p>
          </div>
          <div className="testi-grid">
            <div className="testi">
              <blockquote>
                "Our first hour used to be silent. Now the team pushes five replies in the first
                twelve minutes and every post climbs the feed."
              </blockquote>
              <div className="who">
                <div className="testi-avatar">N</div>
                <div>
                  <div className="name">Nusrat Jahan</div>
                  <div className="role">Fashion SMB · Dhaka</div>
                </div>
              </div>
            </div>
            <div className="testi">
              <blockquote>
                "I stopped juggling three dashboards. One queue, one comment library, and my social
                intern ships twice as fast."
              </blockquote>
              <div className="who">
                <div className="testi-avatar">A</div>
                <div>
                  <div className="name">Arif Chowdhury</div>
                  <div className="role">Creator · 142K IG followers</div>
                </div>
              </div>
            </div>
            <div className="testi">
              <blockquote>
                "White-label reports alone paid for six months. We onboarded nine clients in the
                first quarter without hiring."
              </blockquote>
              <div className="who">
                <div className="testi-avatar">T</div>
                <div>
                  <div className="name">Tanvir Hasan</div>
                  <div className="role">Founder · Plume Agency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blk faq-section">
        <div className="section-inner">
          <div className="section-head" style={{ textAlign: 'center', marginInline: 'auto' }}>
            <div className="section-num" style={{ justifyContent: 'center' }}>
              04 · Questions
            </div>
            <h2>The parts people ask about.</h2>
          </div>
          <div className="faq">
            {faqs.map((f, i) => (
              <details key={i} {...(f.open ? { open: true } : {})}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final">
        <h2 className="display">
          Turn posts into <em>performance</em>.
        </h2>
        <p>Seven days free. No card required. First response queue live in under ten minutes.</p>
        <Link to="/signup" className="btn lg">
          Start your free trial →
        </Link>
      </section>

      <MarketingFooter />
    </div>
  );
}
