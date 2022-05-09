import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import instance from "../axios";
import FilterMenu from "../components/FilterMenu";

function Home() {
  return (
    <>
      <div>
        <h2 className=" text-white  text-center h-32 align-baseline pt-8 text-4xl bg-gradient-to-tr from-zinc-900 to-stone-700 ">
          E-Commerce Page
        </h2>
        <FilterMenu />
      </div>
    </>
  );
}

export default Home;
