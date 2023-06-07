import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Repo } from "../models/GitRepo";
import { getRepository } from "../services/GitRepoService";
import { Button } from "@mui/material";

type Params = {
  owner: string;
  repo: string;
};

export const RepoDetail: React.FC = () => {
  const owner = useParams<Params>().owner || "";
  const repo = useParams<Params>().repo || "";
  const [repoData, setRepoData] = useState<Repo | null>(null);

  // const history = useHistory();

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
    <div>
      <h1>{repoData.name}</h1>
      <h2>{repoData.owner.login}</h2>
      <p>{repoData.description}</p>
      {/* <Button
        variant="contained"
        color="primary"
        onClick={() => history.goBack()}
      >
        Return
      </Button> */}
    </div>
  );
};
