import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/prayag-logo.png";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock OTP verification
    if (otp.length === 6) {
      toast({
        title: "You're all set! 🎉",
        description: "Your account has been verified successfully.",
      });
      setTimeout(() => {
        navigate("/auth");
      }, 1500);
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
              <CardTitle className="text-2xl text-center">Verify OTP</CardTitle>
              <CardDescription className="text-center">
                Enter the 6-digit code sent to your email
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleVerify} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="otp">One-Time Password</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    maxLength={6}
                    required
                    className="h-12 text-center text-2xl tracking-widest"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Verify
                </Button>
                <div className="text-center">
                  <Button
                    type="button"
                    variant="link"
                    className="text-sm text-muted-foreground"
                  >
                    Resend OTP
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

export default VerifyOTP;
