import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Search, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const categories = [
  { id: 'closets', name: 'Closet Systems', count: 18, desc: 'Hanging organizers, drawer dividers, shelf risers — no built-ins needed.' },
  { id: 'pantry',  name: 'Pantry Organization', count: 14, desc: 'Freestanding shelves, labeled bins, and systems that stay tidy.' },
  { id: 'kitchen', name: 'Kitchen Drawers', count: 12, desc: 'Utensil trays, junk drawer rehabs, and cutlery solutions for any size.' },
  { id: 'bathroom',name: 'Bathroom Storage', count: 10, desc: 'Under-sink organizers, over-door racks, and counter-saving solutions.' },
  { id: 'linen',   name: 'Linen & Laundry', count: 8,  desc: 'Fold systems, storage baskets, and sorting solutions for small spaces.' },
  { id: 'labeling',name: 'Labeling & Systems', count: 6, desc: 'Label templates, category systems, and habits that keep things found.' },
];

const allGuides = [
  {
    id: 1, cat: 'Kitchen', catId: 'kitchen', title: 'How to Measure Drawers Before Buying Any Organizer',
    excerpt: 'The one step that prevents returns. A foolproof measuring method and what numbers actually matter.',
    time: '8 min', date: 'March 12, 2026',
    img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=75',
    to: '/articles/kitchen-drawers',
  },
  {
    id: 2, cat: 'Bathroom', catId: 'bathroom', title: 'Under-Sink Storage That Survives a Plumber Visit',
    excerpt: 'Rental-friendly bins, removable shelves, and a layout that makes it easy to get everything out — and back in — fast.',
    time: '10 min', date: 'Feb 28, 2026',
    img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=75',
    to: '/articles/bathroom-storage',
  },
  {
    id: 3, cat: 'Pantry', catId: 'pantry', title: 'The $40 Pantry Makeover Using Freestanding Shelves',
    excerpt: 'No drilling, no landlord calls. Three freestanding shelves, some labels, and a lazy Susan transformed this kitchen.',
    time: '12 min', date: 'Feb 14, 2026',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=75',
    to: '/articles/pantry-organization',
  },
  {
    id: 4, cat: 'Linen', catId: 'linen', title: 'The Ranger Roll and 3 Other Folds That Actually Fit a Rental Linen Closet',
    excerpt: 'Why your folding method matters more than your storage containers — and four techniques that make small shelves work.',
    time: '9 min', date: 'Jan 30, 2026',
    img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=75',
    to: '/articles/linen-laundry',
  },
  {
    id: 5, cat: 'Labeling', catId: 'labeling', title: 'A Labeling System You\'ll Actually Maintain',
    excerpt: 'Labels fail when they\'re too specific or too vague. Here\'s how to name categories so the system still works months later.',
    time: '7 min', date: 'Jan 18, 2026',
    img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=75',
    to: '/articles/labeling-systems',
  },
  {
    id: 6, cat: 'Closet', catId: 'closets', title: 'Studio Closet Solutions: When You Have 24 Inches of Rod Space',
    excerpt: 'The smallest closets call for the smartest systems. A real studio setup using only $67 worth of products.',
    time: '11 min', date: 'Jan 5, 2026',
    img: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600&q=75',
    to: '/articles/closet-systems',
  },
];

const filterLabels = ['All', 'Closet', 'Pantry', 'Kitchen', 'Bathroom'];

export default function GuidesPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All'
    ? allGuides
    : allGuides.filter(g => g.cat === activeFilter);

  return (
    <div className="min-h-screen bg-[#faf8f5]">

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 text-xs text-stone-400 mb-6">
                <Link to="/" className="hover:text-stone-600 transition-colors">Home</Link>
                <span>›</span>
                <span className="text-stone-600">Guides</span>
              </nav>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B87748] mb-5">
                <FileText className="w-3.5 h-3.5" />
                Organization Guides
              </div>
              <h1 className="text-5xl md:text-6xl text-stone-900 leading-[1.05] mb-5">
                Organized Spaces,<br />Step by Step
              </h1>
              <p className="text-stone-600 leading-relaxed max-w-md mb-8">
                Every guide is written for real rental living — no built-ins required, no contractor needed. 
                Just practical systems you can set up this weekend.
              </p>
              <div className="relative max-w-sm mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <Input
                  type="search"
                  placeholder="Search guides…"
                  className="pl-10 rounded-full border-stone-300 bg-white"
                />
              </div>
              <div className="flex gap-10">
                <div>
                  <p className="text-3xl text-stone-900" style={{ fontFamily: 'Cormorant Garamond, serif' }}>50+</p>
                  <p className="text-xs text-stone-400 uppercase tracking-wide">Guides</p>
                </div>
                <div>
                  <p className="text-3xl text-stone-900" style={{ fontFamily: 'Cormorant Garamond, serif' }}>6</p>
                  <p className="text-xs text-stone-400 uppercase tracking-wide">Categories</p>
                </div>
                <div>
                  <p className="text-3xl text-stone-900" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Free</p>
                  <p className="text-xs text-stone-400 uppercase tracking-wide">Always</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1558997519-83ea9252eef8?w=700&q=80"
                alt="Organized walk-in closet with color-sorted clothes and wicker baskets"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-xl p-4 border border-white/60">
                <p className="text-xs font-semibold text-stone-600 mb-0.5">Most-Read Guide</p>
                <p className="text-sm text-stone-800" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  How to Organize a Small Closet with Drawer Organizers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B87748] block mb-3">Browse by Category</span>
            <h2 className="text-3xl text-stone-900 mb-2">Find What You Need</h2>
            <p className="text-stone-500 text-sm">Pick a space — each category has guides for every skill level and budget.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map(cat => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="group bg-white border border-stone-200 rounded-xl p-6 hover:border-[#B87748] hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#B87748] opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-xs text-stone-400 mb-2">{cat.count} guides</p>
                <h3 className="text-lg text-stone-900 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{cat.name}</h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-4">{cat.desc}</p>
                <span className="text-xs font-semibold text-[#B87748] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guide */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B87748] block mb-3">Editor's Pick</span>
            <h2 className="text-3xl text-stone-900">This Week's Featured Guide</h2>
          </div>
          <article className="bg-white border border-stone-200 rounded-2xl overflow-hidden grid md:grid-cols-2 hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1558997519-83ea9252eef8?w=700&q=80"
              alt="Organized walk-in closet"
              className="w-full h-full object-cover min-h-[280px]"
            />
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex gap-2 mb-5">
                <Badge className="bg-stone-100 text-stone-700 hover:bg-stone-100 rounded-full">Closet Systems</Badge>
                <Badge variant="outline" className="rounded-full text-stone-500">15 min read</Badge>
              </div>
              <h3 className="text-2xl md:text-3xl text-stone-900 leading-tight mb-4">
                The Complete Closet Overhaul: A Weekend Project for Renters
              </h3>
              <p className="text-stone-500 leading-relaxed mb-6 text-sm">
                You don't need built-ins or a big budget. This guide walks through every step — 
                from editing your wardrobe to the final label — using only rental-safe products under $150.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-stone-500">
                {['Edit before you organize — keep, donate, toss', 'Measure your space (the step most people skip)', 'Choose hanging organizers for your rod type', 'Install shelf dividers without screws'].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-amber-50 text-[#B87748] flex items-center justify-center text-[10px] font-bold flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/articles/closet-systems" className="inline-flex items-center bg-stone-800 hover:bg-stone-700 text-white rounded-full self-start px-5 py-2.5 text-sm font-semibold transition-colors">
                Read the Full Guide <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* All Guides */}
      <section className="py-16 px-6 bg-stone-50" id="all-guides">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B87748] block mb-2">All Guides</span>
              <h2 className="text-3xl text-stone-900">Browse Everything</h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {filterLabels.map(label => (
                <button
                  key={label}
                  onClick={() => setActiveFilter(label)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                    activeFilter === label
                      ? 'bg-[#B87748] border-[#B87748] text-white'
                      : 'bg-white border-stone-200 text-stone-500 hover:border-[#B87748] hover:text-[#B87748]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(guide => (
              <article key={guide.id} className="bg-white border border-stone-200 rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={guide.img} alt={guide.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className="bg-stone-100 text-stone-600 rounded-full text-xs">{guide.cat}</Badge>
                    <span className="text-xs text-stone-400">{guide.time}</span>
                  </div>
                  <h3 className="text-lg text-stone-900 leading-snug mb-2 hover:text-[#B87748] transition-colors cursor-pointer" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {guide.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed mb-4">{guide.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-stone-400 border-t border-stone-100 pt-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{guide.date}</span>
                    <Link to={guide.to} className="text-[#B87748] font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      Read guide <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How Guides Are Written */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B87748] block mb-4">How It Works</span>
            <h2 className="text-3xl text-stone-900 mb-4">Guides Written for Real Rentals</h2>
            <p className="text-stone-500 text-sm leading-relaxed mb-8">
              Every guide is tested in a real furnished rental — no sponsored content, no affiliate pressure, no perfect-home assumptions.
            </p>
            <ol className="space-y-6">
              {[
                { n: '1', h: 'Start with constraints', b: 'No drilling. No built-ins. No blowing the budget. Every guide begins with rental-friendly rules.' },
                { n: '2', h: 'Test it first', b: 'Products and methods are tried in a real space before they make it into a guide. No guesswork.' },
                { n: '3', h: 'Give you the real numbers', b: 'Actual measurements, costs, and time estimates — so you can decide before you start.' },
              ].map(step => (
                <li key={step.n} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-50 text-[#B87748] flex items-center justify-center font-semibold text-sm mt-0.5">
                    {step.n}
                  </span>
                  <div>
                    <h4 className="text-stone-800 font-semibold text-sm mb-1">{step.h}</h4>
                    <p className="text-stone-500 text-sm leading-relaxed">{step.b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=700&q=80"
              alt="Organized rental closet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-[#B87748]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl text-white mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>New guides every week.</h2>
          <p className="text-white/80 mb-8 text-sm leading-relaxed">
            Join 15,000+ readers who get practical organization ideas for rental living — straight to their inbox.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <Input type="email" placeholder="Your email address" className="rounded-full bg-white/20 border-white/30 text-white placeholder:text-white/60 flex-1 min-w-[200px]" />
            <Button className="bg-white text-[#B87748] hover:bg-stone-100 rounded-full font-semibold px-6 whitespace-nowrap">Get the Guide</Button>
          </div>
        </div>
      </section>

    </div>
  );
}
