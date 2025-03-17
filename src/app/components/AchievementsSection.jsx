"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import AnimatedNumbers to prevent SSR issues
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  { metric: "Projects", value: "9", postfix: "+" },
  { metric: "Hackathons", value: "9", postfix: "+" },
  { metric: "Dept. Topper (Sem)", value: "3", postfix: "" },
  { metric: "CGPA", value: "8.52", postfix: "+" },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              <AnimatedNumbers
                includeComma
                animateToNumber={parseFloat(achievement.value)} // Use parseFloat for decimal values
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(_, i) => ({
                  mass: 1,
                  friction: 100,
                  tension: 140 * (i + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
