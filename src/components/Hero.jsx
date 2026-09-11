import { Phone, MessageCircle, Sparkles, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-10 md:py-16 bg-gradient-to-b from-[#FFFDF0] via-[#FFF5D6] to-[#FFE8B2] dark:from-[#1A1105] dark:via-[#261608] dark:to-[#1A0A0A] border-b-4 border-gold shadow-lg transition-colors duration-500">
      
      {/* Decorative Traditional Marigold & Swastik Floral Pattern */}
      <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-red-700 via-amber-500 to-red-700"></div>
      
      {/* Auspicious floating background watermarks */}
      <div className="absolute top-6 left-6 text-6xl opacity-20 pointer-events-none animate-float select-none">🕉️</div>
      <div className="absolute bottom-6 right-8 text-6xl opacity-20 pointer-events-none animate-float select-none" style={{ animationDelay: '1.5s' }}>🪔</div>
      <div className="absolute top-1/2 left-10 text-5xl opacity-15 pointer-events-none animate-float select-none" style={{ animationDelay: '2.5s' }}>🪷</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Auspicious Invocations Banner */}
        <div className="text-center mb-6">
          <div className="inline-block bg-gradient-to-r from-maroon via-red-800 to-maroon text-gold font-hindi text-xs sm:text-sm md:text-base font-bold py-1.5 px-6 rounded-full shadow-md border-2 border-gold/60 tracking-wider animate-pulse">
            || ॐ नमः शिवाय || ❖ || श्री गणेशाय नमः || ❖ || जय श्री राम ||
          </div>
          <p className="text-maroon dark:text-gold font-hindi text-sm sm:text-base md:text-lg font-bold mt-2 tracking-wide drop-shadow-sm">
            जीवन की हर समस्या का समाधान... शास्त्रों के अनुसार, विज्ञान और अनुभूति
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headings & Details */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5 animate-fadeInUp">
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="bg-gradient-to-r from-amber-500 to-red-600 text-white text-xs md:text-sm font-bold px-4 py-1 rounded-full shadow-md">
                ⭐ 10+ वर्षों का वैदिक अनुभव
              </span>
              <span className="bg-gradient-to-r from-red-600 to-maroon text-gold text-xs md:text-sm font-bold px-4 py-1 rounded-full shadow-md border border-gold/40">
                🚩 त्रिवेणी संगम,  प्रयागराज, उत्तर प्रदेश
              </span>
            </div>

            {/* Pandit Ji Name with Golden Red Glow */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-maroon dark:text-[#FFB347] font-hindi tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
                आचार्य शिवांशु तिवारी
              </h1>
              <div className="inline-block mt-2 bg-gradient-to-r from-maroon via-red-900 to-maroon text-gold font-bold px-6 py-2 rounded-xl text-lg sm:text-xl md:text-2xl shadow-lg border-2 border-gold/70 font-hindi">
                ज्योतिषाचार्य एवं कर्मकाण्ड विशेषज्ञ
              </div>
            </div>

            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 font-medium leading-relaxed bg-white/70 dark:bg-darkcard/70 p-4 rounded-xl border-l-4 border-maroon shadow-sm">
              <span className="font-bold text-maroon dark:text-saffron">जन्मपत्री, वास्तु, पूजा-पाठ, विवाह, ग्रह-शांति</span> आदि सभी धार्मिक कार्य शास्त्र सम्मत विधि से कराए जाते हैं।
            </p>

            {/* Timings & Place Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
             
        

              <div className="bg-orange-100/80 dark:bg-darkcard p-3 rounded-lg border border-orange-300 flex items-center gap-2.5">
                <MapPin className="text-maroon flex-shrink-0" size={20} />
                <div>
                  <p className="font-bold text-maroon dark:text-gold">स्थान:</p>
                  <p className="text-gray-700 dark:text-gray-300">त्रिवेणी संगम,  प्रयागराज, उत्तर प्रदेश</p>
                </div>
              </div>
            </div>

            {/* Action Buttons matching the Pamphlet */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a 
                href="tel:7668499723" 
                className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-maroon hover:from-red-700 hover:to-red-900 text-white px-7 py-3.5 rounded-full font-bold text-base shadow-xl hover:shadow-2xl transition transform hover:scale-105 border-2 border-gold/60"
              >
                <Phone size={20} /> Call: 7668499723
              </a>
              
              <a 
                href="https://wa.me/917668499723?text=%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A3%E0%A4%BE%E0%A4%AE%20%E0%A4%86%E0%A4%9A%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AF%20%E0%A4%9C%E0%A5%80,%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%9C%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%A4%E0%A4%BF%E0%A4%B7%20%E0%A4%AA%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%B0%E0%A5%8D%E0%A4%B6%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F।" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-7 py-3.5 rounded-full font-bold text-base shadow-xl hover:shadow-2xl transition transform hover:scale-105 border-2 border-green-300/40"
              >
                <MessageCircle size={20} /> Whatsapp
              </a>

              <Link
                to="/contact"
                className="flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-yellow-500 hover:to-amber-500 text-maroon px-6 py-3.5 rounded-full font-extrabold text-base shadow-lg transition transform hover:scale-105 border-2 border-maroon/40"
              >
                ✍️ ज्योतिष परामर्श फॉर्म
              </Link>
            </div>

            {/* Confidentiality & Shastriya Vidhi */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-gray-700 dark:text-gray-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-green-600" /> 100% पूर्ण गोपनीयता
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles size={16} className="text-amber-500" /> वेदों और शास्त्रों पर आधारित
              </span>
              <span className="flex items-center gap-1.5 text-red-600 dark:text-red-400 font-bold">
                ❖ घर बैठे परामर्श की सुविधा
              </span>
            </div>

          </div>

          {/* Right Column: Real Photo of Pandit Ji + Rashi Chakra Badge */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Top Floating Badge: सही मार्गदर्शन सुखी जीवन with Rashi Chakra */}
            <div className="absolute -top-4 -right-2 z-20 hidden sm:flex items-center gap-2 bg-gradient-to-r from-red-600 via-red-700 to-maroon text-white px-4 py-2 rounded-2xl shadow-2xl border-2 border-gold transform rotate-2 animate-pulse">
              <img src="/images/rashi_chakra.png" alt="Rashi Chakra" className="w-10 h-10 rounded-full bg-white p-0.5" />
              <div>
                <p className="text-xs font-bold text-gold font-hindi">सही मार्गदर्शन</p>
                <p className="text-sm font-extrabold text-white font-hindi">सुखी जीवन</p>
              </div>
            </div>

            {/* Real Pandit Ji Image in Grand Vedic Arch Frame */}
            <div className="relative w-72 h-88 sm:w-84 sm:h-96 md:w-92 md:h-[26rem] p-4 rounded-3xl bg-gradient-to-b from-gold via-amber-500 to-maroon shadow-2xl border-4 border-gold group">
              
              {/* Inner Decorative Frame */}
              <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-inner bg-amber-50">
                <img 
                  src="/images/photo.png
" 
                  alt="आचार्य शिवांशु तिवारी - वास्तविक चित्र" 
                  className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-105 -mt-3"
                />
                
                {/* Bottom Gradient Overlay with Pandit Ji's Name */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon via-maroon/80 to-transparent p-4 text-center">
                  <p className="text-gold font-hindi font-black text-xl drop-shadow">आचार्य शिवांशु तिवारी</p>
                  <p className="text-cream text-xs font-semibold">प्रयागराज, उत्तर प्रदेश</p>
                </div>
              </div>

              {/* Little Diya accents on corners */}
              <div className="absolute -bottom-3 -left-3 text-3xl drop-shadow-md">🪔</div>
              <div className="absolute -bottom-3 -right-3 text-3xl drop-shadow-md">🪔</div>
            </div>

            {/* Trust Motto Banner */}
            <div className="mt-4 bg-maroon text-gold px-6 py-1.5 rounded-full text-xs sm:text-sm font-bold border-2 border-gold shadow-md font-hindi text-center">
              || आपका विश्वास ही हमारी शक्ति है ||
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;