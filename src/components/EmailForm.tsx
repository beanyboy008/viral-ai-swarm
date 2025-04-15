
import React, { useState } from 'react';
import { toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("You're on the list! Thanks for signing up.");
      setEmail('');
      setLoading(false);
    }, 800);
    
    // In a real app, you would send this to your backend
    console.log("Email submitted:", email);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
        />
        <Button 
          type="submit" 
          className="btn-gradient h-12 min-w-[150px]"
          disabled={loading}
        >
          {loading ? (
            "Joining..."
          ) : (
            <>
              Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
      <p className="text-gray-400 text-xs mt-2">
        Be the first to know when we launch. No spam, ever.
      </p>
    </form>
  );
};

export default EmailForm;
