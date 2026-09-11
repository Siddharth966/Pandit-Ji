const Services = () => {
  const detailedServices = [
    { title: 'जन्म कुंडली विश्लेषण', icon: '🔯', items: ['करियर', 'विवाह', 'संतान', 'धन', 'स्वास्थ्य', 'विदेश योग', 'ग्रह दशा एवं महादशा'] },
    { title: 'विवाह योग मिलान', icon: '💑', items: ['गुण मिलान', 'दोष निवारण', 'अनुकूलता जांच'] },
    { title: 'पूजा-पाठ एवं अनुष्ठान', icon: '🙏', items: ['सत्यनारायण कथा', 'गृह प्रवेश', 'विवाह संस्कार', 'रुद्राभिषेक', 'महामृत्युंजय जप', 'नवग्रह शांति'] },
    { title: 'वास्तु परामर्श', icon: '🏠', items: ['घर', 'दुकान', 'फैक्ट्री', 'ऑफिस', 'वास्तु दोष निवारण'] },
    { title: 'ग्रह शांति एवं दोष निवारण', icon: '🪐', items: ['कालसर्प दोष', 'पितृ दोष', 'मंगल दोष', 'शनि शांति', 'राहु-केतु शांति'] },
    { title: 'हस्तरेखा परामर्श', icon: '✋', items: ['व्यक्तित्व', 'भविष्य', 'वैवाहिक जीवन', 'धन योग'] },
    { title: 'विशेष अनुष्ठान', icon: '🏺', items: ['व्यापार वृद्धि', 'संतान प्राप्ति', 'रोग मुक्ति', 'कोर्ट केस में विजय', 'कार्य सिद्धि'] },
  ];

  const specialAnushthan = [
    'महा मृत्युंजय जप', 'त्रिपिंडी श्राद्ध', 'नवचंडी', 'सतचंडी', 'सहस्रचंडी', 'लक्षचंडी', 
    'विवाह', 'रुद्राभिषेक', 'लघुरुद्राभिषेक', 'नमक चमक रुद्राभिषेक', 'महाविद्या पाठ', 
    'श्रीमद्भागवत महापुराण पारायण', 'श्री रामचरित मानस पाठ', 'बगलामुखी जप एवं यज्ञ', 
    'सर्प दोष शांति एवं मंगल दोष शांति'
  ];

  return (
    <div className="py-16 bg-cream dark:bg-darkbg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-maroon dark:text-saffron font-hindi mb-12">हमारी प्रमुख सेवाएँ</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {detailedServices.map((service, index) => (
            <div key={index} className="bg-white dark:bg-darkcard p-8 rounded-xl shadow-lg border-l-4 border-saffron">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold text-maroon dark:text-gold mb-4">{service.title}</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-maroon dark:text-saffron font-hindi mb-8 border-b-2 border-gold pb-2 inline-block">हमारे विशेष अनुष्ठान</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {specialAnushthan.map((item, index) => (
              <div key={index} className="bg-maroon text-cream p-4 rounded-lg text-center font-semibold hover:bg-red-800 transition shadow-md flex items-center justify-center text-sm md:text-base">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;