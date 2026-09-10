import { Link } from 'react-router-dom';
import { Sparkles, Flame, ArrowRight } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      title: 'जन्म कुंडली विश्लेषण',
      items: ['करियर', 'विवाह', 'संतान', 'धन', 'स्वास्थ्य', 'विदेश योग', 'ग्रह दशा एवं महादशा'],
      icon: '🔯',
      badge: 'सटीक फलादेश',
      border: 'border-amber-400',
      bgGradient: 'from-amber-500/15 via-yellow-500/10 to-transparent',
      iconBg: 'bg-amber-500/20 text-amber-700 dark:text-amber-300'
    },
    {
      title: 'विवाह योग मिलान',
      items: ['गुण मिलान', 'दोष निवारण', 'अनुकूलता जांच', 'मांगलिक विचार'],
      icon: '💑',
      badge: 'दांपत्य सुख',
      border: 'border-red-400',
      bgGradient: 'from-red-500/15 via-rose-500/10 to-transparent',
      iconBg: 'bg-red-500/20 text-red-700 dark:text-red-300'
    },
    {
      title: 'पूजा-पाठ एवं अनुष्ठान',
      items: ['सत्यनारायण कथा', 'गृह प्रवेश', 'विवाह संस्कार', 'रुद्राभिषेक', 'महामृत्युंजय जप', 'नवग्रह शांति'],
      icon: '🙏',
      badge: 'शास्त्र सम्मत',
      border: 'border-orange-400',
      bgGradient: 'from-orange-500/15 via-amber-500/10 to-transparent',
      iconBg: 'bg-orange-500/20 text-orange-700 dark:text-orange-300'
    },
    {
      title: 'वास्तु परामर्श',
      items: ['घर', 'दुकान', 'फैक्ट्री', 'ऑफिस', 'वास्तु दोष निवारण'],
      icon: '🏠',
      badge: 'सकारात्मक ऊर्जा',
      border: 'border-emerald-400',
      bgGradient: 'from-emerald-500/15 via-green-500/10 to-transparent',
      iconBg: 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300'
    },
    {
      title: 'ग्रह शांति एवं दोष निवारण',
      items: ['कालसर्प दोष', 'पितृ दोष', 'मंगल दोष', 'शनि शांति', 'राहु-केतु शांति'],
      icon: '🪐',
      badge: 'दोष मुक्ति',
      border: 'border-blue-400',
      bgGradient: 'from-blue-500/15 via-indigo-500/10 to-transparent',
      iconBg: 'bg-blue-500/20 text-blue-700 dark:text-blue-300'
    },
    {
      title: 'हस्तरेखा परामर्श',
      items: ['व्यक्तित्व', 'भविष्य', 'वैवाहिक जीवन', 'धन योग'],
      icon: '✋',
      badge: 'करतलीय रेखा ज्ञान',
      border: 'border-purple-400',
      bgGradient: 'from-purple-500/15 via-fuchsia-500/10 to-transparent',
      iconBg: 'bg-purple-500/20 text-purple-700 dark:text-purple-300'
    },
    {
      title: 'विशेष अनुष्ठान',
      items: ['व्यापार वृद्धि', 'संतान प्राप्ति', 'रोग मुक्ति', 'कोर्ट केस में विजय', 'कार्य सिद्धि'],
      icon: '🏺',
      badge: 'मनोकामना सिद्धि',
      border: 'border-rose-400',
      bgGradient: 'from-rose-500/15 via-pink-500/10 to-transparent',
      iconBg: 'bg-rose-500/20 text-rose-700 dark:text-rose-300'
    },
  ];

  const specialAnushthan = [
    'महा मृत्युंजय जप', 'त्रिपिंडी श्राद्ध', 'नवचंडी', 'सतचंडी', 'सहस्रचंडी', 'लक्षचंडी', 
    'विवाह संस्कार', 'रुद्राभिषेक', 'लघुरुद्राभिषेक', 'नमक चमक रुद्राभिषेक', 'महाविद्या पाठ', 
    'श्रीमद्भागवत महापुराण पारायण', 'श्री रामचरित मानस पाठ पारायण', 'बगलामुखी जप एवं यज्ञ', 
    'काल सर्वदोष शांति एवं मंगल दोष शांति'
  ];

  return (
    <section className="py-16 bg-[#FFFDF7] dark:bg-darkbg transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Traditional Flourish */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-maroon via-red-800 to-maroon text-gold font-bold px-6 py-1.5 rounded-full text-sm shadow-md border border-gold/50 mb-3">
            <Sparkles size={16} />
            <span>वेदों और शास्त्रों पर आधारित प्रामाणिक सेवाएं</span>
            <Sparkles size={16} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-maroon dark:text-saffron font-hindi">
            ❖ हमारी प्रमुख सेवाएँ ❖
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-3 max-w-2xl mx-auto text-base sm:text-lg font-medium">
            आचार्य शिवांशु तिवारी जी द्वारा शास्त्र सम्मत विधि-विधान से किए जाने वाले प्रमुख वैदिक कार्य
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${service.bgGradient} bg-white dark:bg-darkcard p-6 rounded-2xl shadow-md border-2 ${service.border} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/90 dark:bg-darkbg text-maroon dark:text-gold border border-gold/40 shadow-sm">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-maroon dark:text-gold mb-3 font-hindi group-hover:text-red-700 transition-colors">
                  {service.title}
                </h3>

                <ul className="space-y-1.5 mb-6">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-saffron font-bold text-xs">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                to="/contact" 
                className="mt-auto inline-flex items-center justify-between text-xs font-bold text-maroon dark:text-saffron bg-white/80 dark:bg-darkbg/80 px-4 py-2.5 rounded-xl border border-gold/40 hover:bg-maroon hover:text-gold transition-colors"
              >
                <span>परामर्श बुक करें</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Special Anushthan Section directly from Pamphlet */}
        <div className="bg-gradient-to-br from-maroon via-red-950 to-maroon text-cream rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-gold relative overflow-hidden">
          
          {/* Background Holy Fire Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center mb-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-saffron/20 border border-gold px-4 py-1 rounded-full text-gold text-xs font-bold mb-2">
              <Flame size={16} className="text-saffron animate-bounce" />
              <span>पवित्र वैदिक अनुष्ठान</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gold font-hindi">
              ❖ हमारे विशेष अनुष्ठान ❖
            </h3>
            <p className="text-cream/90 text-sm md:text-base mt-2">
              महामृत्युंजय जप, शतचंडी, रुद्राभिषेक एवं भागवत कथा आदि सभी अनुष्ठान शास्त्रोक्त संकल्प सहित
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {specialAnushthan.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-gold/30 hover:border-gold hover:bg-white/15 transition duration-200 flex items-center gap-3 shadow-sm"
              >
                <span className="text-gold text-lg">🪷</span>
                <span className="font-hindi font-bold text-sm sm:text-base text-cream">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center pt-6 border-t border-gold/30 relative z-10 flex flex-wrap justify-center items-center gap-4">
            <p className="text-xs sm:text-sm text-gold font-semibold">
              घर, मंदिर अथवा प्रतिष्ठान में अनुष्ठान तिथि व मुहूर्त निर्धारित करने हेतु:
            </p>
            <a 
              href="https://wa.me/917668499723?text=%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A3%E0%A4%BE%E0%A4%AE%20%E0%A4%86%E0%A4%9A%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AF%20%E0%A4%9C%E0%A5%80,%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%87%E0%A4%B7%20%E0%A4%85%E0%A4%A8%E0%A5%81%E0%A4%B7%E0%A5%8D%E0%A4%A0%E0%A4%BE%E0%A4%A8%20%E0%A4%B9%E0%A5%87%E0%A4%A4%E0%A5%81%20%E0%A4%B8%E0%A4%AE%E0%A4%AF%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F।" 
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-amber-400 to-gold text-maroon font-bold px-6 py-2.5 rounded-full text-sm shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              व्हाट्सएप पर अनुष्ठान तिथि तय करें →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;