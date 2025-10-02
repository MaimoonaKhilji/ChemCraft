
import { GoogleGenAI, Type } from "@google/genai";
import type { Reactant, ReactionResult } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const reactionSchema = {
  type: Type.OBJECT,
  properties: {
    isReactionPossible: {
      type: Type.BOOLEAN,
      description: "Does a reaction occur between the given reactants under the specified conditions? True or false."
    },
    balancedEquation: {
      type: Type.STRING,
      description: "The balanced chemical equation for the reaction. E.g., '2H₂(g) + O₂(g) -> 2H₂O(l)'. If no reaction, state 'No Reaction'."
    },
    products: {
      type: Type.ARRAY,
      description: "An array of product chemical names and their states. E.g., [{ name: 'Water', state: 'liquid' }]. Empty if no reaction.",
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING, description: "Chemical name, e.g. 'Sodium Chloride'" },
          state: { type: Type.STRING, description: "e.g., solid, liquid, gas, aqueous" }
        }
      }
    },
    reactionType: {
      type: Type.STRING,
      description: "The type of reaction (e.g., Synthesis, Decomposition, Single Displacement, Double Displacement, Combustion, Acid-Base Neutralization). If no reaction, 'None'."
    },
    explanation: {
      type: Type.STRING,
      description: "A concise, step-by-step explanation of the reaction, suitable for a 10-12th grade student. Explain why the reaction happens and what is formed. If no reaction, explain why not."
    },
    visualObservation: {
      type: Type.STRING,
      description: "A description of the visual changes that would be observed. E.g., 'A white precipitate of AgCl forms.', 'Bubbles of hydrogen gas are evolved.', 'The solution turns from blue to colorless.'"
    },
    safetyWarning: {
      type: Type.STRING,
      description: "A brief safety warning relevant to this reaction. E.g., 'Produces flammable hydrogen gas.' or 'Reaction is highly exothermic.' If none, state 'No major safety concerns.'"
    }
  },
  required: ["isReactionPossible", "balancedEquation", "products", "reactionType", "explanation", "visualObservation", "safetyWarning"]
};

export async function performReaction(reactants: Reactant[], conditions: string): Promise<ReactionResult> {
  const reactantListString = reactants.map(r => `${r.name} (${r.formula})`).join(', ');

  const prompt = `
    You are ChemCraft, an expert chemistry assistant for high school students (grades 10-12).
    A student wants to mix the following reactants: ${reactantListString}.
    The conditions are: ${conditions}.
    
    Analyze this and determine the chemical reaction. If no reaction occurs, please state that clearly.
    Provide your response in the requested JSON format. Be accurate and educational.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: reactionSchema,
    },
  });

  const jsonText = response.text;
  
  try {
    const result = JSON.parse(jsonText);
    return result as ReactionResult;
  } catch (e) {
    console.error("Failed to parse Gemini response:", jsonText);
    throw new Error("The model returned an invalid response. Please try again.");
  }
}
