import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Verdict = 'Worth It' | 'Skip' | 'Splurge Worthy';

const verdictStyle: Record<Verdict, string> = {
  'Worth It':     'bg-green-100 text-green-700',
  'Skip':         'bg-red-100 text-red-700',
  'Splurge Worthy': 'bg-amber-100 text-amber-800',
};

interface Review {
  id: number;
  brand: string;
  name: string;
  verdict: Verdict;
  rating: number;
  price: string;
  excerpt: string;
  pros: string[];
  cons: string[];
  img: string;
  cat: string;
}

const reviews: Review[] = [
  {
    id: 1, brand: 'Mdesign', name: 'Fabric Storage Bins with Handles (4-Pack)',
    verdict: 'Worth It', rating: 4.0, price: '$24.99',
    excerpt: 'Soft-sided but sturdy enough to hold pantry items. The cotton rope handles hold up well. Came back from IKEA to buy a second set.',
    pros: ['Washable', 'Good depth', 'Neutral colors'], cons: ['Can tip if overfull', 'Only 3 sizes'],
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=75', cat: 'Storage',
  },
  {
    id: 2, brand: 'DYMO', name: 'LabelManager 160 Label Maker',
    verdict: 'Splurge Worthy', rating: 5.0, price: '$34.99',
    excerpt: 'If you\'re serious about labeling, this is the one. Tactile keys, fast printing, and the labels actually stick in humid Florida conditions.',
    pros: ['Fast print speed', 'Humidity-resistant', 'Multiple fonts'], cons: ['Pricey refills', 'No Bluetooth'],
    img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=75', cat: 'Labeling',
  },
  {
    id: 3, brand: 'SimpleHouseware', name: 'Stackable Shelf Organizer (2-Tier)',
    verdict: 'Skip', rating: 2.1, price: '$14.99',
    excerpt: 'Listed as "stackable" but wobbles badly with any real weight. The metal coating started peeling within 3 months. Skip this one.',
    pros: ['Inexpensive', 'Fast shipping'], cons: ['Wobbles badly', 'Coating peels', 'Not truly stackable'],
    img: 'https://images.unsplash.com/photo-1556909190-07f50b78e19e?w=500&q=75', cat: 'Shelving',
  },
  {
    id: 4, brand: 'Bambusi', name: 'Bamboo Expandable Drawer Dividers (6-Pack)',
    verdict: 'Worth It', rating: 4.2, price: '$22.99',
    excerpt: 'The expandable design actually works and the bamboo doesn\'t warp in Florida humidity. Set up a whole dresser in 20 minutes.',
    pros: ['Humidity resistant', 'Adjustable width', 'Looks elegant'], cons: ['Only fits 10"–17" drawers'],
    img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500&q=75', cat: 'Drawers',
  },
  {
    id: 5, brand: 'Whitmor', name: 'Over-Door Shoe Organizer (36 Pocket)',
    verdict: 'Worth It', rating: 3.9, price: '$18.49',
    excerpt: 'Doesn\'t just work for shoes — this becomes a cleaning supply organizer, a craft supply station, or a bathroom caddy. The hooks don\'t mark doors if you use the included pads.',
    pros: ['Door-safe hooks', 'Versatile pockets', 'Easy to install'], cons: ['Pockets stretch over time'],
    img: 'https://images.unsplash.com/photo-1617957743098-e6e2f45d2ef4?w=500&q=75', cat: 'Closet',
  },
  {
    id: 6, brand: 'Copco', name: 'Non-Skid Lazy Susan Cabinet Turntable',
    verdict: 'Splurge Worthy', rating: 4.8, price: '$19.99',
    excerpt: 'Sounds simple but completely changes deep corner cabinets. Smooth spin, non-skid base, and the two-tier version turns dead corner space into fully usable storage.',
    pros: ['Transforms corner space', 'Smooth quiet spin', 'Dishwasher safe'], cons: ['Pricier than lookalikes'],
    img: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=500&q=75', cat: 'Pantry',
  },
];

const filters: Array<'All' | Verdict> = ['All', 'Worth It', 'Skip', 'Splurge Worthy'];

const ratingLabels = ['Durability', 'Easy to Clean', 'Value', 'Rental-Friendly'];
const featuredRatings = [90, 96, 86, 100];

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-amber-400 tracking-tight text-sm">
      {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
    </span>
  );
}

export default function ReviewsPage() {
  const [activeFilter, setActiveFilter] = useState<'All' | Verdict>('All');
  const filtered = activeFilter === 'All' ? reviews : reviews.filter(r => r.verdict === activeFilter);

  return (
    <div className="min-h-screen bg-[#faf8f5]">

      {/* Trust banner */}
      <div className="bg-stone-100 border-b border-stone-200 py-2.5 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-8 flex-wrap">
          {[
            { icon: ShieldCheck, text: 'No sponsorships, ever' },
            { icon: Star, text: 'Tested in real rentals' },
            { icon: Eye, text: '200+ products reviewed' },
          ].map(item => (
            <span key={item.text} className="flex items-center gap-1.5 text-xs font-semibold text-stone-500">
              <item.icon className="w-3.5 h-3.5 text-[#B87748]" />
              {item.text}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="pt-24 pb-16 px-6 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 text-xs text-stone-400 mb-6">
                <Link to="/" className="hover:text-stone-600 transition-colors">Home</Link>
                <span>›</span>
                <span className="text-stone-600">Reviews</span>
              </nav>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B87748] mb-5">
                <Star className="w-3.5 h-3.5" />
                Product Reviews
              </div>
              <h1 className="text-5xl md:text-6xl text-stone-900 leading-[1.05] mb-5">
                Buy Less.<br />Buy Better.
              </h1>
              <p className="text-stone-600 leading-relaxed max-w-md mb-8">
                Every product on this site was tested in a real furnished rental. No affiliate deals, no brand partnerships — 
                just honest verdicts so you don't waste your money.
              </p>
              <div className="flex gap-4 mb-8">
                <Button className="bg-stone-800 hover:bg-stone-700 text-white rounded-full px-6">See Top Picks</Button>
                <Button variant="outline" className="rounded-full border-stone-300">Compare Products</Button>
              </div>
              <div className="flex gap-10">
                <div>
                  <p className="text-3xl text-stone-900" style={{ fontFamily: 'Cormorant Garamond, serif' }}>200+</p>
                  <p className="text-xs text-stone-400 uppercase tracking-wide">Products Tested</p>
                </div>
                <div>
                  <p className="text-3xl text-stone-900" style={{ fontFamily: 'Cormorant Garamond, serif' }}>0</p>
                  <p className="text-xs text-stone-400 uppercase tracking-wide">Sponsorships</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=700&q=80"
                alt="Clear acrylic drawer organizers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B87748] block mb-3">Featured Review</span>
            <h2 className="text-3xl text-stone-900">Reviewed This Week</h2>
          </div>
          <article className="bg-white border border-stone-200 rounded-2xl overflow-hidden grid md:grid-cols-[5fr_7fr] hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80"
              alt="Clear acrylic drawer organizers"
              className="w-full h-full object-cover min-h-[280px]"
            />
            <div className="p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">iDesign × Linus Collection</p>
              <h3 className="text-2xl md:text-3xl text-stone-900 mb-4">Acrylic Drawer Organizer Set (4-Piece)</h3>
              <div className="flex items-center gap-4 mb-5 flex-wrap">
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 rounded-full">✓ Worth It</Badge>
                <span className="text-2xl text-stone-800" style={{ fontFamily: 'Cormorant Garamond, serif' }}>$28.99</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#B87748] flex items-center justify-center text-white font-medium" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  4.6
                </div>
                <div>
                  <Stars rating={4.5} />
                  <p className="text-xs text-stone-400">Overall rating</p>
                </div>
              </div>
              <div className="space-y-2.5 mb-6">
                {ratingLabels.map((label, i) => (
                  <div key={label} className="flex items-center gap-3 text-xs">
                    <span className="text-stone-500 w-28 flex-shrink-0">{label}</span>
                    <div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#B87748] rounded-full" style={{ width: `${featuredRatings[i]}%` }} />
                    </div>
                    <span className="font-semibold text-stone-700 w-6 text-right">{(featuredRatings[i] / 20).toFixed(1)}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-stone-800 hover:bg-stone-700 text-white rounded-full">
                Read Full Review <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </article>
        </div>
      </section>

      {/* All Reviews */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B87748] block mb-2">All Reviews</span>
              <h2 className="text-3xl text-stone-900">Browse by Verdict</h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                    activeFilter === f
                      ? 'bg-[#B87748] border-[#B87748] text-white'
                      : 'bg-white border-stone-200 text-stone-500 hover:border-[#B87748] hover:text-[#B87748]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(review => (
              <article key={review.id} className="bg-white border border-stone-200 rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={review.img} alt={review.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">{review.brand}</p>
                      <h3 className="text-lg text-stone-900 leading-snug" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{review.name}</h3>
                    </div>
                    <Badge className={`rounded-full text-xs flex-shrink-0 ${verdictStyle[review.verdict]} hover:${verdictStyle[review.verdict]}`}>
                      {review.verdict === 'Worth It' ? '✓' : review.verdict === 'Skip' ? '✕' : '★'} {review.verdict}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Stars rating={review.rating} />
                    <span className="text-xs text-stone-400">{review.rating.toFixed(1)}</span>
                  </div>
                  <p className="text-sm text-stone-500 leading-relaxed mb-4">{review.excerpt}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                    <div>
                      <p className="font-bold uppercase tracking-widest text-green-600 mb-1.5">Pros</p>
                      <ul className="space-y-1 text-stone-500">
                        {review.pros.map(p => <li key={p} className="before:content-['✓_'] before:text-green-500">{p}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold uppercase tracking-widest text-red-500 mb-1.5">Cons</p>
                      <ul className="space-y-1 text-stone-500">
                        {review.cons.map(c => <li key={c} className="before:content-['✕_'] before:text-red-400">{c}</li>)}
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                    <span className="text-lg text-stone-800" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{review.price}</span>
                    <a href="#" className="text-[#B87748] text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      Full review <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B87748] block mb-3">Side by Side</span>
            <h2 className="text-3xl text-stone-900 mb-2">Acrylic vs. Bamboo Drawer Organizers</h2>
            <p className="text-stone-500 text-sm">The two most popular materials — here's exactly how they compare for rental living.</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 bg-stone-50 border-b border-stone-200">
              <h3 className="font-semibold text-stone-800">Head-to-Head Comparison</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="text-left px-6 py-3 text-stone-600 font-semibold">Category</th>
                    <th className="text-left px-6 py-3 text-stone-600 font-semibold">Acrylic (iDesign)</th>
                    <th className="text-left px-6 py-3 text-stone-600 font-semibold">Bamboo (Bambusi)</th>
                    <th className="text-left px-6 py-3 text-stone-600 font-semibold">Winner</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Price (4-pack)', '$28.99', '$22.99', 'Bamboo'],
                    ['Easy to clean', '✓ Wipe clean', '✓ Wipe clean', 'Tie'],
                    ['Humidity resistance', '✓ Excellent', '✓ Good', 'Acrylic'],
                    ['Adjustable size', '✕ Fixed sizes', '✓ Expandable', 'Bamboo'],
                    ['Rental-friendly', '✓ No installation', '✓ No installation', 'Tie'],
                    ['Overall verdict', '✓ Worth It', '✓ Worth It', 'Both recommended'],
                  ].map(([cat, acrylic, bamboo, winner], i) => (
                    <tr key={i} className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-3 text-stone-600 font-medium">{cat}</td>
                      <td className={`px-6 py-3 ${acrylic.startsWith('✓') ? 'text-green-600' : acrylic.startsWith('✕') ? 'text-red-500' : 'text-stone-500'}`}>{acrylic}</td>
                      <td className={`px-6 py-3 ${bamboo.startsWith('✓') ? 'text-green-600' : bamboo.startsWith('✕') ? 'text-red-500' : 'text-stone-500'}`}>{bamboo}</td>
                      <td className="px-6 py-3 text-stone-700 font-medium">{winner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-[#B87748]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl text-white mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>New reviews every week.</h2>
          <p className="text-white/80 mb-8 text-sm leading-relaxed">
            Only products I've actually tested in a real rental. No PR packages — just honest findings in your inbox.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <Input type="email" placeholder="Your email address" className="rounded-full bg-white/20 border-white/30 text-white placeholder:text-white/60 flex-1 min-w-[200px]" />
            <Button className="bg-white text-[#B87748] hover:bg-stone-100 rounded-full font-semibold px-6 whitespace-nowrap">Get Reviews</Button>
          </div>
        </div>
      </section>

    </div>
  );
}
