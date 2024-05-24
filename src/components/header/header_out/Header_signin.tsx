import React from "react";
import { Button, HeaderOut } from "./header_style";
import Image from "next/image";

function Header_signin() {
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
        <Button>Sing In</Button>
        <Button $primary>Sing Up</Button>
      </section>
    </HeaderOut>
  );
}

export default Header_signin;
