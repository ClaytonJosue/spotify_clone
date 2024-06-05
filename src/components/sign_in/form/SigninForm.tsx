import Link from "next/link";
import React from "react";

function SigninForm() {
  return (
    <form action="">
      <h1>Create Account</h1>
      <section>
        <label htmlFor="first_name">First name</label>
        <input type="text" id="first_name" />
        <label htmlFor="last_name">Last name</label>
        <input type="text" id="last_name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />
        <section>
          <button type="submit">Create account</button>
          <Link href={"/signup"}>Already have account?</Link>
        </section>
      </section>
    </form>
  );
}

export default SigninForm;
