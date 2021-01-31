import { Button } from "@material-ui/core";
import Link from "next/link";
import RowDiv from "../RowDiv";
import styled from "styled-components";

const Menu = ({ selected, signedId }) => (
  <OnlyWebDiv>
    {signedId && (
      <>
        <Link href="/" scroll={false}>
          <MenuButton
            color="primary"
            variant={selected === 0 ? "contained" : "text"}
          >
            Home
          </MenuButton>
        </Link>
        <Link href={`/user/${signedId}`} scroll={false}>
          <MenuButton
            color="primary"
            variant={selected === 2 ? "contained" : "text"}
          >
            Profile
          </MenuButton>
        </Link>
        <Link href="/sign_in" scroll={false}>
          <MenuButton
            color="primary"
            onClick={() => window.sessionStorage.clear()}
            variant={selected === 5 ? "contained" : "text"}
          >
            Sign out
          </MenuButton>
        </Link>
      </>
    )}
  </OnlyWebDiv>
);

const MenuButton = styled(Button)`
  && {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const OnlyWebDiv = styled(RowDiv)`
  && {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export default Menu;
