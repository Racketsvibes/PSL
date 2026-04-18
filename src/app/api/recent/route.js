export const revalidate = 60; // Cache heavily

export async function GET() {
  try {
    // Return statically mocked recent match since real PSL 2026 hasn't finished any matches yet.
    // This perfectly mirrors the Sportmonk API live shape.
    const data = {
      data: [
        {
          id: 10027,
          league: { name: 'Pakistan Super League 2026' },
          localteam_id: 1, // Lahore
          visitorteam_id: 7, // Rawalpindi
          localteam: { name: 'Lahore Qalandars' },
          visitorteam: { name: 'Rawalpindi Pindiz' },
          note: 'Lahore Qalandars won by 48 runs',
          round: '27',
          status: 'Finished',
          runs: [
            { team_id: 1, inning: 1, score: 210, wickets: 4, overs: 20 },
            { team_id: 7, inning: 2, score: 162, wickets: 8, overs: 20 }
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
