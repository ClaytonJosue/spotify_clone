"use client";

import SigninForm from "@/components/sign_in/form/SigninForm";
import React from "react";

import "../global.css";
import { MainSignIn } from "@/components/sign_in/form/sigin_style";

function SignIn() {
  return (
    <MainSignIn>
      <span>Create your account and enjoy your songs!</span>
      <SigninForm />
    </MainSignIn>
  );
}

export default SignIn;
