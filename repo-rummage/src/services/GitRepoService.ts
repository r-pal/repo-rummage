import axios, { AxiosError } from "axios";
import { Repo } from "../models/GitRepo";

export async function searchRepositories(
  query: string,
  page: number,
  per_page: number = 10
): Promise<{ repos: Repo[]; linkHeader: string | null }> {
  try {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=${per_page}`
    );
    const linkHeader = response.headers.link || null;
    return { repos: response.data.items, linkHeader };
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error(err);
      if (err.response?.status === 422) {
        // Ignore the 422 error, return default response
        return { repos: [], linkHeader: null };
      }
    }
    throw err;
  }
}

//TODO: err handling: https://docs.github.com/en/rest/search?apiVersion=2022-11-28#access-errors-or-missing-search-results
