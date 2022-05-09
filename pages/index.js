import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import instance from "../axios";
import FilterMenu from "../components/FilterMenu";

function Home() {
 
  return (
    <>
      <div>This is the home page</div>
      <FilterMenu />
    </>
  );
}

export default Home;
