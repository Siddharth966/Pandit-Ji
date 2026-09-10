import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  // Left Side: Features (Why Choose Us)
  const points = [
    { title: "वेदों और शास्त्रों पर आधारित सटीक मार्गदर्शन", desc: "ऋषि-मुनियों द्वारा प्रतिपादित वैदिक सिद्धांतों के आधार पर जन्मपत्री फलादेश।" },
    { title: "10+ वर्षों का अनुभव", desc: "प्रयागराज की पावन धरा से हज़ारों यजमानों को सफल ज्योतिषीय समाधान।" },
    { title: "गोपनीयता की पूर्ण गारंटी", desc: "आपकी जन्मपत्री और व्यक्तिगत समस्याओं की 100% गोपनीयता सुनिश्चित।" },
    { title: "समस्या के अनुसार व्यक्तिगत समाधान", desc: "प्रत्येक जातक की ग्रहदशा के अनुरूप विशिष्ट वैदिक जप, पाठ एवं रत्नोपाय।" },
    { title: "सभी धार्मिक अनुष्ठानों की शास्त्रोक्त सुविधा", desc: "सत्यनारायण कथा से लेकर सहस्त्रचंडी महायज्ञ तक प्रामाणिक विधि द्वारा।" },
    { title: "घर बैठे परामर्श की भी व्यवस्था", desc: "देश-विदेश के यजमानों हेतु फोन एवं व्हाट्सएप पर ऑनलाइन कुंडली परीक्षण।" }
  ];

  // Right Side: Key Rituals (Different from Left Side)
  const specialPujas = [
    "महामृत्युंजय जप एवं हवन",
    "रुद्राभिषेक एवं लघुरुद्राभिषेक",
    "श्रीमद्भागवत महापुराण पारायण"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#FFFDF0] via-[#FFF8E7] to-[#FFF0D0] dark:from-darkcard dark:to-darkbg transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Parchment/Tamrapatra Style Card matching Pamphlet */}
        <div className="bg-gradient-to-br from-[#FFF9E6] to-[#FFEEC2] dark:from-[#261E14] dark:to-[#1C140C] rounded-3xl shadow-2xl border-4 border-gold overflow-hidden">
          
          {/* Top Marigold Garland Header */}
          <div className="bg-gradient-to-r from-maroon via-red-800 to-maroon text-center py-4 px-6 text-white border-b-2 border-gold">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-hindi text-gold drop-shadow">
              ❖ क्यों चुनें हमें ? ❖
            </h2>
            <p className="text-xs sm:text-sm text-cream font-medium mt-1">
              सनातन परंपरा • वैदिक सत्य निष्ठा • अनुभूत मार्गदर्शन
            </p>
          </div>

          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Points Column (Why Choose Us) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {points.map((pt, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-2xl bg-white/80 dark:bg-darkcard/80 border-2 border-gold/40 shadow-sm hover:shadow-md transition duration-200 flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" size={22} />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-gray-100 font-hindi text-base leading-snug">
                        {pt.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bold Red Banner from Pamphlet */}
              <div className="mt-6 bg-gradient-to-r from-red-700 via-maroon to-red-700 text-white text-center py-4 px-6 rounded-2xl shadow-xl border-2 border-gold transform hover:scale-[1.01] transition">
                <p className="font-hindi font-black text-xl sm:text-2xl md:text-3xl text-gold drop-shadow-md">
                  "समस्या कोई भी हो... समाधान ज़रूर है!"
                </p>
                <p className="text-xs sm:text-sm text-cream mt-1 font-medium">
                  सटीक वैदिक समाधान हेतु आज ही समय निर्धारित करें।
                </p>
              </div>
            </div>

            {/* Right Column: Key Rituals (No Duplication) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              
              {/* नया कार्ड: प्रमुख अनुष्ठान */}
              <div className="bg-gradient-to-b from-maroon to-red-950 text-cream p-6 rounded-2xl border-4 border-gold shadow-xl text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gold/20 flex items-center justify-center text-3xl border border-gold/50 shadow-inner">
                  🔱
                </div>
                <h3 className="text-xl font-bold text-gold font-hindi mb-2 border-b border-gold/40 pb-2">
                  प्रमुख अनुष्ठान
                </h3>
                <div className="space-y-2 text-sm sm:text-base font-semibold py-2 text-left">
                  {specialPujas.map((puja, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white/10 p-2 rounded-lg">
                      <span className="text-gold text-lg">🪔</span>
                      <p className="text-cream text-xs sm:text-sm">{puja}</p>
                    </div>
                  ))}
                </div>
                <Link to="/services" className="mt-4 inline-block bg-saffron text-maroon text-xs font-bold px-4 py-1.5 rounded-full border border-white/40 shadow-sm hover:bg-gold transition">
                  सभी सेवाएँ देखें →
                </Link>
              </div>

              {/* सीधे संपर्क सूत्र (Direct Contact) */}
              <div className="bg-white dark:bg-darkcard p-5 rounded-2xl border-2 border-gold shadow-md text-center">
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">सीधे संपर्क सूत्र</p>
                <a href="tel:7668499723" className="block text-xl font-black text-maroon dark:text-saffron mt-1 hover:underline">
                  +91 7668499723
                </a>
                <Link
                  to="/contact"
                  className="mt-3 block w-full bg-gradient-to-r from-amber-400 to-gold hover:from-yellow-400 hover:to-amber-500 text-maroon font-bold py-2 px-4 rounded-xl text-xs transition shadow"
                >
                  परामर्श फॉर्म भरें →
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;