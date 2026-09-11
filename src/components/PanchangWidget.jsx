import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Sun,
  Moon,
  Clock,
  Compass,
  ShieldAlert,
  Sparkles,
  Calendar,
  MapPin,
  RotateCw,
  ExternalLink,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  PRESET_CITIES,
  getLivePanchang,
  calculateLocalPanchang,
  isTimeWithin
} from '../services/panchangService';

const PanchangWidget = () => {
  const [selectedCity, setSelectedCity] = useState(PRESET_CITIES[0]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [panchangData, setPanchangData] = useState(() => calculateLocalPanchang(new Date(), PRESET_CITIES[0]));
  const [isLoading, setIsLoading] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState(new Date());

  // Update live clock every 60 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);

      // If viewing today, check if day rolled over
      if (selectedDate.toDateString() === now.toDateString()) {
        if (selectedDate.getDate() !== now.getDate()) {
          setSelectedDate(now);
        }
      }
    }, 60000);
    return () => clearInterval(timer);
  }, [selectedDate]);

  // Load Panchang data whenever date or city changes
  const loadPanchang = useCallback(async (date, city) => {
    setIsLoading(true);
    try {
      // First instant local high-precision calculation
      const initial = calculateLocalPanchang(date, city);
      setPanchangData(initial);

      // Attempt live server verification / enrichment if online
      const live = await getLivePanchang(date, city);
      setPanchangData(live);
      setLastRefreshed(new Date());
    } catch (err) {
      console.error('Error loading panchang:', err);
      setPanchangData(calculateLocalPanchang(date, city));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPanchang(selectedDate, selectedCity);
  }, [selectedDate, selectedCity, loadPanchang]);

  // Check whether viewing today
  const isViewingToday = useMemo(() => {
    return selectedDate.toDateString() === currentTime.toDateString();
  }, [selectedDate, currentTime]);

  // Check active muhurats right now
  const isRahuActive = useMemo(() => {
    if (!isViewingToday || !panchangData?.rahuKaalRaw) return false;
    return isTimeWithin(currentTime, panchangData.rahuKaalRaw.start, panchangData.rahuKaalRaw.end);
  }, [isViewingToday, currentTime, panchangData]);

  const isAbhijitActive = useMemo(() => {
    if (!isViewingToday || !panchangData?.abhijitRaw) return false;
    return isTimeWithin(currentTime, panchangData.abhijitRaw.start, panchangData.abhijitRaw.end);
  }, [isViewingToday, currentTime, panchangData]);

  // Formatted date string in Hindi
  const formattedDate = useMemo(() => {
    return selectedDate.toLocaleDateString('hi-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }, [selectedDate]);

  // Handle Date quick buttons
  const handleSetToday = () => setSelectedDate(new Date());
  const handleSetTomorrow = () => {
    const tmrw = new Date();
    tmrw.setDate(tmrw.getDate() + 1);
    setSelectedDate(tmrw);
  };

  const handleCustomDateChange = (e) => {
    if (e.target.value) {
      const [y, m, d] = e.target.value.split('-').map(Number);
      setSelectedDate(new Date(y, m - 1, d, 6, 0, 0));
    }
  };

  const dateInputValue = useMemo(() => {
    const y = selectedDate.getFullYear();
    const m = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const d = String(selectedDate.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }, [selectedDate]);

  // Handle GPS location
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert('आपके डिवाइस में लोकेशन सुविधा उपलब्ध नहीं है।');
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const custom = {
          id: 'my-location',
          name: `मेरा स्थान (${pos.coords.latitude.toFixed(2)}°N, ${pos.coords.longitude.toFixed(2)}°E)`,
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
          alt: 200
        };
        setSelectedCity(custom);
        setIsLocating(false);
      },
      () => {
        alert('स्थान की अनुमति नहीं मिली। कृपया सूची में से कोई निकटतम शहर चुनें।');
        setIsLocating(false);
      },
      { timeout: 8000 }
    );
  };

  return (
    <section id="panchang" className="py-12 bg-gradient-to-b from-orange-50/60 to-cream/80 dark:from-darkbg dark:to-darkcard/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-darkcard rounded-2xl shadow-2xl border-2 border-gold/40 overflow-hidden">
          
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-maroon via-red-900 to-maroon px-6 py-5 text-white flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center lg:text-left">
              <span className="text-3xl animate-pulse">🪔</span>
              <div>
                <div className="flex items-center gap-2 flex-wrap justify-center lg:justify-start">
                  <h3 className="text-2xl md:text-3xl font-bold font-hindi text-gold">
                    आज का पंचांग एवं शुभ मुहूर्त
                  </h3>
                  <span className="inline-flex items-center gap-1 bg-emerald-600/30 text-emerald-300 text-xs px-2.5 py-0.5 rounded-full border border-emerald-400/40">
                    <CheckCircle2 size={12} />
                    दृक पंचांग प्रमाणित
                  </span>
                </div>
                <p className="text-xs md:text-sm text-cream/80 font-sans mt-0.5">
                  वैदिक गणित एवं खगोलीय गणना पर आधारित (लाहिरी अयनांश)
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-gold/30 text-xs md:text-sm font-semibold text-cream flex items-center gap-2">
                <Calendar size={15} className="text-gold" />
                <span>{formattedDate} | {panchangData.day}</span>
              </div>
              <button
                onClick={() => loadPanchang(selectedDate, selectedCity)}
                title="रिफ्रेश करें"
                disabled={isLoading}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-gold/30 text-gold transition disabled:opacity-50"
              >
                <RotateCw size={15} className={isLoading ? 'animate-spin' : ''} />
              </button>
            </div>
          </div>

          {/* Interactive Controls Bar: City & Date selectors */}
          <div className="bg-amber-50/90 dark:bg-darkbg/90 px-6 py-3 border-b border-gold/30 flex flex-wrap items-center justify-between gap-3 text-sm">
            
            {/* City Selector */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-gray-600 dark:text-gray-300 font-medium flex items-center gap-1 text-xs md:text-sm">
                <MapPin size={15} className="text-saffron" />
                स्थान (City):
              </span>
              <select
                value={selectedCity.id}
                onChange={(e) => {
                  const city = PRESET_CITIES.find(c => c.id === e.target.value) || PRESET_CITIES[0];
                  setSelectedCity(city);
                }}
                className="bg-white dark:bg-darkcard text-gray-800 dark:text-gray-100 px-3 py-1.5 rounded-lg border border-gold/40 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              >
                {PRESET_CITIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              <button
                onClick={handleGetLocation}
                disabled={isLocating}
                className="text-xs text-maroon dark:text-saffron underline hover:text-gold transition font-medium flex items-center gap-1"
                title="वर्तमान GPS स्थान से गणना करें"
              >
                {isLocating ? 'स्थान खोज रहे हैं...' : '📍 मेरा स्थान (GPS)'}
              </button>
            </div>

            {/* Date Switcher */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={handleSetToday}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition ${
                  isViewingToday
                    ? 'bg-saffron text-maroon shadow-sm'
                    : 'bg-white dark:bg-darkcard text-gray-700 dark:text-gray-300 border border-gold/30 hover:bg-gold/10'
                }`}
              >
                आज (Today)
              </button>
              <button
                onClick={handleSetTomorrow}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition ${
                  !isViewingToday && selectedDate.getDate() === new Date(Date.now() + 86400000).getDate()
                    ? 'bg-saffron text-maroon shadow-sm'
                    : 'bg-white dark:bg-darkcard text-gray-700 dark:text-gray-300 border border-gold/30 hover:bg-gold/10'
                }`}
              >
                कल (Tomorrow)
              </button>
              <input
                type="date"
                value={dateInputValue}
                onChange={handleCustomDateChange}
                className="bg-white dark:bg-darkcard text-gray-800 dark:text-gray-100 px-2 py-1 rounded-md border border-gold/40 text-xs focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
          </div>

          {/* Real-time Alert Badges (Rahu Kaal / Abhijit Muhurat / Festival) */}
          <div className="px-6 pt-4 space-y-2">
            {isRahuActive && (
              <div className="flex items-center gap-2 p-3 bg-rose-500/15 border border-rose-500/40 rounded-xl text-rose-700 dark:text-rose-300 text-xs md:text-sm animate-pulse">
                <AlertTriangle size={18} className="text-rose-600 flex-shrink-0" />
                <span>
                  <strong>⚠️ राहुकाल सक्रिय है ({panchangData.rahuKaal}):</strong> वर्तमान में राहुकाल चल रहा है। इस समय कोई भी शुभ अथवा नवीन कार्य आरंभ न करें।
                </span>
              </div>
            )}

            {isAbhijitActive && (
              <div className="flex items-center gap-2 p-3 bg-emerald-500/15 border border-emerald-500/40 rounded-xl text-emerald-800 dark:text-emerald-300 text-xs md:text-sm">
                <Sparkles size={18} className="text-emerald-600 flex-shrink-0 animate-spin" />
                <span>
                  <strong>✨ अभिजित मुहूर्त सक्रिय है ({panchangData.abhijitMuhurat}):</strong> वर्तमान समय अति शुभ है। नया कार्य, पूजन अथवा यात्रा प्रारंभ करना श्रेष्ठ रहेगा।
                </span>
              </div>
            )}

            {panchangData.festival && (
              <div className="flex items-center gap-2 p-2.5 bg-amber-500/15 border border-amber-500/40 rounded-xl text-amber-900 dark:text-amber-200 text-xs md:text-sm">
                <span className="text-base">🚩</span>
                <span>
                  <strong>विशेष पर्व एवं व्रत:</strong> {panchangData.festival}
                </span>
              </div>
            )}
          </div>

          {/* 8-Card Grid of Authentic Panchang Info */}
          <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* 1. Tithi & Day */}
            <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-darkbg/70 border border-gold/20 flex flex-col items-center text-center shadow-sm hover:border-gold transition">
              <div className="w-10 h-10 rounded-full bg-saffron/20 text-maroon dark:text-saffron flex items-center justify-center mb-2">
                <Sun size={20} />
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">वार एवं तिथि</span>
              <h4 className="font-bold text-gray-800 dark:text-gray-100 mt-1 text-sm md:text-base">{panchangData.day}</h4>
              <p className="text-xs font-semibold text-saffron mt-0.5">{panchangData.tithi}</p>
              {panchangData.tithiEnd && (
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
                  समाप्ति: {panchangData.tithiEnd} तक
                </p>
              )}
            </div>

            {/* 2. Nakshatra & Pada */}
            <div className="p-4 rounded-xl bg-orange-50/70 dark:bg-darkbg/70 border border-gold/20 flex flex-col items-center text-center shadow-sm hover:border-gold transition">
              <div className="w-10 h-10 rounded-full bg-saffron/20 text-maroon dark:text-saffron flex items-center justify-center mb-2">
                <Sparkles size={20} />
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">नक्षत्र एवं चरण</span>
              <h4 className="font-bold text-gray-800 dark:text-gray-100 mt-1 text-sm md:text-base">{panchangData.nakshatra}</h4>
              {panchangData.nakshatraEnd ? (
                <p className="text-[11px] text-gray-600 dark:text-gray-400 mt-1">
                  समाप्ति: {panchangData.nakshatraEnd} तक
                </p>
              ) : (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">पूर्ण दिवस</p>
              )}
            </div>

            {/* 3. Yoga & Karana */}
            <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-darkbg/70 border border-gold/20 flex flex-col items-center text-center shadow-sm hover:border-gold transition">
              <div className="w-10 h-10 rounded-full bg-saffron/20 text-maroon dark:text-saffron flex items-center justify-center mb-2">
                <Compass size={20} />
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">योग एवं करण</span>
              <h4 className="font-bold text-gray-800 dark:text-gray-100 mt-1 text-sm md:text-base">{panchangData.yoga}</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 font-medium">{panchangData.karana}</p>
            </div>

            {/* 4. Sun & Moon Signs */}
            <div className="p-4 rounded-xl bg-orange-50/70 dark:bg-darkbg/70 border border-gold/20 flex flex-col items-center text-center shadow-sm hover:border-gold transition">
              <div className="w-10 h-10 rounded-full bg-saffron/20 text-maroon dark:text-saffron flex items-center justify-center mb-2">
                <Moon size={20} />
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">सूर्योदय एवं सूर्यास्त</span>
              <h4 className="font-bold text-gray-800 dark:text-gray-100 mt-1 text-xs md:text-sm">
                🌅 {panchangData.suryaUday} | 🌇 {panchangData.suryaAst}
              </h4>
              <p className="text-[11px] text-saffron font-medium mt-1">
                चंद्र राशि: {panchangData.moonRashi || 'उपलब्ध नहीं'} | सूर्य: {panchangData.sunRashi || 'उपलब्ध नहीं'}
              </p>
            </div>

            {/* 5. Abhijit Muhurat */}
            <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-300/40 flex flex-col items-center text-center shadow-sm hover:border-emerald-400 transition">
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2">
                <Clock size={20} />
              </div>
              <span className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold">अभिजित मुहूर्त (शुभ)</span>
              <h4 className="font-bold text-emerald-800 dark:text-emerald-300 mt-1 text-xs md:text-base">
                {panchangData.abhijitMuhurat}
              </h4>
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1">
                {panchangData.isWednesdayAbhijit ? '(बुधवार को विशेष मान्य नहीं)' : 'सभी शुभ कार्यों हेतु उत्तम'}
              </p>
            </div>

            {/* 6. Rahu Kaal */}
            <div className="p-4 rounded-xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-300/40 flex flex-col items-center text-center shadow-sm hover:border-rose-400 transition">
              <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-2">
                <ShieldAlert size={20} />
              </div>
              <span className="text-xs text-rose-700 dark:text-rose-400 font-semibold">राहुकाल (अशुभ समय)</span>
              <h4 className="font-bold text-rose-800 dark:text-rose-300 mt-1 text-xs md:text-base">
                {panchangData.rahuKaal}
              </h4>
              <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1">नवीन व शुभ कार्य वर्जित</p>
            </div>

            {/* 7. Gulika & Yamaganda */}
            <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-darkbg/70 border border-gold/20 flex flex-col items-center text-center shadow-sm hover:border-gold transition">
              <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-2">
                <Clock size={20} />
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">गुलिक काल एवं यमगण्ड</span>
              <p className="text-xs text-gray-800 dark:text-gray-100 font-semibold mt-1">
                गुलिक: {panchangData.gulikaKaal}
              </p>
              <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-0.5">
                यमगण्ड: {panchangData.yamagandaKaal}
              </p>
            </div>

            {/* 8. Brahma Muhurta & Samvat */}
            <div className="p-4 rounded-xl bg-orange-50/70 dark:bg-darkbg/70 border border-gold/20 flex flex-col items-center text-center shadow-sm hover:border-gold transition">
              <div className="w-10 h-10 rounded-full bg-saffron/20 text-maroon dark:text-saffron flex items-center justify-center mb-2">
                <Sparkles size={20} />
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">ब्रह्म मुहूर्त एवं संवत</span>
              <h4 className="font-bold text-gray-800 dark:text-gray-100 mt-1 text-xs md:text-sm">
                {panchangData.brahmaMuhurta}
              </h4>
              <p className="text-[11px] text-gray-600 dark:text-gray-400 mt-1">
                वि.सं. {panchangData.vikramSamvat} | शक {panchangData.shakaSamvat}
              </p>
            </div>

          </div>

          {/* Disha Shool & Astro Guidance Strip */}
          <div className="px-6 py-3.5 bg-gold/10 dark:bg-gold/5 border-t border-gold/20 flex flex-col md:flex-row items-center justify-between text-xs md:text-sm text-gray-700 dark:text-gray-300 gap-3">
            <div className="flex items-center gap-2 flex-wrap text-center md:text-left">
              <Compass size={18} className="text-saffron flex-shrink-0" />
              <span>
                <strong>दिशा शूल:</strong> {panchangData.directionShool}
              </span>
              <span className="hidden lg:inline text-gold">|</span>
              <span className="hidden lg:inline">
                <strong>मास:</strong> {panchangData.masa} ({panchangData.paksha})
              </span>
            </div>

            {/* Direct Verification Links */}
            <div className="flex items-center gap-3 text-xs flex-wrap justify-center">
              <a
                href="https://www.drikpanchang.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-maroon dark:text-saffron hover:text-gold transition font-medium underline"
                title="Drik Panchang आधिकारिक वेबसाइट पर पंचांग सत्यापित करें"
              >
                दृक पंचांग (Drik Panchang) पर देखें
                <ExternalLink size={12} />
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="https://www.google.com/search?q=आज+का+पंचांग"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-maroon dark:text-saffron hover:text-gold transition font-medium underline"
                title="Google पर आज का पंचांग खोजें और मिलान करें"
              >
                गूगल पर खोजें
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Consultation Strip */}
          <div className="px-6 py-2.5 bg-maroon/95 dark:bg-maroon text-cream flex flex-col sm:flex-row items-center justify-between text-xs md:text-sm gap-2">
            <span className="text-cream/90 text-center sm:text-left">
              गृहप्रवेश, नामकरण, विवाह अथवा विशेष पूजन मुहूर्त के लिए व्यक्तिगत कुंडली अनुसार गणना आवश्यक है।
            </span>
            <Link
              to="/contact"
              className="bg-saffron hover:bg-gold text-maroon px-4 py-1.5 rounded-full font-bold text-xs transition transform hover:scale-105 whitespace-nowrap shadow-sm"
            >
              आचार्य जी से परामर्श लें →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PanchangWidget;
