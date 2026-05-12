import { Link, NavLink } from 'react-router-dom';

export default function AdminSidebar() {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'sb-item active' : 'sb-item';

  return (
    <aside className="sidebar">
      <Link to="/" className="logo">
        <span className="logo-mark"></span>EngageFlow
        <span
          className="chip"
          style={{
            fontSize: '.6rem',
            marginLeft: '.3rem',
            background: 'var(--ink)',
            color: 'var(--cream)',
            borderColor: 'var(--ink)',
          }}
        >
          Admin
        </span>
      </Link>
      <div className="sb-group">Platform</div>
      <NavLink to="/admin-users" className={navClass}>
        <span className="sb-ico">◉</span>Users
        <span
          className="chip"
          style={{ marginLeft: 'auto', fontSize: '.6rem', padding: '.1rem .4rem' }}
        >
          2.4K
        </span>
      </NavLink>
      <NavLink to="/admin-compliance" className={navClass}>
        <span className="sb-ico">⚠</span>Compliance
        <span
          className="chip accent"
          style={{ marginLeft: 'auto', fontSize: '.6rem', padding: '.1rem .4rem' }}
        >
          4
        </span>
      </NavLink>
      <NavLink to="/admin-ops" className={navClass}>
        <span className="sb-ico">◆</span>Operations
      </NavLink>
      <div className="sb-group">Revenue</div>
      <NavLink to="/admin-ops" className={navClass} end>
        <span className="sb-ico">৳</span>Revenue
      </NavLink>
      <NavLink to="/admin-ops" className={navClass} end>
        <span className="sb-ico">☰</span>Audit log
      </NavLink>
      <div className="sb-foot">
        <div className="sb-avatar" style={{ background: 'var(--ink)', color: 'var(--accent)' }}>
          A
        </div>
        <div>
          <div style={{ fontWeight: 600 }}>Arif Hasan</div>
          <div
            style={{
              fontSize: '.72rem',
              color: 'var(--muted)',
              fontFamily: "'JetBrains Mono',monospace",
            }}
          >
            Platform admin
          </div>
        </div>
      </div>
    </aside>
  );
}
