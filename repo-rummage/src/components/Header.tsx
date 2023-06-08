import { SearchBar } from "./SearchBar";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

type HeaderProps = {
  onSearch: (searchTerm: string) => void;
};

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Grid
            container
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12} sm="auto">
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Diphylleia, sans-serif",
                  fontSize: { xs: "1rem", sm: "2rem" },
                }}
              >
                <Link to={"/"}>Repo Rummage</Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm="auto">
              <SearchBar onSearch={onSearch} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
