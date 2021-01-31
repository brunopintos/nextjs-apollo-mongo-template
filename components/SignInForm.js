import * as Yup from "yup";
import { Button, Typography } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import ColumnContainer from "./ColumnContainer";
import RowDiv from "./RowDiv";
import SIGN_IN from "../graphql/mutations/signIn";
import { TextField } from "formik-material-ui";
import styled from "styled-components";
import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { websiteName } from "../utils/strings";

const SignInForm = () => {
  const [signIn, { }] = useMutation(SIGN_IN);
  const router = useRouter();

  useEffect(() => {
    if (window.sessionStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <SignInFormContainer>
        <TitleContainer>
          <RowDiv>
            <Title variant="h5">Sign In to</Title>
            <BoldTitle color="secondary" variant="h5">
              {websiteName}
            </BoldTitle>
            <Title variant="h5">!</Title>
          </RowDiv>
        </TitleContainer>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            signIn({
              variables: {
                user_signin_input: {
                  email: values.email,
                  password: values.password,
                },
              },
            })
              .then((data) => {
                const user = data.data.signIn;
                window.sessionStorage.setItem("token", user.token);
                window.sessionStorage.setItem("signedId", user.id.toString());
                window.sessionStorage.setItem(
                  "signedName",
                  JSON.stringify(`${user.name} ${user.surname}`)
                );
                router.push("/");
              })
              .catch(() => {
                setErrors({
                  email: "Invalid email or password",
                  password: "Invalid email or password",
                });
                setSubmitting(false);
              });
          }}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <MaxWidthContainer>
              <FormContainer noValidate onSubmit={handleSubmit}>
                <FormFieldContainer>
                  <FormField
                    component={TextField}
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email
                      ? errors.email
                      : ""}
                    label="Email"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    type="email"
                    value={values.email}
                    variant="outlined"
                  />
                </FormFieldContainer>
                <FormFieldContainer>
                  <FormField
                    component={TextField}
                    error={touched.password && !!errors.password}
                    helperText={touched.password && errors.password
                      ? errors.password
                      : ""}
                    label="Password"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    type="password"
                    value={values.password}
                    variant="outlined"
                  />
                </FormFieldContainer>
                <Button
                  aria-label="Continue"
                  color="primary"
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                >
                  Sign In
                </Button>
              </FormContainer>
              <TextContainer>
                <RowDiv>
                  <Text variant="h5">New to</Text>
                  <BoldText color="secondary" variant="h5">
                    {websiteName}
                  </BoldText>
                  <Text variant="h5">?</Text>
                </RowDiv>
                <LinkText
                  color="primary"
                  onClick={() => router.push("/sign_up")}
                  variant="h5"
                >
                  Create an account
                </LinkText>
              </TextContainer>
            </MaxWidthContainer>
          )}
        </Formik>
      </SignInFormContainer>
    </>
  );
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Your email address is invalid.")
    .min(2, "Your email address is invalid.")
    .required("Must enter an email address."),
  password: Yup.string().required("Must enter a password."),
});

const SignInFormContainer = styled(ColumnContainer)`
  && {
    align-items: center;
    margin-top: 24px;
  }
`;

const TitleContainer = styled(RowDiv)`
  && {
    justify-content: center;
    margin-bottom: 36px;
    align-items: center;
    @media (max-width: 480px) {
      flex-direction: column;
      margin-bottom: 16px;
    }
  }
`;

const TextContainer = styled(TitleContainer)`
  && {
    margin-bottom: 8px;
  }
`;

const Title = styled(Typography)`
  && {
    display: flex;
    font-size: 24px;
    margin-right: 4px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const BoldTitle = styled(Title)`
  && {
    margin: 0;
    font-weight: bold;
  }
`;

const Text = styled(Typography)`
  && {
    display: flex;
    font-size: 18px;
    margin-right: 4px;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const BoldText = styled(Text)`
  && {
    margin: 0;
    font-weight: bold;
  }
`;

const LinkText = styled(Text)`
  && {
    margin: 0;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FormFieldContainer = styled.div`
  width: 50%;
  padding: 0 2%;
  min-height: 85px;
  @media (max-width: 600px) {
    width: 100%;
    padding: 0;
  }
`;

const FormField = styled(Field)`
  && {
    width: 100%;
    justify-content: center;
  }
`;

const MaxWidthContainer = styled.div`
  && {
    max-width: 768px;
    width: 100%;
  }
`;

const FormContainer = styled(Form)`
  && {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-bottom: 24px;
  }
`;

export default SignInForm;
