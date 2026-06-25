import './style.css'

document.querySelector('#app').innerHTML = `
  <!-- Navigation -->
  <nav class="nav">
    <div class="nav-inner">
      <a href="#home" class="nav-logo">Amanda<span class="accent">.</span>dev</a>
      <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#packages">Packages</a></li>
        <li><a href="#contact" class="btn btn-sm">Let's Talk</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero -->
  <section id="home" class="hero">
    <div class="hero-content">
      <p class="hero-tag">Freelance Web Developer</p>
      <h1>Helping Small&nbsp;Businesses <span class="accent">Thrive Online</span></h1>
      <p class="hero-sub">
        Custom websites built with care — from concept to launch and beyond.
      </p>
      <div class="hero-cta">
        <a href="#packages" class="btn btn-primary">View Packages</a>
        <a href="#about" class="btn btn-ghost">About Me</a>
      </div>
    </div>
    <div class="hero-graphic" aria-hidden="true">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
      <div class="browser-mock">
        <div class="browser-bar">
          <span class="dot dot-r"></span>
          <span class="dot dot-y"></span>
          <span class="dot dot-g"></span>
          <div class="url-bar">amandas-client.com</div>
        </div>
        <div class="browser-body">
          <div class="mock-nav"></div>
          <div class="mock-hero"></div>
          <div class="mock-cards">
            <div class="mock-card"></div>
            <div class="mock-card"></div>
            <div class="mock-card"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About -->
  <section id="about" class="about section">
    <div class="container">
      <div class="section-label">About Me</div>
      <div class="about-grid">
        <div class="about-text">
          <h2>A developer who genuinely cares about your business</h2>
          <p>
            Hi, I'm Amanda! I graduated with an Engineering degree and have a strong background
            in Computer Science, which means I bring both technical rigor and creative
            problem-solving to every project.
          </p>
          <p>
            My passion is working with <strong>small businesses</strong> — the kind of businesses
            that are the backbone of our communities. I know how much hard work goes into running
            one, and I believe every small business deserves a professional online presence that
            works as hard as they do.
          </p>
          <p>
            Whether you need a brand-new website, a refresh of an old one, or ongoing support to
            keep things running smoothly, I'm here to make it simple, affordable, and genuinely
            effective.
          </p>
          <div class="about-badges">
            <span class="badge">Engineering Degree</span>
            <span class="badge">Computer Science</span>
            <span class="badge">Small Business Focused</span>
            <span class="badge">Responsive Design</span>
            <span class="badge">SEO &amp; Google</span>
          </div>
        </div>
        <div class="about-highlights">
          <div class="highlight-card">
            <div class="highlight-icon">🎓</div>
            <h3>Engineering Background</h3>
            <p>Analytical thinking and structured problem-solving built into every project.</p>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">💻</div>
            <h3>Computer Science Expertise</h3>
            <p>From front-end design to back-end logic — fluent across the full stack.</p>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">🤝</div>
            <h3>Passion for Small Business</h3>
            <p>I take the time to understand your business and build something that reflects it.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services -->
  <section id="services" class="services section">
    <div class="container">
      <div class="section-label">What I Do</div>
      <h2 class="section-title">Everything your website needs</h2>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">🎨</div>
          <h3>Custom Design</h3>
          <p>A website that looks uniquely yours — not a generic template. Designed around your brand, your customers, and your goals.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">📱</div>
          <h3>Responsive &amp; Mobile-First</h3>
          <p>Your site will look great on every device — phone, tablet, or desktop — so you never lose a customer due to a broken layout.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">🔍</div>
          <h3>SEO &amp; Google Presence</h3>
          <p>Get found on Google. I set up and optimize your site so local customers searching for your services can find you.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">🔒</div>
          <h3>Security &amp; Reliability</h3>
          <p>SSL certificates, regular updates, backups, and monitoring so your site stays safe and up 24/7.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">🚀</div>
          <h3>Fast Performance</h3>
          <p>Slow websites lose customers. I build and tune sites to load quickly, giving visitors a smooth experience every time.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">🌐</div>
          <h3>Domain &amp; Hosting</h3>
          <p>Taken care of from day one. I handle domain registration, hosting setup, and ongoing renewals so you don't have to.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Packages -->
  <section id="packages" class="packages section">
    <div class="container">
      <div class="section-label">Pricing</div>
      <h2 class="section-title">Simple, transparent packages</h2>
      <p class="section-sub">No hidden fees. No surprises. Just clear pricing for real work.</p>

      <h3 class="package-group-title">🛠️ Website Development</h3>
      <p class="package-group-desc">One-time investment to get your business online with a professional, custom-built website.</p>
      <div class="pricing-grid">
        <div class="pricing-card">
          <div class="pricing-tier">Starter</div>
          <div class="pricing-price">Starting at <span>$1,000</span></div>
          <p class="pricing-desc">Perfect for brand-new businesses that need a clean, professional web presence fast.</p>
          <ul class="pricing-features">
            <li>Up to 3 pages</li>
            <li>Mobile-responsive design</li>
            <li>Contact form</li>
            <li>Basic SEO setup</li>
            <li>Domain &amp; hosting setup</li>
          </ul>
          <a href="#contact" class="btn btn-outline">Get Started</a>
        </div>
        <div class="pricing-card pricing-featured">
          <div class="pricing-badge">Most Popular</div>
          <div class="pricing-tier">Growth</div>
          <div class="pricing-price">Starting at <span>$2,000</span></div>
          <p class="pricing-desc">For businesses ready to make a strong impression with more content and functionality.</p>
          <ul class="pricing-features">
            <li>Up to 6 pages</li>
            <li>Custom design &amp; branding</li>
            <li>Blog or gallery section</li>
            <li>SEO optimization</li>
            <li>Google Business setup</li>
            <li>Social media links</li>
          </ul>
          <a href="#contact" class="btn btn-primary">Get Started</a>
        </div>
        <div class="pricing-card">
          <div class="pricing-tier">Premium</div>
          <div class="pricing-price">Starting at <span>$3,000</span></div>
          <p class="pricing-desc">A fully featured site for businesses that want to stand out and grow their online presence.</p>
          <ul class="pricing-features">
            <li>Unlimited pages</li>
            <li>E-commerce or bookings</li>
            <li>Advanced SEO strategy</li>
            <li>Google Reviews integration</li>
            <li>Performance optimization</li>
            <li>Launch support &amp; training</li>
          </ul>
          <a href="#contact" class="btn btn-outline">Get Started</a>
        </div>
      </div>

      <h3 class="package-group-title" style="margin-top: 3.5rem;">📅 Monthly Maintenance Plans</h3>
      <p class="package-group-desc">Keep your site secure, up-to-date, and performing well every month — without lifting a finger.</p>
      <div class="maintenance-grid">
        <div class="maintenance-card">
          <div class="maint-icon">🌐</div>
          <div class="maint-tier">Hosting Only</div>
          <div class="maint-price">Low monthly rate</div>
          <p>Domain renewal, web hosting, SSL certificate, and uptime monitoring. Your site stays live and secure.</p>
        </div>
        <div class="maintenance-card">
          <div class="maint-icon">✏️</div>
          <div class="maint-tier">Hosting + Updates</div>
          <div class="maint-price">Mid-range monthly rate</div>
          <p>Everything in Hosting, plus regular content updates, plugin/software updates, and minor design tweaks as needed.</p>
        </div>
        <div class="maintenance-card">
          <div class="maint-icon">⭐</div>
          <div class="maint-tier">Full Care</div>
          <div class="maint-price">Premium monthly rate</div>
          <p>Complete peace of mind — hosting, updates, security scans, Google Business management, and review monitoring.</p>
        </div>
      </div>
      <p class="package-note">📬 Monthly rates vary by plan. <a href="#contact">Contact me</a> for a custom quote based on your needs.</p>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="contact section">
    <div class="container">
      <div class="section-label">Contact</div>
      <h2 class="section-title">Ready to get started?</h2>
      <p class="section-sub">Tell me a little about your business and I'll get back to you within 24 hours.</p>
      <div class="contact-grid">
        <form class="contact-form" id="contact-form" action="mailto:hello@amandadev.com" method="post" enctype="text/plain">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Jane Smith" required />
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="jane@business.com" required />
            </div>
          </div>
          <div class="form-group">
            <label for="business">Business Name</label>
            <input type="text" id="business" name="business" placeholder="Jane's Bakery" />
          </div>
          <div class="form-group">
            <label for="interest">I'm interested in…</label>
            <select id="interest" name="interest">
              <option value="">Select a package</option>
              <option value="starter">Starter Website ($1,000+)</option>
              <option value="growth">Growth Website ($2,000+)</option>
              <option value="premium">Premium Website ($3,000+)</option>
              <option value="maintenance">Monthly Maintenance Plan</option>
              <option value="other">Not sure — let's chat!</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Tell me about your project</label>
            <textarea id="message" name="message" rows="4" placeholder="A little about your business and what you're hoping to achieve..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Send Message</button>
          <p class="form-note">I'll reply within 24 hours. No spam, ever.</p>
        </form>
        <div class="contact-info">
          <div class="contact-card">
            <h3>Let's build something great together</h3>
            <p>I work closely with every client to make sure their website truly represents their business. Have questions? Reach out any time.</p>
            <div class="contact-items">
              <div class="contact-item">
                <span class="contact-item-icon">✉️</span>
                <span>hello@amandadev.com</span>
              </div>
              <div class="contact-item">
                <span class="contact-item-icon">📍</span>
                <span>Available remotely nationwide</span>
              </div>
              <div class="contact-item">
                <span class="contact-item-icon">⏱️</span>
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>
          <div class="trust-block">
            <div class="trust-item"><span>✅</span> No surprise fees</div>
            <div class="trust-item"><span>✅</span> You own your website</div>
            <div class="trust-item"><span>✅</span> Clear communication</div>
            <div class="trust-item"><span>✅</span> Ongoing support available</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container footer-inner">
      <span class="nav-logo">Amanda<span class="accent">.</span>dev</span>
      <p>© ${new Date().getFullYear()} Amanda. Freelance Web Development. All rights reserved.</p>
      <nav class="footer-nav" aria-label="Footer navigation">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#packages">Packages</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </footer>
`

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelector('.nav-links')
toggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open')
  toggle.setAttribute('aria-expanded', String(open))
})

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open')
    toggle.setAttribute('aria-expanded', 'false')
  })
})

// Sticky nav shadow on scroll
const nav = document.querySelector('.nav')
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10)
}, { passive: true })

// Contact form — validate required fields before allowing mailto submission
document.querySelector('#contact-form').addEventListener('submit', e => {
  const form = e.target
  const name = form.querySelector('#name')
  const email = form.querySelector('#email')
  let valid = true

  ;[name, email].forEach(field => {
    field.classList.remove('field-error')
    if (!field.value.trim()) {
      field.classList.add('field-error')
      valid = false
    }
  })

  if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    email.classList.add('field-error')
    valid = false
  }

  if (!valid) {
    e.preventDefault()
  }
})

// Clear validation state on input
document.querySelectorAll('#contact-form input, #contact-form select, #contact-form textarea').forEach(field => {
  field.addEventListener('input', () => field.classList.remove('field-error'))
})

