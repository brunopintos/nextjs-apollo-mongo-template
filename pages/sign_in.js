import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer";
import React from "react";
import SignInForm from "../components/SignInForm";
import { websiteName } from '../utils/strings';

const SignInScreen = () => (
  <MainContainer>
    <Header selected={3} title={`Sign In - ${websiteName}`} />
    <SignInForm />
  </MainContainer>
);

export default SignInScreen;
