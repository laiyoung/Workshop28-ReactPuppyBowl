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


export async function addPlayer(newPlayer) {
  try {
    const response = await fetch(API_URL + "/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayer),
    });
    const result = await response.json();
    return result
  } catch (err) {
    console.error("Oops, something went wrong with adding that player!", err);
  }
}



export async function deletePlayer(playerId) {
  try {
    console.log(playerId);
    await fetch(API_URL + "/players/" + playerId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error(
      `Whoops, trouble removing player #${playerId} from the roster!`,
      err
    );
  }
}

