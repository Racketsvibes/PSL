import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner" style={{ alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          {/* Logo updated dynamically from the user's uploaded PSL Logo.jpg */}
          <Image 
            src="/psl-logo.jpg" 
            alt="PSL Live 2026 Logo" 
            width={120} 
            height={50} 
            style={{ objectFit: 'contain', height: '50px', width: 'auto' }}
            priority
          />
        </Link>
        <nav>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li className="dropdown">
              <span style={{ cursor: 'pointer', fontWeight: 500 }}>Tournament ▾</span>
              <div className="dropdown-content">
                <Link href="/hbl-psl-2026">PSL 2026 Hub</Link>
                <Link href="/psl-11-2026-schedule">Match Schedule</Link>
                <Link href="/psl-live">Live Streaming Links</Link>
                <Link href="/points-table">Points Table</Link>
              </div>
            </li>
            <li className="dropdown">
              <span style={{ cursor: 'pointer', fontWeight: 500 }}>Teams ▾</span>
              <div className="dropdown-content">
                <Link href="/lahore-qalandars-squad">Lahore Qalandars</Link>
                <Link href="/quetta-gladiators-squad">Quetta Gladiators</Link>
                <Link href="/islamabad-united-squad">Islamabad United</Link>
                <Link href="/karachi-kings-squad">Karachi Kings</Link>
                <Link href="/multan-sultans-squad">Multan Sultans</Link>
                <Link href="/peshawar-zalmi-squad">Peshawar Zalmi</Link>
                <Link href="/rawalpindi-pindiz-squad">Rawalpindi Pindiz</Link>
                <Link href="/hyderabad-kingsmen-squad">Hyderabad Kingsmen</Link>
              </div>
            </li>
            <li className="dropdown">
              <span style={{ cursor: 'pointer', fontWeight: 500 }}>News ▾</span>
              <div className="dropdown-content">
                <Link href="/why-no-crowd-in-psl-2026">Why No Crowd?</Link>
                <Link href="/psl-11-behind-closed-doors-reason">Closed Doors Context</Link>
                <Link href="/psl-2026-venue-changes">2026 Venue Updates</Link>
                <Link href="/gaddafi-stadium-psl-schedule">Lahore Matches</Link>
                <Link href="/national-bank-stadium-karachi-psl-matches">Karachi Matches</Link>
                <Link href="/psl-11-refund-policy">Refund Policy</Link>
                <Link href="/peshawar-zalmi-vs-rawalpindi-pindiz">Zalmi vs Pindiz</Link>
                <Link href="/multan-sultans-vs-islamabad-united">Sultans vs United</Link>
                <Link href="/where-to-watch-quetta-vs-lahore">Gladiators vs Qalandars</Link>
              </div>
            </li>
            <li className="dropdown">
              <span style={{ cursor: 'pointer', fontWeight: 500 }}>Company ▾</span>
              <div className="dropdown-content">
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/terms-of-service">Terms of Service</Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
