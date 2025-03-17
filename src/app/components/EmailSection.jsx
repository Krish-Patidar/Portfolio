"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !subject || !message) {
      alert("All fields are required!");
      return;
    }

    // Open Gmail with pre-filled details
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=krishpatidar0108@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;

    window.open(mailtoLink, "_blank");
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently open to new opportunities and always happy to
          connect! Whether you have a question, a collaboration idea, or just
          want to say hello, feel free to reach out—I’ll do my best to respond!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Krish-Patidar">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/krish-patidar01/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>

      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's Connect!"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Hey there! Whether you have a question, an opportunity, or just want to say hi, feel free to reach out. Looking forward to chatting with you!"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
