import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  X,
} from 'lucide-react'
import { useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { menuCategories, menuItems, type MenuCategory } from './data/menu'

const logoUrl = '/LOGO.svg'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/story' },
  { label: 'Menu', to: '/menu' },
  { label: 'Our Philosophy', to: '/#philosophy' },
  { label: 'Contact', to: '/contact' },
]

const philosophyBlocks = [
  {
    title: 'TIME-HONOURED TECHNIQUES',
    text:
      'We begin with slow, considered preparation and a respect for craft, letting dough, heat and timing do the work that great pizza deserves.',
  },
  {
    title: 'QUALITY INGREDIENTS',
    text:
      'Our approach starts with carefully selected ingredients and a simple belief: better inputs create a more memorable table.',
  },
  {
    title: 'FOOD WORTH SHARING',
    text:
      'Good food brings people together. We make room for conversation, warmth and the pleasure of eating well together.',
  },
]

const previewMenu = menuItems.slice(0, 3)

function BrandPattern({ className = '', variant = 'blue' }: { className?: string; variant?: 'blue' | 'ivory' }) {
  const stroke = variant === 'blue' ? '#1D5BA8' : '#F9F5EC'

  return (
    <svg
      viewBox="0 0 800 420"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke={stroke} strokeWidth="2" strokeLinecap="round" opacity="0.9">
        <path d="M12 205C62 148 143 118 208 125C272 132 294 189 346 194C396 198 420 166 469 138C524 105 649 101 754 150C781 164 792 186 776 210C760 235 727 239 699 229C675 220 661 197 634 190C599 180 583 211 551 228C507 249 484 216 441 210C396 204 386 260 330 268C280 275 266 219 222 208C174 196 137 232 90 233C58 234 31 220 12 205Z" />
        <path d="M56 253C99 219 163 204 207 225C258 249 271 293 319 300C362 307 418 293 464 275C508 258 555 251 604 266C652 281 694 297 744 295" />
        <path d="M73 145C113 110 170 78 224 72C284 65 343 97 386 118C436 142 485 147 553 134C605 124 678 119 759 147" />
        <path d="M124 316C169 283 234 280 277 298C320 316 330 362 376 367C423 373 483 350 530 334C571 321 624 319 706 341" />
      </g>
    </svg>
  )
}

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-warmIvory text-charcoal">
      <header className="sticky top-0 z-50 border-b border-white/15 bg-fornoBlue/95 text-white backdrop-blur-md">
        <div className="section-shell flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3" aria-label="Ratina Forno home">
            <img src={logoUrl} alt="Ratina Forno logo" className="h-12 w-auto" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `font-sans text-sm font-semibold tracking-[0.18em] uppercase transition-colors ${
                    isActive ? 'text-warmIvory' : 'text-white/85 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-fornoBlue transition hover:bg-warmIvory"
            >
              Order now
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-fornoBlue text-white lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="overflow-hidden border-t border-white/15 bg-fornoBlue lg:hidden"
            >
              <div className="section-shell flex flex-col gap-4 py-5">
                {navItems.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `font-sans text-sm font-semibold uppercase tracking-[0.18em] ${
                        isActive ? 'text-warmIvory' : 'text-white/85'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-fornoBlue px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white"
                >
                  Order now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

function HomePage() {
  return (
    <div className="home-campaign">
      <div className="campaign-shell">
        <section className="campaign-hero">
          <img className="campaign-food" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1800&q=90" alt="Freshly baked Ratina Forno pizza topped with basil" />
          <div className="campaign-wash" />
          <div className="campaign-topline"><span>RATINA FORNO · EST. WITH FIRE</span><span>CRAFT · INGREDIENTS · GOOD COMPANY</span></div>
          <div className="campaign-copy">
            <p>Authentic food. Honest ingredients.</p>
            <h1>GOOD<br />DOUGH.<br /><span>GOOD FIRE.</span></h1>
            <div className="campaign-subtitle">MADE FOR<br />SHARING</div>
            <Link to="/menu" className="campaign-order">Explore the menu <ArrowUpRight size={18} /></Link>
          </div>
          <img src={logoUrl} alt="Ratina Forno" className="campaign-logo" />
          <div className="campaign-caption">Slow made. Fire finished.<br />Always worth gathering for.</div>
          <div className="campaign-stamp">FRESH<br />FROM<br />THE FORNO</div>
          <div className="checker" aria-hidden="true" />
        </section>
        <section className="campaign-story" id="philosophy">
          <span className="story-script">Ratina Forno</span>
          <h2>GOOD FOOD BRINGS US TOGETHER.</h2>
          <p>Rooted in European food culture, made with patience, quality ingredients and a deep respect for the fire. A little craft, a lot of heart — served fresh at your table.</p>
          <Link to="/story" className="story-link">A little more about us <ArrowRight size={16} /></Link>
          <span className="story-mark">RF</span>
        </section>
      </div>
      <section className="campaign-menu section-shell" id="menu-preview">
        <div className="campaign-menu-heading"><div><span>STRAIGHT FROM THE OVEN</span><h2>Made to be shared.</h2></div><Link to="/menu">See the full menu <ArrowUpRight size={17} /></Link></div>
        <div className="campaign-cards">
          {previewMenu.map((item, index) => <Link to="/menu" className={`campaign-card card-${index + 1}`} key={item.id}>
            <img src={item.image} alt={item.name} />
            <span className="card-index">0{index + 1} / RATINA FORNO</span>
            <div><span>{item.category}</span><h3>{item.name}</h3><p>Discover the menu <ArrowUpRight size={16} /></p></div>
          </Link>)}
        </div>
      </section>
    </div>
  )
}

function StoryPage() {
  const storySections = [
    {
      title: 'A modern pizzeria shaped by European food culture.',
      copy:
        'Ratina Forno is a contemporary pizzeria rooted in the rituals of European cooking: patience, good ingredients and a respect for the fire that brings food to life. We bring this spirit into every pizza, every table and every hour of service.',
      image:
        'https://images.unsplash.com/photo-1548365328-9f547fb9587c?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Our mission is simple: make good food feel everyday and memorable.',
      copy:
        'To bring people closer to authentic European food culture through thoughtfully crafted pizzas, quality ingredients and time-honoured techniques. Ratina Forno aims to make good food an everyday pleasure where tradition meets freshness and every bite reflects a passion for doing things right.',
      image:
        'https://images.unsplash.com/photo-1552539618-7eec9b4d1796?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  return (
    <>
      <section className="section-shell py-16 lg:py-20">
        <Reveal>
          <div className="max-w-4xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-fornoBlue">
              Our story
            </p>
            <h1 className="mt-4 font-display text-5xl leading-none text-charcoal sm:text-6xl lg:text-7xl">
              Rooted in craft. Built for sharing.
            </h1>
          </div>
        </Reveal>
      </section>

      <section className="bg-warmIvory py-8 lg:py-14">
        <div className="section-shell">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div className="overflow-hidden rounded-[2rem] border border-charcoal/10 bg-white p-3 shadow-[0_30px_80px_rgba(25,25,25,0.05)]">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
                  alt="European-style dishes and warm dining ambience"
                  className="h-[560px] w-full rounded-[1.5rem] object-cover"
                />
              </div>
              <div className="space-y-6">
                <p className="font-sans text-base leading-relaxed text-charcoal/75">
                  Ratina Forno began with a simple conviction: the best pizza is built on patience, clarity and a strong sense of place. We look to European dining traditions for their generosity, confidence and ritual — not excess or performance, but warmth and honesty.
                </p>
                <p className="font-sans text-base leading-relaxed text-charcoal/75">
                  The food is expressive and grounded. The atmosphere is welcoming. The pace is unhurried. The purpose is always the same: to serve food that feels considered, satisfying and worth sharing.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {storySections.map((section, index) => (
        <section key={section.title} className={index % 2 === 0 ? 'section-shell py-16 lg:py-20' : 'bg-charcoal py-16 text-white lg:py-20'}>
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-fornoBlue">
                  {index === 0 ? 'European inspiration' : 'Our purpose'}
                </p>
                <h2 className={`mt-3 font-display text-4xl leading-none sm:text-5xl ${index % 2 === 1 ? 'text-white' : 'text-charcoal'}`}>
                  {section.title}
                </h2>
                <p className={`mt-6 max-w-xl font-sans text-lg leading-relaxed ${index % 2 === 1 ? 'text-warmIvory/80' : 'text-charcoal/75'}`}>
                  {section.copy}
                </p>
              </div>
              <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                <div className="overflow-hidden rounded-[2rem] border border-charcoal/10 bg-white p-3 shadow-[0_30px_80px_rgba(25,25,25,0.06)]">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-[420px] w-full rounded-[1.5rem] object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      ))}

      <section className="section-shell py-16 lg:py-20">
        <Reveal>
          <div className="rounded-[2.5rem] bg-fornoBlue p-8 text-white lg:p-12">
            <div className="grid gap-6 lg:grid-cols-3">
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-warmIvory/75">
                  Ingredients
                </p>
                <h3 className="mt-4 font-display text-3xl leading-none">Thoughtful sourcing.</h3>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-warmIvory/75">
                  Technique
                </p>
                <h3 className="mt-4 font-display text-3xl leading-none">Slow craft.</h3>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-warmIvory/75">
                  Experience
                </p>
                <h3 className="mt-4 font-display text-3xl leading-none">Shared joy.</h3>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Pizzas')

  const visibleItems = useMemo(
    () => menuItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  )

  return (
    <section className="section-shell py-16 lg:py-20">
      <Reveal>
        <div className="max-w-3xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-fornoBlue">
            Menu
          </p>
          <h1 className="mt-4 font-display text-5xl leading-none text-charcoal sm:text-6xl">
            Good dough. Good fire. Thoughtful plates.
          </h1>
        </div>
      </Reveal>

      <div className="mt-10 flex flex-wrap gap-3">
        {menuCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] transition ${
              activeCategory === category
                ? 'border-fornoBlue bg-fornoBlue text-white'
                : 'border-charcoal/15 bg-white text-charcoal hover:border-fornoBlue hover:text-fornoBlue'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {visibleItems.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05}>
            <article className="group overflow-hidden rounded-[2rem] border border-charcoal/10 bg-white shadow-[0_20px_70px_rgba(25,25,25,0.04)]">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-3xl leading-none text-charcoal">{item.name}</h3>
                  <span className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-fornoBlue">
                    {item.price}
                  </span>
                </div>
                <p className="mt-4 font-sans text-base leading-relaxed text-charcoal/75">{item.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function ContactPage() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [success, setSuccess] = useState('')

  const validate = () => {
    const nextErrors: { [key: string]: string } = {}

    if (!values.name.trim()) {
      nextErrors.name = 'Please add your name.'
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Please add your email.'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      nextErrors.email = 'Please use a valid email address.'
    }

    if (!values.subject.trim()) {
      nextErrors.subject = 'Please provide a subject.'
    }

    if (!values.message.trim() || values.message.trim().length < 12) {
      nextErrors.message = 'Please share a few more details.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleChange = (field: string, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: '' }))
    setSuccess('')
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!validate()) {
      return
    }

    setSuccess('Thanks for getting in touch — your message has been captured and is ready to be sent.')
    setValues({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="section-shell py-16 lg:py-20">
      <Reveal>
        <div className="mb-12 max-w-3xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-fornoBlue">
            Contact
          </p>
          <h1 className="mt-4 font-display text-5xl leading-none text-charcoal sm:text-6xl">
            Tell us what you’re craving.
          </h1>
        </div>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="space-y-6 rounded-[2rem] bg-charcoal p-8 text-white">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-warmIvory/75">
                Visit or get in touch
              </p>
              <h2 className="mt-3 font-display text-4xl leading-none">Ratina Forno</h2>
            </div>

            <div className="space-y-4 font-sans text-base text-warmIvory/80">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-fornoBlue" />
                <span>Address placeholder</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 size={18} className="mt-1 text-fornoBlue" />
                <span>Opening hours placeholder</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-fornoBlue" />
                <span>Phone placeholder</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-fornoBlue" />
                <span>Email placeholder</span>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-warmIvory/75">
                Map
              </p>
              <div className="mt-4 flex h-52 items-center justify-center rounded-[1rem] border border-dashed border-white/20 bg-white/5 text-center font-sans text-sm uppercase tracking-[0.2em] text-warmIvory/70">
                Google Maps embed placeholder
              </div>
            </div>

            <div className="flex gap-4 text-warmIvory">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 p-3 transition hover:border-fornoBlue hover:text-fornoBlue" aria-label="Instagram">
                <ArrowUpRight size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 p-3 transition hover:border-fornoBlue hover:text-fornoBlue" aria-label="Facebook">
                <ArrowUpRight size={18} />
              </a>
              <a href="mailto:placeholder@domain.com" className="rounded-full border border-white/15 p-3 transition hover:border-fornoBlue hover:text-fornoBlue" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} noValidate className="rounded-[2rem] border border-charcoal/10 bg-white p-8 shadow-[0_20px_70px_rgba(25,25,25,0.04)]">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/70">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={values.name}
                  onChange={(event) => handleChange('name', event.target.value)}
                  className="w-full rounded-full border border-charcoal/15 bg-warmIvory px-4 py-3 font-sans text-base text-charcoal outline-none transition focus:border-fornoBlue"
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-2 font-sans text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/70">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(event) => handleChange('email', event.target.value)}
                  className="w-full rounded-full border border-charcoal/15 bg-warmIvory px-4 py-3 font-sans text-base text-charcoal outline-none transition focus:border-fornoBlue"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="mt-2 font-sans text-sm text-red-600">{errors.email}</p>}
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="subject" className="mb-2 block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/70">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={values.subject}
                onChange={(event) => handleChange('subject', event.target.value)}
                className="w-full rounded-full border border-charcoal/15 bg-warmIvory px-4 py-3 font-sans text-base text-charcoal outline-none transition focus:border-fornoBlue"
                placeholder="How can we help?"
              />
              {errors.subject && <p className="mt-2 font-sans text-sm text-red-600">{errors.subject}</p>}
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="mb-2 block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/70">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                value={values.message}
                onChange={(event) => handleChange('message', event.target.value)}
                className="w-full rounded-[1.5rem] border border-charcoal/15 bg-warmIvory px-4 py-3 font-sans text-base text-charcoal outline-none transition focus:border-fornoBlue"
                placeholder="Tell us about your enquiry."
              />
              {errors.message && <p className="mt-2 font-sans text-sm text-red-600">{errors.message}</p>}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-fornoBlue px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-charcoal"
              >
                Send enquiry
                <Send size={16} />
              </button>

              {success && <p className="font-sans text-sm text-fornoBlue">{success}</p>}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-charcoal/10 bg-warmIvory pt-12 pb-8">
      <div className="absolute inset-x-0 bottom-0 opacity-40" aria-hidden="true">
        <BrandPattern className="h-28 w-full" variant="blue" />
      </div>

      <div className="section-shell relative">
        <div className="grid gap-10 pb-10 md:grid-cols-[1.1fr_0.9fr_0.8fr_0.8fr]">
          <div>
            <img src={logoUrl} alt="Ratina Forno logo" className="h-16 w-auto" />
            <p className="mt-4 max-w-xs font-sans text-base leading-relaxed text-charcoal/75">
              Authentic food. Honest ingredients. Good fire.
            </p>
          </div>

          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.26em] text-fornoBlue">
              Navigate
            </p>
            <ul className="mt-4 space-y-3 font-sans text-sm text-charcoal/75">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="hover:text-fornoBlue">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.26em] text-fornoBlue">
              Contact
            </p>
            <ul className="mt-4 space-y-3 font-sans text-sm text-charcoal/75">
              <li>Address placeholder</li>
              <li>Opening hours placeholder</li>
              <li>Email placeholder</li>
            </ul>
          </div>

          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.26em] text-fornoBlue">
              Social
            </p>
            <ul className="mt-4 space-y-3 font-sans text-sm text-charcoal/75">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-fornoBlue">
                  Instagram placeholder
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-fornoBlue">
                  Facebook placeholder
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="hover:text-fornoBlue">
                  TikTok placeholder
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-charcoal/10 pt-6 text-xs uppercase tracking-[0.2em] text-charcoal/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Ratina Forno</p>
          <p>Good dough. Good fire. Good company.</p>
        </div>
      </div>
    </footer>
  )
}

export default AppLayout
