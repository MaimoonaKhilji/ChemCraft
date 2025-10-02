import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { InputPanel } from './components/InputPanel';
import { VisualizationPanel } from './components/VisualizationPanel';
import { ResultsPanel } from './components/ResultsPanel';
import type { ReactionResult, Reactant } from './types';
import { performReaction } from './services/reactionService';

export default function App() {
  const [reactants, setReactants] = useState<Reactant[]>([]);
  const [conditions, setConditions] = useState<string>('Room temperature and pressure');
  const [reactionResult, setReactionResult] = useState<ReactionResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRunReaction = useCallback(async () => {
    if (reactants.length < 1) {
      return;
    }
    setIsLoading(true);
    setReactionResult(null);

    const result = await performReaction(reactants, conditions);
    setReactionResult(result);
    setIsLoading(false);
  }, [reactants, conditions]);
  
  const resetReaction = () => {
    setReactants([]);
    setConditions('Room temperature and pressure');
    setReactionResult(null);
    setIsLoading(false);
  }

  return (
    <div className="min-h-screen bg-slate-900 font-sans p-4 sm:p-6 lg:p-8">
      <Header />
      <main className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3">
          <InputPanel 
            reactants={reactants}
            setReactants={setReactants}
            conditions={conditions}
            setConditions={setConditions}
            onRunReaction={handleRunReaction}
            isLoading={isLoading}
            onReset={resetReaction}
          />
        </div>
        <div className="lg:col-span-9 grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2">
            <VisualizationPanel reactants={reactants} result={reactionResult} isLoading={isLoading}/>
          </div>
          <div className="xl:col-span-1">
            <ResultsPanel result={reactionResult} isLoading={isLoading} />
          </div>
        </div>
      </main>
    </div>
  );
}
