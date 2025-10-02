import type { ReactionResult } from '../types';

interface ReactionDatabaseEntry {
  id: string; // A unique ID for the reaction, e.g., "HCl-NaOH"
  reactants: string[]; // Array of chemical formulas, used for matching
  result: ReactionResult;
}

export const REACTION_DATABASE: ReactionDatabaseEntry[] = [
  // Acid-Base Neutralization
  {
    id: "HCl-NaOH",
    reactants: ["HCl", "NaOH"],
    result: {
      isReactionPossible: true,
      balancedEquation: "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)",
      products: [ { name: "NaCl", state: "aqueous" }, { name: "H₂O", state: "liquid" } ],
      reactionType: "Acid-Base Neutralization",
      explanation: "Hydrochloric acid, a strong acid, reacts with sodium hydroxide, a strong base, to produce salt (sodium chloride) and water. This is a classic neutralization reaction.",
      visualObservation: "No visible change as both reactants and products are colorless solutions. The solution might warm up slightly as the reaction is exothermic.",
      safetyWarning: "Both reactants are corrosive. Handle with care."
    }
  },
  {
    id: "H2SO4-NaOH",
    reactants: ["H₂SO₄", "NaOH"],
    result: {
      isReactionPossible: true,
      balancedEquation: "H₂SO₄(aq) + 2NaOH(aq) → Na₂SO₄(aq) + 2H₂O(l)",
      products: [ { name: "Na₂SO₄", state: "aqueous" }, { name: "H₂O", state: "liquid" } ],
      reactionType: "Acid-Base Neutralization",
      explanation: "Sulfuric acid reacts with sodium hydroxide in a neutralization reaction to produce sodium sulfate salt and water.",
      visualObservation: "Clear, colorless solutions are mixed, resulting in a clear, colorless solution. The reaction is exothermic and releases heat.",
      safetyWarning: "Sulfuric acid and Sodium Hydroxide are highly corrosive. Avoid contact with skin and eyes."
    }
  },
   {
    id: "CH3COOH-NaOH",
    reactants: ["CH₃COOH", "NaOH"],
    result: {
      isReactionPossible: true,
      balancedEquation: "CH₃COOH(aq) + NaOH(aq) → CH₃COONa(aq) + H₂O(l)",
      products: [ { name: "CH₃COONa", state: "aqueous" }, { name: "H₂O", state: "liquid" } ],
      reactionType: "Acid-Base Neutralization",
      explanation: "Acetic acid (a weak acid) reacts with sodium hydroxide (a strong base) to form sodium acetate and water.",
      visualObservation: "Mixing two clear, colorless solutions results in another clear, colorless solution.",
      safetyWarning: "Handle sodium hydroxide with care as it is corrosive."
    }
  },

  // Precipitation (Double Displacement)
  {
    id: "AgNO3-NaCl",
    reactants: ["AgNO₃", "NaCl"],
    result: {
        isReactionPossible: true,
        balancedEquation: "AgNO₃(aq) + NaCl(aq) → AgCl(s)↓ + NaNO₃(aq)",
        products: [ { name: "AgCl", state: "solid" }, { name: "NaNO₃", state: "aqueous" } ],
        reactionType: "Double Displacement (Precipitation)",
        explanation: "When solutions of silver nitrate and sodium chloride are mixed, the silver and sodium ions switch partners. Silver chloride (AgCl) is insoluble in water and forms a solid precipitate.",
        visualObservation: "A white, curdy precipitate of silver chloride forms immediately upon mixing the clear solutions.",
        safetyWarning: "Silver nitrate can stain skin and clothes."
    }
  },
  {
    id: "Pb(NO3)2-KI",
    reactants: ["Pb(NO₃)₂", "KI"],
    result: {
        isReactionPossible: true,
        balancedEquation: "Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s)↓ + 2KNO₃(aq)",
        products: [ { name: "PbI₂", state: "solid" }, { name: "KNO₃", state: "aqueous" } ],
        reactionType: "Double Displacement (Precipitation)",
        explanation: "Lead(II) nitrate and potassium iodide react in a double displacement reaction to form a vibrant yellow precipitate of lead(II) iodide and soluble potassium nitrate.",
        visualObservation: "A brilliant yellow solid (lead iodide) precipitates out of the solution when the two clear liquids are mixed.",
        safetyWarning: "Lead compounds are toxic. Avoid ingestion and inhalation."
    }
  },

  // Single Displacement
  {
    id: "HCl-Zn",
    reactants: ["HCl", "Zn"],
    result: {
        isReactionPossible: true,
        balancedEquation: "2HCl(aq) + Zn(s) → ZnCl₂(aq) + H₂(g)↑",
        products: [ { name: "ZnCl₂", state: "aqueous" }, { name: "H₂", state: "gas" } ],
        reactionType: "Single Displacement (Redox)",
        explanation: "Zinc is more reactive than hydrogen, so it displaces hydrogen from hydrochloric acid. This forms zinc chloride and releases hydrogen gas.",
        visualObservation: "Bubbles of hydrogen gas are produced on the surface of the zinc metal. The zinc metal gradually dissolves.",
        safetyWarning: "Produces flammable hydrogen gas. Ensure good ventilation."
    }
  },
  {
    id: "AgNO3-Cu",
    reactants: ["AgNO₃", "Cu"],
    result: {
        isReactionPossible: true,
        balancedEquation: "2AgNO₃(aq) + Cu(s) → Cu(NO₃)₂(aq) + 2Ag(s)↓",
        products: [ { name: "Cu(NO₃)₂", state: "aqueous" }, { name: "Ag", state: "solid" } ],
        reactionType: "Single Displacement (Redox)",
        explanation: "Copper is more reactive than silver, so it displaces silver from the silver nitrate solution. This results in solid silver crystals and copper(II) nitrate solution.",
        visualObservation: "A copper wire placed in a clear silver nitrate solution will start to form beautiful, shiny silver crystals on its surface. The solution will slowly turn blue as copper(II) nitrate is formed.",
        safetyWarning: "Silver nitrate can stain skin. Copper salts can be toxic if ingested."
    }
  },

  // Gas Formation
  {
    id: "CaCO3-HCl",
    reactants: ["CaCO₃", "HCl"],
    result: {
      isReactionPossible: true,
      balancedEquation: "CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)↑",
      products: [ { name: "CaCl₂", state: "aqueous" }, { name: "H₂O", state: "liquid" }, { name: "CO₂", state: "gas" } ],
      reactionType: "Acid-Base (Gas Formation)",
      explanation: "Calcium carbonate (found in limestone and chalk) reacts with hydrochloric acid to produce calcium chloride, water, and carbon dioxide gas.",
      visualObservation: "Vigorous bubbling (effervescence) is observed as carbon dioxide gas is released. The solid calcium carbonate dissolves.",
      safetyWarning: "Ensure adequate ventilation due to CO₂ production."
    }
  },

  // Complex Redox
  {
    id: "H2O-Na",
    reactants: ["H₂O", "Na"],
    result: {
      isReactionPossible: true,
      balancedEquation: "2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)↑",
      products: [ { name: "NaOH", state: "aqueous" }, { name: "H₂", state: "gas" } ],
      reactionType: "Single Displacement (Redox)",
      explanation: "Sodium is a highly reactive alkali metal that reacts vigorously with water. It displaces one hydrogen atom from water to form sodium hydroxide and hydrogen gas.",
      visualObservation: "The piece of sodium metal fizzes and darts across the water surface, producing bubbles of hydrogen gas. It may even ignite with a yellow flame.",
      safetyWarning: "Highly exothermic and dangerous reaction. Produces flammable hydrogen gas and a corrosive solution. Should only be performed by professionals."
    }
  },
  {
    id: "Cu-HNO3",
    reactants: ["Cu", "HNO₃"],
    result: {
      isReactionPossible: true,
      balancedEquation: "Cu(s) + 4HNO₃(aq) → Cu(NO₃)₂(aq) + 2NO₂(g)↑ + 2H₂O(l)",
      products: [ { name: "Cu(NO₃)₂", state: "aqueous" }, { name: "NO₂", state: "gas" }, { name: "H₂O", state: "liquid" } ],
      reactionType: "Redox",
      explanation: "Copper reacts with concentrated nitric acid to produce copper(II) nitrate, nitrogen dioxide gas, and water. This is a redox reaction where copper is oxidized and nitric acid is reduced.",
      visualObservation: "A piece of copper metal dissolves in the acid. The solution turns a distinct blue color due to the formation of aqueous copper(II) nitrate. A pungent, reddish-brown gas (nitrogen dioxide) is evolved.",
      safetyWarning: "Nitric acid is highly corrosive. Nitrogen dioxide (NO₂) is a toxic gas. This reaction must be performed in a well-ventilated fume hood."
    }
  },
  {
    id: "KMnO4-HCl",
    reactants: ["KMnO₄", "HCl"],
    result: {
      isReactionPossible: true,
      balancedEquation: "2KMnO₄(aq) + 16HCl(aq) → 2KCl(aq) + 2MnCl₂(aq) + 8H₂O(l) + 5Cl₂(g)↑",
      products: [ { name: "KCl", state: "aqueous" }, { name: "MnCl₂", state: "aqueous" }, { name: "H₂O", state: "liquid" }, { name: "Cl₂", state: "gas" } ],
      reactionType: "Redox",
      explanation: "Potassium permanganate, a strong oxidizing agent, reacts with hydrochloric acid. The manganese is reduced from the +7 to the +2 oxidation state, while chloride is oxidized to chlorine gas.",
      visualObservation: "The deep purple solution of potassium permanganate becomes colorless (or very pale pink) as the MnO₄⁻ ion is consumed. A pale, greenish-yellow gas (chlorine) is produced.",
      safetyWarning: "Chlorine gas is toxic and a respiratory irritant. Reactants are corrosive. Must be performed in a fume hood."
    }
  },
  
  // Combustion
  {
    id: "CH4-O2",
    reactants: ["CH₄", "O₂"],
    result: {
      isReactionPossible: true,
      balancedEquation: "CH₄(g) + 2O₂(g) → CO₂(g)↑ + 2H₂O(g)↑",
      products: [ { name: "CO₂", state: "gas" }, { name: "H₂O", state: "gas" } ],
      reactionType: "Combustion",
      explanation: "Methane (natural gas) undergoes complete combustion in the presence of excess oxygen to produce carbon dioxide and water vapor, releasing a significant amount of energy as heat and light.",
      visualObservation: "A blue flame is produced. Water vapor may condense on cool surfaces.",
      safetyWarning: "Combustion reactions are highly exothermic and produce a flame. Methane is flammable."
    }
  },
  {
    id: "C2H5OH-O2",
    reactants: ["C₂H₅OH", "O₂"],
    result: {
      isReactionPossible: true,
      balancedEquation: "C₂H₅OH(l) + 3O₂(g) → 2CO₂(g)↑ + 3H₂O(g)↑",
      products: [ { name: "CO₂", state: "gas" }, { name: "H₂O", state: "gas" } ],
      reactionType: "Organic Combustion",
      explanation: "Ethanol burns in the presence of oxygen to produce carbon dioxide and water. This is a complete combustion reaction, releasing energy as heat and light.",
      visualObservation: "A clean blue flame is observed during the combustion.",
      safetyWarning: "Ethanol is flammable. The reaction is highly exothermic."
    }
  },

  // Synthesis
  {
    id: "Na-Cl2",
    reactants: ["Na", "Cl₂"],
    result: {
      isReactionPossible: true,
      balancedEquation: "2Na(s) + Cl₂(g) → 2NaCl(s)",
      products: [ { name: "NaCl", state: "solid" } ],
      reactionType: "Synthesis (Redox)",
      explanation: "Sodium, a highly reactive alkali metal, reacts vigorously with chlorine, a halogen gas, to form sodium chloride, commonly known as table salt. This is a synthesis reaction where electrons are transferred from sodium to chlorine.",
      visualObservation: "A piece of sodium metal burns with a brilliant yellow-orange flame in a container of pale green chlorine gas, producing a white smoke of solid sodium chloride.",
      safetyWarning: "This is a highly energetic reaction. Chlorine gas is toxic and corrosive. Sodium reacts violently with water. This should only be performed in a fume hood by professionals."
    }
  },
  {
    id: "H2-O2",
    reactants: ["H₂", "O₂"],
    result: {
      isReactionPossible: true,
      balancedEquation: "2H₂(g) + O₂(g) → 2H₂O(l)",
      products: [ { name: "H₂O", state: "liquid" } ],
      reactionType: "Synthesis (Redox)",
      explanation: "Hydrogen gas and oxygen gas react to form water. This reaction is highly exothermic and is the basis for hydrogen fuel cells.",
      visualObservation: "The reaction is explosive and produces a burst of energy. Water is formed as a product.",
      safetyWarning: "This is a highly explosive reaction. A mixture of hydrogen and oxygen gas is extremely flammable."
    }
  },

  // Decomposition
  {
    id: "H2O2", // Single reactant decomposition
    reactants: ["H₂O₂"],
    result: {
      isReactionPossible: true,
      balancedEquation: "2H₂O₂(aq) → 2H₂O(l) + O₂(g)↑",
      products: [ { name: "H₂O", state: "liquid" }, { name: "O₂", state: "gas" } ],
      reactionType: "Decomposition (Catalytic)",
      explanation: "Hydrogen peroxide decomposes into water and oxygen gas. This process can be slow but is often accelerated by a catalyst like potassium iodide or manganese dioxide.",
      visualObservation: "Bubbles of oxygen gas are produced. If a catalyst is used, the reaction can be very vigorous, producing a lot of foam and heat (the 'Elephant's Toothpaste' experiment).",
      safetyWarning: "Concentrated hydrogen peroxide is a strong oxidizer and can cause chemical burns."
    }
  },
  
  // Equilibrium & Catalysis
  {
    id: "N2-H2",
    reactants: ["N₂", "H₂"],
    result: {
      isReactionPossible: true,
      balancedEquation: "N₂(g) + 3H₂(g) ⇌ 2NH₃(g)",
      products: [ { name: "NH₃", state: "gas" } ],
      reactionType: "Equilibrium / Synthesis (Haber Process)",
      explanation: "This is the Haber process for synthesizing ammonia. It is a reversible reaction that reaches equilibrium. High pressure and a moderate temperature (around 400-450°C), along with an iron catalyst, are used to favor the forward reaction and increase the rate.",
      visualObservation: "This industrial reaction involves colorless gases and shows no visible change without analytical equipment. The conditions (high T & P) are crucial.",
      safetyWarning: "This reaction requires extremely high pressures and temperatures, making it unsuitable for a standard lab. Ammonia is a pungent, corrosive gas."
    }
  },

  // Organic Chemistry
  {
    id: "CH3COOH-C2H5OH",
    reactants: ["CH₃COOH", "C₂H₅OH"],
    result: {
      isReactionPossible: true,
      balancedEquation: "CH₃COOH(l) + C₂H₅OH(l) ⇌ CH₃COOC₂H₅(l) + H₂O(l)",
      products: [ { name: "CH₃COOC₂H₅", state: "liquid" }, { name: "H₂O", state: "liquid" } ],
      reactionType: "Organic (Esterification)",
      explanation: "This is Fischer esterification, where acetic acid and ethanol react to form an ester (ethyl acetate) and water. The reaction is an equilibrium and is typically catalyzed by a strong acid like sulfuric acid.",
      visualObservation: "Two colorless liquids are mixed and gently heated. The product, ethyl acetate, has a characteristic sweet, fruity smell (often described as nail polish remover or fruit drops).",
      safetyWarning: "Reactants are flammable and corrosive. Use gentle heating and a fume hood."
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