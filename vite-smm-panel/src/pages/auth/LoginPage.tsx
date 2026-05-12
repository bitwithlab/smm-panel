import { Link } from 'react-router-dom';
import '../../styles/pages/login.css';

export default function LoginPage() {
  return (
    <div className="p-login">
      <div className="split">
        <div className="left">
          <Link to="/" className="logo">
            <span className="logo-mark"></span>EngageFlow
          </Link>
          <div className="quote">
            <q>
              We stopped juggling three dashboards. One queue, one library, and the team ships
              replies twice as fast.
            </q>
            <cite>— Arif Chowdhury · creator · 142K IG followers</cite>
          </div>
          <div className="brand-stats">
            <div>
              2,400+<div className="l">active brands</div>
            </div>
            <div>
              94%<div className="l">on-time response</div>
            </div>
            <div>
              1.2M<div className="l">posts monitored</div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="login-box">
            <h1>Welcome back.</h1>
            <p>Sign in to your EngageFlow workspace.</p>

            <div className="social">
              <button className="btn">
                <span>G</span> Google
              </button>
              <button className="btn">
                <span>f</span> Facebook
              </button>
            </div>
            <div className="sep">or continue with email</div>

            <div className="field">
              <label>Work email</label>
              <input className="input" defaultValue="nusrat@fashionhouse.bd" />
            </div>
            <div className="field">
              <label>Password</label>
              <input className="input" type="password" defaultValue="••••••••••" />
            </div>
            <div className="remember">
              <label
                style={{
                  display: 'flex',
                  gap: '.4rem',
                  alignItems: 'center',
                  fontWeight: 400,
                }}
              >
                <input type="checkbox" defaultChecked /> Keep me signed in
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button className="btn primary full lg">Sign in →</button>
            <p className="foot">
              No account yet? <Link to="/signup">Start your 7-day trial</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
