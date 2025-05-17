import { FaLinkedin, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Connect With Us Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">
            Connect With Us
          </h2>
          
          <div className="flex justify-center space-x-8 md:space-x-12">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/webentix" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="p-4 bg-white rounded-full shadow-md group-hover:bg-blue-100 transition-colors">
                <FaLinkedin className="text-3xl text-blue-600" />
              </div>
              <span className="mt-2 font-medium">LinkedIn</span>
            </a>
            
            {/* Twitter */}
            <a 
              href="https://twitter.com/webentix" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="p-4 bg-white rounded-full shadow-md group-hover:bg-blue-100 transition-colors">
                <FaTwitter className="text-3xl text-blue-400" />
              </div>
              <span className="mt-2 font-medium">Twitter</span>
            </a>
            
            {/* Facebook */}
            <a 
              href="https://www.facebook.com/webentix" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="p-4 bg-white rounded-full shadow-md group-hover:bg-blue-100 transition-colors">
                <FaFacebook className="text-3xl text-blue-600" />
              </div>
              <span className="mt-2 font-medium">Facebook</span>
            </a>
            
            {/* GitHub */}
            <a 
              href="https://github.com/webentix" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="p-4 bg-white rounded-full shadow-md group-hover:bg-gray-100 transition-colors">
                <FaGithub className="text-3xl text-gray-800" />
              </div>
              <span className="mt-2 font-medium">GitHub</span>
            </a>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm md:text-base">
                © 2025 Webentix. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/company/webentix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="https://twitter.com/webentix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a 
                href="https://www.facebook.com/webentix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a 
                href="https://github.com/webentix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
