import React from "react";
import { Grid } from "@mui/material";
import { Repo } from "../models/repo";
import { RepoCard } from "./RepoCard";

interface RepoListProps {
  repos: Repo[];
}

export const RepoList: React.FC<RepoListProps> = ({ repos }) => (
  <Grid container spacing={2}>
    {repos.map((repo) => (
      <Grid item key={repo.id} xs={12} sm={6} md={4}>
        <RepoCard repo={repo} />
      </Grid>
    ))}
  </Grid>
);
