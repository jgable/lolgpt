import { NextRequest, NextResponse } from "next/server";
import { getChampionData } from "@/app/lib/utils";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const champion = req.nextUrl.searchParams.get("championName");
  if (champion == null) return NextResponse.json({error: "Please provide a champion in the url params"});
  
  const championData = await getChampionData(champion);

  return NextResponse.json({
    champion: championData,
    infoLink: `https://lolgpt-plugin.vercel.app/champions/${encodeURIComponent(champion)}`,
  });
}
