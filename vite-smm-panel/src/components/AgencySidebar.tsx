import { Link, NavLink } from 'react-router-dom';

export default function AgencySidebar() {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'sb-item active' : 'sb-item';

  return (
    <aside className="sidebar">
      <Link to="/" className="logo">
        <span className="logo-mark"></span>EngageFlow
        <span className="chip accent" style={{ fontSize: '.6rem', marginLeft: '.3rem' }}>
          Agency
        </span>
      </Link>
      <div className="sb-group">Agency</div>
      <NavLink to="/agency-clients" className={navClass}>
        <span className="sb-ico">◈</span>Clients
        <span
          className="chip"
          style={{ marginLeft: 'auto', fontSize: '.6rem', padding: '.1rem .4rem' }}
        >
          12
        </span>
      </NavLink>
      <NavLink to="/agency-whitelabel" className={navClass}>
        <span className="sb-ico">◇</span>White-label
      </NavLink>
      <NavLink to="/agency-reports" className={navClass}>
        <span className="sb-ico">◫</span>Reports
      </NavLink>
      <div className="sb-group">Workspace</div>
      <NavLink to="/app-overview" className={navClass}>
        <span className="sb-ico">◆</span>Overview
      </NavLink>
      <NavLink to="/app-queue" className={navClass}>
        <span className="sb-ico">⎘</span>Queue
      </NavLink>
      <NavLink to="/app-analytics" className={navClass}>
        <span className="sb-ico">◫</span>Analytics
      </NavLink>
      <div className="sb-group">Account</div>
      <NavLink to="/app-billing" className={navClass}>
        <span className="sb-ico">৳</span>Billing
      </NavLink>
      <NavLink to="/app-settings" className={navClass}>
        <span className="sb-ico">⚙</span>Settings
      </NavLink>
      <div className="sb-foot">
        <div className="sb-avatar" style={{ background: 'var(--forest)', color: 'var(--cream)' }}>
          M
        </div>
        <div>
          <div style={{ fontWeight: 600 }}>Mehedi · Orbit Agency</div>
          <div
            style={{
              fontSize: '.72rem',
              color: 'var(--muted)',
              fontFamily: "'JetBrains Mono',monospace",
            }}
          >
            Agency plan · 12 seats
          </div>
        </div>
      </div>
    </aside>
  );
}
