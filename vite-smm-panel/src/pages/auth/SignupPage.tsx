import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/signup.css';

type Plan = 'basic' | 'standard' | 'ultra';

export default function SignupPage() {
  const [plan, setPlan] = useState<Plan>('standard');

  return (
    <div className="p-signup">
      <div className="wrap">
        <Link to="/" className="logo">
          <span className="logo-mark"></span>EngageFlow
        </Link>

        <div className="steps">
          <div className="stp done">Account</div>
          <div className="stp active">Workspace</div>
          <div className="stp">Payment</div>
          <div className="stp">Connect</div>
        </div>

        <div className="grid">
          <div className="form-card">
            <h1>Create your workspace.</h1>
            <p className="sub">
              Seven days free, no card required. You'll connect social accounts in the last step.
            </p>

            <div className="field">
              <label>Your name</label>
              <input className="input" defaultValue="Nusrat Jahan" />
            </div>
            <div className="row">
              <div className="field">
                <label>Work email</label>
                <input className="input" defaultValue="nusrat@fashionhouse.bd" />
              </div>
              <div className="field">
                <label>Phone (bKash / Nagad)</label>
                <input className="input" defaultValue="+880 17 0000 0000" />
              </div>
            </div>
            <div className="field">
              <label>Workspace name</label>
              <input className="input" defaultValue="Rahim Fashion House" />
              <div className="hint">
                You can change this later. It shows in your reports and team invites.
              </div>
            </div>
            <div className="field">
              <label>Password</label>
              <input className="input" type="password" defaultValue="••••••••••" />
              <div className="hint">At least 10 characters. One number, one symbol.</div>
            </div>

            <div className="dashed"></div>
            <div className="field">
              <label>Pick a plan to start with</label>
              <div className="plan-pick">
                <div
                  className={`plan-opt${plan === 'basic' ? ' on' : ''}`}
                  onClick={() => setPlan('basic')}
                >
                  <div className="n">Basic</div>
                  <div className="p">৳99/mo</div>
                  <div className="d">10 posts · 1 platform</div>
                </div>
                <div
                  className={`plan-opt${plan === 'standard' ? ' on' : ''}`}
                  onClick={() => setPlan('standard')}
                >
                  <div className="n">Standard ★</div>
                  <div className="p">৳199/mo</div>
                  <div className="d">20 posts · all platforms</div>
                </div>
                <div
                  className={`plan-opt${plan === 'ultra' ? ' on' : ''}`}
                  onClick={() => setPlan('ultra')}
                >
                  <div className="n">Ultra</div>
                  <div className="p">৳399/mo</div>
                  <div className="d">30 posts · full intel</div>
                </div>
              </div>
            </div>

            <div className="field">
              <label>
                <input type="checkbox" defaultChecked style={{ marginRight: '.4rem' }} /> I agree
                to the{' '}
                <a href="#" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                  Acceptable Use Policy
                </a>
              </label>
            </div>

            <button className="btn primary full lg" style={{ marginTop: '1rem' }}>
              Continue to payment →
            </button>
            <p
              style={{
                textAlign: 'center',
                marginTop: '1rem',
                fontSize: '.88rem',
                color: 'var(--muted)',
              }}
            >
              Already have an account?{' '}
              <Link to="/login" style={{ color: 'var(--ink)', fontWeight: 600 }}>
                Sign in
              </Link>
            </p>
          </div>

          <div className="summary">
            <h3>Your order</h3>
            <div className="sum-line">
              <span>Standard plan</span>
              <span className="v">৳199/mo</span>
            </div>
            <div className="sum-line">
              <span>Trial period</span>
              <span className="v">7 days free</span>
            </div>
            <div className="sum-line">
              <span>Billing starts</span>
              <span className="v">May 1, 2026</span>
            </div>
            <div className="sum-line">
              <span>First charge</span>
              <span className="v">৳199.00</span>
            </div>
            <div className="sum-total">
              <span>Due today</span>
              <span className="v">৳0.00</span>
            </div>
            <div className="trial-note">
              <b>You won't be charged</b> until the trial ends. Cancel any time in settings.
            </div>
            <div className="reassure">
              <span>🔒 bank-grade TLS</span>
              <span>🇧🇩 bKash / Nagad</span>
              <span>↩ cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
