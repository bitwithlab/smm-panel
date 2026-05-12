import MarketingNav from '../../components/MarketingNav';
import MarketingFooter from '../../components/MarketingFooter';
import '../../styles/pages/about.css';

const values = [
  { n: '01', h: 'Compliance-first', p: 'We build inside platform policies — never around them. Human review on every scheduled reply.' },
  { n: '02', h: 'Bangla-first UX', p: 'Our library, AI, and support all speak Bangla natively. Not a translation layer.' },
  { n: '03', h: 'Honest pricing', p: 'Every feature on the pricing page ships on the plan it\'s listed under. No upsell traps.' },
  { n: '04', h: 'Ship weekly', p: 'One release every Thursday. Changelog is public. We answer issues in less than 24 hours.' },
];

const phases = [
  { yr: 'Q4 2025', h: 'Founding', p: 'Four engineers in Mohakhali build the first auto-scan prototype for one Facebook page.' },
  { yr: 'Q1 2026', h: 'Beta', p: '100 SMB pilots across Dhaka, Chittagong, Sylhet. First ৳1 lakh MRR in week 10.' },
  { yr: 'Q2 2026', h: 'Public launch', p: 'Standard plan ships. 2,400 brands within 90 days. White-label panel enters private beta.' },
  { yr: '2027+', h: 'South Asia', p: 'India, Pakistan, Nepal rollout. LinkedIn + TikTok modules. Series A readiness Q3.' },
];

const team = [
  { face: 'a', initial: 'A', name: 'Arifur Rahman', role: 'Founder / CEO' },
  { face: 'd', initial: 'S', name: 'Sadia Chowdhury', role: 'CTO' },
  { face: 'l', initial: 'T', name: 'Tahmid Karim', role: 'Lead Engineer' },
  { face: 'f', initial: 'R', name: 'Rumana Ahmed', role: 'Design Lead' },
  { face: 'd', initial: 'N', name: 'Nafis Islam', role: 'Backend' },
  { face: 'a', initial: 'F', name: 'Farah Siddique', role: 'Customer Success' },
  { face: 'l', initial: 'M', name: 'Mahmud Hasan', role: 'Marketing' },
  { face: 'f', initial: 'Z', name: 'Zainab Ali', role: 'Content' },
];

const compliance = [
  { h: 'Official APIs first', p: 'Meta Graph and X v2 endpoints wherever available. Browser automation only with client consent for unsupported operations.' },
  { h: 'Human in the loop', p: 'No reply is sent without a logged human approver. Full audit trail per seat, exportable on demand.' },
  { h: 'Acceptable use enforced', p: 'Fake engagement, impersonation, and bulk inauthentic activity terminate accounts without refund.' },
];

export default function AboutPage() {
  return (
    <div className="p-about">
      <MarketingNav />

      <div className="head">
        <div className="inner">
          <span className="eyebrow">Our story</span>
          <h1>
            Built in Dhaka. Made for the <em>first hour</em>.
          </h1>
          <p>
            EngageFlow started with a frustration every Bangladeshi page owner knows: the first
            hour after a post goes live decides everything — and nobody is ever around to work it.
          </p>
        </div>
      </div>

      <section>
        <div className="inner">
          <div className="split">
            <div className="pillar">
              <div className="section-num">Mission</div>
              <h3>
                Give every small brand the first-hour response machinery the big brands already
                have.
              </h3>
              <p>
                Large agencies run a war room for every campaign — dozens of people refreshing,
                replying, monitoring. Local SMBs and solo creators don't have that team. EngageFlow
                packages the same operational discipline into one workspace that two people can run.
              </p>
              <p style={{ marginTop: '1rem' }}>
                We exist because a ৳99 page owner in Sylhet shouldn't have to fight the algorithm
                alone.
              </p>
            </div>
            <div className="mission-art">
              <div
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: '.75rem',
                  color: 'rgba(255,255,255,.5)',
                  marginBottom: '.5rem',
                }}
              >
                EST. 2026 · DHAKA
              </div>
              <div className="big">
                First<br />hour<br />wins.
              </div>
              <div className="small">— founding principle · v1</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--cream)' }}>
        <div className="inner">
          <div style={{ maxWidth: '700px', marginBottom: '2.5rem' }}>
            <div className="section-num">Values</div>
            <h2 className="display" style={{ fontSize: '2.2rem', marginTop: '.5rem' }}>
              Four commitments we make.
            </h2>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.n} className="val">
                <div className="n">{v.n}</div>
                <h4>{v.h}</h4>
                <p>{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="inner">
          <div style={{ maxWidth: '700px', marginBottom: '2.5rem' }}>
            <div className="section-num">Milestones</div>
            <h2 className="display" style={{ fontSize: '2.2rem', marginTop: '.5rem' }}>
              From beta to break-even.
            </h2>
          </div>
          <div className="timeline">
            {phases.map((ph) => (
              <div key={ph.yr} className="phase">
                <div className="yr">{ph.yr}</div>
                <h4>{ph.h}</h4>
                <p>{ph.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--paper-2)' }}>
        <div className="inner">
          <div style={{ maxWidth: '700px', marginBottom: '2.5rem' }}>
            <div className="section-num">Team</div>
            <h2 className="display" style={{ fontSize: '2.2rem', marginTop: '.5rem' }}>
              The eight people behind it.
            </h2>
          </div>
          <div className="team-grid">
            {team.map((m) => (
              <div key={m.name} className="member">
                <div className={`face ${m.face}`}>{m.initial}</div>
                <div className="member-info">
                  <h4>{m.name}</h4>
                  <p>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="compliance">
        <div className="inner">
          <div className="section-num" style={{ color: 'var(--lime)' }}>
            Our compliance posture
          </div>
          <h2>We build guardrails, not loopholes.</h2>
          <p>
            Automation in social engagement is a space full of shortcuts. We take the opposite
            position: every reply has a named human approver, every account honors platform rate
            limits, and every shortcut that risks a client's audience is a shortcut we don't ship.
          </p>
          <div className="comp-grid">
            {compliance.map((c) => (
              <div key={c.h} className="comp-card">
                <h4>{c.h}</h4>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarketingFooter variant="compact" />
    </div>
  );
}
