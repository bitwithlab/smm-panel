import { useState } from 'react';
import MarketingNav from '../../components/MarketingNav';
import MarketingFooter from '../../components/MarketingFooter';
import '../../styles/pages/contact.css';

const reasons = ['Sales', 'Support', 'Agency / White-label', 'Press', 'Other'];

export default function ContactPage() {
  const [reason, setReason] = useState('Sales');

  return (
    <div className="p-contact">
      <MarketingNav />

      <div className="wrap">
        <span className="eyebrow dot">We reply within 2 hours, 7 days</span>
        <h1 className="big">
          Let's <em>talk</em>.
        </h1>
        <p className="lede">
          Sales, onboarding help, white-label inquiries, press — route your message to the right
          team and we'll get back to you fast.
        </p>

        <div className="grid">
          <div className="form-card">
            <h3>Send us a message</h3>
            <p className="sub">All fields required. We reply during 9am–9pm BST, 7 days a week.</p>

            <div className="field">
              <label>What's this about?</label>
              <div className="reason-pills">
                {reasons.map((r) => (
                  <label key={r}>
                    <input
                      type="radio"
                      name="r"
                      checked={reason === r}
                      onChange={() => setReason(r)}
                    />
                    <span className="pill">{r}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Full name</label>
                <input className="input" defaultValue="Nusrat Jahan" />
              </div>
              <div className="field">
                <label>Email</label>
                <input className="input" defaultValue="nusrat@fashionhouse.bd" />
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label>Company</label>
                <input className="input" defaultValue="Rahim Fashion House" />
              </div>
              <div className="field">
                <label>Role</label>
                <select className="input" defaultValue="Marketing Lead">
                  <option>Founder</option>
                  <option>Marketing Lead</option>
                  <option>Agency Owner</option>
                  <option>Creator</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label>How can we help?</label>
              <textarea
                className="input"
                style={{ minHeight: '120px' }}
                defaultValue="We run four Facebook pages and two Instagram accounts across our boutique chain. Looking at Ultra plan — want to see a live walk-through of the comment library and competitor benchmark."
              />
            </div>
            <div className="field">
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.5rem',
                  fontWeight: 400,
                  fontSize: '.85rem',
                }}
              >
                <input type="checkbox" defaultChecked /> Subscribe to the monthly product digest
                (one email, unsubscribe anytime)
              </label>
            </div>
            <button className="btn primary full">Send message →</button>
          </div>

          <div className="side">
            <div className="side-card lime">
              <h4>Sales & demos</h4>
              <p>Book a 20-minute product tour. Pick a slot directly on our calendar.</p>
              <div className="v">sales@engageflow.app</div>
              <a href="#" className="btn sm" style={{ marginTop: '.8rem' }}>
                Book a demo →
              </a>
            </div>
            <div className="side-card">
              <h4>Customer support</h4>
              <p>Existing customers — we reply in under 6 hours on Ultra, 2 hours on Agency.</p>
              <div className="v">support@engageflow.app</div>
            </div>
            <div className="side-card dark">
              <h4>Agency partnerships</h4>
              <p>White-label terms, reseller pricing, co-marketing. Let's design a plan.</p>
              <div className="v">
                <a href="#">partners@engageflow.app</a>
              </div>
            </div>
            <div className="side-card">
              <h4>Press & media</h4>
              <p>Interview requests, logos, founder bios, fact sheets.</p>
              <div className="v">press@engageflow.app</div>
            </div>
          </div>
        </div>

        <div className="office-strip">
          <div className="office">
            <div className="tag">HEADQUARTERS</div>
            <h4>Dhaka</h4>
            <p>
              Level 7, Navana Tower
              <br />
              Gulshan Avenue, Dhaka 1212
              <br />
              +880 1700 000 000
            </p>
          </div>
          <div className="office">
            <div className="tag">REGIONAL</div>
            <h4>Chittagong</h4>
            <p>
              Agrabad Commercial Area
              <br />
              Road 3, Chittagong 4100
              <br />
              +880 1800 000 000
            </p>
          </div>
          <div className="office">
            <div className="tag">COMING 2027</div>
            <h4>Bengaluru</h4>
            <p>
              Indiranagar, 100 Ft Road
              <br />
              Bengaluru, Karnataka 560038
              <br />
              opening Q2 2027
            </p>
          </div>
        </div>
      </div>

      <MarketingFooter variant="compact" />
    </div>
  );
}
