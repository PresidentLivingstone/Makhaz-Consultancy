import React, { useState } from 'react';
import toast from 'react-hot-toast';
import '../styles/animations.css';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    const file = formData.get('file') as File;
    if (file && file.size > 5 * 1024 * 1024) {
      toast.error('File size exceeds the 5 MB limit');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/940892c9293a370782e88104cc7c9eca', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="space-y-6 animate-fade-in"
    >
      <div className="grid grid-cols-1 gap-6">
        <input
          type="text"
          name="name"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 animate-focus-field"
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          name="email"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 animate-focus-field"
          placeholder="Email Address"
          required
        />
        <input
          type="number"
          name="phone"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 animate-focus-field"
          placeholder="Enter phone no."
          required
        />
      </div>

      <textarea
        name="message"
        rows={10}
        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 animate-focus-field"
        placeholder="Write your Message."
        required
      ></textarea>

      {['1', '2', '3'].map((num, index) => (
        <div 
          key={num} 
          className="space-y-1 animate-slide-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <label htmlFor={`program${num}`} className="block text-sm font-medium text-gray-700">
            Program {num}:
          </label>
          <input
            type="text"
            id={`program${num}`}
            name={`program${num}`}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 animate-focus-field"
            placeholder={`Enter ${['first', 'second', 'third'][Number(num)-1]} program`}
            required
          />
        </div>
      ))}

      <div className="space-y-1 animate-slide-in" style={{ animationDelay: '0.3s' }}>
        <label htmlFor="file" className="block text-sm font-medium text-gray-700">
          File A-level result:
        </label>
        <input
          type="file"
          id="file"
          name="file"
          accept=".pdf,.jpg,.png,.doc,.docx"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#1e3a8a] text-white py-3 px-4 rounded-md hover:bg-blue-900 transition-colors font-medium disabled:opacity-50 animate-button-hover"
      >
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
};

export default ContactForm;