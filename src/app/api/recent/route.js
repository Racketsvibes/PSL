export const revalidate = 60; // Cache heavily

export async function GET() {
  try {
    // Return statically mocked recent match since real PSL 2026 hasn't finished any matches yet.
    // This perfectly mirrors the Sportmonk API live shape.
    const data = {
      data: [
        {
          id: 10010,
          league: { name: 'Pakistan Super League 2026' },
          localteam_id: 7, // Rawalpindi
          visitorteam_id: 2, // Karachi
          localteam: { name: 'Rawalpindi Pindiz' },
          visitorteam: { name: 'Karachi Kings' },
          note: 'Karachi Kings won by 5 wickets',
          round: '10',
          status: 'Finished',
          runs: [
            { team_id: 7, inning: 1, score: 197, wickets: 6, overs: 20 },
            { team_id: 2, inning: 2, score: 198, wickets: 5, overs: 19.2 }
          ]
        }
      ]
    };
    return Response.json(data);
  } catch (error) {
    console.error("Recent Match Mock API Error:", error);
    return Response.json({ data: [], error: error.message }, { status: 500 });
  }
}
