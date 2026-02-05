import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

const MobileCallBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Hide when near bottom of page to avoid overlapping footer
  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
      setIsVisible(!scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <Button asChild size="lg" className="w-full shadow-lg">
        <a href={COMPANY.phone.href} className="gap-2">
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call {COMPANY.phone.display}
        </a>
      </Button>
    </div>
  );
};

export default MobileCallBanner;
