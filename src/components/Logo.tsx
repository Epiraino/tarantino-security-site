import { Shield } from "lucide-react";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
}

const Logo = ({ variant = "full", className = "" }: LogoProps) => {
  if (variant === "icon") {
    return (
      <div className={`relative ${className}`}>
        <Shield className="h-8 w-8 text-primary" strokeWidth={1.5} />
        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-primary">
          TS
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <Shield className="h-10 w-10 text-primary" strokeWidth={1.5} />
        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-primary">
          TS
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-semibold leading-tight text-foreground">
          Tarantino
        </span>
        <span className="text-sm font-medium leading-tight text-muted-foreground">
          Security
        </span>
      </div>
    </div>
  );
};

export default Logo;
