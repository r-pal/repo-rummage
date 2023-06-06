import React from "react";
import { Repo } from "../models/repo";

interface RepoListProps {
  repos: Repo[];
  onSelectRepo: (repo: Repo) => void;
}

export const RepoList: React.FC<RepoListProps> = ({ repos, onSelectRepo }) => {
  return (
    <div>
      {repos.map((repo) => (
        <div key={repo.id} onClick={() => onSelectRepo(repo)}>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
        </div>
      ))}
    </div>
  );
};
