import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ColumnDiv from "../ColumnDiv";
import Link from "next/link";
import MenuIcon from "@material-ui/icons/Menu";
import { secondary } from "../../utils/colors";
import styled from "styled-components";
import { useState } from "react";

const HamburgerMenu = ({ selected, signedId }) => {
  const [opened, setOpened] = useState(false);

  return (
    <OnlyMobileDiv>
      {signedId && (
        <>
          <StyledIconButton
            aria-label="menu"
            color="primary"
            onClick={() => setOpened(!opened)}
            size="medium"
          >
            <StyledHamburgerIcon />
          </StyledIconButton>
          <SwipeableDrawer
            anchor="right"
            onClose={() => setOpened(false)}
            onOpen={() => setOpened(true)}
            open={opened}
          >
            <ColumnStartDiv>
              <List aria-label="menu" component="nav">
                <Link href="/" scroll={false}>
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowRightIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      color={selected === 0 ? "primary" : "secondary"}
                      primary="Home"
                    />
                  </ListItem>
                </Link>
                <Link href={`/user/${signedId}`} scroll={false}>
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowRightIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      color={selected === 2 ? "primary" : "secondary"}
                      primary="Profile"
                    />
                  </ListItem>
                </Link>
                <Link href="/sign_in" scroll={false}>
                  <ListItem
                    button
                    onClick={() => window.sessionStorage.clear()}
                  >
                    <ListItemIcon>
                      <ArrowRightIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      color={selected === 3 ? "primary" : "secondary"}
                      primary="Sign out"
                    />
                  </ListItem>
                </Link>
              </List>
            </ColumnStartDiv>
          </SwipeableDrawer>
        </>
      )}
    </OnlyMobileDiv>
  );
};

const ColumnStartDiv = styled(ColumnDiv)`
  && {
    justify-content: flex-start;
    width: 250px;
  }
`;

const StyledIconButton = styled(IconButton)`
  && {
    background-color: ${secondary};
    border-radius: 5px;
  }
`;

const StyledHamburgerIcon = styled(MenuIcon)`
  && {
    color: #fff;
  }
`;

const OnlyMobileDiv = styled.div`
  && {
    @media (min-width: 769px) {
      display: none;
    }
  }
`;

export default HamburgerMenu;
