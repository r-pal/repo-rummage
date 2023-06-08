import React, { useState, useEffect } from "react";
import { Repo } from "../models/GitRepo";
import { searchRepositories } from "../services/GitRepoService";
import { RepoList } from "./RepoList";
import Header from "./Header";
import Pagination from "./Pagination";
import { styled } from "@mui/material";
import WarningSnackbar from "./WarningSnackbar";

export const Home: React.FC = () => {
  const initialSearchTerm = localStorage.getItem("searchTerm") || "";
  const initialPageSize = parseInt(localStorage.getItem("pageSize") || "10");
  const initialCurrentPage = parseInt(
    localStorage.getItem("currentPage") || "1"
  );
  const [repos, setRepos] = useState<Repo[]>([]);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [linkHeader, setLinkHeader] = useState<string | null>(null);

  //pagination
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [currentPage, setCurrentPage] = useState(initialCurrentPage);
  const [totalCount, setTotalCount] = useState(0);

  //warning
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  // Retain search and pagaination details locally
  useEffect(() => {
    localStorage.setItem("searchTerm", searchTerm);
    localStorage.setItem("pageSize", pageSize.toString());
    localStorage.setItem("currentPage", currentPage.toString());
  }, [searchTerm, pageSize, currentPage]);

  useEffect(() => {
    if (searchTerm !== "") {
      searchRepositories(searchTerm, currentPage, pageSize)
        .then(({ repos, linkHeader, totalCount }) => {
          setRepos(repos);
          setLinkHeader(linkHeader);
          setTotalCount(totalCount);
        })
        .catch((err) => {
          if (err.response?.status === 403) {
            setSnackbarOpen(true);
          }
        });
    }
  }, [searchTerm, pageSize, currentPage]);

  return (
    <>
      <Header onSearch={setSearchTerm} />
      <Offset />
      {repos.length > 0 ? (
        <>
          <RepoList repos={repos} />
          {totalCount ? (
            <Pagination
              pageSize={pageSize}
              setPageSize={setPageSize}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalCount={totalCount}
            />
          ) : null}
        </>
      ) : searchTerm !== "" ? (
        <div>
          No repositories were found using this search term. Please try a
          different term.
        </div>
      ) : null}
      <WarningSnackbar
        open={snackbarOpen}
        handleClose={() => setSnackbarOpen(false)}
      />
    </>
  );
};
