
import React from 'react';
import { Toaster } from "sonner";
import EmailForm from '../components/EmailForm';
import AnimatedBackground from '../components/AnimatedBackground';
import FeatureCard from '../components/FeatureCard';
import { 
  Wand2, 
  Shield, 
  UserPlus, 
  Calendar, 
  BarChart3, 
  Eye, 
  GithubIcon, 
  TwitterIcon,
  YoutubeIcon,
  InstagramIcon, 
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      title: "AI-Powered Video Remix Engine",
      description: "Auto-generates 100s–1,000s of unique versions from a single video with changes to music, captions, and more.",
      icon: Wand2
    },
    {
      title: "Anti-Detection Variants Generator",
      description: "Adds watermark rotation, intro shuffles, randomized emoji text overlays to evade duplicate detection.",
      icon: Shield
    },
    {
      title: "1-Click Social Account Creator",
      description: "Auto-generates social accounts across major platforms with usernames, emails, bios, and profile pictures.",
      icon: UserPlus
    },
    {
      title: "Mass Scheduler & Distributor",
      description: "Schedule video drops across 100s of accounts with smart delay throttling and randomized posting times.",
      icon: Calendar
    },
    {
      title: "Analytics & Performance Tracker",
      description: "Tracks CTR, retention, reach, and watch time across accounts and identifies breakout variations.",
      icon: BarChart3
    },
    {
      title: "Stealth Mode Operation",
      description: "Auto-deletes underperformers with IP rotation and device spoofing built-in for maximum security.",
      icon: Eye
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      <Toaster position="top-center" />
      <AnimatedBackground />
      
      {/* Header */}
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-viral-purple to-viral-blue"></div>
          <span className="font-bold text-xl text-white">Viral AI Replicator</span>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="container mx-auto flex-1 py-16 md:py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-4xl leading-tight glow">
          Unleash a <span className="gradient-text">Viral Swarm</span> of 
          AI-Powered Content
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl">
          Generate thousands of unique video variants, deploy across hundreds of accounts, and dominate every algorithm with one revolutionary tool.
        </p>
        
        <div className="mb-16">
          <EmailForm />
        </div>
        
        <div className="relative py-8">
          <div className="absolute inset-0 bg-gradient-to-r from-viral-purple/20 to-viral-blue/20 rounded-xl blur-lg"></div>
          <div className="relative bg-viral-darkBlue/60 backdrop-blur-sm border border-white/5 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="italic text-gray-300">
              "The ultimate growth hacker's dream tool. Generate thousands of safe-to-reupload variations of your best performing content and deploy them across hundreds of accounts with a single click."
            </p>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="container mx-auto py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Powerful Features</h2>
        <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          An all-in-one platform to 10x your social media presence through AI-powered content replication and distribution.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              title={feature.title} 
              description={feature.description} 
              icon={feature.icon} 
            />
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your <span className="gradient-text">Video Empire</span>?
          </h2>
          <p className="text-gray-300 mb-10">
            Join the waitlist today and be first to access Viral AI Replicator when we launch.
          </p>
          <div className="max-w-md mx-auto">
            <EmailForm />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="container mx-auto py-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="h-6 w-6 rounded-full bg-gradient-to-r from-viral-purple to-viral-blue"></div>
            <span className="font-semibold text-white">Viral AI Replicator</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <YoutubeIcon size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <TwitterIcon size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <InstagramIcon size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <GithubIcon size={20} />
            </a>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} Viral AI Replicator. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
