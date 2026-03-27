import { useState, useEffect } from "react";

// ─── DATA ───────────────────────────────────────────────────────────────────
const content = {
  en: {
    org: "Grameen Alo Foundation",
    tagline: "Lighting Every Village, Empowering Every Soul",
    nav: ["Home", "About", "Loan Program", "Villages", "Impact", "Team", "Contact"],
    hero: {
      title: "Empowering Rural Bangladesh",
      sub: "Microloan programs, skill development & community upliftment — village by village.",
      btn1: "Apply for Loan",
      btn2: "Our Mission",
    },
    stats: [
      { num: "42,000+", label: "Loans Disbursed" },
      { num: "320", label: "Villages Covered" },
      { num: "98.7%", label: "Repayment Rate" },
      { num: "৳ 18Cr+", label: "Total Disbursed" },
    ],
    about: {
      title: "Who We Are",
      body: "Grameen Alo Foundation is a non-profit organization working at the grassroots level across rural Bangladesh since 2005. We believe that financial inclusion is the foundation of sustainable development. Our field officers walk into every village to understand needs, build trust, and deliver solutions — not just loans.",
      mission: "Mission",
      missionText: "To eradicate rural poverty by providing accessible microloans, financial literacy, and livelihood support to underprivileged communities.",
      vision: "Vision",
      visionText: "A Bangladesh where every rural household has dignified income, education, and opportunity.",
    },
    loan: {
      title: "Loan Programs",
      sub: "Flexible, low-interest microloans designed for rural entrepreneurs and farmers.",
      types: [
        {
          name: "Krishi Loan",
          icon: "🌾",
          amount: "৳ 10,000 – ৳ 50,000",
          rate: "8% annually",
          tenure: "6 – 18 months",
          target: "Farmers & agricultural workers",
          features: ["No collateral required", "Doorstep service", "Grace period available"],
        },
        {
          name: "Byabsha Loan",
          icon: "🏪",
          amount: "৳ 20,000 – ৳ 1,00,000",
          rate: "10% annually",
          tenure: "12 – 36 months",
          target: "Small business owners",
          features: ["Business plan support", "Mentorship included", "Flexible repayment"],
        },
        {
          name: "Nari Unnayan Loan",
          icon: "👩",
          amount: "৳ 5,000 – ৳ 30,000",
          rate: "6% annually",
          tenure: "6 – 24 months",
          target: "Women entrepreneurs",
          features: ["Special low rate", "Skill training included", "Group lending option"],
        },
        {
          name: "Shikkha Loan",
          icon: "📚",
          amount: "৳ 10,000 – ৳ 80,000",
          rate: "5% annually",
          tenure: "Up to 60 months",
          target: "Students & families",
          features: ["Zero interest for merit", "Moratorium period", "Easy repayment"],
        },
      ],
      apply: "Apply Now",
      howTitle: "How to Apply",
      steps: [
        { step: "01", title: "Visit our village center or apply online" },
        { step: "02", title: "Submit NID, photo & basic documents" },
        { step: "03", title: "Field officer visits your home within 3 days" },
        { step: "04", title: "Loan approved & disbursed within 7 days" },
      ],
    },
    villages: {
      title: "Villages We Serve",
      sub: "Our field teams are active across 6 districts in Bangladesh.",
      list: [
        { district: "Khulna", villages: 68, beneficiaries: "8,200+", color: "#22c55e" },
        { district: "Barisal", villages: 54, beneficiaries: "6,100+", color: "#3b82f6" },
        { district: "Rajshahi", villages: 72, beneficiaries: "9,400+", color: "#f59e0b" },
        { district: "Rangpur", villages: 48, beneficiaries: "5,800+", color: "#ec4899" },
        { district: "Sylhet", villages: 41, beneficiaries: "4,700+", color: "#8b5cf6" },
        { district: "Mymensingh", villages: 37, beneficiaries: "3,900+", color: "#14b8a6" },
      ],
    },
    impact: {
      title: "Our Impact",
      sub: "Real stories, real change.",
      stories: [
        {
          name: "Rahela Begum",
          village: "Batiaghata, Khulna",
          img: "👩‍🌾",
          story: "With a ৳25,000 Nari Unnayan Loan, I started my own tailoring business. Today I earn ৳12,000/month and employ 3 other women.",
          loan: "Nari Unnayan Loan",
        },
        {
          name: "Karim Mia",
          village: "Char Fasson, Barisal",
          img: "👨‍🌾",
          story: "The Krishi Loan helped me buy a power tiller. My paddy yield doubled and I repaid the loan in 10 months.",
          loan: "Krishi Loan",
        },
        {
          name: "Sumaiya Khanam",
          village: "Godagari, Rajshahi",
          img: "👩‍💼",
          story: "My son got the Shikkha Loan for BUET admission. He is now an engineer and supports our entire family.",
          loan: "Shikkha Loan",
        },
      ],
    },
    team: {
      title: "Our Team",
      sub: "Dedicated people on the ground.",
      members: [
        { name: "Dr. Farida Yasmin", role: "Executive Director", emoji: "👩‍💼" },
        { name: "Md. Shahadat Hossain", role: "Field Operations Head", emoji: "👨‍💼" },
        { name: "Nasrin Akter", role: "Women Program Lead", emoji: "👩‍🏫" },
        { name: "Arif Billah", role: "Finance Manager", emoji: "👨‍💻" },
        { name: "Tahmina Begum", role: "Community Liaison", emoji: "👩‍🤝‍👨" },
        { name: "Sabbir Rahman", role: "IT & Digital Lead", emoji: "👨‍🔬" },
      ],
    },
    contact: {
      title: "Contact Us",
      sub: "We are always here to help you.",
      address: "House 12, Road 5, Sonadanga, Khulna-9100",
      phone: "+880 41-123456",
      email: "info@grameenalo.org",
      hours: "Sat–Thu: 9AM–5PM",
      form: { name: "Your Name", phone: "Phone Number", loan: "Loan Type", msg: "Message", btn: "Send Message" },
    },
    footer: {
      about: "Grameen Alo Foundation empowers rural communities through inclusive finance and grassroots development.",
      quick: "Quick Links",
      programs: "Programs",
      prog: ["Krishi Loan", "Byabsha Loan", "Nari Unnayan", "Shikkha Loan"],
      rights: "© 2024 Grameen Alo Foundation. All rights reserved.",
    },
  },
  bn: {
    org: "গ্রামীণ আলো ফাউন্ডেশন",
    tagline: "প্রতিটি গ্রামে আলো, প্রতিটি মানুষের ক্ষমতায়ন",
    nav: ["হোম", "আমাদের সম্পর্কে", "ঋণ কর্মসূচি", "গ্রামসমূহ", "প্রভাব", "দল", "যোগাযোগ"],
    hero: {
      title: "গ্রামীণ বাংলাদেশকে ক্ষমতায়িত করি",
      sub: "ক্ষুদ্রঋণ কর্মসূচি, দক্ষতা উন্নয়ন ও সমাজ উন্নয়ন — গ্রামে গ্রামে।",
      btn1: "ঋণের আবেদন করুন",
      btn2: "আমাদের লক্ষ্য",
    },
    stats: [
      { num: "৪২,০০০+", label: "বিতরণকৃত ঋণ" },
      { num: "৩২০", label: "আচ্ছাদিত গ্রাম" },
      { num: "৯৮.৭%", label: "পরিশোধের হার" },
      { num: "১৮ কোটি+", label: "মোট বিতরণ" },
    ],
    about: {
      title: "আমরা কারা",
      body: "গ্রামীণ আলো ফাউন্ডেশন ২০০৫ সাল থেকে বাংলাদেশের গ্রামীণ জনগোষ্ঠীর তৃণমূল পর্যায়ে কাজ করে আসছে। আমরা বিশ্বাস করি যে আর্থিক অন্তর্ভুক্তি টেকসই উন্নয়নের ভিত্তি। আমাদের মাঠকর্মীরা প্রতিটি গ্রামে গিয়ে মানুষের প্রয়োজন বোঝেন, আস্থা অর্জন করেন এবং সমাধান পৌঁছে দেন।",
      mission: "লক্ষ্য",
      missionText: "সুলভ ক্ষুদ্রঋণ, আর্থিক সাক্ষরতা এবং জীবিকা সহায়তার মাধ্যমে গ্রামীণ দারিদ্র্য দূর করা।",
      vision: "দৃষ্টিভঙ্গি",
      visionText: "এমন একটি বাংলাদেশ যেখানে প্রতিটি গ্রামীণ পরিবার সম্মানজনক আয়, শিক্ষা ও সুযোগ পাবে।",
    },
    loan: {
      title: "ঋণ কর্মসূচি",
      sub: "গ্রামীণ উদ্যোক্তা ও কৃষকদের জন্য নমনীয়, কম সুদের ক্ষুদ্রঋণ।",
      types: [
        {
          name: "কৃষি ঋণ",
          icon: "🌾",
          amount: "৳ ১০,০০০ – ৳ ৫০,০০০",
          rate: "৮% বার্ষিক",
          tenure: "৬ – ১৮ মাস",
          target: "কৃষক ও কৃষি শ্রমিক",
          features: ["জামানত ছাড়া", "বাড়িতে সেবা", "গ্রেস পিরিয়ড সুবিধা"],
        },
        {
          name: "ব্যবসা ঋণ",
          icon: "🏪",
          amount: "৳ ২০,০০০ – ৳ ১,০০,০০০",
          rate: "১০% বার্ষিক",
          tenure: "১২ – ৩৬ মাস",
          target: "ক্ষুদ্র ব্যবসায়ী",
          features: ["ব্যবসা পরিকল্পনা সহায়তা", "মেন্টরশিপ অন্তর্ভুক্ত", "নমনীয় পরিশোধ"],
        },
        {
          name: "নারী উন্নয়ন ঋণ",
          icon: "👩",
          amount: "৳ ৫,০০০ – ৳ ৩০,০০০",
          rate: "৬% বার্ষিক",
          tenure: "৬ – ২৪ মাস",
          target: "নারী উদ্যোক্তা",
          features: ["বিশেষ কম সুদ", "দক্ষতা প্রশিক্ষণ", "গ্রুপ ঋণ সুবিধা"],
        },
        {
          name: "শিক্ষা ঋণ",
          icon: "📚",
          amount: "৳ ১০,০০০ – ৳ ৮০,০০০",
          rate: "৫% বার্ষিক",
          tenure: "৬০ মাস পর্যন্ত",
          target: "শিক্ষার্থী ও পরিবার",
          features: ["মেধাবীদের শূন্য সুদ", "মোরাটোরিয়াম পিরিয়ড", "সহজ পরিশোধ"],
        },
      ],
      apply: "আবেদন করুন",
      howTitle: "কিভাবে আবেদন করবেন",
      steps: [
        { step: "০১", title: "আমাদের গ্রাম কেন্দ্রে যান বা অনলাইনে আবেদন করুন" },
        { step: "০২", title: "এনআইডি, ছবি ও প্রয়োজনীয় কাগজপত্র জমা দিন" },
        { step: "০৩", title: "মাঠকর্মী ৩ দিনের মধ্যে আপনার বাড়ি পরিদর্শন করবেন" },
        { step: "০৪", title: "৭ দিনের মধ্যে ঋণ অনুমোদন ও বিতরণ" },
      ],
    },
    villages: {
      title: "আমরা যেসব গ্রামে কাজ করি",
      sub: "আমাদের মাঠ দল বাংলাদেশের ৬টি জেলায় সক্রিয়।",
      list: [
        { district: "খুলনা", villages: 68, beneficiaries: "৮,২০০+", color: "#22c55e" },
        { district: "বরিশাল", villages: 54, beneficiaries: "৬,১০০+", color: "#3b82f6" },
        { district: "রাজশাহী", villages: 72, beneficiaries: "৯,৪০০+", color: "#f59e0b" },
        { district: "রংপুর", villages: 48, beneficiaries: "৫,৮০০+", color: "#ec4899" },
        { district: "সিলেট", villages: 41, beneficiaries: "৪,৭০০+", color: "#8b5cf6" },
        { district: "ময়মনসিংহ", villages: 37, beneficiaries: "৩,৯০০+", color: "#14b8a6" },
      ],
    },
    impact: {
      title: "আমাদের প্রভাব",
      sub: "সত্যিকারের গল্প, সত্যিকারের পরিবর্তন।",
      stories: [
        {
          name: "রাহেলা বেগম",
          village: "বটিয়াঘাটা, খুলনা",
          img: "👩‍🌾",
          story: "২৫,০০০ টাকার নারী উন্নয়ন ঋণ নিয়ে আমি নিজের সেলাই ব্যবসা শুরু করেছি। আজ মাসে ১২,০০০ টাকা আয় করি এবং আরও ৩ জন মহিলাকে কাজ দিয়েছি।",
          loan: "নারী উন্নয়ন ঋণ",
        },
        {
          name: "করিম মিয়া",
          village: "চর ফ্যাশন, বরিশাল",
          img: "👨‍🌾",
          story: "কৃষি ঋণে পাওয়ার টিলার কিনেছি। ধানের ফলন দ্বিগুণ হয়েছে এবং ১০ মাসেই ঋণ পরিশোধ করেছি।",
          loan: "কৃষি ঋণ",
        },
        {
          name: "সুমাইয়া খানম",
          village: "গোদাগাড়ী, রাজশাহী",
          img: "👩‍💼",
          story: "আমার ছেলে বুয়েটে ভর্তির জন্য শিক্ষা ঋণ পেয়েছে। সে এখন ইঞ্জিনিয়ার এবং পুরো পরিবার চালাচ্ছে।",
          loan: "শিক্ষা ঋণ",
        },
      ],
    },
    team: {
      title: "আমাদের দল",
      sub: "মাঠে নিবেদিত মানুষ।",
      members: [
        { name: "ড. ফরিদা ইয়াসমিন", role: "নির্বাহী পরিচালক", emoji: "👩‍💼" },
        { name: "মো. শাহাদাত হোসেন", role: "মাঠ কার্যক্রম প্রধান", emoji: "👨‍💼" },
        { name: "নাসরিন আক্তার", role: "নারী কর্মসূচি প্রধান", emoji: "👩‍🏫" },
        { name: "আরিফ বিল্লাহ", role: "অর্থ ব্যবস্থাপক", emoji: "👨‍💻" },
        { name: "তাহমিনা বেগম", role: "সামাজিক সংযোগকারী", emoji: "👩‍🤝‍👨" },
        { name: "সাব্বির রহমান", role: "আইটি ও ডিজিটাল প্রধান", emoji: "👨‍🔬" },
      ],
    },
    contact: {
      title: "যোগাযোগ করুন",
      sub: "আমরা সবসময় আপনাকে সাহায্য করতে প্রস্তুত।",
      address: "বাড়ি ১২, রোড ৫, সোনাডাঙ্গা, খুলনা-৯১০০",
      phone: "+৮৮০ ৪১-১২৩৪৫৬",
      email: "info@grameenalo.org",
      hours: "শনি–বৃহস্পতি: সকাল ৯টা–বিকেল ৫টা",
      form: { name: "আপনার নাম", phone: "ফোন নম্বর", loan: "ঋণের ধরন", msg: "বার্তা", btn: "বার্তা পাঠান" },
    },
    footer: {
      about: "গ্রামীণ আলো ফাউন্ডেশন অন্তর্ভুক্তিমূলক অর্থায়ন ও তৃণমূল উন্নয়নের মাধ্যমে গ্রামীণ সম্প্রদায়কে ক্ষমতায়িত করে।",
      quick: "দ্রুত লিঙ্ক",
      programs: "কর্মসূচি",
      prog: ["কৃষি ঋণ", "ব্যবসা ঋণ", "নারী উন্নয়ন", "শিক্ষা ঋণ"],
      rights: "© ২০২৪ গ্রামীণ আলো ফাউন্ডেশন। সর্বস্বত্ব সংরক্ষিত।",
    },
  },
};

// ─── PRELOADER ───────────────────────────────────────────────────────────────
function Preloader({ done }) {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "linear-gradient(135deg, #0f4c35 0%, #1a7a52 50%, #0d3b28 100%)",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      transition: "opacity 0.8s ease, transform 0.8s ease",
      opacity: done ? 0 : 1, pointerEvents: done ? "none" : "all",
      transform: done ? "translateY(-100%)" : "translateY(0)",
    }}>
      <div style={{ textAlign: "center" }}>
        <div style={{
          width: 80, height: 80, borderRadius: "50%",
          border: "3px solid rgba(255,255,255,0.2)",
          borderTop: "3px solid #f0c040",
          animation: "spin 1s linear infinite",
          margin: "0 auto 20px",
        }} />
        <div style={{ fontSize: 36, fontWeight: 900, color: "#f0c040", letterSpacing: 2, fontFamily: "'Georgia', serif" }}>
          গ্রামীণ আলো
        </div>
        <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, marginTop: 8, letterSpacing: 3 }}>
          GRAMEEN ALO FOUNDATION
        </div>
        <div style={{ marginTop: 30, display: "flex", gap: 8, justifyContent: "center" }}>
          {[0,1,2,3,4].map(i => (
            <div key={i} style={{
              width: 8, height: 8, borderRadius: "50%", background: "#f0c040",
              animation: `bounce 1.2s ease-in-out ${i * 0.15}s infinite`,
            }} />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes bounce { 0%,80%,100%{transform:scale(0);opacity:0.3} 40%{transform:scale(1);opacity:1} }
      `}</style>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState("bn");
  const [dark, setDark] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [activeNav, setActiveNav] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", loan: "", msg: "" });
  const [formSent, setFormSent] = useState(false);
  const t = content[lang];

  useEffect(() => {
    setTimeout(() => setLoaded(true), 2200);
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      setShowScroll(window.scrollY > 400);
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((s, i) => {
        const rect = s.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) setActiveNav(i);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const D = dark ? {
    bg: "#0a1628", card: "#111d35", nav: "rgba(10,22,40,0.95)",
    text: "#e8edf5", muted: "#8899bb", border: "rgba(255,255,255,0.08)",
    accent: "#f0c040", accent2: "#22c55e", surface: "#0d1f3c",
  } : {
    bg: "#f0f7f4", card: "#ffffff", nav: "rgba(240,247,244,0.95)",
    text: "#0d2b1e", muted: "#5a7a6a", border: "rgba(0,0,0,0.08)",
    accent: "#1a7a52", accent2: "#d97706", surface: "#e0f0e8",
  };

  const sectionIds = ["home","about","loans","villages","impact","team","contact"];

  return (
    <div style={{ background: D.bg, color: D.text, fontFamily: lang === "bn" ? "'Noto Serif Bengali', 'Kalpurush', Georgia, serif" : "'Playfair Display', Georgia, serif", minHeight: "100vh", transition: "background 0.4s, color 0.4s" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Noto+Serif+Bengali:wght@400;600;700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${D.bg}; }
        ::-webkit-scrollbar-thumb { background: ${D.accent}; border-radius: 3px; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes slideIn { from{opacity:0;transform:translateX(-30px)} to{opacity:1;transform:translateX(0)} }
        @keyframes countUp { from{transform:scale(0.5);opacity:0} to{transform:scale(1);opacity:1} }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,0,0,0.3)!important; }
        .btn-primary { transition: all 0.3s ease; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.3); }
        .nav-link { transition: color 0.2s; cursor: pointer; }
        .nav-link:hover { color: ${D.accent}!important; }
      `}</style>

      <Preloader done={loaded} />

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? D.nav : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${D.border}` : "none",
        transition: "all 0.4s ease",
        padding: scrolled ? "12px 0" : "20px 0",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={scrollTop}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: `linear-gradient(135deg, ${D.accent}, ${D.accent2})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, fontWeight: 900, color: dark ? "#0a1628" : "#fff",
              boxShadow: `0 4px 16px ${D.accent}55`,
            }}>আ</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, lineHeight: 1.2, color: D.accent }}>{t.org}</div>
              <div style={{ fontSize: 10, color: D.muted, letterSpacing: 1 }}>NGO · SINCE 2005</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="desktop-nav">
            {t.nav.map((item, i) => (
              <span key={i} className="nav-link" onClick={() => scrollTo(sectionIds[i])} style={{
                padding: "8px 14px", fontSize: 13, fontWeight: 600,
                color: activeNav === i ? D.accent : D.text, borderRadius: 8,
                background: activeNav === i ? `${D.accent}18` : "transparent",
              }}>{item}</span>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {/* Lang Toggle */}
            <button onClick={() => setLang(l => l === "en" ? "bn" : "en")} style={{
              background: `${D.accent}22`, border: `1px solid ${D.accent}44`,
              color: D.accent, padding: "7px 14px", borderRadius: 20,
              cursor: "pointer", fontSize: 13, fontWeight: 700,
              transition: "all 0.2s",
            }}>
              {lang === "en" ? "বাংলা" : "English"}
            </button>
            {/* Dark Toggle */}
            <button onClick={() => setDark(d => !d)} style={{
              background: D.surface, border: `1px solid ${D.border}`,
              color: D.text, width: 38, height: 38, borderRadius: "50%",
              cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
            }}>
              {dark ? "☀️" : "🌙"}
            </button>
            {/* Hamburger */}
            <button onClick={() => setMenuOpen(m => !m)} style={{
              background: "none", border: `1px solid ${D.border}`,
              color: D.text, width: 38, height: 38, borderRadius: 8,
              cursor: "pointer", fontSize: 18, display: "none",
            }} className="hamburger">☰</button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{
            background: D.card, borderTop: `1px solid ${D.border}`,
            padding: 16,
          }}>
            {t.nav.map((item, i) => (
              <div key={i} onClick={() => scrollTo(sectionIds[i])} style={{
                padding: "12px 16px", cursor: "pointer", borderRadius: 8,
                color: D.text, fontSize: 15, fontWeight: 600,
                background: activeNav === i ? `${D.accent}18` : "transparent",
                marginBottom: 4,
              }}>{item}</div>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        background: dark
          ? "linear-gradient(135deg, #050e1f 0%, #0a2040 40%, #0d3b28 100%)"
          : "linear-gradient(135deg, #e8f5ee 0%, #d0eedd 40%, #c8e8f8 100%)",
        position: "relative", overflow: "hidden",
        paddingTop: 80,
      }}>
        {/* BG decorations */}
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            width: [300,200,400,150,250,180][i],
            height: [300,200,400,150,250,180][i],
            borderRadius: "50%",
            background: [D.accent, D.accent2, D.accent, D.accent2, D.accent, D.accent2][i],
            opacity: [0.03,0.04,0.02,0.05,0.03,0.04][i],
            top: [`10%`,`70%`,`40%`,`20%`,`60%`,`80%`][i],
            left: [`5%`,`80%`,`60%`,`40%`,`20%`,`50%`][i],
            animation: `float ${3+i*0.5}s ease-in-out infinite`,
            filter: "blur(40px)",
          }} />
        ))}

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div style={{ animation: "fadeUp 1s ease 0.3s both" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: `${D.accent}20`, border: `1px solid ${D.accent}40`,
                padding: "8px 16px", borderRadius: 20, marginBottom: 24,
              }}>
                <span style={{ fontSize: 16 }}>🌿</span>
                <span style={{ color: D.accent, fontSize: 13, fontWeight: 700, letterSpacing: 1 }}>
                  {lang === "bn" ? "তৃণমূল উন্নয়ন সংস্থা" : "GRASSROOTS DEVELOPMENT NGO"}
                </span>
              </div>
              <h1 style={{
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 900, lineHeight: 1.2,
                marginBottom: 20, color: D.text,
              }}>
                {t.hero.title.split(" ").map((w, i) => (
                  <span key={i} style={{ color: i === 0 || i === 1 ? D.accent : D.text }}>{w} </span>
                ))}
              </h1>
              <p style={{ fontSize: 17, color: D.muted, lineHeight: 1.8, marginBottom: 36, maxWidth: 480 }}>
                {t.hero.sub}
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <button className="btn-primary" onClick={() => scrollTo("loans")} style={{
                  background: `linear-gradient(135deg, ${D.accent}, ${D.accent2})`,
                  color: dark ? "#0a1628" : "#fff", border: "none",
                  padding: "16px 32px", borderRadius: 50, fontSize: 15, fontWeight: 700,
                  cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
                }}>
                  💰 {t.hero.btn1}
                </button>
                <button className="btn-primary" onClick={() => scrollTo("about")} style={{
                  background: "transparent", color: D.text,
                  border: `2px solid ${D.border}`, padding: "16px 32px",
                  borderRadius: 50, fontSize: 15, fontWeight: 700, cursor: "pointer",
                }}>
                  {t.hero.btn2} →
                </button>
              </div>

              {/* Trust badges */}
              <div style={{ display: "flex", gap: 16, marginTop: 48, flexWrap: "wrap" }}>
                {["🏛️ Govt. Registered", "✅ NGO Bureau Certified", "🌟 Award Winning"].map((b, i) => (
                  <div key={i} style={{
                    background: `${D.accent}15`, border: `1px solid ${D.accent}30`,
                    padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600,
                    color: D.accent,
                  }}>{b}</div>
                ))}
              </div>
            </div>

            {/* Hero visual */}
            <div style={{ animation: "float 4s ease-in-out infinite", textAlign: "center" }}>
              <div style={{
                background: dark
                  ? "linear-gradient(135deg, #0d3b2833 0%, #1a7a5233 100%)"
                  : "linear-gradient(135deg, #c8f0d8 0%, #e8f8ef 100%)",
                border: `1px solid ${D.border}`,
                borderRadius: 32, padding: 40,
                backdropFilter: "blur(10px)",
              }}>
                <div style={{ fontSize: 100, textAlign: "center", marginBottom: 24 }}>🏘️</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {t.stats.map((s, i) => (
                    <div key={i} style={{
                      background: D.card, borderRadius: 16, padding: 20,
                      border: `1px solid ${D.border}`, textAlign: "center",
                      animation: `countUp 0.6s ease ${i*0.1+0.5}s both`,
                    }}>
                      <div style={{ fontSize: 22, fontWeight: 900, color: D.accent }}>{s.num}</div>
                      <div style={{ fontSize: 12, color: D.muted, marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <svg style={{ position: "absolute", bottom: -2, left: 0, width: "100%" }} viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill={D.bg} />
        </svg>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "100px 24px", background: D.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader title={t.about.title} dark={dark} D={D} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", marginTop: 60 }}>
            <div>
              <p style={{ fontSize: 17, color: D.muted, lineHeight: 2, marginBottom: 40 }}>{t.about.body}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {[
                  { icon: "🎯", title: t.about.mission, text: t.about.missionText },
                  { icon: "🔭", title: t.about.vision, text: t.about.visionText },
                ].map((c, i) => (
                  <div key={i} className="card-hover" style={{
                    background: D.card, border: `1px solid ${D.border}`,
                    borderRadius: 20, padding: 24,
                    borderLeft: `4px solid ${D.accent}`,
                  }}>
                    <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
                    <div style={{ fontWeight: 800, marginBottom: 8, color: D.accent, fontSize: 16 }}>{c.title}</div>
                    <div style={{ color: D.muted, fontSize: 14, lineHeight: 1.7 }}>{c.text}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {t.stats.map((s, i) => (
                <div key={i} className="card-hover" style={{
                  background: D.card, border: `1px solid ${D.border}`,
                  borderRadius: 24, padding: 32, textAlign: "center",
                  background: i % 2 === 0
                    ? `linear-gradient(135deg, ${D.accent}22, ${D.accent}08)`
                    : `linear-gradient(135deg, ${D.accent2}22, ${D.accent2}08)`,
                }}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: i % 2 === 0 ? D.accent : D.accent2 }}>{s.num}</div>
                  <div style={{ color: D.muted, fontSize: 13, marginTop: 6 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LOAN PROGRAMS ── */}
      <section id="loans" style={{ padding: "100px 24px", background: D.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader title={t.loan.title} sub={t.loan.sub} dark={dark} D={D} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginTop: 60 }}>
            {t.loan.types.map((loan, i) => (
              <div key={i} className="card-hover" style={{
                background: D.card, border: `1px solid ${D.border}`,
                borderRadius: 24, padding: 28, position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: -20, right: -20, width: 80, height: 80,
                  borderRadius: "50%", background: `${D.accent}15`,
                }} />
                <div style={{ fontSize: 40, marginBottom: 16 }}>{loan.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8, color: D.text }}>{loan.name}</h3>
                <div style={{ color: D.muted, fontSize: 13, marginBottom: 20 }}>{loan.target}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                  <InfoRow icon="💰" label={lang === "bn" ? "পরিমাণ" : "Amount"} value={loan.amount} D={D} />
                  <InfoRow icon="📊" label={lang === "bn" ? "সুদ" : "Rate"} value={loan.rate} D={D} />
                  <InfoRow icon="⏱️" label={lang === "bn" ? "মেয়াদ" : "Tenure"} value={loan.tenure} D={D} />
                </div>
                <div style={{ marginBottom: 24 }}>
                  {loan.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, fontSize: 13, color: D.muted }}>
                      <span style={{ color: D.accent, fontWeight: 900 }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                <button className="btn-primary" onClick={() => scrollTo("contact")} style={{
                  width: "100%", background: `linear-gradient(135deg, ${D.accent}, ${D.accent2})`,
                  color: dark ? "#0a1628" : "#fff", border: "none",
                  padding: "12px", borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: "pointer",
                }}>
                  {t.loan.apply} →
                </button>
              </div>
            ))}
          </div>

          {/* How to Apply */}
          <div style={{ marginTop: 80 }}>
            <h3 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 48, color: D.text }}>{t.loan.howTitle}</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, position: "relative" }}>
              <div style={{
                position: "absolute", top: "30%", left: "12.5%", right: "12.5%",
                height: 2, background: `linear-gradient(90deg, ${D.accent}, ${D.accent2})`,
                zIndex: 0,
              }} />
              {t.loan.steps.map((s, i) => (
                <div key={i} style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                  <div style={{
                    width: 60, height: 60, borderRadius: "50%",
                    background: `linear-gradient(135deg, ${D.accent}, ${D.accent2})`,
                    color: dark ? "#0a1628" : "#fff", fontSize: 20, fontWeight: 900,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 16px", boxShadow: `0 8px 24px ${D.accent}44`,
                  }}>{s.step}</div>
                  <p style={{ color: D.muted, fontSize: 14, lineHeight: 1.6 }}>{s.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VILLAGES ── */}
      <section id="villages" style={{ padding: "100px 24px", background: D.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader title={t.villages.title} sub={t.villages.sub} dark={dark} D={D} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 60 }}>
            {t.villages.list.map((v, i) => (
              <div key={i} className="card-hover" style={{
                background: D.card, border: `1px solid ${D.border}`,
                borderRadius: 24, padding: 28, overflow: "hidden", position: "relative",
              }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 4,
                  background: v.color,
                }} />
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 16,
                    background: `${v.color}22`, fontSize: 24,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>🗺️</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 20, color: D.text }}>{v.district}</div>
                    <div style={{ color: D.muted, fontSize: 13 }}>{lang === "bn" ? "জেলা" : "District"}</div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div style={{ background: `${v.color}15`, borderRadius: 12, padding: 16, textAlign: "center" }}>
                    <div style={{ fontSize: 22, fontWeight: 900, color: v.color }}>{v.villages}</div>
                    <div style={{ fontSize: 12, color: D.muted, marginTop: 4 }}>{lang === "bn" ? "গ্রাম" : "Villages"}</div>
                  </div>
                  <div style={{ background: `${v.color}15`, borderRadius: 12, padding: 16, textAlign: "center" }}>
                    <div style={{ fontSize: 22, fontWeight: 900, color: v.color }}>{v.beneficiaries}</div>
                    <div style={{ fontSize: 12, color: D.muted, marginTop: 4 }}>{lang === "bn" ? "সুবিধাভোগী" : "Beneficiaries"}</div>
                  </div>
                </div>
                {/* Mini progress bar */}
                <div style={{ marginTop: 20 }}>
                  <div style={{ background: `${D.border}`, borderRadius: 4, height: 6, overflow: "hidden" }}>
                    <div style={{
                      width: `${(v.villages / 80) * 100}%`, height: "100%",
                      background: `linear-gradient(90deg, ${v.color}, ${v.color}88)`,
                      borderRadius: 4, transition: "width 1s ease",
                    }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT / STORIES ── */}
      <section id="impact" style={{ padding: "100px 24px", background: D.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader title={t.impact.title} sub={t.impact.sub} dark={dark} D={D} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, marginTop: 60 }}>
            {t.impact.stories.map((s, i) => (
              <div key={i} className="card-hover" style={{
                background: D.card, border: `1px solid ${D.border}`,
                borderRadius: 28, padding: 32, position: "relative",
              }}>
                <div style={{
                  fontSize: 60, position: "absolute", top: -5, right: 20,
                  opacity: 0.1, fontFamily: "Georgia",
                }}>"</div>
                <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 20 }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: "50%",
                    background: `linear-gradient(135deg, ${D.accent}33, ${D.accent2}33)`,
                    fontSize: 36, display: "flex", alignItems: "center", justifyContent: "center",
                    border: `2px solid ${D.accent}44`,
                  }}>{s.img}</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 17, color: D.text }}>{s.name}</div>
                    <div style={{ color: D.muted, fontSize: 13 }}>📍 {s.village}</div>
                  </div>
                </div>
                <p style={{ color: D.muted, lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>"{s.story}"</p>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: `${D.accent}18`, border: `1px solid ${D.accent}30`,
                  padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700, color: D.accent,
                }}>
                  💰 {s.loan}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" style={{ padding: "100px 24px", background: D.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader title={t.team.title} sub={t.team.sub} dark={dark} D={D} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 24, marginTop: 60 }}>
            {t.team.members.map((m, i) => (
              <div key={i} className="card-hover" style={{
                background: D.card, border: `1px solid ${D.border}`,
                borderRadius: 24, padding: 28, textAlign: "center",
              }}>
                <div style={{
                  width: 80, height: 80, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${D.accent}22, ${D.accent2}22)`,
                  fontSize: 40, display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 16px", border: `2px solid ${D.accent}33`,
                }}>{m.emoji}</div>
                <div style={{ fontWeight: 800, fontSize: 15, color: D.text, marginBottom: 6 }}>{m.name}</div>
                <div style={{ color: D.accent, fontSize: 12, fontWeight: 600 }}>{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "100px 24px", background: D.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader title={t.contact.title} sub={t.contact.sub} dark={dark} D={D} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 60, marginTop: 60 }}>
            {/* Info */}
            <div>
              {[
                { icon: "📍", label: lang === "bn" ? "ঠিকানা" : "Address", value: t.contact.address },
                { icon: "📞", label: lang === "bn" ? "ফোন" : "Phone", value: t.contact.phone },
                { icon: "✉️", label: lang === "bn" ? "ইমেইল" : "Email", value: t.contact.email },
                { icon: "🕐", label: lang === "bn" ? "সময়" : "Hours", value: t.contact.hours },
              ].map((c, i) => (
                <div key={i} style={{
                  display: "flex", gap: 20, alignItems: "flex-start",
                  padding: "20px 0", borderBottom: `1px solid ${D.border}`,
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: `${D.accent}20`, fontSize: 22,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>{c.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: D.accent, marginBottom: 4 }}>{c.label}</div>
                    <div style={{ color: D.muted, fontSize: 15 }}>{c.value}</div>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: 32, padding: 24, background: `linear-gradient(135deg, ${D.accent}18, ${D.accent2}10)`, borderRadius: 20, border: `1px solid ${D.accent}30` }}>
                <div style={{ fontWeight: 800, fontSize: 16, color: D.accent, marginBottom: 12 }}>
                  {lang === "bn" ? "🌿 আমাদের সাথে যোগ দিন" : "🌿 Join Us"}
                </div>
                <div style={{ color: D.muted, fontSize: 14, lineHeight: 1.7 }}>
                  {lang === "bn" ? "স্বেচ্ছাসেবক, দাতা বা অংশীদার হিসেবে আমাদের মিশনে অংশ নিন।" : "Join our mission as a volunteer, donor, or partner."}
                </div>
              </div>
            </div>

            {/* Form */}
            <div style={{ background: D.card, borderRadius: 28, padding: 40, border: `1px solid ${D.border}` }}>
              {formSent ? (
                <div style={{ textAlign: "center", padding: 40 }}>
                  <div style={{ fontSize: 64, marginBottom: 20 }}>✅</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: D.accent, marginBottom: 12 }}>
                    {lang === "bn" ? "বার্তা পাঠানো হয়েছে!" : "Message Sent!"}
                  </div>
                  <div style={{ color: D.muted }}>{lang === "bn" ? "আমরা শীঘ্রই যোগাযোগ করব।" : "We'll get back to you soon."}</div>
                  <button onClick={() => setFormSent(false)} style={{
                    marginTop: 24, background: `${D.accent}22`, color: D.accent,
                    border: `1px solid ${D.accent}44`, padding: "10px 24px",
                    borderRadius: 20, cursor: "pointer", fontWeight: 700,
                  }}>{lang === "bn" ? "আবার পাঠান" : "Send Another"}</button>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    { key: "name", label: t.contact.form.name, type: "text" },
                    { key: "phone", label: t.contact.form.phone, type: "tel" },
                    { key: "loan", label: t.contact.form.loan, type: "text" },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ display: "block", color: D.muted, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{f.label}</label>
                      <input type={f.type} value={formData[f.key]}
                        onChange={e => setFormData(d => ({ ...d, [f.key]: e.target.value }))}
                        style={{
                          width: "100%", background: D.surface, border: `1px solid ${D.border}`,
                          color: D.text, padding: "14px 18px", borderRadius: 12, fontSize: 15,
                          outline: "none", fontFamily: "inherit",
                        }} />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: "block", color: D.muted, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{t.contact.form.msg}</label>
                    <textarea value={formData.msg}
                      onChange={e => setFormData(d => ({ ...d, msg: e.target.value }))}
                      rows={4} style={{
                        width: "100%", background: D.surface, border: `1px solid ${D.border}`,
                        color: D.text, padding: "14px 18px", borderRadius: 12, fontSize: 15,
                        outline: "none", resize: "vertical", fontFamily: "inherit",
                      }} />
                  </div>
                  <button className="btn-primary" onClick={() => { if (formData.name) setFormSent(true); }} style={{
                    background: `linear-gradient(135deg, ${D.accent}, ${D.accent2})`,
                    color: dark ? "#0a1628" : "#fff", border: "none",
                    padding: "16px", borderRadius: 14, fontSize: 16, fontWeight: 800,
                    cursor: "pointer",
                  }}>
                    📤 {t.contact.form.btn}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: dark ? "#060e1e" : "#0f4c35",
        padding: "60px 24px 30px", color: "rgba(255,255,255,0.7)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 900, color: "#f0c040", marginBottom: 16 }}>{t.org}</div>
              <p style={{ fontSize: 14, lineHeight: 1.8, maxWidth: 280, marginBottom: 24 }}>{t.footer.about}</p>
              <div style={{ display: "flex", gap: 12 }}>
                {["📘","🐦","📸","▶️"].map((s, i) => (
                  <div key={i} style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: "rgba(255,255,255,0.1)", display: "flex",
                    alignItems: "center", justifyContent: "center", cursor: "pointer",
                    fontSize: 16, transition: "background 0.2s",
                  }}>{s}</div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ color: "#f0c040", fontWeight: 800, marginBottom: 20, fontSize: 15 }}>{t.footer.quick}</div>
              {t.nav.slice(0, 5).map((n, i) => (
                <div key={i} onClick={() => scrollTo(sectionIds[i])} style={{
                  marginBottom: 12, cursor: "pointer", fontSize: 14,
                  transition: "color 0.2s",
                }} onMouseEnter={e => e.target.style.color = "#f0c040"} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.7)"}>{n}</div>
              ))}
            </div>
            <div>
              <div style={{ color: "#f0c040", fontWeight: 800, marginBottom: 20, fontSize: 15 }}>{t.footer.programs}</div>
              {t.footer.prog.map((p, i) => (
                <div key={i} style={{ marginBottom: 12, fontSize: 14 }}>{p}</div>
              ))}
            </div>
            <div>
              <div style={{ color: "#f0c040", fontWeight: 800, marginBottom: 20, fontSize: 15 }}>
                {lang === "bn" ? "যোগাযোগ" : "Contact"}
              </div>
              <div style={{ fontSize: 14, marginBottom: 10 }}>📍 {t.contact.address}</div>
              <div style={{ fontSize: 14, marginBottom: 10 }}>📞 {t.contact.phone}</div>
              <div style={{ fontSize: 14 }}>✉️ {t.contact.email}</div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div style={{ fontSize: 13 }}>{t.footer.rights}</div>
            <div style={{ fontSize: 13 }}>
              {lang === "bn" ? "ভালোবাসা দিয়ে তৈরি 🌿 গ্রামীণ বাংলাদেশের জন্য" : "Made with 🌿 for rural Bangladesh"}
            </div>
          </div>
        </div>
      </footer>

      {/* ── SCROLL TO TOP ── */}
      <button onClick={scrollTop} style={{
        position: "fixed", bottom: 32, right: 32, zIndex: 999,
        width: 52, height: 52, borderRadius: "50%",
        background: `linear-gradient(135deg, ${D.accent}, ${D.accent2})`,
        border: "none", color: dark ? "#0a1628" : "#fff",
        fontSize: 22, cursor: "pointer",
        boxShadow: `0 8px 30px ${D.accent}55`,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        opacity: showScroll ? 1 : 0,
        transform: showScroll ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)",
        pointerEvents: showScroll ? "all" : "none",
      }}>↑</button>

      {/* ── RESPONSIVE ── */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none!important; }
          .hamburger { display: flex!important; justify-content: center;
        align-items: center; }
        }
        @media (max-width: 768px) {
          [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr!important; }
          [style*="grid-template-columns: 2fr 1fr 1fr 1fr"] { grid-template-columns: 1fr 1fr!important; }
          [style*="grid-template-columns: 1fr 1.2fr"] { grid-template-columns: 1fr!important; }
          [style*="grid-template-columns: repeat(4, 1fr)"] { grid-template-columns: 1fr 1fr!important; }
        }
      `}</style>
    </div>
  );
}

// ─── HELPERS ────────────────────────────────────────────────────────────────
function SectionHeader({ title, sub, D }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 900, color: D.text, marginBottom: sub ? 16 : 0 }}>
        {title.split("").map((c, i) => (
          <span key={i} style={{ borderBottom: i < 3 ? `3px solid ${D.accent}` : "none" }}>{c}</span>
        ))}
      </h2>
      {sub && <p style={{ color: D.muted, fontSize: 17, maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>{sub}</p>}
    </div>
  );
}

function InfoRow({ icon, label, value, D }) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
      <span style={{ fontSize: 14 }}>{icon}</span>
      <span style={{ color: D.muted, fontSize: 12, minWidth: 50 }}>{label}:</span>
      <span style={{ color: D.text, fontSize: 13, fontWeight: 700 }}>{value}</span>
    </div>
  );
}
