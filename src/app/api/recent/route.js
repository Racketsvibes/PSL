export const revalidate = 60; // Cache heavily

export async function GET() {
  try {
    // Return statically mocked recent match since real PSL 2026 hasn't finished any matches yet.
    // This perfectly mirrors the Sportmonk API live shape.
    const data = {
      data: [
        {
          id: 9991,
          league: { name: 'Pakistan Super League 2026' },
          localteam_id: 1,
          visitorteam_id: 2,
          localteam: { name: 'Rawalpindi Pindiz' },
          visitorteam: { name: 'Peshawar Zalmi' },
          note: 'Rawalpindi Pindiz won by 34 runs',
          round: '3',
          status: 'Finished',
          runs: [
            { team_id: 1, inning: 1, score: 214, wickets: 4, overs: 20 },
            { team_id: 2, inning: 2, score: 180, wickets: 10, overs: 18.4 }
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
