export const metadata = {
  title: 'Contact Us | PSL Live',
  description: 'Get in touch with the PSL Live team for inquiries about cricket coverage and live match updates.',
};

export default function ContactPage() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <div className="content-wrapper">
        <h1>Contact Us</h1>
        <p>Have questions about where to catch <a href="/psl-live">PSL Live Streaming</a>, or need details about upcoming matches like <a href="/where-to-watch-quetta-vs-lahore">Quetta Gladiators vs Lahore Qalandars</a>? We would love to hear from you.</p>

        <h2>Get in Touch</h2>
        <p>You can reach out to our administration and support team via email for directly raising your queries or providing site feedback.</p>
        <p><strong>Email:</strong> support@psl-live.vercel.app</p>

        <h2>Partnerships</h2>
        <p>If you're representing an official streaming application like Tamasha Live, or require visibility for PSL live scores, reach out to coordinate on our dedicated <a href="/psl-live">PSL match today live</a> portal.</p>
        
        <p>Note: We aim to respond to all cricket-related inquiries within 48 hours. Thank you for your continued support as we gear up for the Pakistan Super League.</p>
      </div>
    </div>
  );
}
