import React from 'react';

interface SearchSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function SearchSection({ title, children }: SearchSectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      {children}
    </div>
  );
}
