import { SearchBar } from "./SearchBar";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

type HeaderProps = {
  onSearch: (searchTerm: string) => void;
};

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar className="flex justify-between gap-4">
          <SearchBar onSearch={onSearch} />
          <h1 className="text-xl xl:text-4xl">
            <a href="http://localhost:3000">Repo Rummage</a>
          </h1>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
