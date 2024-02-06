"use client";
import LoginButton from "./components/Login";
import Image from "next/image";

export default function Login() {
  return (
    <main className="flex h-screen w-screen min-h-[850px] min-w-[1200px] flex-col items-center justify-between p-24 bg-black">
      <Image
        src="/img/spotify-logo.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />

      <LoginButton />
    </main>
  );
}
