import React, { useState, useEffect } from "react";
import { Repo } from "../models/repo";
import { searchRepos } from "../services/service";
import { RepoDetail } from "./RepoDetail";
import { RepoList } from "./RepoList";
import { SearchBar } from "./SearchBar";

export const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [repos, setRepos] = useState<Repo[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null);

  useEffect(() => {
    if (searchTerm !== "") {
      searchRepos(searchTerm)
        .then((data) => setRepos(data))
        .catch((error) => console.error(error));
    }
  }, [searchTerm]);

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      {selectedRepo ? (
        <RepoDetail repo={selectedRepo} />
      ) : (
        <RepoList repos={repos} onSelectRepo={setSelectedRepo} />
      )}
    </div>
  );
};
