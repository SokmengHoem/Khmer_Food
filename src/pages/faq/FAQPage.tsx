import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

const faqs = [
  {
    question: "Where are your products made?",
    answer: "All Rib Rack products are made in Khmer.",
  },
  {
    question: "Can I buy your products online?",
    answer: "Yes! While we don't sell directly to consumers through our website, you can buy Rib Rack products from Food Panda.",
  },
  {
    question: "Is your packaging recyclable?",
    answer: "All of our bottles - both glass and plastic - are recyclable. Just be sure to rinse them well before recycling.",
  },
  {
    question: "Do your products contain any of the FDA's Top 8 allergens (milk, eggs, fish, shellfish, treenuts, peanuts, wheat, soy)?",
    answer: "We are required by the FDA to disclose the presence of any of the Top 8 allergens on our labels directly below the ingredient statement. Some of our products (i.e. Marinades) contain Soy and this allergen is indicated both on the label and on the Product Detail page of this website.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <section>
        <h1 className="text-lg tracking-widest text-center mt-20">
          <span className="border-t-2 border-b-2 border-yellow-500">QUESTIONS</span>
        </h1>
        <div className='text-center text-2xl mb-7'>
          <h1>Frequently Asked Questions</h1>
        </div>
      </section>
      
      <section>
        <div className="max-w-2xl mx-auto mt-10">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-4 bg-gray-100 rounded-lg  flex justify-between items-center"
              >
                <span>{faq.question}</span>
                {openIndex === index ? <FaAngleUp className="transition-transform duration-300 rotate-180" /> : <FaAngleDown className="transition-transform duration-300 rotate-0" />}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-white border border-gray-200 rounded-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
