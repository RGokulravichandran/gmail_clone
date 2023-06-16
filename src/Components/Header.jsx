import { AppBar, Box, InputBase, Toolbar, styled } from "@mui/material";
import React from "react";
import {
  Menu as MenuIcon,
  Search,
  Tune,
  HelpOutlineOutlined,
  SettingsOutlined,
  AppsOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import { GmailLogo } from "../global";

const StyledAppBar = styled(AppBar)({
  background: "#f5f5f5",
  boxShadow: "none",
});

const SearchBox = styled(Box)({
  background: "#eaf1fb",
  marginLeft: 80,
  borderRadius: 8,
  minWidth: 690,
  maxWidth: 720,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  "& > div": {
    width: "100%",
    padding: "0 10px",
  },
});

const OptionsBox = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "end",
  gap: "1rem",
});

export const Header = ({ toggleDrawer }) => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <MenuIcon color="action" onClick={toggleDrawer} />
        <img
          src={GmailLogo}
          alt="gmail logo"
          style={{ width: 110, marginLeft: 15 }}
        />
        <SearchBox>
          <Search color="action" />
          <InputBase placeholder="Search mail" />
          <Tune color="action" />
        </SearchBox>
        <OptionsBox>
          <HelpOutlineOutlined color="action" />
          <SettingsOutlined color="action" />
          <AppsOutlined color="action" />
          <AccountCircleOutlined color="action" />
        </OptionsBox>
      </Toolbar>
    </StyledAppBar>
  );
};
