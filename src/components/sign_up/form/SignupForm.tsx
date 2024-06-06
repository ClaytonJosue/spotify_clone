import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FormSignUp } from "./signup_style";

interface User {
  userName: string;
  userLastName: string;
  userEmail: string;
  userPassword: string;
}

function SignupForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState<User[]>([]);

  const router = useRouter();

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      try {
        setUser(JSON.parse(storedUsers));
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const verifyLocalStorage = (e: any) => {
    e.preventDefault();

    const newUser: User = {
      userName: name,
      userLastName: lastName,
      userEmail: email,
      userPassword: password,
    };

    const userExists = user.some((userE) => userE.userEmail === email);

    if (userExists) {
      alert("Email already exists!");
      return;
    }

    setUser((prevUsers) => {
      const updatedUsers = [...prevUsers, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return updatedUsers;
    });

    alert("User created!");

    setTimeout(() => {
      router.push("/signin");
    }, 2000);

    // localStorage.setItem("users", JSON.stringify(user));
  };

  // useEffect(() => {
  //   localStorage.setItem("users", JSON.stringify(user));
  // }, [user]);

  // const storage = (key: string, value: string) => {
  //   localStorage.setItem(key, value);
  // };

  return (
    <FormSignUp action="">
      <div>
        <h1>Create Account</h1>
        <section>
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            id="first_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={10}
            required
          />
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            id="last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            maxLength={10}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={50}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
          <section id="buttons">
            <button type="submit" onClick={(e) => verifyLocalStorage(e)}>
              Create account
            </button>
            <Link href={"/signin"}>Already have account?</Link>
          </section>
        </section>
      </div>
    </FormSignUp>
  );
}

export default SignupForm;
