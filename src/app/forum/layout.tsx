"use client";
import { ReactNode } from "react";
import ForumHeader from "./_components/Header";
import ForumFooter from "./_components/Footer";

export default function ForumLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ForumHeader />
      {children}
      <ForumFooter />
    </>
  );
}
