import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import logo from "@/assets/prayag-logo.png";

const Auth = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      navigate("/auth/verify");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "var(--gradient-bg)" }}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src={logo} alt="Prayag.ai Logo" className="w-20 h-20 mx-auto mb-4" />
          <h1 className="text-3xl font-semibold mb-2">
            <span className="text-primary">Smart Call</span>{" "}
            <span className="text-accent font-semibold">Analyzer</span>
          </h1>
          <p className="text-sm text-muted-foreground">
            by{" "}
            <a href="https://prayag.ai" className="text-primary hover:underline font-medium">
              Prayag.ai
            </a>
          </p>
        </div>

        <Card className="border border-border/50 shadow-lg bg-card">
          <CardHeader className="space-y-2 pb-4">
            <CardTitle className="text-2xl font-semibold text-center">Sign in</CardTitle>
            <CardDescription className="text-center text-muted-foreground">
              Enter your work email to get a one-time passcode.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSendOTP} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 pl-10 bg-background"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full h-12 text-base font-medium">
                Send OTP
              </Button>
            </form>
            <p className="text-xs text-center text-muted-foreground pt-2">
              By continuing, you agree to our Terms and Privacy Policy.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
