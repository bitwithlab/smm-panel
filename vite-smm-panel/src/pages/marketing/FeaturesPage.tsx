import { Link } from 'react-router-dom';
import MarketingNav from '../../components/MarketingNav';
import MarketingFooter from '../../components/MarketingFooter';
import '../../styles/pages/features.css';

const coreCards = [
  { primary: true, ico: '⟳', title: 'Multi-platform auto-scan', desc: '5-minute cadence across every connected Facebook page, Instagram account, and X handle on your roster.', tag: 'Core', tagCls: 'pri' },
  { primary: true, ico: '⎘', title: 'Unified response queue', desc: 'One reviewable inbox. Sort by urgency, platform, or campaign. Assign to teammates with one tap.', tag: 'Core', tagCls: 'pri' },
  { primary: true, ico: '◇', title: 'Brand voice library', desc: 'Reusable replies organized by intent. Variable injection for names, products, and prices.', tag: 'Core', tagCls: 'pri' },
  { ico: '⏱', title: 'Smart drip scheduling', desc: 'Spread replies across one to six hours so cadence looks like a real human social manager.', tag: 'New', tagCls: 'new' },
  { ico: '◎', title: 'Target profile manager', desc: 'Add, pause, or archive connected accounts with priority tags and per-account quotas.', tag: 'Core' },
  { ico: '☰', title: 'Activity log', desc: 'Every action — human or automated — timestamped and exportable for audits.', tag: 'Core' },
];

const teamCards = [
  { ico: '◈', title: 'Agency white-label', desc: 'Custom domain, logo, and PDF-report branding. Sub-accounts with independent quotas.', tag: 'Agency', tagCls: 'new' },
  { ico: '👥', title: 'Team seats', desc: 'Role-based access: owner, editor, reviewer, read-only. Per-seat approval requirements.', tag: 'Core' },
  { ico: '✎', title: 'Approval workflows', desc: 'Require reviewer sign-off on scheduled replies before they go live.', tag: 'Core' },
  { ico: '◫', title: 'Weekly PDF report', desc: 'Auto-emailed Monday morning. Branded, white-labellable, exportable to client.', tag: 'New', tagCls: 'new' },
  { ico: '↻', title: 'Referral engine', desc: 'Two paid referrals unlock 50% off the next month. Auto-tracked, payout via bKash.', tag: 'New', tagCls: 'new' },
  { ico: '⟿', title: 'API access', desc: 'RESTful endpoints + webhooks. Zapier and Pabbly integrations available.', tag: 'Agency+' },
];

const safetyCards = [
  { ico: '◐', title: 'Sentiment filter', desc: 'Negative comments auto-routed to escalation. Spam and impersonators pre-flagged.' },
  { ico: '⚡', title: 'Rate control', desc: 'Per-account throttling with configurable ceilings. No API cliff-edge surprises.' },
  { ico: '🔒', title: 'Human review checkpoint', desc: 'No reply leaves the queue without a named human approver on file.' },
  { ico: '🌐', title: 'Official APIs', desc: 'Meta Graph API and X v2 endpoints wherever available. Clear fallback policy otherwise.' },
  { ico: '📜', title: 'Acceptable-use policy', desc: 'Published, enforced, and updated when platforms shift. Violations terminate accounts.' },
  { ico: '🗂', title: 'Full audit log', desc: 'Every action, every operator, every timestamp. Exportable for legal or client review.' },
];

export default function FeaturesPage() {
  return (
    <div className="p-features">
      <MarketingNav />

      <div className="head">
        <div className="head-inner">
          <span className="eyebrow dot">13 capabilities · 3 platforms</span>
          <h1>
            Everything you'd build yourself, <em>already built</em>.
          </h1>
          <p>
            EngageFlow pulls first-hour response work out of scattered tabs and into a single
            workspace — with the brand-voice tools, analytics, and compliance guardrails to scale
            it safely.
          </p>
        </div>
      </div>

      <div className="tabs">
        <div className="tabs-inner">
          <a href="#core" className="tab active">Core workflow</a>
          <a href="#intel" className="tab">Intelligence</a>
          <a href="#team" className="tab">Team & agency</a>
          <a href="#safety" className="tab">Safety & compliance</a>
          <a href="#compare" className="tab">Plan comparison</a>
        </div>
      </div>

      <section id="core">
        <div className="sec-inner">
          <div className="sec-head">
            <div className="section-num">01 · Core workflow</div>
            <h2>Detect, triage, respond.</h2>
            <p>The shortest path from a new post going live to a thoughtful reply on the board.</p>
          </div>
          <div className="grid3">
            {coreCards.map((c, i) => (
              <div key={i} className={`f-card${c.primary ? ' primary' : ''} hi`}>
                <div className="f-ico">{c.ico}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className={`f-tag${c.tagCls ? ` ${c.tagCls}` : ''}`}>{c.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="intel" style={{ background: 'var(--cream)' }}>
        <div className="sec-inner">
          <div className="sec-head">
            <div className="section-num">02 · Intelligence</div>
            <h2>Know what actually worked.</h2>
          </div>
          <div className="split">
            <div>
              <h3>AI reply drafting in Bangla and English</h3>
              <p>
                The assistant reads each post's caption and drafts three contextual reply options —
                warm, informative, or playful. Your team approves, edits, or swaps; nothing goes
                live without a human click.
              </p>
              <ul>
                <li>Matches your brand-voice library tone</li>
                <li>Switches language based on the post</li>
                <li>Flags drafts that contain sensitive claims</li>
              </ul>
            </div>
            <div className="split-visual">
              <div
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: '.72rem',
                  color: 'rgba(255,255,255,.5)',
                  marginBottom: '.9rem',
                }}
              >
                AI DRAFT · 3 OPTIONS
              </div>
              <div
                style={{
                  background: 'rgba(255,255,255,.05)',
                  border: '1px solid rgba(255,255,255,.1)',
                  padding: '.9rem',
                  borderRadius: '10px',
                  marginBottom: '.5rem',
                  fontSize: '.88rem',
                }}
              >
                "Loving the color story on this drop — which one's the best-seller so far?"{' '}
                <span
                  className="badge"
                  style={{ background: 'var(--lime)', color: 'var(--ink)', marginLeft: '.4rem' }}
                >
                  Warm
                </span>
              </div>
              <div
                style={{
                  background: 'rgba(255,255,255,.05)',
                  border: '1px solid rgba(255,255,255,.1)',
                  padding: '.9rem',
                  borderRadius: '10px',
                  marginBottom: '.5rem',
                  fontSize: '.88rem',
                }}
              >
                "In stock in all three sizes — DM us for the price list today."{' '}
                <span
                  className="badge"
                  style={{ background: 'var(--accent)', color: 'var(--ink)', marginLeft: '.4rem' }}
                >
                  Info
                </span>
              </div>
              <div
                style={{
                  background: 'rgba(255,255,255,.05)',
                  border: '1px solid rgba(255,255,255,.1)',
                  padding: '.9rem',
                  borderRadius: '10px',
                  fontSize: '.88rem',
                }}
              >
                "Someone tell the model to stop flexing so hard 😤"{' '}
                <span
                  className="badge"
                  style={{ background: 'var(--cream)', color: 'var(--ink)', marginLeft: '.4rem' }}
                >
                  Playful
                </span>
              </div>
            </div>
          </div>
          <div style={{ height: '2.5rem' }}></div>
          <div className="split">
            <div className="split-visual forest">
              <div
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: '.72rem',
                  color: 'rgba(255,255,255,.5)',
                  marginBottom: '.9rem',
                }}
              >
                COMPETITOR BENCHMARK · LAST 7 DAYS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.65rem' }}>
                {[
                  { user: '@you', label: '@you', width: '45%', val: '184', color: 'var(--lime)', muted: false },
                  { user: '@a', label: '@competitor-a', width: '30%', val: '121', color: 'rgba(255,255,255,.2)', muted: true },
                  { user: '@b', label: '@competitor-b', width: '25%', val: '98', color: 'rgba(255,255,255,.2)', muted: true },
                  { user: '@c', label: '@competitor-c', width: '20%', val: '76', color: 'rgba(255,255,255,.2)', muted: true },
                ].map((row) => (
                  <div key={row.user} style={{ display: 'flex', alignItems: 'center', gap: '.7rem' }}>
                    <div className="plat sm fb">f</div>
                    <div
                      style={{
                        flex: 1,
                        fontSize: '.85rem',
                        ...(row.muted ? { color: 'rgba(255,255,255,.6)' } : {}),
                      }}
                    >
                      {row.label}
                    </div>
                    <div
                      style={{
                        width: row.width,
                        height: '8px',
                        background: row.color,
                        borderRadius: '4px',
                      }}
                    ></div>
                    <div
                      style={{
                        width: '50px',
                        textAlign: 'right',
                        fontFamily: "'JetBrains Mono',monospace",
                        fontSize: '.78rem',
                        ...(row.muted ? { color: 'rgba(255,255,255,.6)' } : {}),
                      }}
                    >
                      {row.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3>Competitor benchmarking</h3>
              <p>
                Track up to five competitor pages in your niche. See their post cadence, average
                engagement, and breakout content. Win rate across the week shows up on your weekly
                report.
              </p>
              <ul>
                <li>Per-platform comparison</li>
                <li>Post format breakdown (reel, carousel, text)</li>
                <li>Weekly share-of-voice delta</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="team" style={{ background: 'var(--paper-2)' }}>
        <div className="sec-inner">
          <div className="sec-head">
            <div className="section-num">03 · Team & agency</div>
            <h2>Built for two people or twenty.</h2>
          </div>
          <div className="grid3">
            {teamCards.map((c, i) => (
              <div key={i} className="f-card hi">
                <div className="f-ico">{c.ico}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className={`f-tag${c.tagCls ? ` ${c.tagCls}` : ''}`}>{c.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="safety" style={{ background: 'var(--forest)', color: 'var(--cream)' }}>
        <div className="sec-inner">
          <div className="sec-head">
            <div className="section-num" style={{ color: 'var(--lime)' }}>
              04 · Safety & compliance
            </div>
            <h2 style={{ color: 'var(--cream)' }}>Guardrails, not loopholes.</h2>
            <p style={{ color: 'rgba(255,255,255,.65)' }}>
              Platform policies change. Our job is to keep you on the right side of them without
              slowing your team down.
            </p>
          </div>
          <div className="grid3" style={{ background: 'rgba(255,255,255,.1)' }}>
            {safetyCards.map((c, i) => (
              <div
                key={i}
                className="f-card"
                style={{ background: 'rgba(255,255,255,.04)', color: 'var(--cream)' }}
              >
                <div className="f-ico" style={{ background: 'var(--lime)', color: 'var(--ink)' }}>
                  {c.ico}
                </div>
                <h3>{c.title}</h3>
                <p style={{ color: 'rgba(255,255,255,.65)' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="compare" className="compare">
        <div className="sec-inner">
          <div className="sec-head">
            <div className="section-num">05 · Plan comparison</div>
            <h2>Everything, tier by tier.</h2>
          </div>
          <table className="compare-table">
            <thead>
              <tr>
                <th style={{ width: '40%' }}>Capability</th>
                <th>Basic</th>
                <th>Standard</th>
                <th>Ultra</th>
                <th>Agency</th>
              </tr>
            </thead>
            <tbody>
              <tr className="group"><td colSpan={5}>Core workflow</td></tr>
              <tr><td>Posts monitored / month</td><td>10</td><td>20</td><td>30</td><td>Unlimited</td></tr>
              <tr><td>Connected target profiles</td><td>1</td><td>3</td><td>5</td><td>Unlimited</td></tr>
              <tr><td>Platforms (FB / IG / X)</td><td>1 of 3</td><td>3 of 3</td><td>3 of 3</td><td>3 of 3</td></tr>
              <tr><td>Brand voice library entries</td><td>5</td><td>20</td><td>Unlimited</td><td>Unlimited</td></tr>
              <tr className="group"><td colSpan={5}>Intelligence</td></tr>
              <tr><td>AI reply drafting</td><td className="cross">—</td><td className="tick">✓</td><td className="tick">✓</td><td className="tick">✓</td></tr>
              <tr><td>Competitor benchmarking</td><td className="cross">—</td><td className="cross">—</td><td className="tick">✓</td><td className="tick">✓</td></tr>
              <tr><td>Weekly PDF report</td><td className="cross">—</td><td className="tick">✓</td><td className="tick">Daily</td><td className="tick">Branded</td></tr>
              <tr className="group"><td colSpan={5}>Team & agency</td></tr>
              <tr><td>Team seats</td><td>1</td><td>3</td><td>5</td><td>Unlimited</td></tr>
              <tr><td>Approval workflows</td><td className="cross">—</td><td className="tick">✓</td><td className="tick">✓</td><td className="tick">✓</td></tr>
              <tr><td>White-label panel</td><td className="cross">—</td><td className="cross">—</td><td className="cross">—</td><td className="tick">✓</td></tr>
              <tr><td>API access</td><td className="cross">—</td><td className="cross">—</td><td className="cross">Read</td><td className="tick">Read+Write</td></tr>
              <tr className="group"><td colSpan={5}>Support</td></tr>
              <tr><td>Response time</td><td>48 hr email</td><td>Priority chat</td><td>6-hr chat</td><td>Dedicated AM</td></tr>
            </tbody>
          </table>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/pricing" className="btn lg primary">
              See pricing →
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter variant="compact" />
    </div>
  );
}
