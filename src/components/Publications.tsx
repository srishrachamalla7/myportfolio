import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Utilization of Chest X-rays for Pneumonia Prediction",
      link: "https://advancedengineeringsciences.com/pdf/4-Dec.pdf"
    },
    {
      title: "Cyberbullying Detection using Machine Learning",
      link: "https://ijrar.org/papers/IJRAR23B3336.pdf"
    }
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-12 gradient-text text-center">Publications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {publications.map((pub, index) => (
          <motion.a
            key={pub.title}
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card group flex items-start gap-4 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] border border-transparent hover:border-purple-500/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
                {pub.title}
              </h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Publications;