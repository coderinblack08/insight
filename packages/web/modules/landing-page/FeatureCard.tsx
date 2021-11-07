import React from "react";

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  icon,
  description,
}) => {
  return (
    <article>
      <div className="inline-flex items-center justify-center p-2 rounded-lg bg-purple-500 mb-6">
        {icon}
      </div>
      <h4 className="font-bold text-white text-xl mb-2">{title}</h4>
      <p className="text-gray-400 leading-[1.8em]">{description}</p>
    </article>
  );
};
