import { Award, Users, Flame, Clock } from 'lucide-react';

const Stats = () => {
  const statsData = [
    { icon: <Award size={40} />, value: "10+", label: "वर्षों का अनुभव", color: "text-saffron" },
    { icon: <Users size={40} />, value: "5,000+", label: "प्रसन्न ग्राहक", color: "text-gold" },
    { icon: <Flame size={40} />, value: "5,000+", label: "पूजा-पाठ संपन्न", color: "text-orange-500" },
    { icon: <Clock size={40} />, value: "24/7", label: "सहायता", color: "text-green-600" },
  ];

  return (
    <section className="py-12 bg-maroon dark:bg-darkcard border-y-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-3 transform transition duration-300 hover:scale-110">
              <div className={`${stat.color} bg-white dark:bg-darkbg p-4 rounded-full shadow-lg`}>
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-cream">{stat.value}</h3>
              <p className="text-sm md:text-base text-saffron font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;