import Link from "next/link";
import React from "react";
import { FormSignIn } from "./sigin_style";

function SigninForm() {
  return (
    <FormSignIn action="">
      <div>
        <h1>Create Account</h1>
        <section>
          <label htmlFor="first_name">First name</label>
          <input type="text" id="first_name" maxLength={10} required />
          <label htmlFor="last_name">Last name</label>
          <input type="text" id="last_name" maxLength={10} required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" maxLength={50} required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" minLength={6} required />
          <section id="buttons">
            <button type="submit">Create account</button>
            <Link href={"/signup"}>Already have account?</Link>
          </section>
        </section>
      </div>
    </FormSignIn>
  );
}

export default SigninForm;
