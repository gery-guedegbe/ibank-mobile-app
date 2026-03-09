import axios from "axios";

const API_URL = "https://open.er-api.com/v6/latest";

export const getExchangeRate = async (base: string, target: string) => {
  try {
    const response = await axios.get(`${API_URL}/${base}`);
    return response.data.rates[target];
  } catch (error) {
    console.error("Erreur lors de la récupération du taux :", error);
    return null;
  }
};
