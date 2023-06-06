import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Repo } from "../models/repo";

interface RepoCardProps {
  repo: Repo;
}

export const RepoCard: React.FC<RepoCardProps> = ({ repo }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{repo.name}</Typography>
      <Typography variant="subtitle1">{repo.description}</Typography>
      <Typography variant="body2">Forks: {repo.forks_count}</Typography>
      <Typography variant="body2">
        Open Issues: {repo.open_issues_count}
      </Typography>
      <Typography variant="body2">Stars: {repo.stargazers_count}</Typography>
    </CardContent>
  </Card>
);
