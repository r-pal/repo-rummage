import React, { useState, useEffect, useCallback } from "react";
import { Repo } from "../models/GitRepo";
import { searchRepositories } from "../services/GitRepoService";
import { RepoList } from "./RepoList";
import Header from "./Header";
import Pagination from "./Pagination";

export const Home: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [linkHeader, setLinkHeader] = useState<string | null>(null);

  const handleSearch = useCallback(
    async (page: number = 1) => {
      const { repos, linkHeader } = await searchRepositories(query, page);
      setRepos(repos);
      setLinkHeader(linkHeader);
    },
    [query]
  );

  useEffect(() => {
    if (searchTerm !== "") {
      setQuery(searchTerm);
      handleSearch();
    }
  }, [searchTerm, handleSearch]);

  return (
    <div>
      <Header onSearch={setSearchTerm} />
      <RepoList repos={repos} />
      <Pagination linkHeader={linkHeader} onPageChange={handleSearch} />
    </div>
  );
};
