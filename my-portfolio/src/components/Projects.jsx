import React, { useState } from "react";
import { motion } from "motion/react";

export const Projects = () => {

  const [project, setProjects] = useState([
    {
      name: "Chat-App",
      img: "projects/chat-app.png",
      desc: "This is a real-time chat application that lets users sign up, log in, and instantly connect with others. It supports live messaging with a smooth and responsive interface. Users can enjoy secure and seamless one-on-one conversations in real time.",
      skills: ["React.js", "Node.js", "Express.js", "Socket.io", "CSS", "JavaScript", "MongoDB", "Rest APIs"]
    },
    {
      name: "Hotel Renting App",
      img: "projects/wanderlust.png",
      desc: "This app is a hotel rental platform where property owners can list their hotels, and users can explore a variety of stays. Guests can view properties with location, price, and detailed descriptions, then book the perfect stay. The app includes user authentication and allows users to leave reviews for listed properties.",
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "MonogDB", "Express.js", "e.js", "Rest APIs", "Bootstrap"]
    },
    {
      name: "Driver Safety Module",
      img: "projects/driver-safety.jpg",
      desc: "This project is a driver safety system that detects drowsiness by monitoring eye closure, yawning, and head tilt using facial landmarks. When signs of fatigue are detected, the system triggers alerts to prevent accidents. It aims to enhance road safety by ensuring drivers remain attentive and awake while driving.",
      skills: ["IOT", "Machine Learning", "Python", "RaspberryPi", "OpenCV", "Mediapipe"]
    }
  ])

  return (
    <div id="projects" className="w-screen p-20 text-center">
      <h3 className="text-3xl font-bold pb-10">My Projects</h3>

      <div className="w-full h-[90%] flex gap-10 flex-col items-center">

        {
          project.map((curr, key) => 
            <div key={key} className="p-card w-full h-full flex justify-center items-center">
              <motion.img
                className="object-center w-[50%] object-cover rounded-xl border-1 border-blue-500"
                initial={{translateX: -50, opacity: 0}}
                whileInView={{translateX: 0, opacity: 1}}
                transition={{duration: 1}}
                src={curr.img}
              />
              <div className="desc p-10 text-start flex flex-col items-center justify-center">
                <h4 className="text-2xl font-bold">{curr.name}</h4>
                <p className="text-xl">
                  {curr.desc}
                </p>
                <ul className="flex flex-wrap">
                  {curr.skills.map((skill, i) => 
                    <motion.li initial={{scale: 0, opacity: 0}} whileInView={{opacity: 1, scale: 1}} className="tag" key={i}>{skill}</motion.li>
                  )}
                </ul>
              </div>
            </div>
          )
        }

      </div>
    </div>
  );
};
