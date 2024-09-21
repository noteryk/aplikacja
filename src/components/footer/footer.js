import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-lg text-gray-800">Company Info</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600">About Us</a></li>
              <li><a href="#" className="text-gray-600">Contact</a></li>
              <li><a href="#" className="text-gray-600">Careers</a></li>
              <li><a href="#" className="text-gray-600">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-800">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-600">GDPR Compliance</a></li>
              <li><a href="#" className="text-gray-600">Data Protection</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-800">Features</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600">AI-Powered Tools</a></li>
              <li><a href="#" className="text-gray-600">Real-Time Analytics</a></li>
              <li><a href="#" className="text-gray-600">Intuitive Interface</a></li>
              <li><a href="#" className="text-gray-600">24/7 Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-800">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600">FAQ</a></li>
              <li><a href="#" className="text-gray-600">Documentation</a></li>
              <li><a href="#" className="text-gray-600">Blog</a></li>
              <li><a href="#" className="text-gray-600">Community Forum</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-800">Get In Touch</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600"><i className="fas fa-phone-alt text-blue-500"></i> +1 234 567 890</li>
              <li className="text-gray-600"><i className="fas fa-map-marker-alt text-blue-500"></i> info@yourcompany.com</li>
              <li className="text-gray-600"><i className="fas fa-envelope text-blue-500"></i> +44 123 456 789</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 flex justify-between items-center">
          <p className="text-gray-600">&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
