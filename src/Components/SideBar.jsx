import React from "react";
import { Drawer } from "@mui/material";
import SideBarContent from "./SideBarContent";

export const SideBar = ({ openDrawer }) => {
  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      hideBackdrop={true}
      ModalProps={{ keepMounted: true }}
      variant="persistent"
      sx={{
        "& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper": {
          marginTop: "64px",
          width: 250,
          backgroundColor: "#f5f5f5",
          borderRight: "none",
          height: "calc(100vh-64px)",
        },
      }}
    >
      <SideBarContent />
    </Drawer>
  );
};
