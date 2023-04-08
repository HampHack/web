import { useEffect, useState } from "react";

const ArtCategories = [
  "Painting",
  "Scuplture",
  "Digital Art",
  "Film",
  "Drawing",
];

const EngineeringCateogies = [
  "Robotics",
  "Life Hacks",
  "Community",
  "Environmentalism",
  "Hardware Hacking",
];

const TechnologyCategories = [
  "Artificial Intelligence",
  "Machine Learning",
  "Metaverse",
  "Augmented Reality",
  "Virtual Reality",
  "Decentralization",
  "Web / App design",
];

export default function Combine() {
  // Combine {category}, {category}, and {category}
  const [art, setArt] = useState<string>("...");
  const [engineering, setEngineering] = useState<string>("...");
  const [technology, setTechnology] = useState<string>("...");

  useEffect(() => {
    function set() {
      const randomArt =
        ArtCategories[Math.floor(Math.random() * ArtCategories.length)];
      const randomEngineering =
        EngineeringCateogies[
          Math.floor(Math.random() * EngineeringCateogies.length)
        ];
      const randomTechnology =
        TechnologyCategories[
          Math.floor(Math.random() * TechnologyCategories.length)
        ];

      setArt(randomArt || "...");
      setEngineering(randomEngineering || "...");
      setTechnology(randomTechnology || "...");
    }

    set();

    const s = setInterval(set, 5000);

    return () => {
      clearInterval(s);
    };
  }, []);

  return (
    <h3 className="font-semibold md:text-3xl text-xl text-center dark:text-white text-black">
      Combine {art}, {engineering}, and {technology}
    </h3>
  );
}
