import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-block">
            <Link href="/" style={{ display: 'inline-block', marginBottom: '1rem' }}>
              <Image
                src="/psl-logo.jpg"
                alt="PSL Live 2026 – Pakistan Super League Official Logo"
                width={120}
                height={60}
                style={{ objectFit: 'contain', borderRadius: '6px' }}
              />
            </Link>
            <p>Your ultimate destination for live streaming info, scores, and deep dives into everything Pakistan Super League. Follow your favorite teams like Quetta Gladiators and Lahore Qalandars here.</p>
          </div>
          <div className="footer-block">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/psl-live">PSL Match Today Live</Link></li>
              <li><Link href="/where-to-watch-quetta-vs-lahore">Where to Watch QG vs LAH</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
          </div>
          <div className="footer-block">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} PSL Live Coverage. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
