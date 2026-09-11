import { useState } from 'react';
import { X, ZoomIn, MapPin, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryItems = [
  {
    id: 1,
    title: "आधिकारिक सेवा एवं परिचय पत्रिका",
    category: "posters",
    categoryLabel: "आधिकारिक पोस्टर",
    image: "/images/pamphlets/poster_1.jpg",
    desc: "समस्त वैदिक सेवाएँ, विशेष अनुष्ठान, सम्पर्क सूत्र एवं राम जानकी महल मंदिर सहसन का पूर्ण विवरण।",
    location: "प्रयागराज, उत्तर प्रदेश"
  },
  {
    id: 2,
    title: "आचार्य शिवांशु तिवारी - साधना एवं ध्यान मुद्रा",
    category: "pandit",
    categoryLabel: "आचार्य जी",
    image: "/images/pandit_real_portrait.jpg",
    desc: "वैदिक जप माला एवं गौमुखी के साथ जप अनुष्ठान एवं आशीर्वाद मुद्रा में आचार्य शिवांशु तिवारी जी।",
    location: "प्रयागराज, उत्तर प्रदेश"
  },
  {
    id: 3,
    title: "विशेष अनुष्ठान एवं क्यों चुनें हमें पत्रिका",
    category: "posters",
    categoryLabel: "आधिकारिक पोस्टर",
    image: "/images/pamphlets/poster_2.jpg",
    desc: "महामृत्युंजय जप, त्रिपिंडी श्राद्ध, सतचंडी, लक्षचंडी एवं वैदिक कर्मकांड विवरण।",
    location: "प्रयागराज"
  },
  {
    id: 4,
    title: "वैदिक महायज्ञ एवं नवग्रह शांति हवन",
    category: "havan",
    categoryLabel: "हवन एवं महायज्ञ",
    image: "/images/pamphlets/image.png",
    desc: "शास्त्रोक्त विधि से कुंड निर्माण, समिधा, घृत एवं औषधियों द्वारा आहुति एवं पूर्णाहुति।",
    location: "प्रयागराज, उत्तर प्रदेश"
  },
];

const categories = [
  { id: 'all', label: 'सभी चित्र एवं पोस्टर' },
  { id: 'posters', label: 'आधिकारिक पत्रिकाएँ (Posters)' },
  { id: 'pandit', label: 'आचार्य जी के चित्र' },
  { id: 'havan', label: 'महायज्ञ एवं हवन' },
  { id: 'rudrabhishek', label: 'रुद्राभिषेक' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-12 bg-gradient-to-b from-[#FFFDF2] via-[#FFF9E6] to-[#FFEEC2] dark:from-darkbg dark:to-darkcard min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-gradient-to-r from-maroon via-red-800 to-maroon text-gold font-hindi text-xs sm:text-sm font-bold py-1.5 px-6 rounded-full shadow-md border border-gold mb-3">
            || ॐ नमः शिवाय || ❖ || श्री गणेशाय नमः || ❖ || जय श्री राम ||
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-maroon dark:text-saffron font-hindi">
            दिव्य अनुष्ठान एवं पोस्टर गैलरी
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-2xl mx-auto text-sm sm:text-base font-medium">
            आचार्य शिवांशु तिवारी जी के पावन सानिध्य में संपन्न हुए प्रमुख यज्ञ, पूजन एवं अधिकृत प्रचार पत्रिकाओं की पावन झलकियां।
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-maroon text-gold shadow-xl border-2 border-gold scale-105'
                  : 'bg-white/90 dark:bg-darkcard text-gray-800 dark:text-gray-200 border-2 border-gold/40 hover:bg-gold/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-darkcard rounded-3xl overflow-hidden shadow-xl border-2 border-gold hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-72 overflow-hidden bg-amber-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-maroon/90 text-gold rounded-full backdrop-blur-sm border border-gold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <ZoomIn size={24} />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-maroon text-gold px-3 py-1 rounded-full text-xs font-bold border border-gold shadow">
                  {item.categoryLabel}
                </div>
              </div>

              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-maroon dark:text-gold font-hindi group-hover:text-red-700 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1.5 line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gold/30 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-maroon dark:text-gold" /> {item.location}
                  </span>
                  <span className="text-maroon dark:text-gold font-bold">क्लिक करें →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-white dark:bg-darkcard max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-gold relative max-h-[95vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-3 bg-maroon text-gold border-b-2 border-gold">
                <span className="text-sm font-bold font-hindi">{selectedImage.title}</span>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-1.5 bg-white/20 text-gold hover:bg-white/30 rounded-full transition"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-auto bg-black flex items-center justify-center p-2">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                />
              </div>

              <div className="p-5 bg-cream dark:bg-darkbg border-t border-gold/30 flex flex-wrap items-center justify-between gap-4">
                <div className="max-w-md">
                  <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                    {selectedImage.desc}
                  </p>
                  <p className="text-xs text-gold font-bold mt-1">
                    📍 {selectedImage.location}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={selectedImage.image}
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="bg-amber-500 hover:bg-gold text-maroon font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow"
                  >
                    <Download size={16} /> चित्र डाउनलोड करें
                  </a>
                  <Link
                    to="/contact"
                    className="bg-maroon hover:bg-red-800 text-gold font-bold px-5 py-2 rounded-xl text-xs transition shadow border border-gold"
                    onClick={() => setSelectedImage(null)}
                  >
                    परामर्श बुक करें →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-maroon via-red-900 to-maroon text-cream rounded-3xl p-8 text-center border-4 border-gold shadow-2xl">
          <div className="text-3xl mb-2">🪔 🕉️ 🪔</div>
          <h2 className="text-2xl sm:text-3xl font-black font-hindi text-gold">
            || आपका विश्वास ही हमारी शक्ति है ||
          </h2>
          <p className="text-cream/90 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            अपने घर अथवा संस्थान में शास्त्रोक्त विधि से सत्यनारायण कथा, रुद्राभिषेक, विवाह अथवा नवग्रह शांति कराने हेतु संपर्क करें।
          </p>
          <div className="mt-6">
            <a
              href="https://wa.me/917668499723?text=%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A3%E0%A4%BE%E0%A4%AE%20%E0%A4%86%E0%A4%9A%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AF%20%E0%A4%9C%E0%A5%80,%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%85%E0%A4%A8%E0%A5%81%E0%A4%B7%E0%A5%8D%E0%A4%A0%E0%A4%BE%E0%A4%A8%20%E0%A4%AC%E0%A5%81%E0%A4%95%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE%20%E0%A4%B9%E0%A5%88।"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gradient-to-r from-amber-400 to-gold text-maroon font-black px-8 py-3.5 rounded-full text-base shadow-xl transition transform hover:scale-105 border-2 border-maroon"
            >
              व्हाट्सएप पर अनुष्ठान तिथि तय करें
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Gallery;
