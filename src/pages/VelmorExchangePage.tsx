const howItWorks = [
  'Limit + market order book',
  'Matching engine with price-time priority',
  'Price engine for ticks + candlesticks',
  'Random walk during low activity',
  'Pre-market + post-market simulation',
  'TradingView Lightweight Charts frontend',
  'Arch Linux ARM OS',
  'Exposed globally using Cloudflare Tunnel',
  'No port-forwarding needed',
  'systemd services for uptime + auto-restart',
]

const buildNotes = [
  { label: 'Hardware', value: 'Raspberry Pi 5 (8GB)' },
  { label: 'OS', value: 'Arch Linux ARM' },
  { label: 'Editor', value: 'VS Code over SSH' },
  { label: 'Domain', value: 'kapishh.space' },
  { label: 'Backend', value: 'Python' },
  {
    label: 'Tunnel',
    value: 'Cloudflare Zero Trust',
  },
  { label: 'Process', value: 'Fully Automatic' },
]

const VelmorExchangePage = () => {
  return (
    <div className="page velmor-page">
      <div className="velmor-banner">Market is closed right now.</div>

      <section className="velmor-hero">
        <h1>Velmor Exchange</h1>
        <p>A DIY stock exchange and matching engine running on a Raspberry Pi.</p>
      </section>

      <section className="velmor-intro">
        <p>
          Built the whole thing from scratch: Python microservices on a Raspberry Pi 5 (8GB) with a full limit order book,
          price-time matching, price engine, and random walk when nobody’s trading. Streams live prices and book data into my
          own UI so I can stress-test ideas without begging brokers for access.
        </p>
      </section>

      <section className="velmor-section">
        <h2>Key Features</h2>
        <ul className="velmor-list">
          {howItWorks.map((item) => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="velmor-section">
        <h2>Build Notes</h2>
        <div className="velmor-notes">
          {buildNotes.map((note) => (
            <div key={note.label}>
              <p className="velmor-notes__label">{note.label}</p>
              <p>{note.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="velmor-section">
        <p className="velmor-footer-note">
          Future upgrades: deeper microstructure modeling, matching engine improvements, order replay, and REST API
          endpoints.
        </p>
      </section>
    </div>
  )
}

export default VelmorExchangePage


