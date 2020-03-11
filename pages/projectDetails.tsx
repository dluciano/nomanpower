import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MuiLink from "@material-ui/core/Link";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Tooltip from "@material-ui/core/Tooltip";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function ProjectDetails() {
  return (
    <Container fixed>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Project Name
        </Typography>
        <Link href="/index" color="secondary">
          &lt; Go Back
        </Link>
        <Typography>Created by: Foo Bar</Typography>
        <Typography>Created on: Wed 11, March 2020</Typography>
        <Typography>Created in: Some place</Typography>
        <Typography>Users:</Typography>
        <AvatarGroup>
          <Avatar alt="Remy Sharp" src="http://placekitten.com/200/300" />
          <Avatar alt="Travis Howard" src="http://placekitten.com/200/300" />
          <Avatar alt="Cindy Baker" src="http://placekitten.com/200/300" />
          <Tooltip title="Foo • Bar • Baz">
            <Avatar>+3</Avatar>
          </Tooltip>
        </AvatarGroup>

        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
