import { useState, useEffect } from 'react';
import { Sun, Clock, Compass, ShieldAlert, Sparkles } from 'lucide-react';

const PanchangWidget = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const daysOfWeek = ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'];

  const formattedDate = currentDate.toLocaleDateString('hi-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const panchangData = {
    day: daysOfWeek[currentDate.getDay()],
    tithi: "शुक्ल पक्ष एकादशी / द्वादशी",
    nakshatra: "रोहिणी / मृगशिरा",
    yoga: "वृद्धि / ध्रुव योग",
    karan: "बव / बालव",
    suryaUday: "06:12 AM",
    suryaAst: "06:38 PM",
    abhijitMuhurat: "11:45 AM - 12:35 PM (अति शुभ)",
    rahuKaal: "04:30 PM - 06:00 PM (अशुभ समय)",
    directionShool: "पश्चिम दिशा (शूल निवारण: घी खाकर यात्रा करें)"
  };

  return (
    <section className="py-12 bg-gradient-to-b from-orange-50/60 to-cream/80 dark:from-darkbg dark:to-darkcard/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-darkcard rounded-2xl shadow-xl border-2 border-gold/40 overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-maroon via-red-900 to-maroon px-6 py-5 text-white flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center md:text-left">
              <span className="text-3xl">🪔</span>
              <div>
                <h3 className="text-2xl font-bold font-hindi text-gold">आज का पंचांग एवं शुभ मुहूर्त</h3>
                <p className="text-xs text-cream/80 font-sans">वैदिक गणित एवं खगोलीय गणना पर आधारित</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-gold/30 text-sm font-semibold text-cream">
              📅 {formattedDate} | {panchangData.day}
            </div>
          </div>

          {/* Grid of info */}
          <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Tithi & Day */}
            <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-darkbg/70 border border-gold/20 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-saffron/20 text-maroon dark:text-saffron flex items-center justify-center mb-2">
                <Sun size={20} />
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">वार एवं तिथि</span>
              <h4 className="font-bold text-gray-800 dark:text-gray-100 mt-1">{panchangData.day}</h4>
              <p className="text-xs text-saffron font-medium">{panchangData.tithi}</p>
            </div>

            {/* Nakshatra & Yoga */}
            <div className="p-4 rounded-xl bg-orange-50/70 dark:bg-darkbg/70 border border-gold/20 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-saffron/20 text-maroon dark:text-saffron flex items-center justify-center mb-2">
                <Sparkles size={20} />
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">नक्षत्र एवं योग</span>
              <h4 className="font-bold text-gray-800 dark:text-gray-100 mt-1">{panchangData.nakshatra}</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">{panchangData.yoga}</p>
            </div>

            {/* Abhijit Muhurat */}
            <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-300/40 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2">
                <Clock size={20} />
              </div>
              <span className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold">अभिजित मुहूर्त (शुभ)</span>
              <h4 className="font-bold text-emerald-800 dark:text-emerald-300 mt-1 text-sm md:text-base">{panchangData.abhijitMuhurat}</h4>
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1">सभी शुभ कार्यों हेतु उत्तम</p>
            </div>

            {/* Rahu Kaal */}
            <div className="p-4 rounded-xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-300/40 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-2">
                <ShieldAlert size={20} />
              </div>
              <span className="text-xs text-rose-700 dark:text-rose-400 font-semibold">राहुकाल (त्याज्य)</span>
              <h4 className="font-bold text-rose-800 dark:text-rose-300 mt-1 text-sm md:text-base">{panchangData.rahuKaal}</h4>
              <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1">शुभ कार्य वर्जित</p>
            </div>

          </div>

          {/* Quick Guidance Strip */}
          <div className="px-6 py-3 bg-gold/10 dark:bg-gold/5 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between text-xs md:text-sm text-gray-700 dark:text-gray-300 gap-2">
            <div className="flex items-center gap-2">
              <Compass size={16} className="text-saffron" />
              <span><strong>दिशा शूल:</strong> {panchangData.directionShool}</span>
            </div>
            <div className="flex items-center gap-2 text-maroon dark:text-saffron font-semibold">
              <span>विशेष अनुष्ठान या गृहप्रवेश मुहूर्त हेतु आचार्य जी से परामर्श लें</span>
              <a href="/contact" className="underline hover:text-gold transition">यहाँ क्लिक करें →</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PanchangWidget;
