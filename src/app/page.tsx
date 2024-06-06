"use client";

import "./global.css";
import Image from "next/image";
import { MainSingUp } from "@/components/sign_up/home/main";
import Header_signup from "@/components/header/header_out/Header_signup";

export default function Home() {
  return (
    <>
      <Header_signup />
      <MainSingUp>
        <Image src="/spotify_logo.svg" alt="Logo" width={100} height={100} />
        <p>Listen to your favorite songs</p>
      </MainSingUp>
    </>
  );
}
