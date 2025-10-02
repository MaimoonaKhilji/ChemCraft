import type { Chemical } from './types';

export const AVAILABLE_CHEMICALS: Chemical[] = [
  // Acids
  { name: "Hydrochloric Acid", formula: "HCl" },
  { name: "Sulfuric Acid", formula: "H₂SO₄" },
  { name: "Nitric Acid", formula: "HNO₃" },
  { name: "Acetic Acid", formula: "CH₃COOH" },
  { name: "Phosphoric Acid", formula: "H₃PO₄" },
  { name: "Carbonic Acid", formula: "H₂CO₃" },

  // Bases
  { name: "Sodium Hydroxide", formula: "NaOH" },
  { name: "Potassium Hydroxide", formula: "KOH" },
  { name: "Calcium Hydroxide", formula: "Ca(OH)₂" },
  { name: "Magnesium Hydroxide", formula: "Mg(OH)₂" },
  { name: "Barium Hydroxide", formula: "Ba(OH)₂" },
  { name: "Ammonia", formula: "NH₃" },

  // Salts
  { name: "Sodium Chloride", formula: "NaCl" },
  { name: "Sodium Carbonate", formula: "Na₂CO₃" },
  { name: "Sodium Bicarbonate", formula: "NaHCO₃" },
  { name: "Copper(II) Sulfate", formula: "CuSO₄" },
  { name: "Silver Nitrate", formula: "AgNO₃" },
  { name: "Lead(II) Nitrate", formula: "Pb(NO₃)₂" },
  { name: "Potassium Permanganate", formula: "KMnO₄" },
  { name: "Potassium Iodide", formula: "KI" },
  { name: "Potassium Dichromate", formula: "K₂Cr₂O₇" },
  { name: "Iron(III) Chloride", formula: "FeCl₃" },
  { name: "Calcium Carbonate", formula: "CaCO₃" },

  // Metals
  { name: "Sodium", formula: "Na" },
  { name: "Magnesium", formula: "Mg" },
  { name: "Aluminum", formula: "Al" },
  { name: "Zinc", formula: "Zn" },
  { name: "Iron", formula: "Fe" },
  { name: "Lead", formula: "Pb" },
  { name: "Copper", formula: "Cu" },
  { name: "Silver", formula: "Ag" },

  // Non-metals & other
  { name: "Water", formula: "H₂O" },
  { name: "Hydrogen", formula: "H₂" },
  { name: "Oxygen", formula: "O₂" },
  { name: "Chlorine", formula: "Cl₂" },
  { name: "Nitrogen", formula: "N₂" },
  { name: "Iodine", formula: "I₂" },
  { name: "Sulfur", formula: "S" },
  { name: "Carbon Dioxide", formula: "CO₂" },
  
  // Simple Organic
  { name: "Methane", formula: "CH₄" },
  { name: "Ethanol", formula: "C₂H₅OH" },
  { name: "Ethene", formula: "C₂H₄" },
];