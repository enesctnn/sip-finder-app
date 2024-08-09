export async function postCocktails(
  cocktails: string[],
  user_email: string
): Promise<Response> {
  const response = await fetch('/api/cocktails/save', {
    method: 'POST',
    body: JSON.stringify({ cocktails, user_email }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response;
}
