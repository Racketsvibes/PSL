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
            <li><Link href="/psl-live">PSL Live</Link></li>
            <li><Link href="/where-to-watch-quetta-vs-lahore">Quetta vs Lahore</Link></li>
            <li><Link href="/about">About Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
