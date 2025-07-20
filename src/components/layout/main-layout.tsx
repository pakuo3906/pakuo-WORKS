import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export function MainLayout({ children, className = "" }: MainLayoutProps) {
  return (
    <div className={`min-h-screen bg-black ${className}`}>
      {children}
    </div>
  );
}