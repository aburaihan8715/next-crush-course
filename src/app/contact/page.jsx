import React from "react";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import contactImg from "../../../public/contact.png";

const Contact = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mb-4">Let&apos;s Keep in Touch</h1>

      <div className="flex gap-10 items-center">
        <div className="custom-animation-up-down-t1 h-96 flex-1 ">
          <Image
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 33vw"
            className="w-full h-full object-contain"
            src={contactImg}
            alt="contact image"
          />
        </div>

        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
