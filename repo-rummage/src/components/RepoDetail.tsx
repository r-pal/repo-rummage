import React from "react";
import { Repo } from "../models/repo";

interface RepoDetailProps {
  repo: Repo;
}

export const RepoDetail: React.FC<RepoDetailProps> = ({ repo }) => {
  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <p>Number of open issues: {repo.open_issues_count}</p>
      <p>Number of forks: {repo.forks_count}</p>
    </div>
  );
};
