"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Adjust Zoom for Best Experience
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              For the best viewing experience, please set your browser zoom to <strong>80%</strong>.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h2 className="text-white mb-4 text-3xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-900">
                Hello, I&apos;m{" "}
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Krish Patidar",
                  1000,
                  "Software Engineer",
                  1000,
                  "AI Developer",
                  1000,
                  "Software Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              Passionate about building innovative software solutions that make an impact.
            </p>
            <div>
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=krishpatidar0108@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-400 to-blue-900 hover:bg-slate-200 text-white"
              >
                Hire Me
              </Link>
              <Link
                href="https://drive.google.com/uc?export=download&id=1LD2xn9pzfs_p3KW2L1JA6qNUdT3IDnC3"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 to-blue-900 hover:bg-slate-800 text-white mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] relative">
              <Image
                src="/images/krish_imagee.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={450}
                height={450}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
