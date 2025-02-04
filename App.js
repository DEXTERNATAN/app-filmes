import { StatusBar } from "expo-status-bar";
import React from "react";
import { Routes } from "./src/routes/index";

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="light" translucent backgroundColor="#242a32" />
    </>
  );
}
