// components/PricingCard.tsx
"use client";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export function PricingCard({ name, price, period, features, buttonText, popular = false }: PricingCardProps) {

  const handleButtonClick = () => {
    if (name === "Pro") {
      window.open("https://www.paypal.com/ncp/payment/RL32H86GJGSMA", "_blank");
    } else if (name === "Free") {
      scrollToDownload();
    } else {
      handleOtherPlans();
    }
  };

  const scrollToDownload = () => {
    const downloadSection = document.getElementById('download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOtherPlans = () => {
    window.open("mailto:contact@tabgenius.com?subject=Enterprise Plan Inquiry", "_blank");
  };

  return (
    <div className={`relative group ${popular ? '' : ''}`}>
      {popular && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-cyan-300 rounded-full blur-sm opacity-80"></div>
            <div className="relative bg-gradient-to-r from-emerald-400 to-cyan-400 text-white px-8 py-2 rounded-full text-sm font-bold shadow-lg">
              ⭐ Most Popular
            </div>
          </div>
        </div>
      )}

      <div className={
        `relative bg-white rounded-2xl p-8 border shadow-md
        ${popular ? "border-emerald-200" : "border-zinc-100"}`
      }>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-zinc-900 mb-2">{name}</h3>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-4xl font-black text-zinc-900">{price}</span>
            <span className="text-zinc-500">/{period}</span>
          </div>
        </div>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-zinc-700">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleButtonClick}
          className={`w-full py-4 rounded-xl font-semibold text-lg
            ${popular
              ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-white shadow-md'
              : 'bg-white border border-zinc-200 text-emerald-600'}
          `}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
