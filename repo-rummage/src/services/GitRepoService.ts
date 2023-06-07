import axios from "axios";
import { Repo } from "../models/GitRepo";

export async function searchRepositories(
  query: string,
  page: number,
  per_page: number
  // sort: "stars" | "forks" | "help-wanted-issues" | "updated",
  // order: "desc" | "asc"
): Promise<{ repos: Repo[]; linkHeader: string | null; totalCount: number }> {
  try {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=${per_page}`
      // &sort=${sort}
      // &order=${order}
    );
    return {
      repos: response.data.items,
      linkHeader: response.headers.link || null,
      totalCount: response.data.total_count,
    };
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error(err);
      if (err.response?.status === 403 && !err.response.data) {
        alert("Reached limit of 10 hits per minute!");
      }
    }
    throw err;
  }
}

export async function getRepository(
  owner: string,
  repo: string
): Promise<Repo> {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}`
    );
    return response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error(err);
    }
    throw err;
  }
}

//TODO: err handling: https://docs.github.com/en/rest/search?apiVersion=2022-11-28#access-errors-or-missing-search-results
