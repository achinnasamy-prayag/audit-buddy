import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/prayag-logo.png";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in real app, verify credentials
    if (email && password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary to-primary/80 p-12 flex-col justify-center text-primary-foreground">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-6">Smart Audit Agent</h1>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2" />
              <p className="text-lg">Automate compliance with confidence.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2" />
              <p className="text-lg">Smart insights, seamless workflows.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2" />
              <p className="text-lg">Built for accountants and order handlers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <img src={logo} alt="Prayag.ai Logo" className="w-24 h-24 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-1">
              Smart Call <span className="text-accent">Analyzer</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              by <a href="https://prayag.ai" className="text-primary hover:underline">Prayag.ai</a>
            </p>
          </div>

          <Card className="border-border shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Sign in</CardTitle>
              <CardDescription className="text-center">
                Enter your work email to get a one-time passcode.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                <Button type="submit" className="w-full h-11" size="lg">
                  Login
                </Button>
                <div className="text-center">
                  <Button
                    type="button"
                    variant="link"
                    onClick={() => navigate("/auth/signup")}
                    className="text-primary"
                  >
                    Create Account
                  </Button>
                </div>
              </form>
              <p className="text-xs text-center text-muted-foreground mt-4">
                By continuing, you agree to our Terms and Privacy Policy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Auth;
