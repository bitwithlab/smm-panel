import { useState } from 'react';
import { Link } from 'react-router-dom';
import MarketingNav from '../../components/MarketingNav';
import MarketingFooter from '../../components/MarketingFooter';
import '../../styles/pages/pricing.css';

const addons = [
  { title: 'Extra posts', desc: 'Top up 10 more posts / month on any plan.', cost: '+৳49/mo' },
  { title: 'Extra target profile', desc: 'Connect one more Facebook, Instagram, or X handle.', cost: '+৳35/mo' },
  { title: 'Additional team seat', desc: 'One more teammate with reviewer or editor role.', cost: '+৳25/mo' },
  { title: 'Priority proxy pool', desc: 'Dedicated residential IPs for higher-volume accounts.', cost: '+৳199/mo' },
];

const faqs = [
  { open: true, q: 'Can I switch plans mid-month?', a: 'Yes — upgrade instantly with a prorated charge, or downgrade at your next renewal. No lock-ins, no penalties.' },
  { q: 'How does the 7-day trial work?', a: 'Pick any plan, get full access for 7 days with no card required. We remind you 2 days before the trial ends — add a payment method to continue or let it expire.' },
  { q: 'Which payment methods are accepted?', a: 'bKash, Nagad, Rocket, SSLCommerz card gateway (all major cards), and Stripe for international. Agency plans can invoice in USD.' },
  { q: 'What counts as one "post monitored"?', a: 'Any new post published to a connected target profile that we detect in a 24-hour window. Edits and reposts of the same post don\'t count twice.' },
  { q: 'Is there a student or NGO discount?', a: '30% off Standard for verified students and registered NGOs. Email sales@engageflow.app with your affiliation.' },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="p-pricing">
      <MarketingNav />

      <div className="head">
        <span className="eyebrow dot">Transparent pricing · BDT + USD</span>
        <h1 className="display">
          Pick your <em>growth speed</em>.
        </h1>
        <p>7-day free trial on every plan. No card up front. Cancel any time. Annual plans save 15%.</p>
        <div className="toggle" role="tablist">
          <button
            className={billing === 'monthly' ? 'on' : ''}
            onClick={() => setBilling('monthly')}
          >
            Monthly
          </button>
          <button
            className={billing === 'annual' ? 'on' : ''}
            onClick={() => setBilling('annual')}
          >
            Annual <span className="save">–15%</span>
          </button>
        </div>
      </div>

      <section>
        <div className="inner">
          <div className="tiers">
            <div className="tier">
              <h3>Basic</h3>
              <div className="tag">Solo sellers, first-time</div>
              <div className="price-row">
                <span className="cur">৳</span>
                <span className="num">99</span>
                <span className="per">/mo</span>
              </div>
              <ul>
                <li>10 posts monitored / month</li>
                <li>1 connected platform</li>
                <li>1 target profile</li>
                <li>5 library entries</li>
                <li>Email support · 48 hr</li>
              </ul>
              <Link to="/signup" className="btn">Start Basic →</Link>
            </div>
            <div className="tier fea">
              <div className="badge-pop">MOST POPULAR</div>
              <h3>Standard</h3>
              <div className="tag">Growing SMBs + creators</div>
              <div className="price-row">
                <span className="cur">৳</span>
                <span className="num">199</span>
                <span className="per">/mo</span>
              </div>
              <ul>
                <li>20 posts monitored / month</li>
                <li>All 3 platforms (FB + IG + X)</li>
                <li>3 target profiles · 3 team seats</li>
                <li>20 library entries</li>
                <li>AI reply drafting</li>
                <li>Weekly PDF report</li>
                <li>Priority chat support</li>
              </ul>
              <Link to="/signup" className="btn">Start Standard →</Link>
            </div>
            <div className="tier">
              <h3>Ultra</h3>
              <div className="tag">Power users + brands</div>
              <div className="price-row">
                <span className="cur">৳</span>
                <span className="num">399</span>
                <span className="per">/mo</span>
              </div>
              <ul>
                <li>30 posts monitored / month</li>
                <li>All 3 platforms</li>
                <li>5 target profiles · 5 team seats</li>
                <li>Unlimited library entries</li>
                <li>AI + sentiment filter</li>
                <li>Competitor benchmarking</li>
                <li>Daily analytics · 6-hr chat</li>
              </ul>
              <Link to="/signup" className="btn">Start Ultra →</Link>
            </div>
          </div>

          <div className="agency">
            <div>
              <h3>Agency</h3>
              <p>Unlimited clients · White-label panel · Reseller pricing · Dedicated account manager</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div className="price">
                ৳2,499<span>/mo</span>
              </div>
              <Link to="/contact" className="btn primary">Contact sales →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="addons">
        <div className="inner">
          <div style={{ maxWidth: '700px', marginBottom: '2rem' }}>
            <div className="section-num">Add-ons</div>
            <h2 className="display" style={{ fontSize: '2.2rem', marginTop: '.5rem' }}>
              Scale any plan with extras.
            </h2>
          </div>
          <div className="addons-grid">
            {addons.map((a, i) => (
              <div key={i} className="addon">
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
                <div className="cost">{a.cost}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="calc-section">
        <div className="inner">
          <div style={{ maxWidth: '700px', marginBottom: '2rem' }}>
            <div className="section-num">Size it up</div>
            <h2 className="display" style={{ fontSize: '2.2rem', marginTop: '.5rem' }}>
              Monthly cost estimator.
            </h2>
          </div>
          <div className="calc">
            <div className="calc-left">
              <div className="field">
                <label>Plan</label>
                <select className="input" defaultValue="ultra">
                  <option value="standard">Standard · ৳199</option>
                  <option value="basic">Basic · ৳99</option>
                  <option value="ultra">Ultra · ৳399</option>
                  <option value="agency">Agency · ৳2,499</option>
                </select>
              </div>
              <div className="field">
                <label>Extra posts (×10)</label>
                <input type="range" min="0" max="10" defaultValue="2" />
                <div className="hint mono">2 × 10 = +20 posts</div>
              </div>
              <div className="field">
                <label>Extra target profiles</label>
                <input type="range" min="0" max="10" defaultValue="3" />
                <div className="hint mono">+3 profiles</div>
              </div>
              <div className="field">
                <label>Team seats</label>
                <input type="range" min="0" max="15" defaultValue="4" />
                <div className="hint mono">+4 seats</div>
              </div>
              <div className="field">
                <label>Billing cycle</label>
                <div style={{ display: 'flex', gap: '.5rem' }}>
                  <label
                    style={{
                      display: 'flex',
                      gap: '.4rem',
                      alignItems: 'center',
                      fontSize: '.88rem',
                    }}
                  >
                    <input type="radio" name="c" defaultChecked /> Monthly
                  </label>
                  <label
                    style={{
                      display: 'flex',
                      gap: '.4rem',
                      alignItems: 'center',
                      fontSize: '.88rem',
                    }}
                  >
                    <input type="radio" name="c" /> Annual (–15%)
                  </label>
                </div>
              </div>
            </div>
            <div className="calc-right">
              <div
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: '.72rem',
                  color: 'rgba(255,255,255,.5)',
                  marginBottom: '1rem',
                }}
              >
                ESTIMATED MONTHLY COST
              </div>
              <div className="calc-line">
                <span>Ultra base</span>
                <span>৳399</span>
              </div>
              <div className="calc-line">
                <span>Extra posts · 2 × 10</span>
                <span>৳98</span>
              </div>
              <div className="calc-line">
                <span>Target profiles · +3</span>
                <span>৳105</span>
              </div>
              <div className="calc-line">
                <span>Team seats · +4</span>
                <span>৳100</span>
              </div>
              <div className="calc-line total">
                <span>Estimated</span>
                <span className="c">৳702 / mo</span>
              </div>
              <Link to="/signup" className="btn primary full" style={{ marginTop: '1.25rem' }}>
                Start this plan →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--paper)' }}>
        <div className="inner">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2rem' }}>
            <div className="section-num" style={{ justifyContent: 'center' }}>
              Pricing FAQ
            </div>
            <h2 className="display" style={{ fontSize: '2.2rem', marginTop: '.5rem' }}>
              Common questions.
            </h2>
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

      <MarketingFooter variant="compact" />
    </div>
  );
}
