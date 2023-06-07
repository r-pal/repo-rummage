import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Repo } from "../models/GitRepo";
import { GitFork, Star } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

type RepoCardProps = {
  repo: Repo;
};

export const RepoCard: React.FC<RepoCardProps> = ({ repo }) => (
  <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography variant="h5" component="span">
        <Link to={`/${repo.owner.login}/${repo.name}`}>{repo.name}</Link>
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {repo.description}
      </Typography>
      <Typography variant="body2" component="span">
        <div className="flex gap-4">
          <div className="flex gap-1">
            <GitFork size={16} />
            {repo.forks_count}
          </div>
          <div className="flex gap-1">
            <Star size={16} weight="fill" />
            {repo.stargazers_count}
          </div>
          <div>{repo.language}</div>
        </div>
      </Typography>
    </CardContent>
  </Card>
);
