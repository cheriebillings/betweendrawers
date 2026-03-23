import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function KitchenDrawersArticle() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Article Header */}
      <div className="bg-white border-b border-stone-200 pt-24 pb-12 px-6">
        <div className="max-w-2xl mx-auto">
          <Link to="/guides" className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-800 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Guides
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-[0.08em] uppercase text-[#B87748]">Kitchen Drawers</span>
          </div>
          <h1 className="text-4xl md:text-5xl text-stone-900 mb-4 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
            Junk Drawer to Useful Drawer: How I Finally Fixed the Most Chaotic Spot in My Kitchen
          </h1>
          <p className="text-stone-500 text-sm">By Cherie Billings · BetweenDrawers</p>
        </div>
      </div>

      {/* Article Body */}
      <article className="px-6 py-12">
        <div className="max-w-2xl mx-auto prose-stone">

          <h2 className="text-2xl text-stone-900 mt-10 mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>The Drawer I Kept Pretending Didn't Exist</h2>

          <p className="text-stone-600 leading-relaxed mb-5">There's a drawer in every kitchen that nobody talks about. You know the one. It's the drawer you yank open with one hand while holding something with the other, shove whatever's in your hand inside, and slam shut before anything can fall out. You don't actually look in it. You just add to it.</p>

          <p className="text-stone-600 leading-relaxed mb-5">We had one of those drawers in the furnished home we were staying in last fall — right next to the stove, which is prime real estate for chaos. And I am not exaggerating when I say I once found a takeout menu from a restaurant that had permanently closed, a mystery key, three dried-up pens, two batteries I wasn't sure were dead, a single birthday candle, and — I still don't know how — a golf tee. Matt doesn't even golf.</p>

          <p className="text-stone-600 leading-relaxed mb-5">Every time I was actually trying to cook something and needed the kitchen scissors or the meat thermometer, I'd dig through that drawer like I was looking for buried treasure. I'd find everything except the thing I needed. And then I'd just close it, grab a different knife, or Google how long to cook chicken with absolutely no thermometer and pray for the best.</p>

          <p className="text-stone-600 leading-relaxed mb-5">Matt and I are remote workers — we've spent the last three years moving from furnished home to furnished home, unpacking our bags in a new city, figuring out a new kitchen, a new closet, a new everything. It used to give me a mental block about organizing. A drawer that isn't "mine" in a home I'm only in for a season? Why bother?</p>

          <p className="text-stone-600 leading-relaxed mb-5">Because you still live there every single day. The chaos is still your chaos.</p>

          <p className="text-stone-600 leading-relaxed mb-5">So one Saturday last fall, I finally fixed that drawer. And honestly? It changed my kitchen life more than anything else I'd done in months. Here's exactly how.</p>

          <hr className="border-stone-200 my-8" />

          <h2 className="text-2xl text-stone-900 mt-10 mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>Step One: Actually Empty the Whole Thing</h2>

          <p className="text-stone-600 leading-relaxed mb-5">I know. I know. But you can't organize chaos. You have to dump it out first.</p>

          <p className="text-stone-600 leading-relaxed mb-5">Pull everything out and put it on the counter or the kitchen table. Don't do this when you're hungry or in a rush — give yourself 30 minutes on a Sunday afternoon with a coffee. I did mine on a Saturday morning and it took longer than I expected because I kept going, "Wait, why do we have this?"</p>

          <p className="text-stone-600 leading-relaxed mb-5">Make three piles as you sort: <strong className="text-stone-800 font-semibold">Keep</strong>, <strong className="text-stone-800 font-semibold">Toss</strong>, and <strong className="text-stone-800 font-semibold">Belongs Somewhere Else</strong>. That last one is sneaky but important. A lot of what lives in the junk drawer doesn't actually belong in the kitchen at all. Phone chargers, expired coupons, random hardware screws — they've just been squatting there because no one made a decision.</p>

          <p className="text-stone-600 leading-relaxed mb-5">I ended up tossing about half of what was in there. Dead pens, ancient takeout menus, a padlock with no combination we'll ever remember. The golf tee — also gone, because Matt. Still. Does not. Golf.</p>

          <hr className="border-stone-200 my-8" />

          <h2 className="text-2xl text-stone-900 mt-10 mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>Step Two: Decide What the Drawer Is Actually For</h2>

          <p className="text-stone-600 leading-relaxed mb-5">This sounds obvious but it's the step most people skip, and it's why the drawer goes right back to chaos within two weeks.</p>

          <p className="text-stone-600 leading-relaxed mb-5">Before you put anything back, decide: what do I actually want quick access to in this kitchen? For me, the answer was: scissors, the meat thermometer, a few rubber bands, a lighter for the candles we never light, some twist ties, a few chip clips, and a notepad and pen for grocery lists. That's it. That's a reasonable drawer.</p>

          <p className="text-stone-600 leading-relaxed mb-5">Write your list. Be ruthless. If you haven't used it in six months and you can't name a specific time you'll need it, it doesn't earn drawer space.</p>

          <p className="text-stone-600 leading-relaxed mb-5">One thing I've noticed: furnished homes often have a layer of previous-occupant debris mixed in with your own. Be especially unsentimental about things you didn't bring and have never touched.</p>

          <hr className="border-stone-200 my-8" />

          <h2 className="text-2xl text-stone-900 mt-10 mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>Step Three: Use Dividers So Things Stay Put</h2>

          <p className="text-stone-600 leading-relaxed mb-5">This is the single biggest game changer. Before I did this, anything I put in the drawer just... migrated. Stuff would tumble over each other and within a week it looked like I'd never touched it.</p>

          <p className="text-stone-600 leading-relaxed mb-5">
            <span className="inline-block bg-[#fdf8f4] border border-[#B87748]/20 text-[#B87748] text-xs font-medium px-3 py-1 rounded-full my-2">[Affiliate link: bamboo drawer dividers]</span>
          </p>

          <p className="text-stone-600 leading-relaxed mb-5">Adjustable dividers create little zones inside the drawer — a spot for scissors, a spot for pens, a spot for the small stuff. Once everything has a home, it stays there. No more search-and-rescue missions every time you need something.</p>

          <p className="text-stone-600 leading-relaxed mb-5">If your drawer is on the shallower side — common in furnished homes — look for low-profile dividers that won't get stuck when you close the drawer. Measure first. I've learned this the annoying way.</p>

          <hr className="border-stone-200 my-8" />

          <h2 className="text-2xl text-stone-900 mt-10 mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>Step Four: Corral the Tiny Stuff</h2>

          <p className="text-stone-600 leading-relaxed mb-5">The real villain in any junk drawer is small, loose items. Twist ties, rubber bands, batteries, birthday candles — these will absolutely take over if you let them.</p>

          <p className="text-stone-600 leading-relaxed mb-5">
            <span className="inline-block bg-[#fdf8f4] border border-[#B87748]/20 text-[#B87748] text-xs font-medium px-3 py-1 rounded-full my-2">[Affiliate link: small silicone organizer cups]</span>
          </p>

          <p className="text-stone-600 leading-relaxed mb-5">Little cups or trays — the kind meant to nest inside a larger organizer — are perfect for this. One cup for rubber bands. One for batteries. One for the random small hardware you actually do keep because it's from the IKEA furniture that's currently assembled in your living room and you will absolutely need that Allen wrench again someday.</p>

          <p className="text-stone-600 leading-relaxed mb-5">Because we move every few months, I want drawer stuff that's easy to pack. These small cups are light and drop right into a bag when we're relocating. Zero drama.</p>

          <hr className="border-stone-200 my-8" />

          <h2 className="text-2xl text-stone-900 mt-10 mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>Step Five: Keep One Running "Action" Spot</h2>

          <p className="text-stone-600 leading-relaxed mb-5">Every kitchen needs a little corner for the stuff in motion — things that need to be dealt with but aren't there yet. A coupon you're actually going to use. A receipt you need to return something with. A note about what you're out of.</p>

          <p className="text-stone-600 leading-relaxed mb-5">
            <span className="inline-block bg-[#fdf8f4] border border-[#B87748]/20 text-[#B87748] text-xs font-medium px-3 py-1 rounded-full my-2">[Affiliate link: magnetic notepad or small desktop notepad]</span>
          </p>

          <p className="text-stone-600 leading-relaxed mb-5">I keep a small notepad right in the front corner of the drawer, along with two pens I tested before they went in there (no more discovering mid-grocery-list that the pen is dead). This is our grocery list, our "we need to call about that" list, all of it in one small spot that makes sense.</p>

          <p className="text-stone-600 leading-relaxed mb-5">When we leave a place, the notepad comes with me. So does the system — that's the whole point of building habits that don't depend on any specific kitchen's layout.</p>

          <hr className="border-stone-200 my-8" />

          <h2 className="text-2xl text-stone-900 mt-10 mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>Step Six: Do a Two-Minute Reset Once a Week</h2>

          <p className="text-stone-600 leading-relaxed mb-5">Here's the part nobody wants to hear but is actually easy once you do it: spend two minutes once a week just glancing at the drawer and putting anything back in its right spot.</p>

          <p className="text-stone-600 leading-relaxed mb-5">The drawer doesn't go back to chaos overnight. It goes back because small things drift — a pen gets left in the wrong section, something gets tossed in quickly and lands in the wrong zone. Two minutes is enough to catch it before it becomes a problem again.</p>

          <p className="text-stone-600 leading-relaxed mb-5">
            <span className="inline-block bg-[#fdf8f4] border border-[#B87748]/20 text-[#B87748] text-xs font-medium px-3 py-1 rounded-full my-2">[Affiliate link: clear drawer liner]</span>
          </p>

          <p className="text-stone-600 leading-relaxed mb-5">A thin drawer liner on the bottom also helps a lot — it keeps dividers and cups from sliding around every time you open and close the drawer, which means things actually stay where you put them. It also means when we move out, you can peel it up and leave the drawer exactly as you found it. No harm, no foul.</p>

          <hr className="border-stone-200 my-8" />

          <h2 className="text-2xl text-stone-900 mt-10 mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>The Before and After Nobody's Photographing</h2>

          <p className="text-stone-600 leading-relaxed mb-5">Here's my honest before-and-after: Before, I avoided that drawer like it owed me money. I had genuinely forgotten what was in there. After, I open it multiple times a day without thinking about it. The scissors are where I expect them. The meat thermometer is right there. Matt can find things too — which I truly did not think was achievable.</p>

          <p className="text-stone-600 leading-relaxed mb-5">The whole thing cost me maybe twenty dollars and an hour on a Saturday. We were only in that home for three more months after I did it. But those months were so much less annoying in the kitchen because I could just <em>find</em> stuff.</p>

          <p className="text-stone-600 leading-relaxed mb-5">You're still living there every day. The calmer the space, the calmer the day. And the systems travel — so do the dividers and the little silicone cups. So does the muscle memory.</p>

          <p className="text-stone-600 leading-relaxed mb-5">Don't wait until you're "settled" to get organized. This is settled. Wherever you are right now, this is your life. Might as well make it easy to find the scissors.</p>

          <hr className="border-stone-200 my-8" />

          <h2 className="text-2xl text-stone-900 mt-10 mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>What's Your Junk Drawer Situation?</h2>

          <p className="text-stone-600 leading-relaxed mb-5">I want to hear about it. Drop a comment below and tell me what the weirdest thing you've ever found in your junk drawer is — no judgment, I promise. (Mine is still the golf tee. I genuinely cannot explain it.)</p>

          <p className="text-stone-600 leading-relaxed mb-5">And if you want more practical tips for making a furnished home feel like <em>your</em> home without leaving any damage behind, sign up for the BetweenDrawers newsletter. I share real, actually-useful stuff — no filler, no fluff. Just what's working for us right now, wherever we happen to be living.</p>

        </div>
      </article>

      {/* Newsletter CTA at bottom */}
      <section className="bg-[#B87748] py-14 px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xl text-white mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>Get more like this, weekly.</p>
          <p className="text-white/75 text-sm mb-6">Organization ideas for wherever you're living right now. No fluff.</p>
          <Link to="/#subscribe" className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors">
            Subscribe Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-stone-200 text-center">
        <Link to="/" className="text-lg text-stone-800 hover:text-stone-600 transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif' }}>BetweenDrawers</Link>
        <p className="text-xs text-stone-400 mt-2">© 2026 BetweenDrawers. All rights reserved.</p>
      </footer>
    </div>
  );
}
