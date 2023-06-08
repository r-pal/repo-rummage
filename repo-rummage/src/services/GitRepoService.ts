import axios from "axios";
import { Repo } from "../models/GitRepo";
// sort: "stars" | "forks" | "help-wanted-issues" | "updated",
// order: "desc" | "asc"

// &sort=${sort}
// &order=${order}
export async function searchRepositories(
  query: string,
  page: number,
  per_page: number
): Promise<{ repos: Repo[]; linkHeader: string | null; totalCount: number }> {
  const { data, headers } = await axios
    .get(
      `https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=${per_page}`
    )
    .catch((error) => {
      if (axios.isAxiosError(error) && error.response?.status === 403) {
        throw error;
      }
      throw error;
    });

  return {
    repos: data.items,
    linkHeader: headers.link || null,
    totalCount: data.total_count,
  };
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
