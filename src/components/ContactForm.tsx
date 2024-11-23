import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Send, Calendar } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    // Load TidyCal script
    const script = document.createElement('script');
    script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://hook.eu2.make.com/kvyt1r3pwxb2o2u3fv5l167108soovww',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="py-20" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 gradient-text text-center">
          Let's Connect
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] border border-transparent hover:border-purple-500/50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 dark:text-gray-600 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700/50 dark:bg-gray-100 border border-gray-600 dark:border-gray-300 text-white dark:text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 dark:text-gray-600 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700/50 dark:bg-gray-100 border border-gray-600 dark:border-gray-300 text-white dark:text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 dark:text-gray-600 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700/50 dark:bg-gray-100 border border-gray-600 dark:border-gray-300 text-white dark:text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full gradient-border px-8 py-3 rounded-lg bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-900 flex items-center justify-center gap-2 hover:bg-gray-700 dark:hover:bg-white transition-colors"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col space-y-6"
          >
            <div className="card hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] border border-transparent hover:border-purple-500/50">
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                About Me
              </h3>
              <p className="text-gray-300 dark:text-gray-600 mb-6">
                AI and tech innovator from Hyderabad, India. Currently working
                as a Jr Data Scientist at Spearsoft, developing AI-powered
                systems to streamline business operations.
              </p>
              <a
                href="/path-to-your-resume.pdf"
                download
                className="gradient-border w-full px-8 py-3 rounded-lg bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-900 flex items-center justify-center gap-2 hover:bg-gray-700 dark:hover:bg-white transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>

            <div className="card hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] border border-transparent hover:border-purple-500/50">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-purple-400" />
                <h3 className="text-xl font-semibold gradient-text">
                  Schedule a Meeting
                </h3>
              </div>
              <div className="tidycal-embed" data-path="srishrachamalla"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;