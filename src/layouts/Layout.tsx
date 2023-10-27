// Layout component
import React from 'react';

export const Layout = ({ children }: 
    { children: React.ReactNode }
    ) => {
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-slate-100 via-sky-300 to-sky-400 h-[100vh] w-full">
      {children}
    </main>
  );
};
