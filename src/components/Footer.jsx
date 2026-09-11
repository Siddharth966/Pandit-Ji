import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-maroon via-[#550000] to-[#3a0000] text-cream border-t-4 border-gold relative overflow-hidden">
      
      {/* Auspicious Top Garland Strip */}
      <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-maroon font-hindi text-center py-1.5 text-xs sm:text-sm font-extrabold tracking-wider border-b border-gold">
        || ॐ नमः शिवाय || ❖ || श्री गणेशाय नमः || ❖ || जय श्री राम ||
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Acharya Identity & Blessing */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold flex-shrink-0">
                <img src="/images/photo.png" alt="आचार्य शिवांशु तिवारी" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <h3 className="text-xl font-black text-gold font-hindi leading-tight">
                  आचार्य शिवांशु तिवारी
                </h3>
                <p className="text-xs text-cream/90 font-medium">ज्योतिषाचार्य एवं कर्मकाण्ड विशेषज्ञ</p>
              </div>
            </div>
            
            <p className="text-xs text-cream/80 leading-relaxed italic">
              "जीवन की हर समस्या का समाधान... शास्त्रों के अनुसार, विज्ञान और अनुभूति के संगम से।"
            </p>

            <div className="p-3 rounded-xl bg-white/10 border border-gold/30">
              <p className="text-xs text-gold font-bold">सही मार्गदर्शन सुखी जीवन</p>
              <p className="text-[11px] text-cream/80 mt-0.5">10+ वर्षों का अनुभव एवं शास्त्रोक्त प्रामाणिकता</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gold mb-4 font-hindi border-b border-gold/30 pb-1">
              मुख्य पृष्ठ
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-cream/90 hover:text-gold transition flex items-center gap-1.5">
                  <span className="text-gold text-xs">❖</span> होम (Home)
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-cream/90 hover:text-gold transition flex items-center gap-1.5">
                  <span className="text-gold text-xs">❖</span> प्रमुख सेवाएँ (Services)
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream/90 hover:text-gold transition flex items-center gap-1.5">
                  <span className="text-gold text-xs">❖</span> परिचय (About Acharya Ji)
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-cream/90 hover:text-gold transition flex items-center gap-1.5">
                  <span className="text-gold text-xs">❖</span> अनुष्ठान गैलरी (Gallery & Posters)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream/90 hover:text-gold transition flex items-center gap-1.5">
                  <span className="text-gold text-xs">❖</span> परामर्श फॉर्म (Consultation)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Channels directly from Pamphlet */}
          <div>
            <h4 className="text-lg font-bold text-gold mb-4 font-hindi border-b border-gold/30 pb-1">
              सम्पर्क सूत्र
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a 
                  href="tel:7668499723" 
                  className="flex items-center gap-2.5 bg-red-800/60 hover:bg-red-700/80 p-2 rounded-xl border border-red-500/40 transition"
                >
                  <span className="p-1 bg-red-600 rounded-full text-white"><Phone size={14} /></span>
                  <span><strong>Call :</strong> 7668499723</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/917668499723" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2.5 bg-green-900/40 hover:bg-green-800/60 p-2 rounded-xl border border-green-500/40 transition"
                >
                  <span className="p-1 bg-green-600 rounded-full text-white"><MessageCircle size={14} /></span>
                  <span><strong>Whatsapp :</strong> 7668499723</span>
                </a>
              </li>
              <li>
              </li>
              <li>
                <a 
                  href="mailto:aacharyashivanshu9723@gmail.com" 
                  className="flex items-center gap-2.5 bg-amber-950/40 hover:bg-amber-900/60 p-2 rounded-xl border border-amber-500/40 transition break-all"
                >
                  <span className="p-1 bg-amber-600 rounded-full text-white"><Mail size={14} /></span>
                  <span className="truncate">aacharyashivanshu9723@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Address & Timings */}
          <div>
            <h4 className="text-lg font-bold text-gold mb-4 font-hindi border-b border-gold/30 pb-1">
              स्थान एवं समय
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2 bg-white/10 p-3 rounded-xl border border-gold/30">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gold text-sm">पता (Address):</p>
                  <p className="text-cream mt-0.5 leading-relaxed">
                    त्रिवेणी संगम,  प्रयागराज, उत्तर प्रदेश
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Grand Temple Motto Strip */}
        <div className="mt-10 pt-6 border-t-2 border-gold/40 text-center">
          <div className="text-3xl mb-2">🪔 🕉️ 🪔</div>
          <p className="text-lg sm:text-xl font-hindi text-gold font-extrabold tracking-wide">
            || आपका विश्वास ही हमारी शक्ति है ||
          </p>
          <p className="text-xs text-cream/70 mt-2">
            &copy; {new Date().getFullYear()} आचार्य शिवांशु तिवारी | सर्व अधिकार सुरक्षित।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;