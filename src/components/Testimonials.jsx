import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "रमेश कुमार", location: "प्रयागराज, उत्तर प्रदेश", text: "पंडित जी ने मेरी कुंडली देखकर जो उपाय बताए, उससे मेरे बिजनेस में बहुत फायदा हुआ। बहुत ही ज्ञानी हैं।", rating: 5 },
    { name: "सुनीता देवी", location: "वाराणसी, उत्तर प्रदेश", text: "मेरे बेटे के विवाह में रुकावट आ रही थी। पंडित जी ने पूजा कराई और अब सब कुछ ठीक हो गया। धन्यवाद।", rating: 5 },
    { name: "अमित शर्मा", location: "कानपुर, उत्तर प्रदेश", text: "घर में वास्तु दोष था। पंडित जी ने सिंपल उपाय बताए जो बहुत असरदार थे। जरूर संपर्क करें।", rating: 5 },
    { name: "विक्रम सिंह", location: "जयपुर, राजस्थान", text: "कोर्ट केस में लंबे समय से फंसा था। पंडित जी के बताए उपायों और पूजा से केस में विजय प्राप्त हुई। हृदय से आभार।", rating: 5 },
    { name: "मीना जोशी", location: "मुंबई, महाराष्ट्र", text: "मेरी तबीयत बहुत खराब रहती थी। महामृत्युंजय जप के बाद मेरी सेहत में अद्भुत सुधार हुआ है। पंडित जी का बहुत-बहुत धन्यवाद।", rating: 5 },
    { name: "राजेश गुप्ता", location: "नई दिल्ली", text: "नौकरी में काफी परेशानी आ रही थी और प्रमोशन रुक गया था। पंडित जी की सलाह से ग्रह शांति कराई और अब सब ठीक है।", rating: 5 },
    { name: "अंजलि वर्मा", location: "बैंगलोर, कर्नाटक", text: "संतान प्राप्ति के लिए हमने पंडित जी से संपर्क किया। उनके मार्गदर्शन और अनुष्ठान से हमें पुत्र रत्न की प्राप्ति हुई।", rating: 5 },
    { name: "सुरेश पटेल", location: "अहमदाबाद, गुजरात", text: "आर्थिक तंगी से गुजर रहे थे। पंडित जी ने कुंडली देखकर जो रत्न और उपाय बताए, उससे मेरी आर्थिक स्थिति सुधर गई।", rating: 5 },
    { name: "नेहा मिश्रा", location: "लखनऊ, उत्तर प्रदेश", text: "विवाह में देरी हो रही थी। पंडित जी ने गुण मिलान और दोष निवारण किया। अब मेरा विवाह बहुत अच्छे परिवार में तय हो गया है।", rating: 5 },
  ];

  // मार्की को बिना रुके चलाने के लिए हमने रिव्यूज़ को दोगुना (Duplicate) कर दिया है
  const marqueeReviews = [...reviews, ...reviews];

  return (
    <section className="py-20 bg-cream dark:bg-darkbg transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-maroon dark:text-saffron font-hindi inline-block border-b-4 border-gold pb-2">
            हमारे ग्राहक क्या कहते हैं
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            सटीक मार्गदर्शन और उपायों के लिए देश भर के हज़ारों लोगों का विश्वास।
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">
        
        {/* Left Fade Effect (ताकि कार्ड्स बाएँ से धीरे-धीरे गायब हों) */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-cream dark:from-darkbg to-transparent z-10 pointer-events-none"></div>
        
        {/* Right Fade Effect (ताकि कार्ड्स दाएँ से धीरे-धीरे गायब हों) */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-cream dark:from-darkbg to-transparent z-10 pointer-events-none"></div>

        {/* Moving Track */}
        <div className="flex gap-6 w-max animate-marquee group-hover:[animation-play-state:paused]">
          {marqueeReviews.map((review, index) => (
            <div 
              key={index} 
              className="w-[320px] sm:w-[380px] bg-white dark:bg-darkcard p-6 rounded-2xl shadow-lg border-t-4 border-saffron relative flex flex-col justify-between flex-shrink-0"
            >
              <Quote className="absolute top-4 right-4 text-saffron/20" size={50} />
              
              <div>
                <div className="flex text-gold mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 italic mb-6 relative z-10 text-sm leading-relaxed">
                  "{review.text}"
                </p>
              </div>
              
              <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-auto">
                <h4 className="font-bold text-maroon dark:text-cream">{review.name}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                  <span>📍</span> {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;