import Image from "next/image";
import React from "react";

const newDate = new Date();
const year = newDate.getFullYear().toString();

const Footer = () => {
  return (
    <footer className="flex justify-between items-center pb-3">
      <div>&copy; {year}, All right reserved by XYZ company.</div>

      <div className="flex gap-2">
        <Image src="/1.png" width={24} height={24} alt="facebook" />
        <Image src="/2.png" width={24} height={24} alt="instagram" />
        <Image src="/3.png" width={24} height={24} alt="twitter" />
        <Image src="/4.png" width={24} height={24} alt="youtube" />
      </div>
    </footer>
  );
};

export default Footer;
