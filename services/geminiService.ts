
import { GoogleGenAI } from "@google/genai";
import { Shipment } from '../types';

// IMPORTANT: This check is for a web environment where process.env is not
// available. In a real application, you would use a secure way to
// manage API keys, likely through a backend proxy.
const API_KEY = process.env.API_KEY || "";

if (!API_KEY) {
  console.warn("Gemini API key not found. AI features will be disabled. Please set the API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getDeliveryPrediction = async (shipment: Shipment): Promise<string> => {
  if (!API_KEY) return "AI prediction is disabled. API key not configured.";

  const historyText = shipment.history.map(h => `${h.timestamp} - ${h.status} at ${h.location}`).join('\n');

  const prompt = `
    Analyze the following cargo shipment data to predict the estimated time of arrival (ETA).
    
    Shipment Details:
    - Origin: ${shipment.origin}
    - Destination: ${shipment.destination}
    - Current Location: ${shipment.currentLocation}
    - Current Status: ${shipment.status}
    - Cargo Type: ${shipment.cargoType}
    - Weight (kg): ${shipment.weightKg}

    Shipment History:
    ${historyText}

    Based on this data, provide a concise ETA prediction.
    The response should be a single string, for example: "August 15, 2024, around 14:00 GMT".
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching delivery prediction:", error);
    return "Could not retrieve AI prediction at this time.";
  }
};

export const getWeatherAlert = async (origin: string, destination: string, currentLocation: string): Promise<string> => {
  if (!API_KEY) return "Weather alerts are disabled. API key not configured.";

  const prompt = `
    Provide a concise weather report for a cargo shipment route.
    - Origin: ${origin}
    - Destination: ${destination}
    - Current Location: ${currentLocation}

    Focus on any adverse conditions that could impact logistics, such as storms, heavy rain, fog, or high winds along the remaining path. If conditions are clear, state that.
    The response should be a short paragraph.
  `;
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching weather alert:", error);
    return "Could not retrieve weather information at this time.";
  }
};
