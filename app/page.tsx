export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For Independent Restaurant Owners
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know What Your Competitors
          <span className="text-[#58a6ff]"> Charge</span> Before You Lose Customers
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          MenuWatch monitors every restaurant within 3 miles, alerts you the moment a competitor changes a price, and suggests the optimal pricing strategy to keep you ahead.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Start Tracking for $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '📍', title: '3-Mile Radius Scan', desc: 'Automatically discovers and tracks every competing restaurant near you.' },
            { icon: '🔔', title: 'Instant Price Alerts', desc: 'Get email or SMS the moment a competitor updates their menu prices.' },
            { icon: '🤖', title: 'AI Pricing Strategy', desc: 'Receive data-driven recommendations to maximize your revenue.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay competitive</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited competitor tracking',
              'Real-time price change alerts (email + SMS)',
              'AI-powered pricing recommendations',
              '3-mile radius auto-discovery',
              'Weekly competitive analysis report',
              'Menu history & trend charts',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started — $9/mo
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does MenuWatch find competitor restaurants?',
              a: 'We use location data and public business listings to automatically discover restaurants within a 3-mile radius of your address. Setup takes under 2 minutes.',
            },
            {
              q: 'How quickly will I be notified of price changes?',
              a: 'MenuWatch checks competitor menus multiple times per day. You will receive an email or SMS alert within hours of any price change being detected.',
            },
            {
              q: 'Can I cancel my subscription at any time?',
              a: 'Yes. There are no contracts or commitments. You can cancel your $9/mo subscription at any time directly from your account dashboard.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} MenuWatch. All rights reserved.
      </footer>
    </main>
  )
}
