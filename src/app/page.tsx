"use client";

import Header_signin from "@/components/header/header_out/Header_signin";
import "./global.css";
import Image from "next/image";
import { MainSingIn } from "@/components/sign_in/home/main";

export default function Home() {
  return (
    <>
      <Header_signin />
      <MainSingIn>
        <Image src="/spotify_logo.svg" alt="Logo" width={100} height={100} />
        <p>Listen to your favorite songs</p>
      </MainSingIn>
    </>
  );
}
