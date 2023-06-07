import React from "react";
import { Grid, Pagination } from "@mui/material";
import { Repo } from "../models/GitRepo";
import { RepoCard } from "./RepoCard";

interface RepoListProps {
  repos: Repo[];
}

export const RepoList: React.FC<RepoListProps> = ({ repos }) => (
  <div>
    <Grid container spacing={2}>
      {repos.map((repo) => (
        <Grid item key={repo.id} xs={12} sm={6} md={4}>
          <RepoCard repo={repo} />
        </Grid>
      ))}
    </Grid>
    {/* <Pagination linkHeader={linkHeader} onPageChange={handleSearch} /> */}
  </div>
);
