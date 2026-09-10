import { useState } from 'react';
import { Link } from 'react-router-dom';

const rashis = [
  { id: 'mesh', name: 'मेष (Aries)', symbol: '♈', lord: 'मंगल (Mars)', element: 'अग्नि (Fire)', color: 'लाल व सिंदूरी', gem: 'मूंगा (Red Coral)', mantra: 'ॐ क्रां क्रीं क्रौं सः भौमाय नमः' },
  { id: 'vrishabh', name: 'वृषभ (Taurus)', symbol: '♉', lord: 'शुक्र (Venus)', element: 'पृथ्वी (Earth)', color: 'सफेद व चमकीला', gem: 'हीरा या ओपल (Diamond/Opal)', mantra: 'ॐ द्रां द्रीं द्रौं सः शुक्राय नमः' },
  { id: 'mithun', name: 'मिथुन (Gemini)', symbol: '♊', lord: 'बुध (Mercury)', element: 'वायु (Air)', color: 'हरा', gem: 'पन्ना (Emerald)', mantra: 'ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः' },
  { id: 'kark', name: 'कर्क (Cancer)', symbol: '♋', lord: 'चन्द्र (Moon)', element: 'जल (Water)', color: 'सफेद व मोती जैसा', gem: 'सच्चा मोती (Pearl)', mantra: 'ॐ श्रां श्रीं श्रौं सः चन्द्रमसे नमः' },
  { id: 'singh', name: 'सिंह (Leo)', symbol: '♌', lord: 'सूर्य (Sun)', element: 'अग्नि (Fire)', color: 'सुनहरा व नारंगी', gem: 'माणिक्य (Ruby)', mantra: 'ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः' },
  { id: 'kanya', name: 'कन्या (Virgo)', symbol: '♍', lord: 'बुध (Mercury)', element: 'पृथ्वी (Earth)', color: 'गहरा हरा', gem: 'पन्ना (Emerald)', mantra: 'ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः' },
  { id: 'tula', name: 'तुला (Libra)', symbol: '♎', lord: 'शुक्र (Venus)', element: 'वायु (Air)', color: 'गुलाबी व सफेद', gem: 'ओपल या जरकन (Opal)', mantra: 'ॐ द्रां द्रीं द्रौं सः शुक्राय नमः' },
  { id: 'vrishchik', name: 'वृश्चिक (Scorpio)', symbol: '♏', lord: 'मंगल (Mars)', element: 'जल (Water)', color: 'लाल व गहरा मैरून', gem: 'मूंगा (Red Coral)', mantra: 'ॐ अं अंगारकाय नमः' },
  { id: 'dhanu', name: 'धनु (Sagittarius)', symbol: '♐', lord: 'बृहस्पति (Jupiter)', element: 'अग्नि (Fire)', color: 'पीला व केसरिया', gem: 'पुखराज (Yellow Sapphire)', mantra: 'ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः' },
  { id: 'makar', name: 'मकर (Capricorn)', symbol: '♑', lord: 'शनि (Saturn)', element: 'पृथ्वी (Earth)', color: 'नीला व काला', gem: 'नीलम या जामुनिया (Blue Sapphire)', mantra: 'ॐ शं शनैश्चराय नमः' },
  { id: 'kumbh', name: 'कुंभ (Aquarius)', symbol: '♒', lord: 'शनि (Saturn)', element: 'वायु (Air)', color: 'नीला व आसमानी', gem: 'नीलम (Blue Sapphire)', mantra: 'ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः' },
  { id: 'meen', name: 'मीन (Pisces)', symbol: '♓', lord: 'बृहस्पति (Jupiter)', element: 'जल (Water)', color: 'पीला व बसंती', gem: 'पीला पुखराज (Yellow Sapphire)', mantra: 'ॐ बृं बृहस्पतये नमः' },
];

const RashiGuide = () => {
  const [selectedRashi, setSelectedRashi] = useState(rashis[0]);

  return (
    <section className="py-16 bg-white dark:bg-darkbg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-saffron uppercase tracking-widest">द्वादश राशि फल एवं उपाय</span>
          <h2 className="text-3xl md:text-4xl font-bold text-maroon dark:text-saffron font-hindi mt-2">
            अपनी राशि जानें एवं वैदिक मार्गदर्शन प्राप्त करें
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
            अपनी राशि चुनें और जानें उसका स्वामी ग्रह, शुभ रत्न, लकी रंग तथा दैनिक शांति मंत्र।
          </p>
        </div>

        {/* 12 Rashi Buttons Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-8">
          {rashis.map((rashi) => {
            const isSelected = selectedRashi.id === rashi.id;
            return (
              <button
                key={rashi.id}
                onClick={() => setSelectedRashi(rashi)}
                className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all duration-200 transform ${
                  isSelected
                    ? 'bg-maroon text-cream border-gold shadow-lg scale-105 ring-2 ring-saffron'
                    : 'bg-cream/50 dark:bg-darkcard hover:bg-saffron/10 border-gold/30 text-gray-800 dark:text-gray-200'
                }`}
              >
                <span className="text-3xl mb-1">{rashi.symbol}</span>
                <span className="text-xs md:text-sm font-bold font-hindi text-center line-clamp-1">{rashi.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Rashi Detail Card */}
        <div className="bg-gradient-to-br from-cream via-orange-50/40 to-amber-100/50 dark:from-darkcard dark:to-darkbg p-6 md:p-8 rounded-2xl border-2 border-gold/50 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Symbol & Name */}
            <div className="flex flex-col items-center text-center p-4 bg-white/70 dark:bg-darkbg/70 rounded-xl border border-gold/30">
              <span className="text-6xl mb-2">{selectedRashi.symbol}</span>
              <h3 className="text-2xl font-bold text-maroon dark:text-saffron font-hindi">{selectedRashi.name}</h3>
              <div className="mt-2 inline-block px-3 py-1 bg-saffron/20 text-maroon dark:text-gold rounded-full text-xs font-semibold">
                तत्व: {selectedRashi.element}
              </div>
            </div>

            {/* Attributes Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-darkbg rounded-xl shadow-sm border border-gold/20">
                <span className="text-xs text-gray-500 dark:text-gray-400">स्वामी ग्रह (Ruling Planet)</span>
                <p className="text-lg font-bold text-maroon dark:text-gold">{selectedRashi.lord}</p>
              </div>

              <div className="p-4 bg-white dark:bg-darkbg rounded-xl shadow-sm border border-gold/20">
                <span className="text-xs text-gray-500 dark:text-gray-400">शुभ रत्न (Benefic Gemstone)</span>
                <p className="text-lg font-bold text-maroon dark:text-gold">{selectedRashi.gem}</p>
              </div>

              <div className="p-4 bg-white dark:bg-darkbg rounded-xl shadow-sm border border-gold/20">
                <span className="text-xs text-gray-500 dark:text-gray-400">अनुकूल रंग (Auspicious Color)</span>
                <p className="text-lg font-bold text-maroon dark:text-gold">{selectedRashi.color}</p>
              </div>

              <div className="p-4 bg-white dark:bg-darkbg rounded-xl shadow-sm border border-gold/20">
                <span className="text-xs text-gray-500 dark:text-gray-400">शांति बीज मंत्र</span>
                <p className="text-sm md:text-base font-semibold text-saffron dark:text-gold font-hindi">{selectedRashi.mantra}</p>
              </div>
            </div>

          </div>

          <div className="mt-6 pt-6 border-t border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center sm:text-left">
              अपनी जन्मपत्रिका के अनुसार ग्रहदशा, महादशा और गोचर का सटीक फल जानने हेतु संपर्क करें।
            </p>
            <Link
              to="/contact"
              className="bg-maroon hover:bg-red-800 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md transition transform hover:scale-105 whitespace-nowrap"
            >
              कुंडली विश्लेषण बुक करें →
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RashiGuide;
