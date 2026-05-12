import { Link } from 'react-router-dom';

type Props = {
  variant?: 'full' | 'compact';
};

export default function MarketingFooter({ variant = 'full' }: Props) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Link to="/" className="logo" style={{ color: 'var(--cream)' }}>
            <span className="logo-mark"></span>EngageFlow
          </Link>
          <p
            style={{
              color: 'rgba(255,255,255,.55)',
              fontSize: '.85rem',
              marginTop: '.75rem',
              maxWidth: '260px',
            }}
          >
            {variant === 'full'
              ? 'First-hour engagement workflows for Bangladeshi SMBs, creators, and agencies.'
              : 'First-hour engagement workflows.'}
          </p>
        </div>
        <div>
          <h5>Product</h5>
          <ul>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            {variant === 'full' && (
              <>
                <li>
                  <Link to="/app-overview">Dashboard</Link>
                </li>
                <li>
                  <a href="#">Changelog</a>
                </li>
              </>
            )}
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            {variant === 'full' && (
              <li>
                <a href="#">Careers</a>
              </li>
            )}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {variant === 'full' && (
              <li>
                <a href="#">Press</a>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h5>Resources</h5>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            {variant === 'full' && (
              <>
                <li>
                  <a href="#">Compliance</a>
                </li>
                <li>
                  <a href="#">API Docs</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </>
            )}
          </ul>
        </div>
        <div>
          <h5>Legal</h5>
          <ul>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            {variant === 'full' && (
              <>
                <li>
                  <a href="#">Acceptable Use</a>
                </li>
                <li>
                  <a href="#">DPA</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 EngageFlow Technologies Ltd.{variant === 'full' && ' · Dhaka, Bangladesh'}</div>
        <div>{variant === 'full' ? 'v1.0 · all systems operational' : 'v1.0'}</div>
      </div>
    </footer>
  );
}
