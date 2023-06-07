import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Repo } from "../models/GitRepo";
import { getRepository } from "../services/GitRepoService";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { format } from "date-fns";

type Params = {
  owner: string;
  repo: string;
};

export const RepoDetail: React.FC = () => {
  const owner = useParams<Params>().owner || "";
  const repo = useParams<Params>().repo || "";
  const [repoData, setRepoData] = useState<Repo | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRepo = async () => {
      const fetchedRepo = await getRepository(owner, repo);
      setRepoData(fetchedRepo);
    };

    fetchRepo();
  }, [owner, repo]);

  if (!repoData) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar className="flex justify-between gap-4 items-center">
          <Typography variant="h6" color="inherit" noWrap>
            <a href={repoData.html_url} className="underline text-white">
              {repoData.name}
            </a>
          </Typography>
          <div className="text-white flex justify-between gap-2 items-center">
            <a href={repoData.owner.html_url} className="flex items-center">
              <h2 className="text-2xl font-bold">{repoData.owner.login}</h2>
              <img
                alt={repoData.owner.login}
                src={repoData.owner.avatar_url}
                style={{ height: "50px", width: "50px" }}
                className="mr-4 rounded-full"
              />
            </a>
          </div>
        </Toolbar>
      </AppBar>
      <Box className="mt-16 p-4">
        <Typography variant="body1" color="textPrimary">
          Stars: {repoData.stargazers_count}
        </Typography>
        <Typography variant="body1" color="textPrimary">
          Language: {repoData.language}
        </Typography>
        <Typography variant="body1" color="textPrimary">
          Forks: {repoData.forks_count}
        </Typography>
        <Typography variant="body1" color="textPrimary">
          Open Issues: {repoData.open_issues_count}
        </Typography>
        <Typography variant="body1" color="textPrimary">
          Created At: {format(new Date(repoData.created_at), "dd-MM-yyyy")}
        </Typography>
        <Typography variant="body1" color="textPrimary">
          Last Updated At: {format(new Date(repoData.updated_at), "dd-MM-yyyy")}
        </Typography>
        <Typography variant="body1" color="textPrimary">
          Public or Private: {repoData.private ? "Private" : "Public"}
        </Typography>
        <Typography variant="body1" color="textPrimary">
          Archived: {repoData.archived ? "Yes" : "No"}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(-1)}
          className="mt-4"
        >
          Return
        </Button>
      </Box>
    </Box>
  );
};
