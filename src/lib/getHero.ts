import { fetchRequest } from "./fetchRequest";

async function getHero() {
  try {
    const response = await fetchRequest("/api/home", {
      next: { revalidate: 60 },
    });
    return response;
  } catch (error) {
    console.log("API_ERROR::::::", error);
  }
}

export default getHero;
