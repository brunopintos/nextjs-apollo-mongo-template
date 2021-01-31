import { secondary, tertiary } from "../../utils/colors";
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
  height: 153.5px;
  width: 153.5px;
  border-radius: 50%;
  object-fit: cover;
  padding: 16px;
`;

const NameContainer = styled(RowDiv)`
  align-items: center;
`;

const NameText = styled(Typography)`
  && {
    margin-left: 0.2em;
    font-size: 21px;
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
  background-color: ${secondary};
`;

const BodyRow = styled(Row)`
  &:hover {
    background-color: ${tertiary};
  }
`;

const InformationText = styled(Typography)`
  && {
    font-size: 16px;
  }
`;

const Category = styled(InformationText)`
  && {
    margin: 0 0.5em;
  }
`;

export default UserCard;
