import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDocumentTitle } from "@/hooks/use-document-title";

const NotFound = () => {
  useDocumentTitle("Page Not Found");
  return (
    <div className="flex min-h-screen items-center justify-center hero-gradient text-primary-foreground">
      <div className="text-center px-4">
        <Shield className="mx-auto h-16 w-16 text-amber-200/60" aria-hidden="true" />
        <h1 className="mt-6 text-5xl font-bold text-amber-200">404</h1>
        <p className="mt-4 text-xl text-primary-foreground/80">
          Page not found
        </p>
        <p className="mt-2 text-sm text-primary-foreground/60">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild variant="secondary">
            <Link to="/">Return to Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
