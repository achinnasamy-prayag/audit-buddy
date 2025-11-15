import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Construction } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
            <Construction className="w-12 h-12 text-primary" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">Dashboard Under Construction</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            The dashboard is under construction — come back soon!
          </p>
        </div>
        <Button asChild>
          <Link to="/auth">Back to Login</Link>
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
