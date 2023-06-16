import { Box, Button, styled, List, ListItem } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import { SIDEBAR_DATA } from "../Config/SideBar.Config";
import React, { useState } from "react";
import ComposeMail from "./ComposeMail";

const ComposeButton = styled(Button)({
  backgroundColor: "#c2e7ff",
  color: "#001d35",
  padding: 15,
  borderRadius: 16,
  textTransform: "none",
});

const Container = styled(Box)({
  padding: 8,
  "&>ul": {
    padding: "10px 0 0 5px",
    fontSize: 14,
    fontweight: 500,
    cursor: "pointer",
  },
  "&>ul>li>svg": {
    marginRight: 20,
  },
});

const SideBarContent = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const onComposeClick = () => {
    setOpenDialog(true);
  };
  return (
    <Container>
      <ComposeButton onClick={() => onComposeClick()}>
        <CreateOutlined />
        Compose
      </ComposeButton>
      <List>
        {SIDEBAR_DATA.map((data) => (
          <ListItem>
            <data.icon fontSize="small" />
            {data.title}
          </ListItem>
        ))}
      </List>
      <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Container>
  );
};

export default SideBarContent;
