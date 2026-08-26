import { useState } from 'react';

const faqs = [
  {
    question: "Do you accept story submissions?",
    answer: "Lorem ipsum dolor sit amet consectetur. Egestas volutpat eget proin egestas. Condimentum tellus malesuada magna ultricies neque. Eget egestas vitae tellus amet sapien id cursus id aliquet. Amet sit ante fermentum aliquam pulvinar eleifend. Dolor rutrum nunc pharetra curabitur sapien. Ipsum donec augue cursus"
  },
  {
    question: "Can I collaborate on a production?",
    answer: "Lorem ipsum dolor sit amet consectetur. Egestas volutpat eget proin egestas. Condimentum tellus malesuada magna ultricies neque. Eget egestas vitae tellus amet sapien id cursus id aliquet. Amet sit ante fermentum aliquam pulvinar eleifend. Dolor rutrum nunc pharetra curabitur sapien. Ipsum donec augue cursus"
  },
  {
    question: "How can I participate in the Humachines Making Films Challenge?",
    answer: "Lorem ipsum dolor sit amet consectetur. Egestas volutpat eget proin egestas. Condimentum tellus malesuada magna ultricies neque. Eget egestas vitae tellus amet sapien id cursus id aliquet. Amet sit ante fermentum aliquam pulvinar eleifend. Dolor rutrum nunc pharetra curabitur sapien. Ipsum donec augue cursus"
  },
  {
    question: "How can I partner on a festival or experience?",
    answer: "Lorem ipsum dolor sit amet consectetur. Egestas volutpat eget proin egestas. Condimentum tellus malesuada magna ultricies neque. Eget egestas vitae tellus amet sapien id cursus id aliquet. Amet sit ante fermentum aliquam pulvinar eleifend. Dolor rutrum nunc pharetra curabitur sapien. Ipsum donec augue cursus"
  },
  {
    question: "How do I stay informed about new initiatives?",
    answer: "Lorem ipsum dolor sit amet consectetur. Egestas volutpat eget proin egestas. Condimentum tellus malesuada magna ultricies neque. Eget egestas vitae tellus amet sapien id cursus id aliquet. Amet sit ante fermentum aliquam pulvinar eleifend. Dolor rutrum nunc pharetra curabitur sapien. Ipsum donec augue cursus"
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 mt-20 overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center mix-blend-screen">
        <svg width="100%" height="100%" viewBox="0 0 1440 872" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-w-[1440px] w-full h-auto">
          <path fillRule="evenodd" clipRule="evenodd" d="M1529.41 1386.31C1529.41 1386.31 1257.16 1247.29 966.556 1466.79C675.957 1686.29 606.602 1142.67 383.351 1142.67C160.099 1142.67 38.5861 1386.31 38.5861 1386.31L-60.0001 395.277C-60.0001 395.277 21.6774 237.971 302.82 38.5938C583.962 -160.783 837.019 477.223 1080.33 477.223C1323.64 477.223 1581 4.93738 1581 4.93738L1529.41 1386.31Z" fill="#1A237E" fillOpacity="0.3"/>
        </svg>
      </div>

      <div className="relative z-10 mx-[5%] md:mx-[10%]">
        <div className="mb-12">
          <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">
            Frequently Asked Questions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Quick Answers
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border border-white/20 rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'bg-white/15' : 'bg-white/10 hover:bg-white/15'
                }`}
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                >
                  <span className="text-white font-bold text-[17px] pr-8">
                    {faq.question}
                  </span>
                  <span className="text-white/80 text-2xl font-light leading-none">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-white/80 text-[15px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
