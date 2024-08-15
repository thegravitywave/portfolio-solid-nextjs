import { fetchRequest } from "./fetchRequest";

async function getHero() {
  try {
    const response = await fetchRequest("/api/home");
    return response;
  } catch (error) {
    console.log("API_ERROR::::::", error);
  }
}

export default getHero;
