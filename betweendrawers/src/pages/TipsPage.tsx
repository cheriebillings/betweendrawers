import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const tipTypes = [
  { id: 'daily',  label: 'Daily Habits', icon: '📅', count: 28 },
  { id: 'quick',  label: 'Quick Wins',   icon: '⚡', count: 32 },
  { id: 'spaces', label: 'Small Spaces', icon: '📦', count: 19 },
  { id: 'buying', label: 'Buying Guides', icon: '🛒', count: 14 },
];

const tips = [
  {
    id: 1, type: 'daily', typeName: 'Daily Habits', borderColor: 'border-l-[#B87748]',
    title: 'The 15-Minute Daily Reset That Keeps Clutter From Compounding',
    body: 'One focused loop through your space each evening — kitchen surfaces, entry table, bathroom counter — prevents weekend overwhelm and keeps things findable every morning.',
    date: 'March 18, 2026', time: '3 min',
  },
  {
    id: 2, type: 'daily', typeName: 'Habit Stack', borderColor: 'border-l-emerald-500',
    title: 'Habit Stacking: Attach an Organization Habit to Something You Already Do',
    body: 'The most effective way to build a maintenance routine is to attach it to an existing one. Wipe the counter while your coffee brews. Refold while the bath fills. No new time required.',
    date: 'March 10, 2026', time: '4 min',
  },
  {
    id: 3, type: 'quick', typeName: 'Quick Win', borderColor: 'border-l-blue-400',
    title: 'One In, One Out — The Rule That Prevents Rebound Clutter',
    body: 'Every time something new enters your space, something of similar size leaves. Sounds obvious, but consistently applying it is the difference between organized-forever and organized-for-a-month.',
    date: 'Feb 26, 2026', time: '5 min',
  },
  {
    id: 4, type: 'spaces', typeName: 'Small Spaces', borderColor: 'border-l-amber-400',
    title: 'The Vertical Rule: Think Up, Not Out, in Rental Kitchens',
    body: 'Freestanding counter space is precious. The fastest way to reclaim it is to think vertically — tension rods under sinks, over-door organizers, magnetic strips on the side of the fridge.',
    date: 'Feb 15, 2026', time: '6 min',
  },
  {
    id: 5, type: 'daily', typeName: 'Daily Habits', borderColor: 'border-l-[#B87748]',
    title: 'Set a "Landing Zone" by the Door — and Actually Use It',
    body: 'Keys, bags, and mail pile up by the door because there\'s nowhere else to put them. Designate a single tray or hook system and watch the chaos stop at the threshold.',
    date: 'Feb 3, 2026', time: '3 min',
  },
];

const quickWins = [
  { time: '5 min', color: 'bg-emerald-50 text-emerald-700', title: 'Reorganize one kitchen drawer', body: 'Pull everything out, wipe the bottom, and put back only what belongs there.' },
  { time: '3 min', color: 'bg-blue-50 text-blue-700', title: 'Create one donation bag', body: 'One bag, one pass through your closet. If you haven\'t worn it in 6 months in Florida, it goes in the bag.' },
  { time: '10 min', color: 'bg-amber-50 text-amber-700', title: 'Label your pantry bins', body: 'Even the cheap plastic bins become systems when they\'re labeled. Hand-written masking tape works fine.' },
  { time: '7 min', color: 'bg-rose-50 text-rose-700', title: 'Clear your nightstand surface', body: 'Keep only a lamp, one book, and a glass of water. Everything else has a drawer or a home elsewhere.' },
  { time: '8 min', color: 'bg-emerald-50 text-emerald-700', title: 'Purge expired products', body: 'Under the bathroom sink. The medicine cabinet. The pantry corner. Expired products take up space.' },
  { time: '4 min', color: 'bg-stone-100 text-stone-600', title: 'Group like items together', body: 'All candles in one place. All batteries together. Proximity to use beats alphabetical order every time.' },
  { time: '6 min', color: 'bg-amber-50 text-amber-700', title: 'Set up a recycling staging spot', body: 'One bag or bin near your exit for boxes. Prevents the kitchen counter from becoming a cardboard staging area.' },
  { time: '9 min', color: 'bg-blue-50 text-blue-700', title: 'Tackle the junk drawer', body: 'Pull it out, sort into keep/toss/relocate, and add a small tray divider. The satisfaction is extreme.' },
];

export default function TipsPage() {
  const [activeType, setActiveType] = useState('daily');

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
                <span className="text-stone-600">Tips</span>
              </nav>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B87748] mb-5">
                <Lightbulb className="w-3.5 h-3.5" />
                Quick Tips
              </div>
              <h1 className="text-5xl md:text-6xl text-stone-900 leading-[1.05] mb-5">
                Small Habits,<br />Big Calm
              </h1>
              <p className="text-stone-600 leading-relaxed max-w-md mb-8">
                No hour-long sessions required. These are the small, repeatable habits that keep a rental space 
                from sliding back into chaos.
              </p>
              <div className="flex gap-4 mb-8">
                <Button className="bg-stone-800 hover:bg-stone-700 text-white rounded-full px-6">Daily Habits</Button>
                <Button variant="outline" className="rounded-full border-stone-300">Quick Wins</Button>
              </div>
              <div className="flex gap-10">
                <div>
                  <p className="text-3xl text-stone-900" style={{ fontFamily: 'Cormorant Garamond, serif' }}>90+</p>
                  <p className="text-xs text-stone-400 uppercase tracking-wide">Tips</p>
                </div>
                <div>
                  <p className="text-3xl text-stone-900" style={{ fontFamily: 'Cormorant Garamond, serif' }}>15 min</p>
                  <p className="text-xs text-stone-400 uppercase tracking-wide">Or less each</p>
                </div>
                <div>
                  <p className="text-3xl text-stone-900" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Weekly</p>
                  <p className="text-xs text-stone-400 uppercase tracking-wide">New additions</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80"
                alt="Tidy kitchen counter with simple organization"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tip of the Day */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-amber-50 border border-[#B87748] rounded-2xl p-8 grid sm:grid-cols-[auto_1fr] gap-6 items-start">
            <span className="bg-[#B87748] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap">Tip of the Day</span>
            <div>
              <h2 className="text-xl text-stone-900 mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                The 10-Item Rule: End every day by returning 10 things
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                Before you sit down for the evening, pick up and return exactly 10 items to where they belong. 
                Not a deep clean — just 10 things. It takes under 3 minutes and prevents the slow creep of clutter that overwhelms you on weekends.
              </p>
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 rounded-full text-xs">Daily Habits</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Type */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B87748] block mb-3">Browse by Type</span>
            <h2 className="text-3xl text-stone-900">What Kind of Tip Do You Need?</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {tipTypes.map(t => (
              <button
                key={t.id}
                onClick={() => setActiveType(t.id)}
                className={`p-5 rounded-xl border text-left transition-all ${
                  activeType === t.id
                    ? 'border-[#B87748] bg-amber-50'
                    : 'border-stone-200 bg-white hover:border-[#B87748]'
                }`}
              >
                <span className="text-2xl block mb-2">{t.icon}</span>
                <p className="text-sm font-semibold text-stone-800 mb-1">{t.label}</p>
                <p className="text-xs text-stone-400">{t.count} tips</p>
              </button>
            ))}
          </div>

          {/* Tips list */}
          <div className="flex flex-col gap-5">
            {tips.map((tip, i) => (
              <article
                key={tip.id}
                className={`bg-white border border-stone-200 border-l-4 ${tip.borderColor} rounded-xl p-6 flex gap-6 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer`}
              >
                <span className="text-5xl font-light text-stone-200 leading-none flex-shrink-0 hidden sm:block" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <Badge variant="secondary" className="bg-stone-100 text-stone-600 rounded-full text-xs">{tip.typeName}</Badge>
                    <span className="text-xs text-stone-400 flex items-center gap-1"><Clock className="w-3 h-3" />{tip.time}</span>
                  </div>
                  <h3 className="text-xl text-stone-900 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{tip.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed mb-4">{tip.body}</p>
                  <div className="flex items-center gap-6 text-xs text-stone-400">
                    <span>{tip.date}</span>
                    <a href="#" className="text-[#B87748] font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      Read tip <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" className="rounded-full border-stone-300">Load More Tips</Button>
          </div>
        </div>
      </section>

      {/* Quick Wins Grid */}
      <section className="py-16 px-6 bg-stone-50" id="quick-wins">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B87748] block mb-3">Quick Wins</span>
            <h2 className="text-3xl text-stone-900 mb-2">Under 10 Minutes</h2>
            <p className="text-stone-500 text-sm">Fast enough to do before your next meeting. Pick one and start now.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickWins.map((w, i) => (
              <a key={i} href="#" className="bg-white border border-stone-200 rounded-xl p-5 hover:shadow-sm hover:-translate-y-0.5 transition-all">
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold mb-3 ${w.color}`}>{w.time}</span>
                <h4 className="text-sm font-semibold text-stone-800 mb-2">{w.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{w.body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-[#B87748]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl text-white mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>One new tip. Every week.</h2>
          <p className="text-white/80 mb-8 text-sm leading-relaxed">
            Short, practical, and actually doable in a rental. No fluff. Straight to your inbox every Tuesday.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <Input type="email" placeholder="Your email address" className="rounded-full bg-white/20 border-white/30 text-white placeholder:text-white/60 flex-1 min-w-[200px]" />
            <Button className="bg-white text-[#B87748] hover:bg-stone-100 rounded-full font-semibold px-6 whitespace-nowrap">Send Me Tips</Button>
          </div>
        </div>
      </section>

    </div>
  );
}
