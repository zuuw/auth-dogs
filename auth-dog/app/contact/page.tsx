import React from 'react'

export default function contact() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-6">Have questions? We'd love to hear from you! Reach out using the form below or visit us in person.</p>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md" />
        <textarea placeholder="Your Message" className="w-full p-3 border rounded-md h-32"></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Send Message</button>
      </form>
    </div>
  )
}
