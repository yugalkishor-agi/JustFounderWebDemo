import { Search, ChevronLeft, ChevronRight, Rocket, Coins, TrendingUp, Users, BookOpen, Calendar, Play } from 'lucide-react';

const TopBar = () => (
  <div className="bg-[#ff5722] text-white text-[10px] sm:text-xs font-medium py-2 px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
    <div className="flex-1 text-center flex items-center justify-center gap-2">
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
      <span>Advertise with us — Reach 1M+ ambitious founders & builders across India.</span>
    </div>
    <a href="#" className="hover:underline flex items-center gap-1 whitespace-nowrap">Learn More &rarr;</a>
  </div>
);

const Header = () => (
  <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
    <div className="max-w-[1440px] mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/logo.png" alt="JustFounder Logo" className="h-[72px] sm:h-[86px] w-auto object-contain" />
      </div>
      
      <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-gray-800">
        <a href="#" className="hover:text-black transition-colors">Founder First</a>
        <a href="#" className="hover:text-black transition-colors">Just In</a>
        <div className="flex items-center gap-1 cursor-pointer hover:text-black transition-colors">
          Initiatives <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-black transition-colors">
          Categories <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-black transition-colors">
          Resources <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
        <a href="#" className="hover:text-black transition-colors">Directories</a>
      </nav>

      <div className="flex items-center gap-2 sm:gap-4">
        <button className="p-2 text-gray-600 hover:text-black transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button className="bg-[#ff5722] hover:bg-[#e64a19] text-white text-xs sm:text-sm font-bold py-1.5 sm:py-2 px-4 sm:px-6 rounded-full transition-colors">
          Sign In
        </button>
      </div>
    </div>
  </header>
);

const Trending = () => {
  const picks = [
    { tag: 'STARTUP', title: "Zepto's Next Chapter: What's Behind the Quick Commerce Push?", img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400&h=250' },
    { tag: 'FINTECH', title: "Indian Startups Raise $1.2B in August 2025 Despite Global Uncertainty", img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400&h=250' },
    { tag: 'FOUNDER STORIES', title: "From Small Town to Big Dreams: The Journey of Lenskart's Founders", img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=400&h=250' },
    { tag: 'TECH', title: "How AI is Transforming India's Healthcare Startups", img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400&h=250' },
    { tag: 'E-COMMERCE', title: "The Rise of D2C Brands in India: What's Next?", img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400&h=250' },
    { tag: 'STARTUP', title: "Women Founders Are Changing India's Startup Landscape", img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400&h=250' },
    { tag: 'WEB3', title: "The Decentralized Future: Builders Rethinking the Internet", img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=400&h=250' },
    { tag: 'EDTECH', title: "Beyond K-12: The New Wave of Skilling Startups", img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=400&h=250' },
  ];

  const repeatedPicks = [...picks, ...picks, ...picks];

  return (
    <section className="py-6 sm:py-8 max-w-[1440px] mx-auto px-4 lg:px-6 border-b border-gray-100 bg-[#fcfcfc] overflow-hidden">
      <div className="flex justify-between items-end mb-4 sm:mb-5">
        <h2 className="section-title">TRENDING</h2>
        <a href="#" className="text-[10px] sm:text-[11px] font-panchang font-bold text-gray-500 hover:text-black flex items-center gap-1 uppercase tracking-wider transition-colors">View all &rarr;</a>
      </div>
      
      <div className="relative flex overflow-x-hidden group pb-4">
        <div className="flex animate-[marquee_30s_linear_infinite] group-hover:paused gap-4 sm:gap-5">
          {repeatedPicks.map((pick, i) => (
            <div key={i} className="w-[240px] sm:w-[280px] lg:w-[300px] flex-shrink-0 cursor-pointer">
              <div className="aspect-[16/10] bg-gray-100 mb-2.5 sm:mb-3 overflow-hidden rounded relative">
                <img src={pick.img} alt={pick.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="text-[9px] sm:text-[10px] font-panchang font-extrabold text-[#ff5722] tracking-wider uppercase mb-1 sm:mb-1.5 block">{pick.tag}</span>
              <h3 className="font-serif font-bold text-xs sm:text-[14px] leading-snug group-hover:text-[#ff5722] transition-colors">{pick.title}</h3>
            </div>
          ))}
        </div>
        
        {/* Gradients to fade edges slightly */}
        <div className="absolute top-0 left-0 w-8 sm:w-16 h-full bg-gradient-to-r from-[#fcfcfc] to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-8 sm:w-16 h-full bg-gradient-to-l from-[#fcfcfc] to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

const Hero = () => {
  const news = [
    { title: "India's AI Startups See 3x Growth in H1 2025, Reports NASSCOM", time: "2 hours ago", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=100&h=100" },
    { title: "Swiggy Instamart Launches 10-Minute Delivery in 12 New Cities", time: "4 hours ago", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=100&h=100" },
    { title: "Zomato's Deepinder Goyal on the Future of Food Tech in India", time: "6 hours ago", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=100&h=100" },
    { title: "RBI Greenlights Onboarding of Digital Lending Apps", time: "6 hours ago", img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=100&h=100" },
    { title: "Indian Startups Create 50K+ New Jobs in Q2 2025", time: "10 hours ago", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=100&h=100" },
  ];

  return (
    <section className="py-8 sm:py-10 max-w-[1440px] mx-auto px-4 lg:px-6 border-b border-gray-100 bg-[#fcfcfc]">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8">
          <div className="flex flex-col md:grid md:grid-cols-5 gap-6 lg:gap-8 h-full">
            <div className="md:col-span-3 relative h-64 md:h-full min-h-[300px] rounded overflow-hidden group cursor-pointer shadow-sm">
              <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800&h=600" alt="Slice Founder" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-[#ff5722] text-white text-[9px] sm:text-[10px] font-panchang font-extrabold px-2.5 py-1 sm:px-3 sm:py-1.5 uppercase tracking-wider rounded">
                FOUNDER STORIES
              </div>
            </div>
            <div className="md:col-span-2 flex flex-col justify-center pr-0 lg:pr-4 py-2">
              <span className="text-[10px] sm:text-[11px] font-panchang font-extrabold text-[#ff5722] tracking-wider uppercase mb-2 sm:mb-3 block">FOUNDER STORIES</span>
              <h1 className="font-serif font-black text-2xl sm:text-3xl lg:text-[38px] leading-[1.15] mb-3 sm:mb-4 hover:text-[#ff5722] cursor-pointer transition-colors">
                How <span className="font-panchang text-[#ff5722]">Slice</span> Built a <span className="font-khand text-[1.1em]">$2.3B</span> Fintech Empire from India
              </h1>
              <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-4 sm:mb-6">
                Kumar Shree, co-founder of Slice, shares the journey from a simple idea to building one of India's most valuable fintech companies.
              </p>
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80" alt="Author" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover" />
                <div>
                  <div className="text-xs sm:text-[13px] font-bold text-gray-900">By Rhea Sharma</div>
                  <div className="text-[10px] sm:text-[11px] font-medium text-gray-500 mt-0.5">Aug 28, 2025 &bull; 8 min read</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="flex flex-col h-auto lg:h-[400px]">
            <div className="flex justify-between items-end mb-4">
              <h2 className="section-title">LATEST NEWS</h2>
              <a href="#" className="text-[10px] font-panchang font-bold text-gray-500 hover:text-black uppercase tracking-wider transition-colors">View all &rarr;</a>
            </div>
            <div className="flex flex-col gap-3 lg:gap-4 flex-1 justify-between">
              {news.map((item, i) => (
                <div key={i} className="flex gap-3 group cursor-pointer border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <img src={item.img} alt="News" className="w-[50px] h-[40px] sm:w-[60px] sm:h-[45px] object-cover rounded flex-shrink-0 group-hover:scale-105 transition-transform duration-300" />
                  <div className="flex flex-col justify-between py-0.5">
                    <h4 className="font-serif font-bold text-xs sm:text-[13px] leading-snug group-hover:text-[#ff5722] transition-colors line-clamp-2">{item.title}</h4>
                    <span className="text-[9px] sm:text-[10px] font-medium text-gray-500 mt-0.5">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#FFF8F3] rounded border border-orange-100 p-5 sm:p-6 flex flex-col relative overflow-hidden h-auto lg:h-[400px]">
            <div className="relative z-10 flex flex-col h-full">
              <div>
                <h3 className="font-khand font-black text-2xl sm:text-3xl leading-tight mb-2 sm:mb-3 text-gray-900">
                  Get the best of startup news — in your <span className="font-panchang text-[#ff5722] text-[0.8em]">inbox</span> or on <span className="font-panchang text-green-600 text-[0.8em]">WhatsApp</span>.
                </h3>
                <p className="text-gray-600 text-xs sm:text-[13px] mb-4 sm:mb-6 font-medium leading-relaxed pr-8">
                  Join 100,000+ readers who trust JustFounder.
                </p>
              </div>
              <div className="mt-auto relative z-20">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-white text-xs sm:text-[13px] border border-gray-200 rounded px-3 sm:px-4 py-2 sm:py-2.5 mb-2 outline-none focus:border-[#ff5722] focus:ring-1 focus:ring-[#ff5722] transition-all"
                />
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#ff5722] hover:bg-[#e64a19] text-white text-xs sm:text-[13px] font-bold px-4 py-2 sm:py-2.5 rounded transition-colors">
                    Subscribe
                  </button>
                  <button className="flex-[0.8] bg-[#25D366] hover:bg-[#1ebd5a] text-white text-xs sm:text-[13px] font-bold px-4 py-2 sm:py-2.5 rounded transition-colors flex items-center justify-center gap-1.5">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.383 0 12.03c0 2.115.551 4.184 1.594 6.014L.15 24l6.113-1.603A12.007 12.007 0 0012.031 24c6.646 0 12.031-5.384 12.031-12.03S18.677 0 12.031 0zM17.65 16.516c-.258.724-1.493 1.365-2.072 1.419-.53.05-1.157.17-3.29-.714-2.585-1.074-4.225-3.69-4.354-3.864-.13-.174-1.04-1.385-1.04-2.645 0-1.26.657-1.884.89-2.143.23-.258.502-.323.672-.323.17 0 .34.004.488.01.161.008.375-.062.585.441.22.525.714 1.745.779 1.874.064.13.106.28.02.453-.086.173-.13.28-.26.435-.129.155-.274.341-.392.453-.13.12-.268.256-.12.497.147.24 6.55 3.863 4.29 4.316.275-.028.528-.158.735-.357.24-.233.307-.442.27-.582-.038-.14-.144-.223-.3-.301z"/></svg>
                    Join
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-4 sm:top-8 right-[-20px] sm:right-[-30px] w-32 h-32 sm:w-40 sm:h-40 opacity-90 pointer-events-none">
              <img src="https://placehold.co/200x200/FFF8F3/ff5722?text=Illustration" className="w-full h-full object-contain mix-blend-multiply" alt="Illustration" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LowerSection = () => {
  const playbook = [
    { icon: <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff5722]" />, title: "Build", desc: "Turn your idea into a scalable business with proven frameworks." },
    { icon: <Coins className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff5722]" />, title: "Raise", desc: "Learn how to pitch, attract investors and close your next round." },
    { icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff5722]" />, title: "Grow", desc: "Strategies for product, marketing, sales and sustainable growth." },
    { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff5722]" />, title: "Scale", desc: "Build strong teams, culture and systems for long-term success." },
  ];

  const founders = [
    { name: "Aman Gupta", role: "Co-founder, boAt", quote: "\"We wanted to build a brand that India could be proud of.\"", cat: "Consumer Tech", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=200&h=240" },
    { name: "Falguni Nayar", role: "Founder, Nykaa", quote: "\"The goal was to make beauty accessible to every Indian woman.\"", cat: "E-commerce", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=240" },
    { name: "Nikhil Kamath", role: "Co-founder, Zerodha", quote: "\"We built Zerodha to give power back to the investor.\"", cat: "Fintech", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=240" },
    { name: "Divya Gokulnath", role: "Co-founder, Byju's", quote: "\"Education is the great equaliser in the world.\"", cat: "EdTech", img: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=200&h=240" },
  ];

  const initiatives = [
    { icon: <Rocket className="w-4 h-4 text-[#ff5722]" />, title: "JustLaunch", desc: "Supporting early-stage founders with funding, mentorship and resources." },
    { icon: <Coins className="w-4 h-4 text-[#ff5722]" />, title: "JustCapital", desc: "Connecting startups with the right investors." },
    { icon: <BookOpen className="w-4 h-4 text-[#ff5722]" />, title: "JustLearn", desc: "Free resources, courses and expert insights for founders." },
    { icon: <Calendar className="w-4 h-4 text-[#ff5722]" />, title: "JustEvents", desc: "Community events, webinars and founder meetups." },
  ];

  const spotlight = [
    { tag: "HEALTHCARE", title: "How Practo Became India's Healthcare Super App", author: "By Ananya Desai", date: "Aug 25, 2025", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400&h=200" },
    { tag: "EDTECH", title: "Byju's: Lessons from a $22B Journey", author: "By Rohan Mehta", date: "Aug 24, 2025", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400&h=200" },
    { tag: "D2C", title: "Mamaearth's Mission for an 'A-Toxin-Free' Tomorrow", author: "By Simran Iyer", date: "Aug 22, 2025", img: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&q=80&w=400&h=200" },
    { tag: "FINTECH", title: "PhonePe's UPI Revolution and What's Next", author: "By Arjun Nair", date: "Aug 19, 2025", img: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?auto=format&fit=crop&q=80&w=400&h=200" },
  ];

  return (
    <section className="py-8 sm:py-10 max-w-[1440px] mx-auto px-4 lg:px-6 bg-[#fcfcfc] border-b border-gray-100">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-10">
        
        <div className="lg:col-span-8 flex flex-col gap-8 sm:gap-10">
          <div>
            <h2 className="section-title mb-4 sm:mb-5">STARTUP PLAYBOOK</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {playbook.map((item, i) => (
                <div key={i} className="border border-gray-100 bg-white rounded p-4 hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full">
                  <div className="mb-3 bg-orange-50 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full">{item.icon}</div>
                  <h4 className="font-bold text-[13px] sm:text-[14px] text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-[10px] sm:text-[11px] leading-relaxed mb-3 sm:mb-4 flex-1">{item.desc}</p>
                  <span className="text-[#ff5722] text-[10px] sm:text-[11px] font-panchang font-bold tracking-wide uppercase flex items-center gap-1 group">
                    Read Guide <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end mb-4 sm:mb-5">
              <h2 className="section-title">FOUNDER FIRST</h2>
              <a href="#" className="text-[10px] font-bold text-gray-500 hover:text-black uppercase tracking-wider transition-colors">View all &rarr;</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {founders.map((item, i) => (
                <div key={i} className="border border-gray-100 bg-white rounded flex overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-[40%] sm:w-[45%] flex-shrink-0">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                  </div>
                  <div className="w-[60%] sm:w-[55%] p-3 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-[12px] sm:text-[13px] text-gray-900 leading-tight">{item.name}</h4>
                      <p className="text-gray-500 text-[9px] sm:text-[10px] mb-1 sm:mb-2">{item.role}</p>
                      <p className="text-gray-600 text-[9px] sm:text-[10px] italic leading-snug line-clamp-3">{item.quote}</p>
                    </div>
                    <span className="text-[#ff5722] text-[9px] sm:text-[10px] font-panchang font-bold mt-2 block">{item.cat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end mb-4 sm:mb-5">
              <h2 className="section-title">INITIATIVES</h2>
              <a href="#" className="text-[10px] font-bold text-gray-500 hover:text-black uppercase tracking-wider transition-colors">View all &rarr;</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {initiatives.map((item, i) => (
                <div key={i} className="border border-gray-100 bg-white rounded p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-orange-50 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full flex-shrink-0">{item.icon}</div>
                    <h4 className="font-bold text-[12px] sm:text-[13px] text-gray-900">{item.title}</h4>
                  </div>
                  <p className="text-gray-500 text-[10px] sm:text-[11px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 mt-8 lg:mt-0">
          <div className="flex justify-between items-end mb-4 sm:mb-5">
            <h2 className="section-title">SPOTLIGHT</h2>
            <a href="#" className="text-[10px] font-bold text-gray-500 hover:text-black uppercase tracking-wider transition-colors">View all &rarr;</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {spotlight.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[16/10] bg-gray-100 rounded overflow-hidden mb-2.5 sm:mb-3">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-2 left-2 bg-[#ff5722] text-white text-[7px] sm:text-[8px] font-panchang font-extrabold px-1.5 py-0.5 sm:px-2 sm:py-1 uppercase tracking-wider rounded">
                    {item.tag}
                  </div>
                </div>
                <h3 className="font-serif font-bold text-[13px] sm:text-[14px] leading-snug mb-1.5 sm:mb-2 group-hover:text-[#ff5722] transition-colors">{item.title}</h3>
                <div className="flex items-center gap-2 text-[9px] sm:text-[10px] text-gray-500 font-medium">
                  <span>{item.author}</span>
                  <span>&bull;</span>
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#1A1A1A] text-white py-10 sm:py-12 border-t-[4px] border-[#ff5722]">
    <div className="max-w-[1440px] mx-auto px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-3">
        <div className="mb-4">
          <img src="/logo.png" alt="JustFounder Logo" className="h-[86px] sm:h-[101px] w-auto object-contain filter invert brightness-0" />
        </div>
        <p className="text-gray-400 text-[11px] sm:text-xs mb-6 sm:mb-8">Real Stories. Real Founders. A Stronger India.</p>
        <p className="text-gray-500 text-[9px] sm:text-[10px]">&copy; 2025 JustFounder. All rights reserved.</p>
      </div>
      
      <div className="lg:col-span-2">
        <h4 className="font-bold text-[13px] sm:text-sm mb-3 sm:mb-4">Quick Links</h4>
        <ul className="flex flex-col gap-2 text-[11px] sm:text-xs text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">Founder First</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Just In</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Initiatives</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
        </ul>
      </div>

      <div className="lg:col-span-2">
        <h4 className="font-bold text-[13px] sm:text-sm mb-3 sm:mb-4">Resources</h4>
        <ul className="flex flex-col gap-2 text-[11px] sm:text-xs text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Reports</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Toolkits</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
        </ul>
      </div>

      <div className="lg:col-span-2">
        <h4 className="font-bold text-[13px] sm:text-sm mb-3 sm:mb-4">About</h4>
        <ul className="flex flex-col gap-2 text-[11px] sm:text-xs text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Advertise</a></li>
        </ul>
      </div>

      <div className="lg:col-span-3">
        <h4 className="font-bold text-[13px] sm:text-sm mb-3 sm:mb-4">Follow Us</h4>
        <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8">
          <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ff5722] transition-colors">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ff5722] transition-colors">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
          <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ff5722] transition-colors">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ff5722] transition-colors">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          </a>
        </div>
        <p className="text-gray-400 text-[11px] sm:text-xs flex justify-start lg:justify-end">Building a more<br/>founder-friendly India.</p>
      </div>
    </div>
  </footer>
);

const FounderHero = () => (
  <section className="py-16 sm:py-24 max-w-[1440px] mx-auto px-4 lg:px-6 bg-[#fcfcfc] overflow-hidden border-b border-gray-100">
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-6 animate-fade-in-up">
        <span className="text-[11px] font-panchang font-extrabold text-[#ff5722] tracking-wider uppercase mb-3 block">Meet The Founder</span>
        <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[4.5rem] leading-[1.1] text-gray-900 mb-6">
          Jane <span className="font-panchang font-light text-[#ff5722]">Doe</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8 leading-relaxed">
          Building the next generation of inclusive technology and empowering startup ecosystems globally.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#ff5722] hover:bg-[#e64a19] text-white font-bold py-3.5 px-8 rounded-full transition-all hover:shadow-[0_8px_20px_rgba(255,87,34,0.3)] hover:-translate-y-0.5">
            Read My Story
          </button>
        </div>
      </div>
      <div className="lg:col-span-6 relative group animate-[fade-in-up_0.9s_ease-out_forwards]">
        <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded overflow-hidden relative shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1000" 
            alt="Founder Portrait" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#ff5722]/10 rounded-full -z-10 blur-3xl"></div>
      </div>
    </div>
  </section>
);

const AboutStory = () => (
  <section className="py-16 sm:py-24 max-w-[1440px] mx-auto px-4 lg:px-6 border-b border-gray-100">
    <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
      <h2 className="section-title justify-center mb-6">THE JOURNEY</h2>
      <h3 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-gray-900 mb-6">
        From a small dorm room to <br className="hidden sm:block" />a <span className="font-panchang text-[#ff5722]">global movement.</span>
      </h3>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      <div className="text-gray-600 text-[15px] sm:text-base leading-relaxed space-y-6">
        <p>
          [PLACEHOLDER] Every great story starts with a simple realization. For Jane, it was the understanding that technology was moving faster than humanity's ability to ensure equal access to it.
        </p>
        <p>
          [PLACEHOLDER] After dropping out of grad school, she spent three years building the foundation of what would become a movement. Without any initial funding, the journey was paved with countless rejections, late nights, and a singular belief in the mission.
        </p>
      </div>
      <div className="bg-[#FFF8F3] p-8 sm:p-10 rounded hover:shadow-lg transition-shadow duration-300">
        <h4 className="font-bold text-lg text-gray-900 mb-4">Core Philosophy</h4>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#ff5722] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5l10 -10"></path></svg>
            <span className="text-sm sm:text-[15px] text-gray-700 font-medium">Build for the overlooked, not just the early adopters.</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#ff5722] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5l10 -10"></path></svg>
            <span className="text-sm sm:text-[15px] text-gray-700 font-medium">Profitability follows true utility and positive impact.</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#ff5722] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5l10 -10"></path></svg>
            <span className="text-sm sm:text-[15px] text-gray-700 font-medium">Empower teams to take ownership of failures as much as wins.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="py-16 sm:py-20 max-w-[1440px] mx-auto px-4 lg:px-6 border-b border-gray-100">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:divide-x divide-gray-100">
      <div className="text-center px-4 group">
        <div className="font-khand font-black text-6xl sm:text-8xl text-[#ff5722] mb-2 group-hover:scale-110 transition-transform duration-500">10+</div>
        <div className="text-xs sm:text-sm font-panchang font-bold uppercase tracking-widest text-gray-500">Years Building</div>
      </div>
      <div className="text-center px-4 group">
        <div className="font-khand font-black text-6xl sm:text-8xl text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-500">3</div>
        <div className="text-xs sm:text-sm font-panchang font-bold uppercase tracking-widest text-gray-500">Unicorns Founded</div>
      </div>
      <div className="text-center px-4 group">
        <div className="font-khand font-black text-6xl sm:text-8xl text-[#ff5722] mb-2 group-hover:scale-110 transition-transform duration-500">$2B</div>
        <div className="text-xs sm:text-sm font-panchang font-bold uppercase tracking-widest text-gray-500">Value Created</div>
      </div>
      <div className="text-center px-4 group">
        <div className="font-khand font-black text-6xl sm:text-8xl text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-500">1M+</div>
        <div className="text-xs sm:text-sm font-panchang font-bold uppercase tracking-widest text-gray-500">Lives Impacted</div>
      </div>
    </div>
  </section>
);

const Timeline = () => {
  const milestones = [
    { year: '2015', title: 'The Genesis', desc: '[PLACEHOLDER] Dropped out to build the first prototype from a tiny apartment.' },
    { year: '2018', title: 'Series A', desc: '[PLACEHOLDER] Secured $12M from top-tier VCs to scale the vision globally.' },
    { year: '2021', title: 'Unicorn Status', desc: '[PLACEHOLDER] Crossed $1B valuation, expanding into 14 new countries.' },
    { year: '2025', title: 'The Next Chapter', desc: '[PLACEHOLDER] Launching the Foundation to back underprivileged founders.' },
  ];

  return (
    <section className="py-16 sm:py-24 max-w-[1440px] mx-auto px-4 lg:px-6 bg-[#fcfcfc] border-b border-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title justify-center mb-12 sm:mb-16">MILESTONES</h2>
        <div className="relative border-l-2 border-[#ff5722]/30 ml-4 sm:ml-8 space-y-12 sm:space-y-16">
          {milestones.map((m, i) => (
            <div key={i} className="relative pl-8 sm:pl-12 group cursor-default">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-[#ff5722] group-hover:scale-150 transition-transform duration-300"></div>
              <div className="text-[#ff5722] font-panchang font-black text-2xl sm:text-3xl mb-2">{m.year}</div>
              <h4 className="font-serif font-black text-lg sm:text-xl text-gray-900 mb-2 group-hover:text-[#ff5722] transition-colors">
                {m.title}
              </h4>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedStories = () => (
  <section className="py-16 sm:py-24 max-w-[1440px] mx-auto px-4 lg:px-6">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-12 gap-4">
      <div>
        <h2 className="section-title mb-4">Founder Stories & Blogs</h2>
        <h3 className="font-serif font-black text-3xl sm:text-4xl text-gray-900">Latest from the <span className="font-khand text-[#ff5722]">Desk</span></h3>
      </div>
      <a href="#" className="inline-flex items-center gap-2 font-panchang font-bold text-sm text-[#ff5722] hover:text-[#e64a19] transition-colors uppercase tracking-wider">
        View all stories &rarr;
      </a>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-7 group cursor-pointer relative overflow-hidden rounded shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
        <div className="aspect-[4/3] lg:aspect-[16/10] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200&h=800" alt="Main Story" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 text-white">
          <span className="bg-[#ff5722] text-[10px] font-panchang font-extrabold uppercase px-3 py-1 rounded tracking-wider mb-4 inline-block">Deep Dive</span>
          <h4 className="font-serif font-black text-2xl sm:text-4xl leading-tight mb-3 group-hover:text-gray-200 transition-colors">
            The Framework for Scaling Without Losing Your Soul
          </h4>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 line-clamp-2 max-w-2xl">
            [PLACEHOLDER] How to maintain company culture when you double headcount every six months. A practical guide to sustainable hyper-growth.
          </p>
          <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-400">
            <span className="text-white">Jane Doe</span>
            <span>&bull;</span>
            <span>12 min read</span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
        {[1, 2].map((i) => (
          <div key={i} className="flex flex-col sm:flex-row gap-5 group cursor-pointer h-full">
            <div className="w-full sm:w-[180px] xl:w-[220px] aspect-[16/9] sm:aspect-[4/3] rounded overflow-hidden flex-shrink-0 relative shadow-md">
              <img src={i === 1 ? 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600&h=400' : 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=400'} alt="Story" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-2 left-2 bg-white text-gray-900 text-[9px] font-panchang font-extrabold uppercase px-2 py-1 rounded shadow">
                {i === 1 ? 'Opinion' : 'Case Study'}
              </div>
            </div>
            <div className="flex flex-col justify-center flex-1">
              <h4 className="font-serif font-black text-lg sm:text-xl leading-snug mb-2 group-hover:text-[#ff5722] transition-colors">
                {i === 1 ? 'Why 90% of Startups Solve the Wrong Problem' : 'Redefining the MVP: Build for Love, Not Just Utility'}
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2">
                [PLACEHOLDER] Most founders focus on features. The best founders focus on unspoken human needs. Here is the difference...
              </p>
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-gray-400 mt-auto">
                <span>Oct {12 + i}, 2025</span>
                <span>&bull;</span>
                <span>5 min read</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PodcastCarousel = () => {
  const podcasts = [
    { title: "Building from Scratch: The Untold Story", guest: "Jane Doe", duration: "45 min", img: "https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?auto=format&fit=crop&q=80&w=800&h=500" },
    { title: "The Art of Scaling Culture", guest: "Jane Doe", duration: "38 min", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800&h=500" },
    { title: "Leading with Empathy in Tech", guest: "Jane Doe", duration: "52 min", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=500" },
    { title: "Failing Forward: Lessons from 2020", guest: "Jane Doe", duration: "41 min", img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800&h=500" },
    { title: "Future of Decentralized Tech", guest: "Jane Doe", duration: "55 min", img: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800&h=500" },
  ];
  
  // Duplicate array for infinite scroll effect (marquee)
  const repeatedPodcasts = [...podcasts, ...podcasts, ...podcasts, ...podcasts];

  return (
    <section className="py-16 sm:py-24 bg-[#111] text-white border-y-[4px] border-[#ff5722] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-6 mb-10 sm:mb-12">
        <h2 className="section-title !text-gray-400 mb-4">Podcast & Interviews</h2>
        <h3 className="font-serif font-black text-3xl sm:text-4xl text-white">Conversations with <span className="font-panchang text-[#ff5722]">Founders</span></h3>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] gap-6 sm:gap-8 px-3 w-max">
          {repeatedPodcasts.map((podcast, i) => (
            <div key={i} className="w-[280px] sm:w-[360px] flex-shrink-0 cursor-pointer">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 sm:mb-5 group/card shadow-xl">
                <img src={podcast.img} alt="Podcast" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/20 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#ff5722] text-white flex items-center justify-center pl-1 shadow-[0_0_20px_rgba(255,87,34,0.5)] transform group-hover/card:scale-110 transition-transform duration-300">
                    <Play className="w-5 h-5 sm:w-7 sm:h-7 fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm">
                  {podcast.duration}
                </div>
              </div>
              <h4 className="font-serif font-bold text-lg sm:text-xl leading-tight mb-2 hover:text-[#ff5722] transition-colors">{podcast.title}</h4>
              <p className="text-gray-400 text-sm font-medium">Featuring {podcast.guest}</p>
            </div>
          ))}
        </div>
        
        {/* Gradients to fade edges */}
        <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-[#111] to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-[#111] to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

const WhatsAppCommunities = () => {
  const groups = [
    { name: "Just Founder 1", type: "Channel", members: "45,200+", desc: "Daily startup news, funding updates, and exclusive founder stories.", img: "/logo.png" },
    { name: "Just Founder 2", type: "Group", members: "840/1024", desc: "For B2B SaaS founders. Discuss GTM, pricing, and scaling strategies.", img: "/logo.png" },
    { name: "Just Founder 3", type: "Group", members: "912/1024", desc: "ROAS, supply chain, and performance marketing discussions.", img: "/logo.png" },
    { name: "Just Founder 4", type: "Group", members: "530/1024", desc: "Connect with angel investors, pitch deck reviews, and term sheets.", img: "/logo.png" },
  ];

  return (
    <section className="py-16 sm:py-24 max-w-[1440px] mx-auto px-4 lg:px-6 bg-[#fcfcfc] border-b border-gray-100">
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="section-title justify-center mb-4">COMMUNITIES</h2>
        <h3 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-gray-900 mb-4">
          Join our <span className="font-panchang text-[#25D366]">WhatsApp</span> Networks
        </h3>
        <p className="text-gray-600 sm:text-lg max-w-2xl mx-auto">
          Skip the noise. Connect directly with top founders, operators, and investors in our highly curated WhatsApp groups and channels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {groups.map((g, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group cursor-pointer">
            <div className="relative mb-5">
              <img src={g.img} alt={g.name} className="w-20 h-20 rounded-full object-contain bg-white p-2 border-4 border-gray-50 shadow-md group-hover:scale-105 transition-transform" />
              <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow">
                <svg className="w-5 h-5 text-[#25D366] fill-current" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.383 0 12.03c0 2.115.551 4.184 1.594 6.014L.15 24l6.113-1.603A12.007 12.007 0 0012.031 24c6.646 0 12.031-5.384 12.031-12.03S18.677 0 12.031 0zM17.65 16.516c-.258.724-1.493 1.365-2.072 1.419-.53.05-1.157.17-3.29-.714-2.585-1.074-4.225-3.69-4.354-3.864-.13-.174-1.04-1.385-1.04-2.645 0-1.26.657-1.884.89-2.143.23-.258.502-.323.672-.323.17 0 .34.004.488.01.161.008.375-.062.585.441.22.525.714 1.745.779 1.874.064.13.106.28.02.453-.086.173-.13.28-.26.435-.129.155-.274.341-.392.453-.13.12-.268.256-.12.497.147.24 6.55 3.863 4.29 4.316.275-.028.528-.158.735-.357.24-.233.307-.442.27-.582-.038-.14-.144-.223-.3-.301z"/></svg>
              </div>
            </div>
            
            <div className="text-[10px] font-panchang font-bold text-gray-400 uppercase tracking-wider mb-2">{g.type}</div>
            <h4 className="font-serif font-black text-xl text-gray-900 mb-2">{g.name}</h4>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              {g.members}
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{g.desc}</p>
            
            <button className="w-full bg-gray-50 group-hover:bg-[#25D366] text-gray-900 group-hover:text-white font-bold py-2.5 rounded transition-colors text-sm flex items-center justify-center gap-2">
              Join Now
              <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">&rarr;</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const VisionQuote = () => (
  <section className="py-20 sm:py-32 max-w-[1440px] mx-auto px-4 lg:px-6 relative overflow-hidden bg-[#1A1A1A] text-white my-8 sm:my-16">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ff5722] opacity-5 transform skew-x-12 translate-x-20"></div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <div className="text-[#ff5722] text-7xl sm:text-9xl font-serif leading-none absolute -top-10 sm:-top-16 left-0 sm:-left-12 opacity-50 select-none">"</div>
      <h3 className="font-serif font-black text-2xl sm:text-4xl lg:text-5xl leading-snug mb-8 sm:mb-10 relative z-10">
        We don't just build companies. We build the <span className="font-khand text-[#ff5722] italic">infrastructure</span> for tomorrow's <span className="font-panchang">boldest dreamers.</span>
      </h3>
      <div className="flex items-center justify-center gap-4">
        <div className="w-12 h-1 bg-[#ff5722]"></div>
        <span className="font-panchang font-bold tracking-widest uppercase text-sm sm:text-base">Jane Doe, Founder</span>
        <div className="w-12 h-1 bg-[#ff5722]"></div>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] overflow-x-hidden">
      <TopBar />
      <Header />
      
      <Trending />
      <Hero />
      
      <FounderHero />
      <FeaturedStories />
      <PodcastCarousel />
      <LowerSection />
      
      <VisionQuote />
      <AboutStory />
      <StatsSection />
      <Timeline />
      <WhatsAppCommunities />
      
      <Footer />
    </div>
  )
}
