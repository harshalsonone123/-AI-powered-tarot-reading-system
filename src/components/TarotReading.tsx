
import { useState } from "react";
import TarotCard from "./TarotCard";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const CARDS = [
  { id: 1, name: "The Fool", image: "/placeholder.svg" },
  { id: 2, name: "The Magician", image: "/placeholder.svg" },
  { id: 3, name: "The High Priestess", image: "/placeholder.svg" },
  { id: 4, name: "The Empress", image: "/placeholder.svg" },
  { id: 5, name: "The Emperor", image: "/placeholder.svg" },
];

const TarotReading = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [reading, setReading] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCardClick = (id: number) => {
    if (selectedCards.length < 3 && !selectedCards.includes(id)) {
      setSelectedCards([...selectedCards, id]);
    }
  };

  const generateReading = async () => {
    setIsLoading(true);
    // TODO: Integrate AI reading generation
    const mockReading =
      "The cards suggest a period of new beginnings and spiritual growth. Trust your intuition and embrace the journey ahead.";
    setTimeout(() => {
      setReading(mockReading);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-mystical-light p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-mystical-purple text-center mb-8">
          Your Tarot Reading
        </h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-serif text-mystical-teal text-center mb-4">
            Select up to three cards
          </h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {CARDS.map((card) => (
              <TarotCard
                key={card.id}
                name={card.name}
                image={card.image}
                isRevealed={selectedCards.includes(card.id)}
                onClick={() => handleCardClick(card.id)}
              />
            ))}
          </div>
        </div>

        {selectedCards.length > 0 && (
          <div className="text-center">
            <Button
              onClick={generateReading}
              disabled={isLoading}
              className={cn(
                "bg-mystical-purple hover:bg-mystical-teal text-white",
                "px-8 py-4 text-lg font-serif rounded-full",
                "transition-all duration-300 ease-in-out",
                "shadow-lg hover:shadow-xl"
              )}
            >
              {isLoading ? "Consulting the cards..." : "Reveal Your Reading"}
            </Button>
          </div>
        )}

        {reading && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-lg border border-mystical-gold animate-fade-in">
            <p className="text-lg text-mystical-purple font-serif leading-relaxed">
              {reading}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TarotReading;
