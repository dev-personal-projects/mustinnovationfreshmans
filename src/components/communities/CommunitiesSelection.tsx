"use client";

import { CommunityCard } from "./CommunityCard";
import { Community } from "@/types/community";

// Community data - easily extensible following Open/Closed Principle
const communities: Community[] = [
  {
    id: "cloud-computing",
    name: "Cloud Computing",
    description:
      "Explore cloud technologies, AWS, Azure, and modern infrastructure",
    icon: "☁️",
    whatsappLink: "https://chat.whatsapp.com/H1BWBLMFPmHKWNqxOVjGOm?mode=ems_wa_t", // Replace with actual link
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "web-community",
    name: "Web Community",
    description: "Frontend, backend, and full-stack web development",
    icon: "🌐",
    whatsappLink: "https://chat.whatsapp.com/Gwfxu9EWprkDdQk2qEM77q?mode=ems_wa_t", // Replace with actual link
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "android-community",
    name: "Android Community",
    description: "Mobile app development with Kotlin, Java, and Flutter",
    icon: "📱",
    whatsappLink: "https://chat.whatsapp.com/FiyoCmQRLLV7G5doxuHglI?mode=ems_share_c", // Replace with actual link
    color: "from-green-600 to-lime-500",
  },
  {
    id: "blockchain",
    name: "Blockchain",
    description:
      "Cryptocurrency, smart contracts, and decentralized applications",
    icon: "⛓️",
    whatsappLink: "https://chat.whatsapp.com/LHYODfLQCxm9wfn2OWyPT9", // Replace with actual link
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    description: "AI, data science, and machine learning algorithms",
    icon: "🤖",
    whatsappLink: "https://chat.whatsapp.com/81cGnqvIm4pApwyrHskswd?mode=ems_wa_t", // Replace with actual link
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "robotics-iot",
    name: "Robotics and IoT Community",
    description: "Hardware, sensors, embedded systems, and automation",
    icon: "🔧",
    whatsappLink: "https://chat.whatsapp.com/0xZEGVxHf81A9QRiLX0cRu?mode=ems_copy_t", // Replace with actual link
    color: "from-red-500 to-rose-500",
  },
  {
    id: "graphic-design",
    name: "Graphic Design Community",
    description: "UI/UX design, visual arts, and creative digital solutions",
    icon: "🎨",
    whatsappLink: "https://chat.whatsapp.com/EZt5LxfXUr26ZBfAwn6OEH", // Replace with actual link
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "cyber-security",
    name: "Cyber Security",
    description: "Ethical hacking, network security, and data protection",
    icon: "🛡️",
    whatsappLink: "https://chat.whatsapp.com/F1PlJLOZohY6oKf23GMNfV?mode=ems_share_t", // Replace with actual link
    color: "from-gray-700 to-black",
  }
];

export function CommunitiesSelection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {communities.map((community) => (
          <CommunityCard key={community.id} community={community} />
        ))}
      </div>
    </div>
  );
}
