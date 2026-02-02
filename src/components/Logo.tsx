import logoImage from "../assets/logoImage.svg";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImage} // your 512x512 px square
        alt="Kijana Simama - Education for a Brighter Future"
        className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover"
      />
    </div>
  );
}
