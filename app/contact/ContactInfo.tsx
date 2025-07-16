import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react'; // Assuming lucide-react for icons

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Welcome Message */}
      <h1 className="text-3xl font-extrabold text-green-900">CONTACT INFO</h1>
      <p className="text-base text-gray-700">Welcome to our Website. We are glad to have you around.</p>
      <div className="h-1 bg-green-700 w-24 mb-6"></div>

      {/* Contact Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone Card */}
        <div className="bg-[#f0f9eb] p-6 rounded-lg shadow-sm flex items-start space-x-4">
          <Phone className="text-green-700 w-6 h-6" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Phone</h2>
            <p className="text-green-700 text-base font-medium">(91) 99658 91999</p>
          </div>
        </div>

        {/* Email Card */}
        <div className="bg-[#f0f9eb] p-6 rounded-lg shadow-sm flex items-start space-x-4">
          <Mail className="text-green-700 w-6 h-6" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Email</h2>
            <p className="text-green-700 text-base font-medium">Email: school@jkkn.org</p>
          </div>
        </div>
      </div>

      {/* Address Card */}
      <div className="bg-[#f0f9eb] p-6 rounded-lg shadow-sm flex items-start space-x-4">
        <MapPin className="text-green-700 w-6 h-6" />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Address</h2>
          <p className="text-gray-700 text-base font-medium leading-relaxed">
          J.K.K.Nattraja Matriculation Higher Secondary School,<br/>
            Thiruvalluvar Nagar,<br/>
            Kumarapalayam - 638 183, Namakkal District,<br/>
            Tamil Nadu
          </p>
        </div>
      </div>
    </div>
  );
} 