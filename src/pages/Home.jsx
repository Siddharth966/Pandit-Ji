import Hero from '../components/Hero';
import PanchangWidget from '../components/PanchangWidget';
import Stats from '../components/Stats';
import Services from '../components/Services';
import RashiGuide from '../components/RashiGuide';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <PanchangWidget />
      <Stats />
      <Services />
      <RashiGuide />
      <WhyChooseUs />
      <Testimonials />
      
      <section className="relative py-16 bg-gradient-to-r from-maroon via-red-900 to-maroon overflow-hidden border-t-4 border-gold">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="text-4xl mb-3">🕉️</div>
          <h2 className="text-3xl md:text-5xl font-bold text-cream mb-4 font-hindi drop-shadow-md">
            समस्या कोई भी हो... समाधान जरूर है!
          </h2>
          <p className="text-saffron mb-8 text-lg md:text-xl font-medium">
            सटीक वैदिक मार्गदर्शन एवं दोष निवारण के लिए आज ही परामर्श बुक करें।
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:7668499723" 
              className="inline-block bg-saffron hover:bg-gold text-maroon px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,153,51,0.5)] hover:shadow-[0_0_30px_rgba(255,153,51,0.8)] transition-all duration-300 transform hover:scale-105"
            >
              अभी कॉल करें: 7668499723
            </a>
            <Link
              to="/contact"
              className="inline-block bg-white/10 hover:bg-white/20 text-cream border-2 border-gold px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              ऑनलाइन विवरण भेजें →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;