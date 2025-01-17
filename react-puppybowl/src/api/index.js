const cohortName = "2409-GHP-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;


export async function getPlayers() {
  try {
    const response = await fetch(API_URL + "/players");
    const json = await response.json();
    const result = json.data;
    console.log(result.players);

    return result.players;

  } catch (error) {
    console.error("Uh oh, trouble fetching players!", error);
  }
}
getPlayers()


export function addPlayer(player) {
  console.log(`addPlayers: ${player}`);
}
export function deletePlayer(playerID) {
  console.log(`addPlayer: ${playerID} `);
}
