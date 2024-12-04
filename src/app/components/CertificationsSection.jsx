import React from "react";

const certificationsData = [
  {
    id: 1,
    title: "Google Cloud Certified - Associate Cloud Engineer",
    organization: "Google Cloud",
    issueDate: "August 2024",
    credentialUrl: "https://www.credential-url.com", // Add your certification URL
    badgeUrl: "/images/certifications/gcp-cloud-engineer.png", // Add badge image
  },
  {
    id: 2,
    title: "Microsoft Certified: Azure Fundamentals",
    organization: "Microsoft",
    issueDate: "July 2024",
    credentialUrl: "https://www.credential-url.com",
    badgeUrl: "/images/certifications/azure-fundamentals.png",
  },
  {
    id: 3,
    title: "Implement DevOps Workflows in Google Cloud - Skill Badge",
    organization: "Google Cloud Skills Boost",
    issueDate: "June 2024",
    credentialUrl: "https://www.qwiklabs.com/public_profiles/your-profile-id",
    badgeUrl: "/images/certifications/devops-workflows.png",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-12 bg-[#181818] text-white">
      <h2 className="text-center text-4xl font-bold mb-8">Certifications</h2>
      <div className="grid md:grid-cols-3 gap-8 px-4">
        {certificationsData.map((cert) => (
          <div
            key={cert.id}
            className="bg-[#242424] rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={cert.badgeUrl}
              alt={`${cert.title} badge`}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center mb-2">
              {cert.title}
            </h3>
            <p className="text-center text-sm text-[#ADB7BE]">
              {cert.organization}
            </p>
            <p className="text-center text-xs text-[#ADB7BE] mb-4">
              Issued: {cert.issueDate}
            </p>
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-blue-500 hover:underline"
            >
              View Credential
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
