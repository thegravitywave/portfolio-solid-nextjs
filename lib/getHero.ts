async function getHero() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/home`,
    );
    const res = await response.json();
    return res;
  } catch (error) {
    console.log("API_ERROR::::::", error);
  }
}

export default getHero;
