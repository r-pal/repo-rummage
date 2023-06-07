import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Repo } from "../models/GitRepo";
import { searchRepositories } from "../services/GitRepoService";
import { RepoList } from "./RepoList";
import Header from "./Header";
import Pagination from "./Pagination";
import { styled } from "@mui/material";

export const Home: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  // const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [linkHeader, setLinkHeader] = useState<string | null>(null);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  // const sort = "forks";
  // const order = "desc";
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  useEffect(() => {
    if (searchTerm !== "") {
      console.log("SEARCH TERM: ", searchTerm);
      // setQuery(searchTerm);

      searchRepositories(
        searchTerm,
        currentPage,
        pageSize
        // sort,
        // order
      ).then(({ repos, linkHeader, totalCount }) => {
        setRepos(repos);
        setLinkHeader(linkHeader);
        setTotalCount(totalCount);
      });
      // .catch(() => alert("Error"));
    }
  }, [searchTerm, pageSize, currentPage]);

  return (
    <>
      <Header onSearch={setSearchTerm} />
      <Offset />
      <RepoList repos={repos} />
      {totalCount ? (
        <Pagination
          pageSize={pageSize}
          setPageSize={setPageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalCount={totalCount}
        />
      ) : (
        ""
      )}
    </>
  );
};
