const API_TOKEN = 'AYnZBWo6IEUZI94anocOeB9Z9TDIoj4IbALXCIrpDRJKfo0abkhhYHWsOky0';

async function testAPI() {
  console.log("Fetching recent PSL matches...");
  try {
    const res = await fetch(`https://cricket.sportmonks.com/api/v2.0/fixtures?api_token=${API_TOKEN}&include=localteam,visitorteam,runs,league&filter[status]=Finished`);
    const data = await res.json();
    const pslM = (data.data || []).filter(match => match.league?.name?.toLowerCase().includes('pakistan super league') || match.league?.name?.toLowerCase().includes('psl'));
    
    pslM.sort((a,b) => new Date(b.starting_at) - new Date(a.starting_at));

    console.log("Recent PSL matches:", JSON.stringify(pslM.slice(0, 3), null, 2));
  } catch(e) { console.error(e) }
}

testAPI();
