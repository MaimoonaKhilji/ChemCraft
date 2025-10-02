import type { ReactionResult } from '../types';

interface ReactionDatabaseEntry {
  id: string; // A unique ID for the reaction, e.g., "HCl-NaOH"
  reactants: string[]; // Array of chemical formulas, used for matching
  result: ReactionResult;
}

export const REACTION_DATABASE: ReactionDatabaseEntry[] = [
  {
    id: "HCl-NaOH",
    reactants: ["HCl", "NaOH"],
    result: {
      isReactionPossible: true,
      balancedEquation: "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)",
      products: [
        { name: "Sodium Chloride", state: "aqueous" },
        { name: "Water", state: "liquid" }
      ],
      reactionType: "Acid-Base Neutralization",
      explanation: "Hydrochloric acid, a strong acid, reacts with sodium hydroxide, a strong base, to produce salt (sodium chloride) and water. This is a classic neutralization reaction.",
      visualObservation: "No visible change as both reactants and products are colorless solutions. The solution might warm up slightly as the reaction is exothermic.",
      safetyWarning: "Both reactants are corrosive. Handle with care."
    }
  },
  {
    id: "AgNO3-NaCl",
    reactants: ["AgNO₃", "NaCl"],
    result: {
        isReactionPossible: true,
        balancedEquation: "AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)",
        products: [
            { name: "Silver Chloride", state: "solid" },
            { name: "Sodium Nitrate", state: "aqueous" }
        ],
        reactionType: "Double Displacement (Precipitation)",
        explanation: "When solutions of silver nitrate and sodium chloride are mixed, the silver and sodium ions switch partners. Silver chloride (AgCl) is insoluble in water and forms a solid precipitate.",
        visualObservation: "A white, curdy precipitate of silver chloride forms immediately upon mixing the clear solutions.",
        safetyWarning: "Silver nitrate can stain skin and clothes."
    }
  },
  {
    id: "HCl-Zn",
    reactants: ["HCl", "Zn"],
    result: {
        isReactionPossible: true,
        balancedEquation: "2HCl(aq) + Zn(s) → ZnCl₂(aq) + H₂(g)",
        products: [
            { name: "Zinc Chloride", state: "aqueous" },
            { name: "Hydrogen", state: "gas" }
        ],
        reactionType: "Single Displacement",
        explanation: "Zinc is more reactive than hydrogen, so it displaces hydrogen from hydrochloric acid. This forms zinc chloride and releases hydrogen gas.",
        visualObservation: "Bubbles of hydrogen gas are produced on the surface of the zinc metal. The zinc metal gradually dissolves.",
        safetyWarning: "Produces flammable hydrogen gas. Ensure good ventilation."
    }
  },
  {
    id: "CaCO3-HCl",
    reactants: ["CaCO₃", "HCl"],
    result: {
      isReactionPossible: true,
      balancedEquation: "CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)",
      products: [
        { name: "Calcium Chloride", state: "aqueous" },
        { name: "Water", state: "liquid" },
        { name: "Carbon Dioxide", state: "gas" }
      ],
      reactionType: "Acid-Base (Gas Formation)",
      explanation: "Calcium carbonate (found in limestone and chalk) reacts with hydrochloric acid to produce calcium chloride, water, and carbon dioxide gas.",
      visualObservation: "Vigorous bubbling (effervescence) is observed as carbon dioxide gas is released. The solid calcium carbonate dissolves.",
      safetyWarning: "Ensure adequate ventilation due to CO₂ production."
    }
  },
  {
    id: "H2O-Na",
    reactants: ["H₂O", "Na"],
    result: {
      isReactionPossible: true,
      balancedEquation: "2H₂O(l) + 2Na(s) → 2NaOH(aq) + H₂(g)",
      products: [
        { name: "Sodium Hydroxide", state: "aqueous" },
        { name: "Hydrogen", state: "gas" }
      ],
      reactionType: "Single Displacement (Redox)",
      explanation: "Sodium is a highly reactive alkali metal that reacts vigorously with water. It displaces one hydrogen atom from water to form sodium hydroxide and hydrogen gas.",
      visualObservation: "The piece of sodium metal fizzes and darts across the water surface, producing bubbles of hydrogen gas. It may even ignite.",
      safetyWarning: "Highly exothermic and dangerous reaction. Produces flammable hydrogen gas and a corrosive solution. Should only be performed by professionals."
    }
  }
];

export const NO_REACTION_FOUND: ReactionResult = {
  isReactionPossible: false,
  balancedEquation: "Reaction Not in Database",
  products: [],
  reactionType: "None",
  explanation: "This specific combination of reactants is not available in our pre-compiled database. The app is currently running in offline mode and cannot simulate new reactions.",
  visualObservation: "No data available.",
  safetyWarning: "No data available."
};
