import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "रमेश कुमार", location: "प्रयागराज", text: "पंडित जी ने मेरी कुंडली देखकर जो उपाय बताए, उससे मेरे बिजनेस में बहुत फायदा हुआ। बहुत ही ज्ञानी हैं।", rating: 5 },
    { name: "सुनीता देवी", location: "वाराणसी", text: "मेरे बेटे के विवाह में रुकावट आ रही थी। पंडित जी ने पूजा कराई और अब सब कुछ ठीक हो गया। धन्यवाद।", rating: 5 },
    { name: "अमित शर्मा", location: "कानपुर", text: "घर में वास्तु दोष था। पंडित जी ने सिंपल उपाय बताए जो बहुत असरदार थे। जरूर संपर्क करें।", rating: 5 },
  ];

  return (
    <section className="py-20 bg-cream dark:bg-darkbg transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-maroon dark:text-saffron font-hindi inline-block border-b-4 border-gold pb-2">
            हमारे ग्राहक क्या कहते हैं
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">सटीक मार्गदर्शन और उपायों के लिए हज़ारों लोगों का विश्वास।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white dark:bg-darkcard p-8 rounded-2xl shadow-lg border-t-4 border-saffron relative group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Quote className="absolute top-4 right-4 text-saffron/20 group-hover:text-saffron/40 transition-colors" size={60} />
              
              <div className="flex text-gold mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 italic mb-6 relative z-10">
                "{review.text}"
              </p>
              
              <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                <h4 className="font-bold text-maroon dark:text-cream">{review.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;