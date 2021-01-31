import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Head from "next/head";
import HeaderSpace from "./HeaderSpace";
import Link from "next/link";
import Menu from "./Menu";
import RowDiv from "../RowDiv";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import { websiteName } from "../../utils/strings";

const Header = ({ selected, title = websiteName, imagePrefix = "" }) => {
  const [signedId, setSignedId] = useState(false);

  useEffect(() => {
    setSignedId(window.sessionStorage.getItem("signedId"));
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <AbsoluteDiv>
        <HeaderContainer>
          <LogoContainer>
            <Link href="/" scroll={false}>
              <PointerImg
                alt={`${websiteName} Logo`}
                src={`${imagePrefix}../images/logo.png`}
              />
            </Link>
            <Link href="/" scroll={false}>
              <Title color="secondary" variant="h5">
                {websiteName}
              </Title>
            </Link>
          </LogoContainer>
          <Menu selected={selected} signedId={signedId} />
          <HamburgerMenu selected={selected} signedId={signedId} />
        </HeaderContainer>
      </AbsoluteDiv>
      <HeaderSpace />
    </>
  );
};

const AbsoluteDiv = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  max-width: 1232px;
  height: 80px;
  padding: 0 2vw;
  z-index: 1200;
  background-color: #fff;
`;

const HeaderContainer = styled(RowDiv)`
  && {
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

const LogoContainer = styled(RowDiv)`
  && {
    align-items: center;
  }
`;

const PointerImg = styled.img`
  height: 70px;
  padding: 5px 0px;
  cursor: pointer;
  margin-right: 12px;
`;

const Title = styled(Typography)`
  && {
    font-size: 2vw;
    font-weight: bold;
    cursor: pointer;
    @media (min-width: 1280px) {
      font-size: 25px;
    }
    @media (max-width: 768px) {
      font-size: 3vw;
    }
    @media (max-width: 480px) {
      font-size: 4vw;
    }
  }
`;

export default Header;
