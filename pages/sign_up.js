import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer";
import React from "react";
import SignUpForm from "../components/SignUpForm";
import { websiteName } from '../utils/strings';

const SignUpScreen = () => (
  <MainContainer>
    <Header selected={4} title={`Sign Up - ${websiteName}`} />
    <SignUpForm />
  </MainContainer>
);

export default SignUpScreen;
