
export interface Chemical {
  name: string;
  formula: string;
}

export interface Reactant extends Chemical {
  id: string; // Unique ID for list rendering
  amount: number; // Represents a relative amount, e.g., 1-10
}

export interface Product {
  name: string;
  state: string;
}

export interface ReactionResult {
  isReactionPossible: boolean;
  balancedEquation: string;
  products: Product[];
  reactionType: string;
  explanation: string;
  visualObservation: string;
  safetyWarning: string;
}
