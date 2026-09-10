import { Award, BookOpen, ShieldCheck, Heart, MapPin, Phone, Clock, MessageCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const principles = [
    {
      icon: <BookOpen className="text-maroon dark:text-gold" size={28} />,
      title: "वेदों और शास्त्रों पर आधारित सटीक मार्गदर्शन",
      desc: "सनातन धर्म के प्राचीन प्रामाणिक ग्रंथों, पराशर ज्योतिष एवं कर्मकांड ग्रंथों के अनुसार विश्लेषण।"
    },
    {
      icon: <ShieldCheck className="text-green-600" size={28} />,
      title: "गोपनीयता की पूर्ण गारंटी",
      desc: "प्रत्येक यजमान का विवरण, जन्म कुंडली और व्यक्तिगत परामर्श पूर्ण रूप से गोपनीय रखा जाता है।"
    },
    {
      icon: <Award className="text-amber-500" size={28} />,
      title: "10+ वर्षों का अनुभव",
      desc: "प्रयागराज, काशी और देश-विदेश के हज़ारों श्रद्धालुओं को जीवन के संकटों से मुक्ति दिलाई है।"
    },
    {
      icon: <Heart className="text-red-500" size={28} />,
      title: "समस्या के अनुसार व्यक्तिगत समाधान",
      desc: "हर व्यक्ति की कुंडली विशिष्ट होती है, इसलिए समाधान और उपाय भी व्यक्तिगत व अनुकूल होते हैं।"
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-[#FFFDF2] via-[#FFF9E6] to-[#FFEEC2] dark:from-darkbg dark:to-darkcard transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-maroon via-red-800 to-maroon text-gold font-hindi text-xs sm:text-sm font-bold py-1.5 px-6 rounded-full shadow-md border border-gold mb-3">
            || ॐ नमः शिवाय || ❖ || श्री गणेशाय नमः || ❖ || जय श्री राम ||
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-maroon dark:text-saffron font-hindi">
            परिचय : आचार्य शिवांशु तिवारी
          </h1>
          <p className="text-base sm:text-lg text-gold font-bold mt-2">
            ज्योतिषाचार्य एवं कर्मकाण्ड विशेषज्ञ | त्रिवेणी संगम,  प्रयागराज, उत्तर प्रदेश
          </p>
        </div>

        {/* Real Photo + Bio Card */}
        <div className="bg-gradient-to-br from-[#FFFDF5] to-[#FFF5D6] dark:from-darkcard dark:to-darkbg rounded-3xl shadow-2xl overflow-hidden border-4 border-gold mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 md:p-12">
            
            {/* Real Photo Column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-gold bg-amber-50 group">
                <img 
                  src="/images/pandit_real_portrait.jpg" 
                  alt="आचार्य शिवांशु तिवारी - वास्तविक चित्र" 
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon via-maroon/70 to-transparent p-4 text-center">
                  <p className="font-hindi text-lg font-black text-gold">आचार्य शिवांशु तिवारी</p>
                  <p className="text-xs text-cream font-medium">ज्योतिषाचार्य एवं कर्मकाण्ड विशेषज्ञ</p>
                </div>
              </div>
              <p className="mt-3 text-xs font-bold text-maroon dark:text-gold text-center bg-white/70 dark:bg-darkcard px-4 py-1.5 rounded-full border border-gold/40">
                ⭐ सही मार्गदर्शन सुखी जीवन ⭐
              </p>
            </div>

            {/* Text Bio Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-maroon text-gold text-xs sm:text-sm font-bold px-4 py-1 rounded-full shadow">
                <Star size={16} /> 10+ वर्षों की अटूट वैदिक सेवा
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-maroon dark:text-saffron font-hindi leading-snug">
                "जीवन की हर समस्या का समाधान... शास्त्रों के अनुसार, विज्ञान और अनुभूति"
              </h2>

              <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-sm sm:text-base font-medium">
                आचार्य शिवांशु तिवारी सनातन वैदिक संस्कृति और शास्त्रों के गूढ़ अध्येता हैं। प्रयागराज की तीर्थराज भूमि पर स्थित <strong>राम जानकी महल मंदिर सहसन</strong> से वे विगत 10 वर्षों से जातकों के कष्ट निवारण, जन्म कुंडली परीक्षण, वास्तु दोष शमन और समस्त वैदिक पूजा-पाठ संपन्न करा रहे हैं।
              </p>

              <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-sm sm:text-base font-medium">
                उनका दृढ़ विश्वास है कि ग्रहों की चाल मनुष्य के जीवन को प्रभावित करती है, परंतु उचित वैदिक पूजा, अनुष्ठान, दान, जप एवं रत्न धारण से प्रतिकूल ग्रहों को भी अनुकूल बनाया जा सकता है।
              </p>

              {/* Highlights Box matching Pamphlet */}
              <div className="p-4 bg-gradient-to-r from-amber-100 to-yellow-100 dark:bg-darkcard rounded-2xl border-2 border-gold/60 space-y-2 text-xs sm:text-sm text-gray-900 dark:text-gray-100">
                <p className="flex items-center gap-2">
                  <MapPin size={18} className="text-maroon flex-shrink-0" />
                  <span><strong>स्थान :</strong> त्रिवेणी संगम,  प्रयागराज, उत्तर प्रदेश</span>
                </p>
              </div>

              {/* Direct Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a 
                  href="tel:7668499723" 
                  className="bg-maroon hover:bg-red-800 text-gold px-6 py-3 rounded-full font-bold text-sm transition shadow-lg flex items-center gap-2 border border-gold"
                >
                  <Phone size={18} /> Call: 7668499723
                </a>
                <a 
                  href="https://wa.me/917668499723" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-bold text-sm transition shadow-lg flex items-center gap-2"
                >
                  <MessageCircle size={18} /> Whatsapp Chat
                </a>
                <Link
                  to="/contact"
                  className="bg-amber-400 hover:bg-gold text-maroon px-6 py-3 rounded-full font-bold text-sm transition shadow-md"
                >
                  परामर्श फॉर्म भरें →
                </Link>
              </div>

            </div>

          </div>
        </div>

        {/* Principles Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-maroon dark:text-saffron font-hindi inline-block border-b-4 border-gold pb-2">
              ❖ हमारे प्रमुख आधारभूत स्तंभ ❖
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2 font-medium">शास्त्र सम्मत विधि, वैदिक शुद्धता एवं यजमान संतुष्टि</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((item, idx) => (
              <div key={idx} className="bg-white/90 dark:bg-darkcard p-6 rounded-2xl shadow-lg border-2 border-gold/40 hover:border-gold transition flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-darkbg flex items-center justify-center mb-4 shadow-sm border border-gold/30">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-maroon dark:text-gold mb-2 font-hindi">{item.title}</h4>
                  <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-maroon via-red-900 to-maroon text-cream rounded-3xl p-8 text-center border-4 border-gold shadow-2xl">
          <div className="text-3xl mb-2">🪔 🕉️ 🪔</div>
          <h3 className="text-2xl sm:text-3xl font-black font-hindi text-gold">
            "समस्या कोई भी हो... समाधान जरूर है!"
          </h3>
          <p className="text-cream/90 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            जन्मपत्री, वास्तु, विवाह, गृह प्रवेश अथवा किसी भी विशेष महायज्ञ के लिए आज ही संपर्क करें।
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a 
              href="tel:7668499723" 
              className="bg-gold hover:bg-yellow-400 text-maroon font-bold px-8 py-3 rounded-full text-base shadow-xl transition transform hover:scale-105"
            >
              फोन पर बात करें: 7668499723
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
