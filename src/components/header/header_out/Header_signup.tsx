import React from "react";
import { Button, HeaderOut } from "./header_style";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Header_signup() {
  const router = useRouter();

  return (
    <HeaderOut>
      <section>
        <Image
          src="./spotify.svg"
          alt="Logo Spotify"
          width={100}
          height={100}
        />
      </section>
      <section>
        <Button onClick={() => router.push("/signin")}>Sign In</Button>
        <Button $primary onClick={() => router.push("/signup")}>
          Sing Up
        </Button>
      </section>
    </HeaderOut>
  );
}

export default Header_signup;
