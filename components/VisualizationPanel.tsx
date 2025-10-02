
import React from 'react';
import type { Reactant, ReactionResult } from '../types';
import { Loader } from './Loader';
import { BeakerIcon } from './icons';

interface VisualizationPanelProps {
    reactants: Reactant[];
    result: ReactionResult | null;
    isLoading: boolean;
}

const Molecule: React.FC<{ formula: string; amount: number; color: string; isProduct?: boolean }> = ({ formula, amount, color, isProduct }) => (
    <div className={`relative flex items-center justify-center m-2 ${isProduct ? 'animate-fade-in' : ''}`}>
        <div style={{ width: `${20 + amount * 5}px`, height: `${20 + amount * 5}px` }} className={`rounded-full ${color} flex items-center justify-center shadow-lg animate-pulse-slow opacity-70`}>
             <span className="text-xs sm:text-sm font-bold text-white drop-shadow-md">{formula}</span>
        </div>
    </div>
);

const MOLECULE_COLORS = [
    'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500'
];

export const VisualizationPanel: React.FC<VisualizationPanelProps> = ({ reactants, result, isLoading }) => {
    
    const renderContent = () => {
        if (isLoading) {
            return <div className="flex flex-col items-center justify-center h-full"><Loader /><p className="mt-4 text-slate-400">Reaction in progress...</p></div>;
        }

        if (!result && reactants.length === 0) {
            return (
                <div className="text-center text-slate-400 flex flex-col items-center justify-center h-full p-4">
                    <BeakerIcon className="w-24 h-24 text-slate-700 mb-4"/>
                    <h3 className="text-xl font-semibold text-slate-300">Welcome to the ChemCraft Lab!</h3>
                    <p className="mt-2 max-w-sm">Add reactants from the setup panel on the left and click "Run Reaction" to see what happens.</p>
                </div>
            );
        }

        const hasReactionOccurred = result && result.isReactionPossible;

        return (
            <div className="w-full h-full p-4 flex flex-col justify-around">
                <div id="reactants-area" className="flex-1 flex justify-center items-center flex-wrap content-center">
                    {reactants.map((r, i) => (
                        <Molecule key={r.id} formula={r.formula} amount={r.amount} color={MOLECULE_COLORS[i % MOLECULE_COLORS.length]} />
                    ))}
                </div>
                
                {result && (
                    <>
                        <div className="flex justify-center items-center my-4">
                            <div className="w-1/3 h-px bg-slate-600"></div>
                            <p className="mx-4 text-cyan-400 font-mono text-xl animate-fade-in">→</p>
                            <div className="w-1/3 h-px bg-slate-600"></div>
                        </div>

                        <div id="products-area" className="flex-1 flex justify-center items-center flex-wrap content-center min-h-[80px]">
                             {hasReactionOccurred ? (
                                result.products.length > 0 ? (
                                    result.products.map((p, i) => (
                                        <Molecule key={p.name} formula={p.name} amount={5} color={MOLECULE_COLORS[(reactants.length + i) % MOLECULE_COLORS.length]} isProduct />
                                    ))
                                ) : (
                                    <p className="text-slate-400 animate-fade-in">Reaction occurred, no solid/liquid products to visualize.</p>
                                )
                            ) : (
                                <p className="text-slate-400 animate-fade-in">No Reaction Occurred</p>
                            )}
                        </div>
                    </>
                )}
            </div>
        );
    }
    
    return (
        <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg backdrop-blur-sm border border-slate-700 min-h-[300px] lg:min-h-[500px] flex flex-col">
            <h2 className="text-2xl font-bold text-cyan-300 mb-4">2. Visualization</h2>
            <div className="flex-grow bg-slate-900/50 rounded-md overflow-hidden relative border border-slate-700">
                {renderContent()}
            </div>
        </div>
    );
};
