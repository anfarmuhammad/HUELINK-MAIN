import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      {/* Facebook */}
      <a 
        href="https://facebook.com/hulink" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-600 transition-colors"
        aria-label="Facebook"
      >
        <FaFacebook className="w-5 h-5" />
      </a>

      {/* Twitter */}
      <a 
        href="https://twitter.com/hulink" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition-colors"
        aria-label="Twitter"
      >
        <FaTwitter className="w-5 h-5" />
      </a>

      {/* Instagram */}
      <a 
        href="https://instagram.com/hulink" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-pink-600 transition-colors"
        aria-label="Instagram"
      >
        <FaInstagram className="w-5 h-5" />
      </a>

      {/* LinkedIn */}
      <a 
        href="https://linkedin.com/company/hulink" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-700 transition-colors"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="w-5 h-5" />
      </a>
    </div>
  );
};

export default SocialIcons;