import type { Reactant, ReactionResult } from '../types';
import { REACTION_DATABASE, NO_REACTION_FOUND } from './reactionDatabase';

// Helper function to create a unique, order-independent key from a list of reactant formulas
const createReactantKey = (reactants: Reactant[]): string => {
  return reactants.map(r => r.formula).sort().join('-');
};

/**
 * Simulates a chemical reaction by looking it up in a local database.
 * @param reactants - An array of reactants selected by the user.
 * @param conditions - The conditions for the reaction (currently unused in local DB lookup).
 * @returns A Promise that resolves to a ReactionResult.
 */
export async function performReaction(reactants: Reactant[], conditions: string): Promise<ReactionResult> {
  const reactantKey = createReactantKey(reactants);
  
  const matchedReaction = REACTION_DATABASE.find(reaction => {
    // Create a comparable key from the database entry
    const dbKey = [...reaction.reactants].sort().join('-');
    return dbKey === reactantKey;
  });

  // Simulate a brief delay to provide a better UX with the loading spinner
  await new Promise(resolve => setTimeout(resolve, 500));

  if (matchedReaction) {
    return matchedReaction.result;
  }

  // If reactants are provided but no match is found in the database
  if (reactants.length > 0) {
    return NO_REACTION_FOUND;
  }
  
  // Fallback for when no reactants are selected
  return {
    isReactionPossible: false,
    balancedEquation: "No Reactants",
    products: [],
    reactionType: "None",
    explanation: "Please add reactants to start a simulation.",
    visualObservation: "The lab is empty.",
    safetyWarning: "N/A"
  };
}
