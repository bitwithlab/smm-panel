import { Link } from 'react-router-dom';
import MarketingNav from '../components/MarketingNav';
import '../styles/pages/index.css';

type Card = {
  to: string;
  num: string;
  icon: string;
  tag: string;
  title: string;
  desc: string;
  variant?: 'featured' | 'dark' | 'forest' | 'lime' | 'default';
};

const publicPages: Card[] = [
  { to: '/home', num: '01 / HOME', icon: 'Home', tag: 'Landing', title: 'Home', desc: 'Hero, value props, social proof, primary CTA', variant: 'featured' },
  { to: '/features', num: '02 / FEATURES', icon: 'Features', tag: 'Product', title: 'Features', desc: '13 capabilities across FB, IG, X/Twitter' },
  { to: '/pricing', num: '03 / PRICING', icon: '৳', tag: 'Plans', title: 'Pricing', desc: 'Basic / Standard / Ultra / Agency tiers', variant: 'dark' },
  { to: '/about', num: '04 / ABOUT', icon: 'About', tag: 'Story', title: 'About', desc: 'Team, mission, compliance posture', variant: 'lime' },
  { to: '/contact', num: '05 / CONTACT', icon: 'Contact', tag: 'Support', title: 'Contact', desc: 'Sales, support, partner inquiries', variant: 'forest' },
  { to: '/login', num: '06 / LOGIN', icon: 'Sign in', tag: 'Auth', title: 'Login', desc: 'Email + social sign-in, 2FA ready' },
  { to: '/signup', num: '07 / SIGNUP', icon: 'Join', tag: 'Auth', title: 'Sign up', desc: '7-day trial, no card required' },
];

const customerPages: Card[] = [
  { to: '/app-overview', num: '08 / OVERVIEW', icon: 'Home', tag: 'Dashboard', title: 'Overview', desc: 'Daily briefing, live feed, quota', variant: 'featured' },
  { to: '/app-targets', num: '09 / TARGETS', icon: 'Targets', tag: 'Accounts', title: 'Target profiles', desc: 'Connected FB / IG / X accounts' },
  { to: '/app-queue', num: '10 / QUEUE', icon: 'Queue', tag: 'Workflow', title: 'Response queue', desc: 'Posts awaiting review & scheduled replies', variant: 'lime' },
  { to: '/app-comments', num: '11 / COMMENTS', icon: 'Library', tag: 'Content', title: 'Comment library', desc: 'Reusable replies, AI-assisted drafting' },
  { to: '/app-analytics', num: '12 / ANALYTICS', icon: 'Analytics', tag: 'Insights', title: 'Analytics', desc: 'Reach, engagement velocity, per-platform', variant: 'dark' },
  { to: '/app-activity', num: '13 / ACTIVITY', icon: 'Log', tag: 'History', title: 'Activity log', desc: 'Timestamped actions & audit trail' },
  { to: '/app-billing', num: '14 / BILLING', icon: 'Billing', tag: 'Account', title: 'Billing', desc: 'Plan, invoices, bKash / Nagad / card' },
  { to: '/app-settings', num: '15 / SETTINGS', icon: 'Settings', tag: 'Config', title: 'Settings', desc: 'Profile, team, notifications, API' },
];

const agencyPages: Card[] = [
  { to: '/agency-clients', num: '16 / CLIENTS', icon: 'Clients', tag: 'Portfolio', title: 'Clients', desc: 'Sub-accounts roster, seat usage', variant: 'forest' },
  { to: '/agency-whitelabel', num: '17 / WHITELABEL', icon: 'Brand', tag: 'Reseller', title: 'White-label', desc: 'Custom domain, logo, reseller pricing' },
  { to: '/agency-reports', num: '18 / REPORTS', icon: 'Reports', tag: 'PDF', title: 'Client reports', desc: 'Branded PDF exports, schedules' },
];

const adminPages: Card[] = [
  { to: '/admin-ops', num: '19 / OPS', icon: 'Ops', tag: 'Staff', title: 'Ops dashboard', desc: 'MRR, churn, live system health', variant: 'dark' },
  { to: '/admin-users', num: '20 / USERS', icon: 'Users', tag: 'CRM', title: 'Users', desc: 'Search, impersonate, plan edits' },
  { to: '/admin-compliance', num: '21 / COMPLIANCE', icon: 'Compliance', tag: 'Policy', title: 'Compliance', desc: 'Rate limits, ToS flags, review queue' },
  { to: '/admin-system', num: '22 / SYSTEM', icon: 'System', tag: 'Infra', title: 'System health', desc: 'Proxies, API quotas, job workers' },
];

function PageCard({ card }: { card: Card }) {
  const cls = `page-card${card.variant && card.variant !== 'default' ? ` ${card.variant}` : ''}`;
  return (
    <Link className={cls} to={card.to}>
      <div className="page-thumb">
        <span className="thumb-num">{card.num}</span>
        <span className="thumb-icon">{card.icon}</span>
        <span className="thumb-tag">{card.tag}</span>
      </div>
      <div className="page-meta">
        <h3>{card.title}</h3>
        <p>{card.desc}</p>
      </div>
    </Link>
  );
}

export default function IndexPage() {
  return (
    <div className="p-index">
      <MarketingNav />
      <div className="sitemap">
        <div className="hero-index">
          <div className="eyebrow dot" style={{ marginBottom: '1.25rem' }}>
            Full website design · v1.0 · April 2026
          </div>
          <h1 className="display">
            Complete UI for <em>every page, every user.</em>
          </h1>
          <p>
            All pages that make up the EngageFlow product — public marketing site, customer
            dashboard for SMBs &amp; creators, agency workspace for white-label resellers, and
            internal platform admin. English language, built on the existing brand system (Fraunces
            + Hind Siliguri, paper/ink, electric orange accent, lime highlights, forest dark).
          </p>
          <div className="hero-meta">
            <div>
              <b>22 pages</b> · across 4 roles
            </div>
            <div>
              <b>Visitor · Customer · Agency · Admin</b>
            </div>
            <div>Click any card to open →</div>
          </div>
        </div>

        <div className="group public">
          <div className="group-head">
            <h2>Public marketing site</h2>
            <span className="count">07 pages</span>
            <span className="role">Visitor</span>
          </div>
          <div className="pages">
            {publicPages.map((c) => (
              <PageCard key={c.to} card={c} />
            ))}
          </div>
        </div>

        <div className="group customer">
          <div className="group-head">
            <h2>Customer dashboard</h2>
            <span className="count">08 pages</span>
            <span className="role">SMB / Creator</span>
          </div>
          <div className="pages">
            {customerPages.map((c) => (
              <PageCard key={c.to} card={c} />
            ))}
          </div>
        </div>

        <div className="group agency">
          <div className="group-head">
            <h2>Agency workspace</h2>
            <span className="count">03 pages</span>
            <span className="role">Agency Admin</span>
          </div>
          <div className="pages">
            {agencyPages.map((c) => (
              <PageCard key={c.to} card={c} />
            ))}
          </div>
        </div>

        <div className="group admin">
          <div className="group-head">
            <h2>Platform admin</h2>
            <span className="count">04 pages</span>
            <span className="role">Internal</span>
          </div>
          <div className="pages">
            {adminPages.map((c) => (
              <PageCard key={c.to} card={c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
