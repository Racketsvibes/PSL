import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          <span>🏏 PSL Live 2026</span>
        </Link>
        <nav>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/hbl-psl-2026">PSL 2026</Link></li>
            <li><Link href="/psl-live">Live Stream</Link></li>
            <li><Link href="/points-table">Points Table</Link></li>
            <li className="dropdown">
              <span style={{ cursor: 'pointer', fontWeight: 500 }}>PSL Teams ▾</span>
              <div className="dropdown-content">
                <Link href="/lahore-qalandars-squad">Lahore Qalandars</Link>
                <Link href="/quetta-gladiators-squad">Quetta Gladiators</Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
