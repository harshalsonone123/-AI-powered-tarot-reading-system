
import { useState } from "react";
import { cn } from "@/lib/utils";

interface TarotCardProps {
  name: string;
  image: string;
  isRevealed: boolean;
  onClick: () => void;
}

const TarotCard = ({ name, image, isRevealed, onClick }: TarotCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative w-[200px] h-[350px] cursor-pointer perspective-1000",
        isHovered && "animate-float"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-500 transform-style-preserve-3d",
          isRevealed && "rotate-y-180"
        )}
      >
        {/* Card Back */}
        <div
          className={cn(
            "absolute w-full h-full backface-hidden",
            "bg-mystical-purple rounded-lg shadow-lg",
            "border-2 border-mystical-gold",
            "flex items-center justify-center"
          )}
        >
          <div className="w-3/4 h-3/4 border-2 border-mystical-gold rounded-lg flex items-center justify-center">
            <span className="text-mystical-gold text-2xl font-serif rotate-0">
              ✧
            </span>
          </div>
        </div>

        {/* Card Front */}
        <div
          className={cn(
            "absolute w-full h-full backface-hidden rotate-y-180",
            "bg-white rounded-lg shadow-lg",
            "border-2 border-mystical-gold",
            "flex flex-col items-center justify-center p-4"
          )}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-4/5 object-cover rounded-md"
          />
          <h3 className="mt-2 text-mystical-purple font-serif text-lg">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default TarotCard;
