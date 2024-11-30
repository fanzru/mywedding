import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export const Wrapper: React.FC<WrapperProps> = ({ children, className = "" }) => {
  return (
    <div className={`max-w-screen-xl mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
};
