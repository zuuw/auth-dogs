import { Link } from 'lucide-react'
import React from 'react'

export default function aboutus() {
  return (
    <div className="max-w-4xl mx-auto p-6">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
    <p className="text-gray-600 mb-6">Dum's Dog Daycare is dedicated to providing a safe, fun, and enriching environment for your furry friends. Our professional team ensures top-quality care while you’re away.</p>
    <h2 className="text-xl font-semibold text-gray-700 mt-4">Why Choose Us?</h2>
    <ul className="list-disc pl-6 text-gray-600">
      <li>Experienced and caring staff</li>
      <li>Safe and clean environment</li>
      <li>Fun activities and socialization</li>
      <li>Flexible drop-off and pick-up hours</li>
    </ul>
    <p className="mt-6 text-gray-600">We believe every dog deserves love, attention, and playtime. Come visit us and see why we're the best choice for your pet!</p>
    <Link href="/contact">
      <span className="inline-block mt-4 text-blue-600 hover:underline">Get in Touch</span>
    </Link>
  </div>
  )
}
