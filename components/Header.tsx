
import React from 'react';
import { BeakerIcon } from './icons';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-center text-center">
      <BeakerIcon className="w-10 h-10 text-cyan-400 mr-4" />
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">ChemCraft</h1>
        <p className="mt-2 text-lg text-slate-400">Interactive Chemistry Lab for Grades 10-12</p>
      </div>
    </header>
  );
};
