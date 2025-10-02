import React, { useState } from 'react';
import type { Reactant } from '../types';
import { AVAILABLE_CHEMICALS } from '../constants';
// Fix: Removed ChevronsRightIcon as it is not exported from './icons' and is not used.
import { PlusIcon, TrashIcon, FlaskConicalIcon } from './icons';

interface InputPanelProps {
  reactants: Reactant[];
  setReactants: React.Dispatch<React.SetStateAction<Reactant[]>>;
  conditions: string;
  setConditions: (conditions: string) => void;
  onRunReaction: () => void;
  isLoading: boolean;
  onReset: () => void;
}

export const InputPanel: React.FC<InputPanelProps> = ({
  reactants,
  setReactants,
  conditions,
  setConditions,
  onRunReaction,
  isLoading,
  onReset
}) => {
  const [selectedChemical, setSelectedChemical] = useState<string>(AVAILABLE_CHEMICALS[0].formula);

  const addReactant = () => {
    if (reactants.length >= 4) return; // Limit to 4 reactants for simplicity
    const chemical = AVAILABLE_CHEMICALS.find(c => c.formula === selectedChemical);
    if (chemical && !reactants.find(r => r.formula === selectedChemical)) {
      setReactants([...reactants, { ...chemical, id: Date.now().toString(), amount: 5 }]);
    }
  };

  const removeReactant = (id: string) => {
    setReactants(reactants.filter(r => r.id !== id));
  };

  const updateReactantAmount = (id: string, amount: number) => {
    setReactants(reactants.map(r => r.id === id ? { ...r, amount } : r));
  };

  return (
    <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg backdrop-blur-sm border border-slate-700">
      <h2 className="text-2xl font-bold text-cyan-300 mb-6">1. Setup Reaction</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Add Reactants (Max 4)</label>
          <div className="flex items-center space-x-2">
            <select
              value={selectedChemical}
              onChange={(e) => setSelectedChemical(e.target.value)}
              className="flex-grow bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              disabled={reactants.length >= 4}
            >
              {AVAILABLE_CHEMICALS.map(chem => (
                <option key={chem.formula} value={chem.formula}>{chem.name} ({chem.formula})</option>
              ))}
            </select>
            <button onClick={addReactant} disabled={reactants.length >= 4} className="bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-600 disabled:cursor-not-allowed text-white p-2 rounded-md transition-colors">
              <PlusIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
            {reactants.map((reactant) => (
              <div key={reactant.id} className="bg-slate-700/50 p-3 rounded-md animate-fade-in">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold">{reactant.name} <span className="font-mono text-sm text-slate-400">{reactant.formula}</span></p>
                  <button onClick={() => removeReactant(reactant.id)} className="text-slate-400 hover:text-red-400">
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
                 <input
                    type="range"
                    min="1"
                    max="10"
                    value={reactant.amount}
                    onChange={(e) => updateReactantAmount(reactant.id, parseInt(e.target.value, 10))}
                    className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
              </div>
            ))}
        </div>

        <div>
            <label htmlFor="conditions" className="block text-sm font-medium text-slate-300 mb-2">Conditions</label>
            <input 
                type="text"
                id="conditions"
                value={conditions}
                onChange={(e) => setConditions(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                placeholder="e.g., heating, catalyst"
            />
        </div>
      </div>
      
      <div className="mt-8 flex flex-col space-y-3">
         <button 
            onClick={onRunReaction} 
            disabled={isLoading || reactants.length === 0}
            className="w-full flex items-center justify-center bg-green-600 hover:bg-green-500 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-md transition-colors text-lg"
          >
           {isLoading ? 'Simulating...' : 'Run Reaction'}
           {!isLoading && <FlaskConicalIcon className="ml-2 w-5 h-5" />}
          </button>
          <button 
            onClick={onReset} 
            disabled={isLoading}
            className="w-full flex items-center justify-center bg-slate-600 hover:bg-slate-500 disabled:opacity-50 text-white font-bold py-2 px-4 rounded-md transition-colors text-sm"
          >
           Reset Lab
          </button>
      </div>
    </div>
  );
};