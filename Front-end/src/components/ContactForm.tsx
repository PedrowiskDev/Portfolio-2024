import React from 'react';
import { Roboto_Mono } from 'next/font/google';

const Roboto_font = Roboto_Mono({ subsets: ['latin'] });

const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className={` text-white text-4xl md:text-5xl font-bold ${Roboto_font.className} text-shadow-lg mb-8`}>
        Vamos conversar?
      </h1>
      <div className="w-full max-w-lg p-8">
        <form
          action="https://formspree.io/f/xldrnzjy"
          method="POST"
          className="glass-effect shadow-md rounded p-6"
        >
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              Seu Nome
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Seu Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="message"
            >
              Mensagem
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
