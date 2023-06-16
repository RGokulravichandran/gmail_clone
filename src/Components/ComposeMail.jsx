import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  InputBase,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Close, DeleteOutline, SendTimeExtension } from "@mui/icons-material";
import useApi from "../hooks/useAPI";
import { API_URLS } from "../services/api.urls";

const dialogStyle = {
  height: "90%",
  width: "80%",
  borderShadow: "none",
  borderRadius: "10px 10px 0 0",
  maxHeight: "100%",
  maxWidth: "100%",
};

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  backgroundColor: "#f2f6fc",
  "&>p": {
    fontSize: 14,
    fontWeigth: 500,
  },
});

const RecipientsBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "&>div": {
    fontSize: "14",
    borderBottom: "1px solid #f5f5f5",
    marginTop: "10",
  },
});

const Footer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
});

const SendButton = styled(Button)({
  backgroundColor: "#0b57d0",
  color: "#fff",
  fontWeight: 500,
  textTransform: "none",
  borderRadius: 18,
  width: 100,
});

const ComposeMail = ({ openDialog, setOpenDialog }) => {
  const [data, setData] = useState({});
  const sentEmailService = useApi(API_URLS.saveSentEmails);

  const config = {
    Host: "smtp.elasticemail.com",
    Username: process.env.REACT_APP_USERNAME,
    Password: process.env.REACT_APP_PASSWORD,
    Port: 2525,
  };

  const closeComposeMail = (e) => {
    e.preventDefault();
    setOpenDialog(false);
  };

  const SendMail = (e) => {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        From: "rgokulravichandran@gmail.com",
        Subject: data.subject,
        Body: data.body,
      }).then((message) => alert(message));
    }

    const payload = {
      to: data.to,
      from: " rgokulravichandran@gmail.com",
      subject: data.subject,
      body: data.body,
      data: new Date(),
      image: "",
      name: " Gokul name",
      starred: false,
      type: "sent",
    };

    sentEmailService.call(payload);

    if (!sentEmailService.error) {
      setOpenDialog(false);
      setData({});
    } else {
    }

    setOpenDialog(false);
  };

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  return (
    <div>
      <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
        <Header>
          <Typography>New Message</Typography>
          <Close fontSize="small" onClick={(e) => closeComposeMail(e)} />
        </Header>
        <RecipientsBox>
          <InputBase
            placeholder="Recipients"
            name="to"
            onChange={(e) => onValueChange(e)}
          />
          <InputBase
            placeholder="Subject"
            name="subject"
            onChange={(e) => onValueChange(e)}
          />
        </RecipientsBox>
        <TextField
          multiline
          rows={20}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
          name="body"
          onChange={(e) => onValueChange(e)}
        ></TextField>
        <Footer>
          <SendButton onClick={(e) => SendMail(e)}>Sent</SendButton>
          <DeleteOutline onClick={() => setOpenDialog(false)} />
        </Footer>
      </Dialog>
    </div>
  );
};

export default ComposeMail;
