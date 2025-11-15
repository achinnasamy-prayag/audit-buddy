import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import logo from "@/assets/prayag-logo.png";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("accountant");
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Mock signup - navigate to OTP verification
    navigate("/auth/verify");
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
              <CardTitle className="text-2xl text-center">Create Account</CardTitle>
              <CardDescription className="text-center">
                Enter your details to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-3">
                  <Label>Select Your Role</Label>
                  <RadioGroup value={role} onValueChange={setRole}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="accountant" id="accountant" />
                      <Label htmlFor="accountant" className="font-normal cursor-pointer">
                        Accountant
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="order-manager" id="order-manager" />
                      <Label htmlFor="order-manager" className="font-normal cursor-pointer">
                        Order Manager
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Continue
                </Button>
                <div className="text-center">
                  <Button
                    type="button"
                    variant="link"
                    onClick={() => navigate("/auth")}
                    className="text-primary"
                  >
                    Already have an account? Login
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Signup;
