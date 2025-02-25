"use server";

import { searchMusic } from "@/lib/queries/search/search";


export async function fetchSearchResults(query: string) {
  return searchMusic(query);
}
