import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Send, Check } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const showDownloadToast = () => {
    toast.custom((t) => (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3"
      >
        <Check className="w-5 h-5" />
        <span>Thanks for downloading!</span>
      </motion.div>
    ));
  };

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
        toast.custom((t) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3"
          >
            <Check className="w-5 h-5" />
            <span>Message sent successfully!</span>
          </motion.div>
        ));
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1cC_F_wNK7hDwPxFC8XF_TWwhQ0vLeVze'; // Updated the resuem 
    link.download = 'Srish_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showDownloadToast();
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
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full gradient-border px-8 py-3 rounded-lg bg-gray-800 text-white flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] border border-transparent hover:border-purple-500/50 flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                About Me
              </h3>
              <p className="text-gray-300 mb-6">
                AI and tech innovator from Hyderabad, India. Currently working
                as a Jr Data Scientist at Spearsoft, developing AI-powered
                systems to streamline business operations.
              </p>
            </div>
            <button
              onClick={handleDownload}
              className="gradient-border w-full px-8 py-3 rounded-lg bg-gray-800 text-white flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </motion.div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </section>
  );
};

export default ContactForm;