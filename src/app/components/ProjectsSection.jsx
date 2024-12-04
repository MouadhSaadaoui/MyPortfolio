"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "CI/CD Pipeline Automation with Jenkins",
    description: "Streamlined testing and deployment processes using Jenkins and Docker.",
    image: "/images/jenkins.png",
    tag: ["All", "DevOps"],
    gitUrl: "https://github.com/siwar15/projet_foyer/tree/reservation-management",
    previewUrl: "https://jenkins-project.example.com",
  },
  {
    id: 2,
    title: "AWS Infrastructure Automation with Terraform",
    description:
      "Automated AWS deployments with Terraform and GitLab CI/CD, ensuring high availability and security.",
    image: "/images/terraform.png",
    tag: ["All", "Cloud"],
    gitUrl: "https://gitlab.com/saadaoui.mouadh/mouaadhcicdtf.git",
    previewUrl: "https://aws-automation.example.com",
    tools: ["AWS", "Terraform", "GitLab CI/CD"],
  },
  {
    id: 3,
    title: "Private Cloud Deployment with OpenStack",
    description:
      "Architected a scalable private cloud using OpenStack and Kubernetes for microservices deployment.",
    image: "/images/openstack.png",
    tag: ["All", "Cloud"],
    gitUrl: "https://github.com/siwar15/BackOfficeEduConnect.git",
    
    previewUrl: "https://openstack-cloud.example.com",
    tools: ["OpenStack", "Kubernetes", "Microservices"],
  },
  {
    id: 4,
    title: "Monitoring and Alerting System with Prometheus & Grafana",
    description:
      "Designed real-time monitoring dashboards with Prometheus and Grafana for cloud environments.",
    image: "/images/grafana.png",
    tag: ["All", "DevOps"],
    gitUrl: "https://github.com/MouadhSaadaoui/monitoring-alerting",
    previewUrl: "https://monitoring-system.example.com",
    tools: ["Prometheus", "Grafana", "Monitoring"],
  },
  {
    id: 5,
    title: "E-learning Platform",
    description:
      "Developed an engaging platform using Laravel and MySQL, improving user engagement through automation.",
    image: "/images/laravel.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MouadhSaadaoui/e-learning",
    previewUrl: "https://e-learning.example.com",
    tools: ["Laravel", "MySQL", "PHP"],
  },
  {
    id: 6,
    title: "Demo App - Developing with Docker",
    description:
      "Built a secure user profile application with Docker Compose, MongoDB, and a Node.js backend. Implemented environment variables and best practices for enhanced security.",
    image: "/images/docker.jpg", // Replace with your project's image path
    tag: ["All", "DevOps"],
    gitUrl: "https://gitlab.com/saadaoui.mouadh/my-nodejs-app-1-0.git", // Replace with your GitHub repo link
    previewUrl: "http://localhost:3000", // Update if live preview is available
    tools: ["Docker", "Node.js", "MongoDB", "Docker Compose"],
  },
  {
    id: 7, // Increment the ID
    title: "Kubernetes CI/CD Pipeline Automation with GCP",
    description:
      "Developed a CI/CD pipeline using Google Cloud Build, Jib for Docker image creation, and Kubernetes deployment with Helm. Automated deployment workflows and ensured application scalability.",
    image: "/images/k8s.png", // Replace with your project's image path
    tag: ["All", "DevOps"],
    gitUrl: "https://gitlab.com/saadaoui.mouadh/spring-rest-pipeline-demo.git", // Replace with the GitHub link
    previewUrl: "https://gcp-k8s.example.com", // Add the live preview link if available
    tools: ["GCP", "Kubernetes", "Google Cloud Build", "Jib"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Cloud"
          isSelected={tag === "Cloud"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="DevOps"
          isSelected={tag === "DevOps"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
