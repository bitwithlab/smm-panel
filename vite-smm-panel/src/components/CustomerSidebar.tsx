import { Link, NavLink } from 'react-router-dom';

export default function CustomerSidebar() {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'sb-item active' : 'sb-item';

  return (
    <aside className="sidebar">
      <Link to="/" className="logo">
        <span className="logo-mark"></span>EngageFlow
      </Link>
      <div className="sb-group">Workspace</div>
      <NavLink to="/app-overview" className={navClass}>
        <span className="sb-ico">◆</span>Overview
      </NavLink>
      <NavLink to="/app-targets" className={navClass}>
        <span className="sb-ico">◎</span>Targets
      </NavLink>
      <NavLink to="/app-queue" className={navClass}>
        <span className="sb-ico">⎘</span>Response queue
        <span
          className="chip accent"
          style={{ marginLeft: 'auto', fontSize: '.6rem', padding: '.1rem .4rem' }}
        >
          7
        </span>
      </NavLink>
      <NavLink to="/app-comments" className={navClass}>
        <span className="sb-ico">✎</span>Comment library
      </NavLink>
      <div className="sb-group">Insights</div>
      <NavLink to="/app-analytics" className={navClass}>
        <span className="sb-ico">◫</span>Analytics
      </NavLink>
      <NavLink to="/app-activity" className={navClass}>
        <span className="sb-ico">☰</span>Activity log
      </NavLink>
      <div className="sb-group">Account</div>
      <NavLink to="/app-billing" className={navClass}>
        <span className="sb-ico">৳</span>Billing
      </NavLink>
      <NavLink to="/app-settings" className={navClass}>
        <span className="sb-ico">⚙</span>Settings
      </NavLink>
      <div className="sb-foot">
        <div className="sb-avatar">N</div>
        <div>
          <div style={{ fontWeight: 600 }}>Nusrat J.</div>
          <div
            style={{
              fontSize: '.72rem',
              color: 'var(--muted)',
              fontFamily: "'JetBrains Mono',monospace",
            }}
          >
            Standard plan
          </div>
        </div>
      </div>
    </aside>
  );
}
