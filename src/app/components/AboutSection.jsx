"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, AnimatePresence } from "framer-motion";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Cloud Platforms: AWS, GCP, Azure</li>
        <li>DevOps Tools: Kubernetes, Docker, Jenkins, Terraform</li>
        <li>Programming: Spring boot angular hhh Python, Bash, Java, JavaScript</li>
        <li>Monitoring: Prometheus, Grafana</li>
        <li>Version Control: Git, GitHub, GitLab</li>
        <li>Build Tools: Maven, npm</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Cloud Computing and DevOps Student, ESPRIT School of Engineering (2020 - Present)</li>
        <li>Specialization in Cloud Infrastructure, CI/CD, and Containerization</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a href="https://www.cloudskillsboost.google/public_profiles/e0074752-d021-42e4-ad65-422deb1d3d9b/badges/10987087" target="_blank" rel="noopener noreferrer" className="text-purple-500 ">
            Google Cloud: Implement DevOps Workflows
          </a>
        </li>
        <li>
          <a href="https://www.cloudskillsboost.google/public_profiles/e0074752-d021-42e4-ad65-422deb1d3d9b/badges/13112930" target="_blank" rel="noopener noreferrer" className="text-purple-500 ">
          Google Cloud Fundamentals: Core Infrastructure 
          </a>
        </li>
        <li>
        <a href="https://coursera.org/share/6da08df4ac4afdf17031b9dc4491781c" target="_blank" rel="noopener noreferrer" className="text-purple-500 ">
            Introduction to Microsoft Azure Cloud Services
          </a>
        </li>
        <li>
          <a href="https://coursera.org/share/b9f9bafc609ebd4ad63aaf31c4443294" target="_blank" rel="noopener noreferrer" className="text-purple-500">
            Microsoft Azure Management Tools and Security Solutions
          </a>
        </li>
        <li>
          <a href="https://coursera.org/share/6b15db5c734a28e024985d6d59e5043a" target="_blank" rel="noopener noreferrer" className="text-purple-500">
            Microsoft Azure Services and Lifecycles
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.png" width={1000} height={1000} alt="about me" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a Cloud Engineering student specializing in deploying and automating cloud infrastructures, CI/CD pipelines, and containerization workflows. 
  With hands-on experience in tools like Kubernetes, Docker, Terraform, and Google Cloud Platform, I am passionate about solving complex challenges 
  and optimizing cloud-native applications. I thrive in collaborative environments and continuously seek to expand my technical skills.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
  <AnimatePresence mode="wait">
    <motion.div
      key={tab}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 0.3 }}
    >
      {TAB_DATA.find((t) => t.id === tab).content}
    </motion.div>
  </AnimatePresence>
</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
