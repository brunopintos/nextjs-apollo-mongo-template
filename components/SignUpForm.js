import * as Yup from "yup";
import { Button, Typography } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import ColumnContainer from "./ColumnContainer";
import RowDiv from "./RowDiv";
import SIGN_UP from "../graphql/mutations/signUp";
import { TextField } from "formik-material-ui";
import styled from "styled-components";
import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { websiteName } from "../utils/strings";

const SignUpForm = () => {
  const [signUp, { }] = useMutation(SIGN_UP);
  const router = useRouter();

  useEffect(() => {
    if (window.sessionStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <SignUpFormContainer>
        <TitleContainer>
          <Title variant="h5">Sign up to start sharing on</Title>
          <RowDiv>
            <BoldTitle color="secondary" variant="h5">
              {websiteName}
            </BoldTitle>
            <Title variant="h5">!</Title>
          </RowDiv>
        </TitleContainer>
        <Formik
          initialValues={{
            email: "",
            name: "",
            password: "",
            passwordConfirmation: "",
            phone: undefined,
            surname: "",
          }}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            signUp({
              variables: {
                user_signup_input: {
                  email: values.email,
                  name: values.name,
                  password: values.password,
                  phone: values.phone.toString(),
                  surname: values.surname,
                },
              },
            })
              .then((data) => {
                const user = data.data.signUp;
                window.sessionStorage.setItem("token", user.token);
                window.sessionStorage.setItem("signedId", user.id.toString());
                window.sessionStorage.setItem(
                  "signedName",
                  JSON.stringify(`${values.name} ${values.surname}`)
                );
                router.push("/");
              })
              .catch(() => {
                setErrors({ email: "The email already exists" });
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
                    error={touched.name && !!errors.name}
                    helperText={touched.name && errors.name ? errors.name : ""}
                    label="Name"
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    type="text"
                    value={values.name}
                    variant="outlined"
                  />
                </FormFieldContainer>
                <FormFieldContainer>
                  <FormField
                    component={TextField}
                    error={touched.surname && !!errors.surname}
                    helperText={touched.surname && errors.surname
                      ? errors.surname
                      : ""}
                    label="Surname"
                    name="surname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    type="text"
                    value={values.surname}
                    variant="outlined"
                  />
                </FormFieldContainer>
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
                    error={touched.phone && !!errors.phone}
                    helperText={touched.phone && errors.phone
                      ? errors.phone
                      : ""}
                    label="Phone"
                    name="phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    type="number"
                    value={values.phone}
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
                <FormFieldContainer>
                  <FormField
                    component={TextField}
                    error={touched.passwordConfirmation
                      && !!errors.passwordConfirmation}
                    helperText={touched.passwordConfirmation
                      && !!errors.passwordConfirmation
                      ? errors.passwordConfirmation
                      : ""}
                    label="Confirm password"
                    name="passwordConfirmation"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    type="password"
                    value={values.passwordConfirmation}
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
                  Sign Up
                </Button>
              </FormContainer>
              <TextContainer>
                <Text variant="h5">Already have an account?</Text>
                <LinkText
                  color="primary"
                  onClick={() => router.push("/sign_in")}
                  variant="h5"
                >
                  Sign in here
                </LinkText>
              </TextContainer>
            </MaxWidthContainer>
          )}
        </Formik>
      </SignUpFormContainer>
    </>
  );
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Your email address is invalid.")
    .min(2, "Your email address is invalid.")
    .max(200, "What a long email address you have there.")
    .required("Must enter an email address."),
  name: Yup.string()
    .max(30, "What a long name you have there.")
    .required("Must enter a name."),
  password: Yup.string()
    .min(8, "Your password must be at least 8 characters.")
    .max(30, "Your password must be at most 30 characters.")
    .oneOf(
      [Yup.ref("passwordConfirmation"), null],
      "Your password and the confirmation must match."
    )
    .required("Must enter a password."),
  passwordConfirmation: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Your password and the confirmation must match."
    )
    .required("Must enter the password confirmation."),
  phone: Yup.number()
    .typeError("That doesn't look like a phone number.")
    .positive("That doesn't look like a phone number.")
    .integer("That doesn't look like a phone number.")
    .min(8, "That doesn't look like a phone number.")
    .required("Must enter a phone number."),
  surname: Yup.string()
    .max(30, "What a long surname you have there.")
    .required("Must enter a surname."),
});

const SignUpFormContainer = styled(ColumnContainer)`
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

export default SignUpForm;
