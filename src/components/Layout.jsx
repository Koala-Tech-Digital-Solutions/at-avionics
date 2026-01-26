import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen text-slate-900">
      <TopBar />
      <Outlet />
      <Footer />
    </div>
  );
}
