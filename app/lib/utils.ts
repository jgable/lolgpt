import startCase from "lodash/startCase";

import { DataDragon } from "./types";

export async function getChampionData(champion: string): Promise<DataDragon.Champion | undefined> {
  // TODO: Validate/massage champion name
  const massagedChampion = startCase(champion);
  
  const response = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/13.8.1/data/en_US/champion/${massagedChampion}.json`,
    // @ts-ignore
    { next: { revalidate: 60_000 } }
  );

  const jsonResponse = await response.json() as DataDragon.ChampionResponse;

  // TODO: Error handling 🙄

  return jsonResponse.data[massagedChampion];
}
