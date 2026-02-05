import logoSvg from "@/assets/logo.svg";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
}

const Logo = ({ variant = "full", className = "" }: LogoProps) => {
  if (variant === "icon") {
    return (
      <img
        src={logoSvg}
        alt="Tarantino Security"
        className={`h-8 w-auto ${className}`}
      />
    );
  }

  return (
    <img
      src={logoSvg}
      alt="Tarantino Security"
      className={`h-20 w-auto ${className}`}
    />
  );
};

export default Logo;
