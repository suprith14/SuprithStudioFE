import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0  w-full bg-gray-800 text-white p-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Suprith Studio. All rights reserved.
      </p>
      <p className="text-xs mt-2">Made with ❤️ by Suprith</p>
    </footer>
  );
};

export default Footer;
