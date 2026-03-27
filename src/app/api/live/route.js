export const revalidate = 15; // Aggressively cache the JSON result globally for 15 seconds to heavily protect API rate limits

export async function GET() {
  try {
    const API_URL = 'https://cricket.sportmonks.com/api/v2.0/livescores';
    const API_TOKEN = 'AYnZBWo6IEUZI94anocOeB9Z9TDIoj4IbALXCIrpDRJKfo0abkhhYHWsOky0';
    const INCLUDES = 'localteam,visitorteam,runs,league';

    const response = await fetch(`${API_URL}?api_token=${API_TOKEN}&include=${INCLUDES}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 15 } // Next.js 14 specific caching
    });

    if (!response.ok) {
      throw new Error(`Sportmonks API Responded with ${response.status}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Live Score Fetch Error:", error);
    return Response.json({ data: [], error: error.message }, { status: 500 });
  }
}
