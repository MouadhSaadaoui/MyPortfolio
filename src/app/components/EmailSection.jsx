"use client";
import React from "react";
import MailIcon from "../../../public/emaill.svg"; // Make sure you have a mail icon
import GithubIcon from "../../../public/github-icon.svg"; // Correct import for GitHub icon
import LinkedinIcon from "../../../public/linkedin-icon.svg"; 
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Open to new opportunities! Drop me a message anytime, and I&apos;ll
          get back to you as soon as i can!
        </p>
        <div className="socials flex flex-row gap-2">
  <Link href="https://github.com/MouadhSaadaoui" legacyBehavior>
    <a target="_blank" rel="noopener noreferrer">
      <Image src={GithubIcon} alt="Github Icon" />
    </a>
  </Link>
  <Link href="https://www.linkedin.com/in/saadaoui-mouadh/" legacyBehavior>
    <a target="_blank" rel="noopener noreferrer">
      <Image src={LinkedinIcon} alt="Linkedin Icon" />
    </a>
  </Link>
  <Link href="mailto:saadaoui.mouadh@esprit.tn" legacyBehavior>
    <a>
      <Image src={MailIcon} alt="Mail Icon" />
    </a>
  </Link>
</div>


      </div>
    </section>
  );
};

export default EmailSection;
