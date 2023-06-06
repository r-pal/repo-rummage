import { Repo } from '../models/repo';
import axios, { AxiosError } from 'axios';

export const searchRepos = async (q: string, sort?: string, order?: string, per_page = 30, page = 1): Promise<Repo[]> => {
  try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${q}&sort=${sort}&order=${order}&per_page=${per_page}&page=${page}`, {
      headers: {
        Accept: 'application/vnd.github+json',
      },
    });
  
    return response.data.items as Repo[];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      console.error("Unknown error occurred while searching for repositories:", error);
    }
  
    return [];
  }
};

const handleAxiosError = (error: AxiosError) => {
  console.error("Error occurred while making request to Github API:", error.message);
};