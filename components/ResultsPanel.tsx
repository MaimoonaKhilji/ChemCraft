import React from 'react';
import type { ReactionResult } from '../types';
import { TestTube2Icon, BookOpenIcon, EyeIcon, TriangleAlertIcon, InfoIcon } from './icons';

interface ResultsPanelProps {
  result: ReactionResult | null;
  isLoading: boolean;
}

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
  <div className="bg-slate-700/50 p-4 rounded-lg animate-fade-in-delay">
    <div className="flex items-center mb-2">
      {icon}
      <h4 className="font-semibold text-slate-200 ml-2">{title}</h4>
    </div>
    <div className="text-sm text-slate-300 pl-7">{children}</div>
  </div>
);

export const ResultsPanel: React.FC<ResultsPanelProps> = ({ result, isLoading }) => {
  const renderContent = () => {
    if (isLoading) {
      return null; // Loading state is handled in VisualizationPanel
    }

    if (!result) {
      return (
        <div className="text-center text-slate-400 p-4">
          <InfoIcon className="w-8 h-8 mx-auto mb-2 text-slate-500" />
          <p>Reaction results will appear here once the simulation is complete.</p>
        </div>
      );
    }
    
    return (
      <div className="space-y-4">
        <InfoCard icon={<TestTube2Icon className="w-5 h-5 text-cyan-400" />} title="Balanced Equation">
          <p className="font-mono bg-slate-800 p-2 rounded-md text-cyan-300 text-center">{result.balancedEquation}</p>
        </InfoCard>

        {result.isReactionPossible && (
            <InfoCard icon={<BookOpenIcon className="w-5 h-5 text-green-400" />} title="Reaction Type">
                 <p>{result.reactionType}</p>
            </InfoCard>
        )}

        <InfoCard icon={<EyeIcon className="w-5 h-5 text-purple-400" />} title="Observation">
          <p>{result.visualObservation}</p>
        </InfoCard>

        <InfoCard icon={<BookOpenIcon className="w-5 h-5 text-yellow-400" />} title="Explanation">
          <p>{result.explanation}</p>
        </InfoCard>

        <InfoCard icon={<TriangleAlertIcon className="w-5 h-5 text-red-400" />} title="Safety">
          <p>{result.safetyWarning}</p>
        </InfoCard>
      </div>
    );
  };

  return (
    <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg backdrop-blur-sm border border-slate-700 h-full">
      <h2 className="text-2xl font-bold text-cyan-300 mb-6">3. Results</h2>
      {renderContent()}
    </div>
  );
};
