// components/PricingCard.tsx
"use client";

import { useState } from 'react';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export function PricingCard({ name, price, period, features, buttonText, popular = false }: PricingCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    if (name === "Pro") {
      setIsLoading(true);
      
      // Your PayPal payment link
      window.open("https://www.paypal.com/ncp/payment/RL32H86GJGSMA", "_blank");
      
      // Reset loading state after a delay
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } else if (name === "Free") {
      // Handle free plan - scroll to download section
      scrollToDownload();
    } else {
      // Handle other plans (Enterprise, etc.)
      handleOtherPlans();
    }
  };

  const scrollToDownload = () => {
    const downloadSection = document.getElementById('download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOtherPlans = () => {
    // For enterprise or custom plans
    window.open("mailto:contact@tabgenius.com?subject=Enterprise Plan Inquiry", "_blank");
  };

  return (
    <div className={`relative group ${popular ? 'scale-105' : ''}`}>
      {popular && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-sm opacity-60"></div>
            <div className="relative bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              ⭐ Most Popular
            </div>
          </div>
        </div>
      )}
      
      <div className={`relative bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:bg-zinc-900/50 ${
        popular ? 'border-emerald-500/50' : 'border-zinc-800 hover:border-zinc-700'
      }`}>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-4xl font-black text-white">{price}</span>
            <span className="text-zinc-500">/{period}</span>
          </div>
        </div>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-zinc-400">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button 
          onClick={handleButtonClick}
          disabled={isLoading}
          className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
            popular 
              ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:scale-105 shadow-lg hover:shadow-emerald-500/25' 
              : 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700'
          } ${isLoading ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Opening PayPal...
            </div>
          ) : (
            buttonText
          )}
        </button>
      </div>
    </div>
  );
}
