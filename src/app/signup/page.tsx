"use client";

import SignupForm from "@/components/sign_up/form/SignupForm";
import React from "react";

import "../global.css";
import { MainSignUp } from "@/components/sign_up/form/signup_style";

function SignUp() {
  return (
    <MainSignUp>
      <span>Create your account and enjoy your songs!</span>
      <SignupForm />
    </MainSignUp>
  );
}

export default SignUp;
