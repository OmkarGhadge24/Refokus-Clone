import React from "react";

function Footer() {
  return (
    <div className="max-w-screen-lg mx-auto flex items-center justify-between py-4">
      <div className="w-2/3">
        {[
          "Privacy Policy",
          "Cookie Policy",
          "Impressum",
          "Terms",
          "Webflow Agency",
        ].map((elem,index) => <a href="#" className="text-xs text-zinc-500 mr-5" key={index}>{elem}</a>)}
      </div>
      <img
        src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"
        alt="webflow"
      />
    </div>
  );
}

export default Footer;
