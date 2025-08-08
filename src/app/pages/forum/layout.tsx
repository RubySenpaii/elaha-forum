"use client";
import { ReactNode } from "react";
import ForumHeader from "./Header";
import ForumFooter from "./Footer";

export default function ForumLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ForumHeader />
      {children}
      <ForumFooter />
    </>
  );
}
