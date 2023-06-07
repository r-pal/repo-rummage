import React, { useState, useEffect, useCallback } from "react";
import { Repo } from "../models/GitRepo";
import { searchRepositories } from "../services/GitRepoService";
import { RepoList } from "./RepoList";
import Header from "./Header";
import Pagination from "./Pagination";
import { styled } from "@mui/material";

export const Home: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [linkHeader, setLinkHeader] = useState<string | null>(null);
  const per_page = 10;
  // const sort = "forks";
  // const order = "desc";
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  const handleSearch = useCallback(
    async (page: number = 1) => {
      const { repos, linkHeader } = await searchRepositories(
        query,
        page,
        per_page
        // sort,
        // order
      );
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
      <Offset />
      <RepoList repos={repos} />
      <Pagination linkHeader={linkHeader} onPageChange={handleSearch} />
    </div>
  );
};
