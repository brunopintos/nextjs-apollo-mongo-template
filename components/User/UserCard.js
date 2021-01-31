import CardContainer from "../CardContainer";
import RowDiv from "../RowDiv";
import { Typography } from "@material-ui/core";
import { information } from "../../utils/strings";
import styled from "styled-components";

const UserCard = ({ user }) => {
  if (!user) return null;
  const {
    name,
    surname,
    picture,
    email,
    phone,
  } = user;
  return (
    <CardContainer>
      <PrimaryContainer>
        <ProfilePicture src={picture} />
        <NameContainer>
          <NameText>{name}</NameText>
          <NameText>{surname}</NameText>
        </NameContainer>
      </PrimaryContainer>
      <SecondaryContainer>
        <SectionHeader>{information}</SectionHeader>
        <Email>{email}</Email>
        <Phone>{phone}</Phone>
      </SecondaryContainer>
    </CardContainer>
  );
};

const PrimaryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfilePicture = styled.img`
  max-height: 12vw;
  max-width: 12vw;
  border-radius: 50%;
  object-fit: cover;
  padding: 16px;
  @media (min-width: 1280px) {
    height: 153.5px;
    width: 153.5px;
  }
  @media (max-width: 768px) {
    max-height: 20vw;
    max-width: 20vw;
  }
  @media (max-width: 480px) {
    max-height: 25vw;
    max-width: 25vw;
  }
`;

const NameContainer = styled(RowDiv)`
  align-items: center;
`;

const NameText = styled(Typography)`
  && {
    margin-left: 0.2em;
    font-size: 1.7vw;
    @media (min-width: 1280px) {
      font-size: 21px;
    }
    @media (max-width: 768px) {
      font-size: 2.5vw;
    }
    @media (max-width: 480px) {
      font-size: 3.4vw;
    }
  }
`;

const SecondaryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px 0;
`;

const SectionHeader = ({ children }) => (
  <HeaderRow>
    <Category>{children}</Category>
  </HeaderRow>
);

const Email = ({ children }) => (
  <BodyRow>
    <Category>E-mail:</Category>
    <InformationText>{children}</InformationText>
  </BodyRow>
);

const Phone = ({ children }) => (
  <BodyRow>
    <Category>Phone:</Category>
    <InformationText>{children}</InformationText>
  </BodyRow>
);

const Row = styled(RowDiv)`
  justify-content: flex-start;
  width: 100%;
  padding: 8px;
`;

const HeaderRow = styled(Row)`
  color: white;
  background-color: #e91e63;
`;

const BodyRow = styled(Row)`
  &:hover {
    background-color: #f8bbd0;
  }
`;

const InformationText = styled(Typography)`
  && {
    font-size: 1.3vw;
    @media (min-width: 1280px) {
      font-size: 16px;
    }
    @media (max-width: 768px) {
      font-size: 2vw;
    }
    @media (max-width: 480px) {
      font-size: 3vw;
    }
  }
`;

const Category = styled(InformationText)`
  && {
    margin: 0 0.5em;
  }
`;

export default UserCard;
