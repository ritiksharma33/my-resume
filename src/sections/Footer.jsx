import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer py-10 border-t border-white/10">
      <div className="footer-container flex flex-col md:flex-row justify-between items-center gap-5">
        
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <p className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">
            Terms & Conditions
          </p>
        </div>

        {/* Center: Socials */}
        <div className="socials flex items-center gap-4">
          {socialImgs.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              target="_blank" 
              rel="noreferrer" 
              className="icon w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1a1a] border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <img 
                src={social.imgPath} 
                alt={social.name} 
                className="w-5 h-5 object-contain"
              />
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center">
          <p className="text-gray-400 text-sm text-center md:text-end">
            © {new Date().getFullYear()} Ritik Sharma. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;