import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Daravuthwatna Phorn. All rights
          reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/Daravuthwatna"
            className="hover:text-gray-400"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/daravuthwatna-phorn-276723298/"
            className="hover:text-gray-400"
          >
            <LinkedInIcon />
          </a>
          <a href="t.me/Daravuthwatna" className="hover:text-gray-400">
            <TelegramIcon />
          </a>
          <a href="t.me/Daravuthwatna" className="hover:text-gray-400">
            <EmailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
