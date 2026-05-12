import type { ReactNode } from 'react';

type Crumb = { label: string; current?: boolean };

type Props = {
  crumbs: Crumb[];
  searchPlaceholder?: string;
  rightSlot?: ReactNode;
};

export default function AppTopBar({
  crumbs,
  searchPlaceholder = 'Search…',
  rightSlot,
}: Props) {
  return (
    <div className="app-top">
      <div className="app-crumbs">
        {crumbs.map((c, i) => (
          <span key={i} style={{ display: 'contents' }}>
            {i > 0 && <span className="sep">/</span>}
            {c.current ? <b>{c.label}</b> : <span>{c.label}</span>}
          </span>
        ))}
      </div>
      <div className="app-search">
        🔍<input placeholder={searchPlaceholder} />
      </div>
      <div className="app-top-right">{rightSlot}</div>
    </div>
  );
}
