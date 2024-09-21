const Header = () => {
  return (
      <header className="sticky top-0 flex justify-between items-center p-6 bg-white shadow-md z-50">
          <div className="text-2xl font-bold text-gray-900">MedicalFunc</div>
          <nav className="space-x-6 text-gray-600">
              <a href="#" className="hover:text-gray-900">Home</a>
              <a href="#" className="hover:text-gray-900">Product</a>
              <a href="#" className="hover:text-gray-900">Pricing</a>
              <a href="#" className="hover:text-gray-900">Contact</a>
          </nav>
          <div className="space-x-4">
              <a href="#" className="text-blue-600 hover:underline">Login</a>
              <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Join Us</a>
          </div>
      </header>
  );
}

export default Header;