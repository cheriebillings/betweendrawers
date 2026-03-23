import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, ShoppingBag, Lightbulb, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// ─── Data ────────────────────────────────────────────────────────────────────

const budgetViz = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    label: 'Full Closet Makeover', amount: '$100', pct: 66,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
      </svg>
    ),
    label: 'Pantry Overhaul', amount: '$40', pct: 27,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M3 3h18v3H3zM3 10h18v3H3zM3 17h18v3H3z"/>
      </svg>
    ),
    label: 'Kitchen Drawers', amount: '$25', pct: 17,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
        <path d="M12 7V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2"/>
      </svg>
    ),
    label: 'Bathroom Storage', amount: '$50', pct: 33,
  },
];

type Room = 'All Rooms' | 'Closet' | 'Pantry' | 'Kitchen' | 'Bathroom';

interface SpendCard {
  room: Room;
  title: string;
  category: string;
  total: string;
  lines: { item: string; cost: string }[];
}

const spendCards: SpendCard[] = [
  {
    room: 'Closet', category: 'Bedroom', title: 'Full Closet Makeover', total: '$100',
    lines: [
      { item: 'Hanging fabric organizer (shelf dividers)', cost: '$18–22' },
      { item: 'Shelf risers (2-pack)', cost: '$12–16' },
      { item: 'Drawer organizers (6-pack)', cost: '$20–28' },
      { item: 'Velvet hangers (50-pack)', cost: '$10–14' },
      { item: 'Label maker or label tape', cost: '$8–12' },
      { item: 'Shoe bins or over-door organizer', cost: '$18–24' },
    ],
  },
  {
    room: 'Pantry', category: 'Kitchen', title: 'Pantry Overhaul', total: '$40',
    lines: [
      { item: 'Lazy Susan turntable', cost: '$8–12' },
      { item: 'Freestanding shelf organizer', cost: '$12–18' },
      { item: 'Pull-out basket organizer', cost: '$10–14' },
      { item: 'Label tape refill', cost: '$5–8' },
      { item: 'Storage bins (clear, 6-pack)', cost: '$10–16' },
    ],
  },
  {
    room: 'Kitchen', category: 'Kitchen', title: 'Drawer Organization', total: '$25',
    lines: [
      { item: 'Utensil drawer tray (bamboo or acrylic)', cost: '$12–18' },
      { item: 'Expandable drawer dividers', cost: '$8–14' },
      { item: 'Small bins for junk drawer', cost: '$6–10' },
    ],
  },
  {
    room: 'Bathroom', category: 'Bathroom', title: 'Full Storage Setup', total: '$50',
    lines: [
      { item: 'Under-sink organizer with shelves', cost: '$16–24' },
      { item: 'Over-toilet freestanding shelf', cost: '$18–28' },
      { item: 'Counter organizer / tray', cost: '$8–14' },
      { item: 'Medicine cabinet organizer', cost: '$6–10' },
    ],
  },
];

interface DiyOption {
  type: 'diy' | 'buy';
  winner: boolean;
  badge: string;
  title: string;
  cost: string;
  costNote: string;
  points: string[];
  bestFor: string;
}

interface DiyComparison {
  heading: string;
  options: [DiyOption, DiyOption];
}

const diyComparisons: DiyComparison[] = [
  {
    heading: 'Drawer Dividers',
    options: [
      {
        type: 'diy', winner: false, badge: 'DIY Option',
        title: 'Cut foam board into sections', cost: '~$4', costNote: 'for a full drawer',
        points: [
          'Craft foam board from Dollar Tree',
          'Custom-cut to exact drawer size',
          'Takes ~30 minutes',
          'Wipes clean but not dishwasher safe',
        ],
        bestFor: 'Junk drawers, craft drawers, one-off odd-sized spaces',
      },
      {
        type: 'buy', winner: true, badge: 'Buy Option — Recommended',
        title: 'Bamboo expandable dividers', cost: '$23', costNote: 'for a 6-pack',
        points: [
          'Adjustable for multiple drawer sizes',
          'Reusable if you move',
          'Setup takes 5 minutes',
          'Looks polished, lasts years',
        ],
        bestFor: 'Kitchen, bathroom, dresser — anywhere you\'ll see it daily',
      },
    ],
  },
  {
    heading: 'Pantry Shelf Riser',
    options: [
      {
        type: 'diy', winner: true, badge: 'DIY Option — Recommended',
        title: 'Stackable wooden boards', cost: '~$8', costNote: 'per riser',
        points: [
          'Craft board cut at Home Depot for free',
          'Any height you need',
          'Stacks exactly as deep as your shelf',
          'Sand and seal in 20 minutes',
        ],
        bestFor: 'Pantry cabinets with non-standard shelf heights',
      },
      {
        type: 'buy', winner: false, badge: 'Buy Option',
        title: 'Wire shelf risers (2-pack)', cost: '$15', costNote: 'for a 2-pack',
        points: [
          'Available at Target, Amazon',
          'Limited height options',
          'Only fits standard-width shelves',
          'Quick and no tools required',
        ],
        bestFor: 'Standard-size shelves where the DIY time isn\'t worth it',
      },
    ],
  },
];

const shoppingTips = [
  {
    icon: <ShoppingBag className="w-5 h-5" />,
    title: "Don't buy everything at once",
    body: 'Organize first, identify exactly what you need, then buy. Buying before organizing leads to returns and wasted containers.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    title: 'Buy modular systems',
    body: 'Modular bins and drawers that stack and expand cost more upfront but save money in the long run when your space changes — or you move.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-6"/>
      </svg>
    ),
    title: 'Stick to 1–2 colors',
    body: 'Visual calm is the whole point. Mixing 6 different bin styles defeats the purpose. Pick one neutral and stick to it across rooms.',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Wait 48 hours before buying',
    body: 'Impulse purchases are the enemy of a coherent organization system. A 2-day pause filters out 80% of non-essential buys.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    title: 'Set a room budget before you shop',
    body: 'Pick a number — $30, $60, $100 — and stick to it. Use the room budgets on this page as your starting point.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
        <polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
      </svg>
    ),
    title: 'Use what you already own first',
    body: 'Shoeboxes, mason jars, and gift bags make surprisingly good organizers. Tour your home before ordering anything new.',
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function BudgetHero() {
  return (
    <section className="bg-stone-900 relative overflow-hidden pt-24 pb-20 px-6">
      {/* radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 80% 50%, rgba(184,119,72,0.12) 0%, transparent 65%)' }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <nav className="flex items-center gap-2 text-xs mb-6" aria-label="Breadcrumb">
              <Link to="/" className="text-stone-500 hover:text-stone-300 transition-colors">Home</Link>
              <span className="text-stone-700" aria-hidden="true">›</span>
              <span className="text-stone-500" aria-current="page">Budget</span>
            </nav>

            <div className="flex items-center gap-2 mb-5">
              <DollarSign className="w-3.5 h-3.5 text-[#B87748]" />
              <span className="text-xs font-bold tracking-[0.1em] uppercase text-[#B87748]">Budget Strategies</span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[#FAF8F5] mb-5 max-w-[18ch]"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
            >
              Organized Without Breaking the Budget
            </h1>

            <p className="text-base text-stone-400 leading-relaxed max-w-[50ch] mb-8">
              Real numbers, room-by-room breakdowns, and smart-spending strategies for renters
              who want calm spaces without luxury price tags.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#room-plans"
                className="inline-flex items-center gap-2 bg-[#B87748] hover:bg-[#a3663d] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Room Budgets
              </a>
              <a
                href="#diy"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border border-white/15 bg-white/8 text-[#FAF8F5] hover:bg-white/12 transition-colors"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                DIY vs. Buy
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {[
                { num: '$50', label: 'Bathroom Starter' },
                { num: '$100', label: 'Full Closet' },
                { num: '$150', label: 'Whole Home' },
              ].map(({ num, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span
                    className="text-2xl text-[#B87748] leading-none"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
                  >
                    {num}
                  </span>
                  <span className="text-xs text-stone-500 uppercase tracking-[0.06em]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: budget viz cards */}
          <div className="hidden md:flex flex-col gap-4" aria-label="Budget breakdown visualization" role="img">
            {budgetViz.map(({ icon, label, amount, pct }) => (
              <div
                key={label}
                className="flex items-center gap-5 rounded-2xl px-6 py-5 border border-white/8 transition-colors"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-[#B87748]"
                  style={{ background: 'rgba(184,119,72,0.15)' }}
                >
                  {icon}
                </div>
                <div className="flex-shrink-0">
                  <div
                    className="text-xl leading-none text-[#FAF8F5]"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
                  >
                    {amount}
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">{label}</div>
                </div>
                <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <div
                    className="h-full rounded-full bg-[#B87748]"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RoomBudgetPlans() {
  const filters: Room[] = ['All Rooms', 'Closet', 'Pantry', 'Kitchen', 'Bathroom'];
  const [active, setActive] = useState<Room>('All Rooms');

  const visible = active === 'All Rooms'
    ? spendCards
    : spendCards.filter((c) => c.room === active);

  return (
    <section id="room-plans" className="py-20 px-6 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.08em] uppercase text-stone-500 block mb-3">Room by Room</span>
          <h2
            className="text-3xl md:text-4xl text-stone-900 mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
          >
            Know Exactly What to Spend
          </h2>
          <p className="text-stone-600 max-w-xl mx-auto">
            Real line-item budgets for every room, built from actual product prices at Target, Amazon, and IKEA.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Filter by room">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                active === f
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Spend cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((card) => (
            <div key={card.title} className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between gap-4 px-6 py-5 border-b border-stone-100">
                <div>
                  <p className="text-xs font-bold tracking-[0.08em] uppercase text-stone-400 mb-1">{card.category}</p>
                  <p
                    className="text-lg text-stone-900"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
                  >
                    {card.title}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p
                    className="text-xl text-[#B87748]"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
                  >
                    {card.total}
                  </p>
                  <p className="text-xs text-stone-400">estimated total</p>
                </div>
              </div>
              <div className="px-6 py-4">
                {card.lines.map((line) => (
                  <div
                    key={line.item}
                    className="flex items-center justify-between gap-3 py-3 border-b border-stone-50 last:border-0 text-sm"
                  >
                    <span className="text-stone-500 flex-1">{line.item}</span>
                    <span className="text-stone-800 font-medium whitespace-nowrap">{line.cost}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiyVsBuy() {
  return (
    <section id="diy" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.08em] uppercase text-stone-500 block mb-3">DIY vs. Buy</span>
          <h2
            className="text-3xl md:text-4xl text-stone-900 mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
          >
            When to Build It, When to Buy It
          </h2>
          <p className="text-stone-600 max-w-xl mx-auto">
            The honest breakdown — not every DIY saves money, and not every off-the-shelf solution is worth the convenience premium.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {diyComparisons.map(({ heading, options }) => (
            <div key={heading}>
              <h3
                className="text-xl text-stone-900 mb-5"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
              >
                {heading}
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {options.map((opt) => (
                  <div
                    key={opt.badge}
                    className={`rounded-2xl px-7 py-6 flex flex-col gap-4 border-2 transition-all duration-200 ${
                      opt.winner
                        ? 'border-[#B87748] bg-[#fdf8f4]'
                        : 'border-stone-200 bg-white hover:border-[#B87748]'
                    }`}
                  >
                    <div className="flex items-center gap-2 self-start">
                      <Lightbulb className="w-3 h-3 text-[#B87748]" />
                      <span className="text-xs font-bold tracking-[0.07em] uppercase text-[#B87748]">{opt.badge}</span>
                    </div>
                    <p
                      className="text-lg text-stone-900"
                      style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
                    >
                      {opt.title}
                    </p>
                    <p
                      className="text-2xl text-[#B87748] leading-none"
                      style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
                    >
                      {opt.cost}{' '}
                      <span className="text-sm text-stone-500 font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {opt.costNote}
                      </span>
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {opt.points.map((pt) => (
                        <li key={pt} className="text-sm text-stone-500 pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-stone-300">
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <div className={`text-xs text-stone-500 pt-3 border-t ${opt.winner ? 'border-[#B87748]/20' : 'border-stone-100'}`}>
                      Best for: {opt.bestFor}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SmartShoppingTips() {
  return (
    <section className="py-20 px-6 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.08em] uppercase text-stone-500 block mb-3">Smart Spending</span>
          <h2
            className="text-3xl md:text-4xl text-stone-900 mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
          >
            Buy Less, Choose Wisely
          </h2>
          <p className="text-stone-600">Rules from several years of organizing furnished spaces on a real budget.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {shoppingTips.map(({ icon, title, body }) => (
            <div
              key={title}
              className="bg-white border border-stone-200 rounded-xl px-6 py-5 flex gap-4 items-start hover:shadow-sm transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-[#fdf8f4] text-[#B87748] flex items-center justify-center flex-shrink-0">
                {icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-900 mb-1">{title}</p>
                <p className="text-xs text-stone-500 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlannerCTA() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div
          className="bg-stone-900 rounded-2xl px-8 md:px-12 py-10 grid md:grid-cols-[1fr_auto] gap-8 items-center"
        >
          <div>
            <h2
              className="text-2xl md:text-3xl text-[#FAF8F5] mb-3 leading-snug"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
            >
              Get the Free Room-by-Room Budget Planner
            </h2>
            <p className="text-sm text-stone-400 leading-relaxed max-w-prose">
              A printable worksheet that walks you through each room, helps you prioritize purchases, and keeps your total spend visible.
            </p>
          </div>
          <Link
            to="/#subscribe"
            className="inline-flex items-center gap-2 bg-[#B87748] hover:bg-[#a3663d] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap flex-shrink-0"
          >
            Download Free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function NewsletterStrip() {
  return (
    <section className="py-16 px-6 bg-[#B87748]">
      <div className="max-w-2xl mx-auto text-center">
        <p
          className="text-2xl md:text-3xl text-white mb-3"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
        >
          Smart spending, weekly.
        </p>
        <p className="text-sm text-white/75 mb-8 leading-relaxed">
          Budget breakdowns, price drops on organization products, and tips for spending less without getting less organized.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Newsletter signup"
        >
          <Input
            type="email"
            placeholder="Your email address"
            required
            aria-label="Email address"
            className="rounded-full bg-white/15 border-white/30 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white px-5"
          />
          <Button
            type="submit"
            className="bg-stone-900 hover:bg-stone-800 text-white rounded-full px-6 whitespace-nowrap"
          >
            Get Budget Tips
          </Button>
        </form>
      </div>
    </section>
  );
}

function BudgetFooter() {
  return (
    <footer className="py-16 px-6 bg-white border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link
              to="/"
              className="text-2xl font-semibold text-stone-900 mb-4 block hover:text-stone-700 transition-colors"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              BetweenDrawers
            </Link>
            <p className="text-stone-600 text-sm leading-relaxed max-w-sm mb-4">
              Organization tips, honest product reviews, and practical strategies for calm, organized spaces.
            </p>
            <p className="text-xs text-stone-400">
              Made with love in Tampa Bay &middot; Sister brand to{' '}
              <a href="https://betweenstaysco.com" className="underline hover:text-stone-600" target="_blank" rel="noopener noreferrer">
                BetweenStaysCo.com
              </a>
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-4">Explore</p>
            <ul className="space-y-2">
              {[
                { to: '/guides', label: 'All Guides' },
                { to: '/tips', label: 'Quick Tips' },
                { to: '/reviews', label: 'Product Reviews' },
                { to: '/budget', label: 'Budget Strategies' },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-stone-600 hover:text-stone-900 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-4">Budget</p>
            <ul className="space-y-2">
              {[
                { href: '#room-plans', label: 'Room Plans' },
                { href: '#diy', label: 'DIY vs. Buy' },
                { href: '#smart-shopping', label: 'Smart Shopping' },
                { to: '/#subscribe', label: 'Budget Planner' },
              ].map(({ href, to, label }) =>
                href ? (
                  <li key={label}>
                    <a href={href} className="text-sm text-stone-600 hover:text-stone-900 transition-colors">{label}</a>
                  </li>
                ) : (
                  <li key={label}>
                    <Link to={to!} className="text-sm text-stone-600 hover:text-stone-900 transition-colors">{label}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-400">&copy; 2026 BetweenDrawers. All rights reserved.</p>
          <a
            href="https://www.perplexity.ai/computer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-stone-400 hover:text-stone-600 transition-colors"
          >
            Created with Perplexity Computer
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BudgetPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <BudgetHero />
      <RoomBudgetPlans />
      <DiyVsBuy />
      <SmartShoppingTips />
      <PlannerCTA />
      <NewsletterStrip />
      <BudgetFooter />
    </div>
  );
}
