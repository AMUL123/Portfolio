import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, level: "w-[90%]" },
    { name: "CSS", icon: <FaCss3Alt />, level: "w-[85%]" },
    { name: "React", icon: <FaReact />, level: "w-[80%]" },
    { name: "Node.js", icon: <FaNodeJs />, level: "w-[75%]" },
    { name: "Tailwind", icon: <SiTailwindcss />, level: "w-[85%]" },
    { name: "MongoDB", icon: <SiMongodb />, level: "w-[70%]" },
  ];

  return (
    <section className="bg-gray-900 text-white py-16" id="about">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          About Me
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left: Introduction */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-white/90 leading-relaxed">
              Hey there! 👋 I'm a dedicated web developer passionate about building 
              dynamic and user-friendly websites. With experience in front-end, back-end, 
              and cloud services, I aim to create impactful digital solutions.
            </p>
            <p className="text-lg text-white/80">
              I thrive on challenges, consistently improving my skills with new technologies. 
              My goal is to develop solutions that are fast, secure, and scalable. 🚀
            </p>
          </div>

          {/* Right: Skills Section */}
          <div className="space-y-4 animate-slide-in">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-yellow-400">{skill.level.replace('w-[', '').replace('%]', '%')}</span>
                </div>
                <div className="w-full bg-gray-700 h-3 rounded-md overflow-hidden">
                  <div
                    className={`bg-yellow-400 h-full transition-all duration-500 ${skill.level}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
