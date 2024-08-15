async function fetchRequest(path: string, options: RequestInit) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}${path}`,
      options,
    );
    const res = await response.json();
    return res;
  } catch (error) {
    throw new Error(error);
  }
}
export { fetchRequest };
