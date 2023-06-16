import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

// Social links
const socialLinks = [
  { icon: <FaFacebook size={30} /> },
  { icon: <FaTwitter size={30} /> },
  { icon: <FaPinterest size={30} /> },
  { icon: <FaInstagram size={30} /> },
];

const Footer = () => {
  return (
    <div className="w-full h-62 bg-[#0e0a11]">
      <div className="max-w-[1200px] px-8 mx-auto py-16">
        <div className="flex-col md:flex items-center justify-center">
          <div className="grid md:grid-cols-3">
            {/* for logo */}
            <div className="flex justify-center">
              <h1 className="text-white text-4xl font-bold">Shortly</h1>
            </div>

            {/* for links */}
            <div className="md:flex justify-center gap-10 text-white text-center">
              <div className="flex justify-center">
                <ul>
                  <p className="font-bold mb-6">Features</p>
                  <li>Link Shortening</li>
                  <li>Branded Links</li>
                  <li>Analytics</li>
                </ul>
              </div>

              <div className="flex justify-center">
                <ul>
                  <p className="font-bold mb-6">Resources</p>
                  <li>Blog</li>
                  <li>Developers</li>
                  <li>Support</li>
                </ul>
              </div>

              <div className="flex justify-center">
                <ul>
                  <p className="font-bold mb-6">Company</p>
                  <li>About</li>
                  <li>Our Team</li>
                  <li>Careers</li>
                </ul>
              </div>
            </div>

            {/* for social icons */}

            <ul className="flex py-10 md:py-0 justify-center gap-5">
              {socialLinks.map((social, index) => (
                <li
                  className="text-white hover:text-cyan-300 transition duration-300"
                  key={index}
                >
                  {social.icon}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
