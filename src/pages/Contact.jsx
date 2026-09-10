import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle, Copy } from 'lucide-react';

const InstagramIcon = ({ size = 20, className = "" }) => (
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    tob: '',
    ampm: 'AM',
    pob: '',
    motherName: '',
    fatherName: '',
    phone: '',
    problem: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWhatsAppMessage = () => {
    return `🕉️ *आचार्य शिवांशु तिवारी जी - ज्योतिष परामर्श फॉर्म* 🕉️\n\n` +
      `👤 *नाम:* ${formData.name || 'उपलब्ध नहीं'}\n` +
      `📅 *जन्म तिथि:* ${formData.dob || 'उपलब्ध नहीं'}\n` +
      `⏰ *जन्म समय:* ${formData.tob || 'उपलब्ध नहीं'} ${formData.ampm}\n` +
      `📍 *जन्म स्थान:* ${formData.pob || 'उपलब्ध नहीं'}\n` +
      `🌸 *माता का नाम:* ${formData.motherName || 'उपलब्ध नहीं'}\n` +
      `🚩 *पिता का नाम:* ${formData.fatherName || 'उपलब्ध नहीं'}\n` +
      `📱 *मोबाइल नं:* ${formData.phone || 'उपलब्ध नहीं'}\n\n` +
      `❓ *समस्या / परामर्श हेतु:* \n${formData.problem || 'सटीक वैदिक कुंडली विश्लेषण एवं उचित मार्गदर्शन हेतु संपर्क।'}\n\n` +
      `🙏 कृपया मार्गदर्शन एवं समय प्रदान करें।`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("कृपया अपना नाम और मोबाइल नंबर अवश्य भरें।");
      return;
    }

    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/917668499723?text=${encodeURIComponent(message)}`;
    
    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  const handleCopy = () => {
    const message = generateWhatsAppMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="py-12 bg-gradient-to-b from-[#FFFDF2] via-[#FFF9E6] to-[#FFEEC2] dark:from-darkbg dark:to-darkcard min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Invocations Banner */}
        <div className="text-center mb-10">
          <div className="inline-block bg-gradient-to-r from-maroon via-red-800 to-maroon text-gold font-hindi text-xs sm:text-sm font-bold py-1.5 px-6 rounded-full shadow-md border border-gold mb-3">
            || ॐ नमः शिवाय || ❖ || श्री गणेशाय नमः || ❖ || जय श्री राम ||
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-maroon dark:text-saffron font-hindi">
            ज्योतिष परामर्श एवं संपर्क केंद्र
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mt-2 font-medium">
            जीवन की हर समस्या का समाधान... शास्त्रों के अनुसार, विज्ञान और अनुभूति
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Official Contact Card matching Pamphlet */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Sampark Sootra Card */}
            <div className="bg-gradient-to-b from-[#FFFDF5] to-[#FFF5D6] dark:from-darkcard dark:to-darkbg p-6 sm:p-8 rounded-3xl shadow-2xl border-4 border-gold">
              
              <div className="text-center pb-4 mb-6 border-b-2 border-gold/40">
                <span className="text-3xl">🪔</span>
                <h2 className="text-2xl font-extrabold text-maroon dark:text-gold font-hindi mt-1">
                  ❖ सम्पर्क सूत्र ❖
                </h2>
                <p className="text-xs text-gray-600 dark:text-gray-400">सीधे आचार्य शिवांशु तिवारी जी से संपर्क करें</p>
              </div>

              {/* Colorful Channel Badges matching Pamphlet */}
              <div className="space-y-3">
                {/* Call Badge */}
                <a 
                  href="tel:7668499723" 
                  className="flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-800 text-white p-3.5 rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02] border-2 border-gold/40"
                >
                  <div className="w-10 h-10 rounded-full bg-white text-red-700 flex items-center justify-center font-bold flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-gold uppercase tracking-wider">Call Now</p>
                    <p className="text-lg font-black tracking-wide">: 7668499723</p>
                  </div>
                </a>

                {/* WhatsApp Badge */}
                <a 
                  href="https://wa.me/917668499723" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-3.5 rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02] border-2 border-green-300/40"
                >
                  <div className="w-10 h-10 rounded-full bg-white text-green-700 flex items-center justify-center font-bold flex-shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-green-200 uppercase tracking-wider">Whatsapp</p>
                    <p className="text-lg font-black tracking-wide">: 7668499723</p>
                  </div>
                </a>

                {/* Instagram Badge */}
                <a 
                  href="https://instagram.com/shivanshu46301" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 bg-gradient-to-r from-purple-700 via-pink-600 to-rose-600 text-white p-3.5 rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02] border-2 border-pink-300/40"
                >
                  <div className="w-10 h-10 rounded-full bg-white text-pink-600 flex items-center justify-center font-bold flex-shrink-0">
                    <InstagramIcon size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-pink-200 uppercase tracking-wider">Instagram</p>
                    <p className="text-base font-bold tracking-wide">: @shivanshu46301</p>
                  </div>
                </a>

                {/* Gmail Badge */}
                <a 
                  href="mailto:aacharyashivanshu9723@gmail.com" 
                  className="flex items-center gap-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white p-3.5 rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02] border-2 border-yellow-300/40"
                >
                  <div className="w-10 h-10 rounded-full bg-white text-amber-700 flex items-center justify-center font-bold flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-semibold text-amber-200 uppercase tracking-wider">Gmail</p>
                    <p className="text-xs sm:text-sm font-bold truncate">: aacharyashivanshu9723@gmail.com</p>
                  </div>
                </a>
              </div>

              {/* Address Strip matching Pamphlet */}
              <div className="mt-6 pt-4 border-t-2 border-gold/40">
                <div className="p-4 bg-maroon text-cream rounded-2xl border-2 border-gold text-center">
                  <div className="flex items-center justify-center gap-1 text-gold font-bold text-sm mb-1">
                    <MapPin size={18} />
                    <span>पता (Address)</span>
                  </div>
                  <p className="font-hindi text-base sm:text-lg font-bold text-gold">
                    त्रिवेणी संगम,  प्रयागराज, उत्तर प्रदेश
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right: Exact "ज्योतिष परामर्श हेतु जानकारी फॉर्म" from Pamphlet */}
          <div className="lg:col-span-7 bg-gradient-to-b from-[#FFFDF5] to-[#FFF8E7] dark:from-darkcard dark:to-darkbg p-6 sm:p-10 rounded-3xl shadow-2xl border-4 border-maroon relative">
            
            {/* Header matching Pamphlet */}
            <div className="text-center mb-6 pb-4 border-b-2 border-gold">
              <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl text-maroon dark:text-gold font-hindi font-black">
                <span>🕉️</span>
                <span>ज्योतिष परामर्श हेतु जानकारी फॉर्म</span>
                <span>🕉️</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                कृपया अपनी जन्मपत्री का सही विवरण भरें। यह सीधे आचार्य जी के पास सुरक्षित पहुंचेगा।
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-950/40 border-2 border-green-500 rounded-2xl flex items-center gap-3 text-green-900 dark:text-green-200">
                <CheckCircle size={26} className="text-green-600 flex-shrink-0" />
                <div className="text-xs sm:text-sm">
                  <p className="font-bold">आपका विवरण तैयार कर व्हाट्सएप पर भेजा जा रहा है!</p>
                  <p>यदि व्हाट्सएप नहीं खुला, तो नीचे "कॉपी करें" बटन दबाकर संदेश भेज सकते हैं।</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 font-hindi">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">
                  नाम (Name) <span className="text-red-600">*</span>
                </label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 text-sm rounded-xl border-2 border-gold/50 focus:border-maroon focus:ring-2 focus:ring-maroon focus:outline-none dark:bg-darkbg dark:border-gray-600 dark:text-white" 
                  placeholder="अपना पूरा नाम लिखें" 
                />
              </div>

              {/* Date & Time with AM/PM */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-6">
                  <label className="block text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">
                    जन्म तिथि (DD / MM / YYYY)
                  </label>
                  <input 
                    type="date" 
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full p-3 text-sm rounded-xl border-2 border-gold/50 focus:border-maroon focus:outline-none dark:bg-darkbg dark:border-gray-600 dark:text-white" 
                  />
                </div>

                <div className="sm:col-span-6">
                  <label className="block text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">
                    जन्म समय (Time of Birth)
                  </label>
                  <div className="flex gap-2">
                    <input 
                      type="time" 
                      name="tob"
                      value={formData.tob}
                      onChange={handleChange}
                      className="flex-1 p-3 text-sm rounded-xl border-2 border-gold/50 focus:border-maroon focus:outline-none dark:bg-darkbg dark:border-gray-600 dark:text-white" 
                    />
                    <select
                      name="ampm"
                      value={formData.ampm}
                      onChange={handleChange}
                      className="p-3 text-sm font-bold rounded-xl border-2 border-gold/50 bg-white dark:bg-darkbg dark:text-white"
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Place of birth */}
              <div>
                <label className="block text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">
                  जन्म स्थान (Place of Birth)
                </label>
                <input 
                  type="text" 
                  name="pob"
                  value={formData.pob}
                  onChange={handleChange}
                  className="w-full p-3 text-sm rounded-xl border-2 border-gold/50 focus:border-maroon focus:outline-none dark:bg-darkbg dark:border-gray-600 dark:text-white" 
                  placeholder="शहर, जिला, राज्य (जैसे: प्रयागराज, उत्तर प्रदेश)" 
                />
              </div>

              {/* Mother & Father Name from Pamphlet */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">
                    माता का नाम (Mother's Name)
                  </label>
                  <input 
                    type="text" 
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                    className="w-full p-3 text-sm rounded-xl border-2 border-gold/50 focus:border-maroon focus:outline-none dark:bg-darkbg dark:border-gray-600 dark:text-white" 
                    placeholder="माता जी का नाम" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">
                    पिता का नाम (Father's Name)
                  </label>
                  <input 
                    type="text" 
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    className="w-full p-3 text-sm rounded-xl border-2 border-gold/50 focus:border-maroon focus:outline-none dark:bg-darkbg dark:border-gray-600 dark:text-white" 
                    placeholder="पिता जी का नाम" 
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">
                  मोबाइल नं. (WhatsApp Number) <span className="text-red-600">*</span>
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 text-sm rounded-xl border-2 border-gold/50 focus:border-maroon focus:outline-none dark:bg-darkbg dark:border-gray-600 dark:text-white font-sans" 
                  placeholder="+91 76684XXXXX" 
                />
              </div>

              {/* Problem/Query */}
              <div>
                <label className="block text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">
                  समस्या / परामर्श हेतु (Question / Purpose of Consultation)
                </label>
                <textarea 
                  rows="3" 
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  className="w-full p-3 text-sm rounded-xl border-2 border-gold/50 focus:border-maroon focus:outline-none dark:bg-darkbg dark:border-gray-600 dark:text-white" 
                  placeholder="करियर, विवाह, वास्तु, स्वास्थ्य, व्यापार वृद्धि या दोष निवारण संबंधी अपनी समस्या लिखें..."
                ></textarea>
              </div>

              {/* Submit & Copy Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3 font-sans">
                <button 
                  type="submit" 
                  className="flex-1 bg-gradient-to-r from-maroon via-red-800 to-maroon hover:from-red-800 hover:to-red-950 text-gold font-black py-4 px-6 rounded-2xl transition shadow-xl flex items-center justify-center gap-2 border-2 border-gold transform hover:scale-[1.02] text-base"
                >
                  <Send size={20} />
                  <span>व्हाट्सएप पर विवरण भेजें</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-5 py-4 border-2 border-gold text-maroon dark:text-gold hover:bg-gold/10 rounded-2xl font-bold text-sm transition flex items-center justify-center gap-1.5"
                  title="फॉर्म विवरण कॉपी करें"
                >
                  {copied ? <CheckCircle size={20} className="text-green-600" /> : <Copy size={20} />}
                  <span>{copied ? 'कॉपी हो गया' : 'कॉपी करें'}</span>
                </button>
              </div>

              <div className="pt-2 text-center text-xs text-gray-600 dark:text-gray-400 font-hindi">
                || आपका विश्वास ही हमारी शक्ति है ||
              </div>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;