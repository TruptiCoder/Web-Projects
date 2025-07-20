import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ScrollTrigger } from "gsap/all";

export const Skills = () => {

  const [skills, setSkills] = useState([
    { name: "HTML", img: "skills/html-5.png" },
    { name: "CSS", img: "skills/css-3.png" },
    { name: "JavaScript", img: "skills/js.png" },
    { name: "Node.js", img: "skills/nodejs.png" },
    { name: "Express.js", img: "skills/express.png" },
    { name: "React.js", img: "skills/react.png" },
    { name: "Three.js", img: "skills/three.png" },
    { name: "Java", img: "skills/java.png" },
    { name: "Python", img: "skills/python.png" },
    { name: "Data Structures", img: "skills/dsa.png" },
    { name: "MongoDB", img: "skills/mongodb.png" },
    { name: "MySQL", img: "skills/mySql.png" },
    { name: "DBMS", img: "skills/dbms.png" },
    { name: "Git & Github", img: "skills/git.png" },
    { name: "Machine Learning", img: "skills/ml.png" },
    { name: "IOT", img: "skills/iot.png" },
    { name: "Figma", img: "skills/figma.png" },
    { name: "Rest APIs", img: "skills/api.png" },
    { name: "Tailwind CSS", img: "skills/tailwind.png" },
    { name: "Bootstrap", img: "skills/bootstrap.png" },
    { name: "OpenCV", img: "skills/opencv.png" },
    { name: "Socket.io", img: "skills/socket.png" },
  ]);

  return (
    <div
      id="skills"
      className="w-screen h-screen flex flex-col items-center gap-5 p-20"
    >
      <h3 className="text-3xl font-bold pb-10">My Skills</h3>

      <ul className="skills flex gap-5 flex-wrap">
        {skills.map((curr, key) => (
          <motion.li
            initial={{ translateY: 50, opacity: 0}}
            whileInView={{ translateY: 0, opacity: 1}}
            transition={{duration: 1}}
            key={key}
          >
            <img src={curr.img} />
            {curr.name}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
