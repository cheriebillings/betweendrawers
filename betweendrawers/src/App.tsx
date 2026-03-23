import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ArrowRight, BookOpen, 
  Sparkles, DollarSign, Calendar, Mail,
  CheckCircle2, Lightbulb, FileText, Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

import GuidesPage from '@/pages/GuidesPage';
import TipsPage from '@/pages/TipsPage';
import ReviewsPage from '@/pages/ReviewsPage';
import BudgetPage from '@/pages/BudgetPage';

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#faf8f5]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-semibold tracking-tight text-stone-900 hover:text-stone-700 transition-colors"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            BetweenDrawers
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/guides"
              className={`text-sm transition-colors ${isActive('/guides') ? 'text-stone-900 font-medium' : 'text-stone-600 hover:text-stone-900'}`}
            >
              Guides
            </Link>
            <Link
              to="/tips"
              className={`text-sm transition-colors ${isActive('/tips') ? 'text-stone-900 font-medium' : 'text-stone-600 hover:text-stone-900'}`}
            >
              Tips
            </Link>
            <Link
              to="/reviews"
              className={`text-sm transition-colors ${isActive('/reviews') ? 'text-stone-900 font-medium' : 'text-stone-600 hover:text-stone-900'}`}
            >
              Reviews
            </Link>
            <Link
              to="/budget"
              className={`text-sm transition-colors ${isActive('/budget') ? 'text-stone-900 font-medium' : 'text-stone-600 hover:text-stone-900'}`}
            >
              Budget
            </Link>
            <a
              href="#about"
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
            >
              About
            </a>
            <Link to="/#subscribe">
              <Button size="sm" className="bg-stone-800 hover:bg-stone-700 text-white rounded-full px-5">
                Subscribe
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-stone-200 pt-4">
            <Link
              to="/guides"
              className="block py-2 text-stone-600 hover:text-stone-900"
              onClick={() => setIsOpen(false)}
            >
              Guides
            </Link>
            <Link
              to="/tips"
              className="block py-2 text-stone-600 hover:text-stone-900"
              onClick={() => setIsOpen(false)}
            >
              Tips
            </Link>
            <Link
              to="/reviews"
              className="block py-2 text-stone-600 hover:text-stone-900"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </Link>
            <Link
              to="/budget"
              className="block py-2 text-stone-600 hover:text-stone-900"
              onClick={() => setIsOpen(false)}
            >
              Budget
            </Link>
            <a
              href="#about"
              className="block py-2 text-stone-600 hover:text-stone-900"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <Link to="/#subscribe" onClick={() => setIsOpen(false)}>
              <Button className="mt-4 w-full bg-stone-800 hover:bg-stone-700 text-white rounded-full">
                Subscribe
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="bg-stone-200 text-stone-700 hover:bg-stone-200 rounded-full px-4 py-1 text-xs tracking-wide">
              ORGANIZATION TIPS & PRODUCT REVIEWS
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-stone-900">
              Calm, Organized Spaces
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed max-w-md">
              Hi, I'm Cherie. After three years living in furnished rentals, I've learned 
              what organization systems actually work. Here, I share honest reviews, 
              practical tips, and strategies for creating order—without the overwhelm.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/guides">
                <Button className="bg-stone-800 hover:bg-stone-700 text-white rounded-full px-6 py-5 text-sm">
                  Browse Guides
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="#about">
                <Button variant="outline" className="rounded-full px-6 py-5 text-sm border-stone-300 hover:bg-stone-100">
                  Meet Cherie
                </Button>
              </a>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-semibold text-stone-900" style={{ fontFamily: 'Cormorant Garamond, serif' }}>50+</p>
                <p className="text-sm text-stone-500">Guides Published</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-stone-900" style={{ fontFamily: 'Cormorant Garamond, serif' }}>200+</p>
                <p className="text-sm text-stone-500">Products Tested</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-stone-900" style={{ fontFamily: 'Cormorant Garamond, serif' }}>15K</p>
                <p className="text-sm text-stone-500">Newsletter Readers</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-stone-200">
              <img 
                src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80" 
                alt="Organized closet with neutral tones"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-lg max-w-[240px]">
              <p className="text-sm text-stone-600 italic mb-2">
                "The best organization advice I've found—practical, realistic, and actually works in my small apartment."
              </p>
              <p className="text-xs text-stone-400">— Sarah M., newsletter subscriber</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Featured Guide Section
function FeaturedGuide() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="w-5 h-5 text-amber-600" />
          <span className="text-sm font-medium text-stone-500 uppercase tracking-wider">Featured Guide</span>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[16/10] rounded-xl overflow-hidden bg-stone-100">
            <img 
              src="https://images.unsplash.com/photo-1551516594-56cb78394645?w=800&q=80" 
              alt="Closet organization"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="space-y-5">
            <Badge className="bg-stone-100 text-stone-700 hover:bg-stone-100 rounded-full">Closet Systems</Badge>
            <h2 className="text-3xl md:text-4xl text-stone-900">
              How to Organize a Small Closet with Drawer Organizers
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Living with a tiny closet doesn't mean living with chaos. In this comprehensive 
              guide, I share the exact system I've used in 12 different rental closets—from 
              measuring your space to choosing the right organizers for your specific needs.
            </p>
            <div className="flex items-center gap-4 text-sm text-stone-500">
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" /> 12 min read
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> March 2026
              </span>
            </div>
            <Link to="/guides">
              <Button className="bg-stone-800 hover:bg-stone-700 text-white rounded-full px-6">
                Read Guide
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Topic Categories Section
function TopicCategories() {
  const categories = [
    { 
      name: 'Closet Systems', 
      description: 'Wardrobe organization, drawer dividers, and clothing storage strategies',
      image: 'https://www.mydomaine.com/thmb/XhYCBs3Jnre7G-9AzMd-Wu6br7A=/640x0/filters:no_upscale():strip_icc()/white-walkin-closet-8673176f568a4bbf80489b83e76b502d.jpg',
      count: 18
    },
    { 
      name: 'Pantry Organization', 
      description: 'Container guides, labeling systems, and food storage solutions',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80',
      count: 14
    },
    { 
      name: 'Kitchen Drawers', 
      description: 'Utensil organizers, cutlery dividers, and drawer systems',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80',
      count: 12
    },
    { 
      name: 'Bathroom Storage', 
      description: 'Under-sink solutions, vanity organization, and toiletry storage',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80',
      count: 10
    },
    { 
      name: 'Linen & Laundry', 
      description: 'Linen closet systems, laundry room organization, and fabric storage',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&q=80',
      count: 8
    },
    { 
      name: 'Labeling & Systems', 
      description: 'Label makers, categorization strategies, and maintenance tips',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80',
      count: 6
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl text-stone-900 mb-4">Explore by Topic</h2>
          <p className="text-stone-600 max-w-lg mx-auto">
            In-depth guides and honest reviews for every corner of your home
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link 
              key={cat.name} 
              to="/guides"
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-medium text-stone-900">{cat.name}</h3>
                  <span className="text-xs text-stone-400">{cat.count} guides</span>
                </div>
                <p className="text-sm text-stone-600 line-clamp-2">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Latest Tips Section
function LatestTips() {
  const tips = [
    {
      title: 'The 15-Minute Daily Reset That Keeps My Home Organized',
      excerpt: 'A simple routine I learned from living in rentals—no marathon cleaning sessions required.',
      category: 'Daily Habits',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80'
    },
    {
      title: 'How to Measure Your Drawers Before Buying Organizers',
      excerpt: 'The exact method I use to ensure every organizer fits perfectly—saves time and money.',
      category: 'Buying Guides',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80'
    },
    {
      title: 'Rental-Friendly Organization: No Drilling Required',
      excerpt: "My favorite temporary solutions that leave no trace when it's time to move.",
      category: 'Rental Living',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl text-stone-900 mb-2">Latest Tips</h2>
            <p className="text-stone-600">Practical strategies you can implement today</p>
          </div>
          <Link to="/tips">
            <Button variant="outline" className="hidden md:flex rounded-full border-stone-300">
              View All Tips
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tips.map((tip, idx) => (
            <Link key={idx} to="/tips" className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 mb-5">
                <img 
                  src={tip.image} 
                  alt={tip.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-stone-100 text-stone-600 rounded-full text-xs">
                    {tip.category}
                  </Badge>
                  <span className="text-xs text-stone-400">{tip.readTime}</span>
                </div>
                <h3 className="text-xl text-stone-900 group-hover:text-stone-600 transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {tip.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {tip.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/tips">
          <Button variant="outline" className="md:hidden w-full mt-8 rounded-full border-stone-300">
            View All Tips
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

// Budget Strategies Section
function BudgetStrategies() {
  const strategies = [
    {
      title: 'The $100 Closet Makeover',
      description: 'How to transform a chaotic closet without breaking the bank. My go-to budget picks that actually last.',
      items: ['3 drawer organizers', '2 shelf risers', '1 set of slim hangers'],
      icon: DollarSign
    },
    {
      title: 'DIY vs. Buy: When to Splurge',
      description: 'After testing hundreds of products, here is my honest take on what is worth buying and what you can DIY.',
      items: ['DIY: Drawer dividers', 'Buy: Pantry containers', 'Splurge: Label maker'],
      icon: Lightbulb
    },
    {
      title: 'Room-by-Room Budget Planner',
      description: 'A downloadable worksheet to prioritize your organization spending based on your biggest pain points.',
      items: ['Priority assessment', 'Cost breakdown', 'Timeline planner'],
      icon: FileText
    }
  ];

  return (
    <section className="py-20 px-6 bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <Badge className="bg-stone-700 text-stone-300 hover:bg-stone-700 rounded-full mb-4">
              Budget Organization
            </Badge>
            <h2 className="text-3xl md:text-4xl mb-4">Smart Spending for Organized Spaces</h2>
            <p className="text-stone-400 leading-relaxed">
              Organization doesn't require a big budget. I've learned how to create calm, 
              functional spaces spending wisely—focusing on high-impact pieces and knowing 
              when to save vs. splurge.
            </p>
          </div>
          <div className="flex items-center gap-4 md:justify-end">
            <div className="text-center">
              <p className="text-3xl font-semibold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>$47</p>
              <p className="text-xs text-stone-500">Average per room</p>
            </div>
            <div className="w-px h-12 bg-stone-700" />
            <div className="text-center">
              <p className="text-3xl font-semibold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>3+</p>
              <p className="text-xs text-stone-500">Years per product</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {strategies.map((strategy, idx) => (
            <div key={idx} className="bg-stone-800/50 rounded-xl p-6 border border-stone-700">
              <div className="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center mb-4">
                <strategy.icon className="w-5 h-5 text-stone-300" />
              </div>
              <h3 className="text-xl mb-3">{strategy.title}</h3>
              <p className="text-sm text-stone-400 mb-4 leading-relaxed">
                {strategy.description}
              </p>
              <ul className="space-y-2">
                {strategy.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-500">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/budget">
            <Button variant="outline" className="rounded-full border-stone-600 text-stone-300 hover:bg-stone-800 hover:text-white">
              See Full Budget Guide
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Product Reviews Section
function ProductReviews() {
  const reviews = [
    {
      product: 'Acrylic Drawer Organizers',
      context: 'Tested in 8 different dresser drawers across 3 rentals',
      verdict: 'Worth It',
      summary: 'These clear organizers have held up beautifully. The non-slip bottoms actually work, and they clean up like new after 2+ years of use.',
      pros: ['Easy to clean', 'Stackable', 'Non-slip'],
      cons: ['Pricey for full sets', 'Sizes limited'],
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80'
    },
    {
      product: 'Fabric Storage Bins',
      context: 'Used in 4 linen closets and 2 under-bed storage setups',
      verdict: 'Worth It',
      summary: 'Surprisingly durable for the price. The structured sides keep their shape, and the labels wash well. Great for seasonal items.',
      pros: ['Affordable', 'Washable', 'Collapsible'],
      cons: ['Not see-through', 'Can collect dust'],
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&q=80'
    },
    {
      product: 'Label Maker',
      context: 'Daily use for 18 months across pantry, office, and craft supplies',
      verdict: 'Splurge Worthy',
      summary: 'The one organization tool I use constantly. Labels stay stuck, tape is easy to replace, and the keyboard is actually usable.',
      pros: ['Reliable labels', 'Easy to use', 'Worth the cost'],
      cons: ['Tape refills add up', 'Takes up drawer space'],
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80'
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <Badge variant="secondary" className="bg-stone-200 text-stone-700 rounded-full mb-4">
            Honest Product Reviews
          </Badge>
          <h2 className="text-3xl md:text-4xl text-stone-900 mb-4">
            Products We've Tested & Loved
          </h2>
          <p className="text-stone-600 max-w-xl mx-auto">
            Real reviews from real rental living. No sponsored content—just products 
            I've actually used and would buy again.
          </p>
        </div>
        <div className="space-y-8">
          {reviews.map((review, idx) => (
            <article key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="grid md:grid-cols-[280px_1fr] gap-0">
                <div className="aspect-square md:aspect-auto overflow-hidden bg-stone-100">
                  <img 
                    src={review.image} 
                    alt={review.product}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Badge className={`rounded-full ${
                      review.verdict === 'Worth It' 
                        ? 'bg-green-100 text-green-700 hover:bg-green-100' 
                        : 'bg-amber-100 text-amber-700 hover:bg-amber-100'
                    }`}>
                      {review.verdict}
                    </Badge>
                    <span className="text-xs text-stone-400">{review.context}</span>
                  </div>
                  <h3 className="text-2xl text-stone-900 mb-3">{review.product}</h3>
                  <p className="text-stone-600 mb-5 leading-relaxed">
                    {review.summary}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-2">Pros</p>
                      <ul className="space-y-1">
                        {review.pros.map((pro, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                            <Heart className="w-3 h-3 text-green-600" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-2">Considerations</p>
                      <ul className="space-y-1">
                        {review.cons.map((con, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                            <span className="w-3 h-px bg-stone-400" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/reviews">
            <Button variant="outline" className="rounded-full border-stone-300">
              See All Reviews
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <Badge variant="secondary" className="bg-stone-100 text-stone-700 rounded-full">
              Organizing since 2021
            </Badge>
            <h2 className="text-3xl md:text-4xl text-stone-900">
              Living in Other People's Homes
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                For nearly three years, my husband Matt and I have lived exclusively in 
                furnished vacation and corporate rentals. We've called dozens of spaces 
                "home"—each with different closets, drawers, and storage challenges.
              </p>
              <p>
                That experience taught me what organization systems actually work in real 
                life. Not styled photo shoots. Not perfect pantries. Real systems for real 
                people living in real (often small, often temporary) spaces.
              </p>
              <p>
                BetweenDrawers is where I share what I've learned: honest product reviews, 
                practical strategies, and the occasional failure (because not every organizer 
                is worth your money).
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {['Rental Living', 'Small Spaces', 'Minimalism', 'Function Over Perfect'].map((tag) => (
                <span key={tag} className="text-xs bg-stone-100 text-stone-600 px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100">
              <img 
                src="https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80" 
                alt="Cherie organizing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Newsletter Section
function NewsletterSection() {
  return (
    <section id="subscribe" className="py-20 px-6 bg-[#faf8f5]">
      <div className="max-w-2xl mx-auto text-center">
        <Mail className="w-10 h-10 text-stone-400 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl text-stone-900 mb-4">
          Get Organization Tips Weekly
        </h2>
        <p className="text-stone-600 mb-8 leading-relaxed">
          One email a week with honest product reviews, practical organization strategies, 
          and new guides. Written by me, for people who want calm spaces without the 
          Pinterest pressure.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
          <Input 
            type="email" 
            placeholder="Your email address" 
            className="rounded-full border-stone-300 bg-white px-5 py-5"
          />
          <Button className="bg-stone-800 hover:bg-stone-700 text-white rounded-full px-6 py-5 whitespace-nowrap">
            Subscribe
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-stone-500">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Weekly tips
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Honest reviews
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Unsubscribe anytime
          </span>
        </div>
        <p className="text-xs text-stone-400 mt-4">
          Join 15,000+ readers. No spam, just helpful tips.
        </p>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const links = {
    explore: [
      { label: 'All Guides', to: '/guides' },
      { label: 'Quick Tips', to: '/tips' },
      { label: 'Product Reviews', to: '/reviews' },
      { label: 'Budget Strategies', to: '/budget' },
    ],
    company: ['About Cherie', 'All Guides', 'Contact', 'Work With Us'],
  };

  return (
    <footer className="py-16 px-6 bg-white border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-semibold text-stone-900 mb-4 block" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              BetweenDrawers
            </Link>
            <p className="text-stone-600 text-sm leading-relaxed max-w-sm mb-4">
              Organization tips, honest product reviews, and practical strategies for 
              calm, organized spaces. Written by Cherie from real rental-living experience.
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
              {links.explore.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-4">Company</p>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-400">
            © 2026 BetweenDrawers. All rights reserved.
          </p>
          <p className="text-xs text-stone-400">
            A sister brand to{' '}
            <a href="https://betweenstaysco.com" className="underline hover:text-stone-600" target="_blank" rel="noopener noreferrer">
              BetweenStaysCo.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// Home page — all existing sections
function HomePage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <main>
        <HeroSection />
        <FeaturedGuide />
        <TopicCategories />
        <LatestTips />
        <BudgetStrategies />
        <ProductReviews />
        <AboutSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

// Root App — wrapped in HashRouter
function AppRoutes() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/budget" element={<BudgetPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}
