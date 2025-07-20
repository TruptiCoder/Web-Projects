import React from "react";
import { easeInOut, motion } from "motion/react";

export const Home = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if(element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  }

  return (
    <div id="home" className="w-screen h-screen relative p-20 pr-50">
      <motion.div
        initial={{ opacity: 0, translateY: "-1rem" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        className="w-full h-full flex flex-col justify-center text-2xl"
      >
        <p>Hello,</p>
        <motion.h1 className="text-blue-500 text-5xl font-bold pb-5" whileHover={{textShadow: '2px 2px blue'}}>I'm Trupti Balbudhe</motion.h1>
        <p>Turning ideas into immersive code worlds</p>
        <p>
          I'm a web developer specializing in building exceptional digital
          experiences.
        </p>
        <motion.a
          className="border border-blue-500 px-5 py-3 rounded-3xl text-sm mt-10 w-fit shadow-md shadow-blue-600"
          whileHover={{backgroundColor: "royalblue"}}
          whileTap={{scale: 0.9}}
          href="resume.pdf"
          download="Trupti_Balbudhe.pdf"
        >
          Download My Resume
        </motion.a>
      </motion.div>

      <ul className="links absolute right-20 bottom-10 flex flex-col gap-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection('home')}
        >
          Home
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection('skills')}
        >
          My Skills
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection('projects')}
        >
          My Projects
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection('about')}
        >
          About Me
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection('contact')}
        >
          Contact Me
        </motion.button>
      </ul>
    </div>
  );
};
