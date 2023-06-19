import React from "react";
import Hero from "./hero/Hero";
import Team from "../Team/Team";
import Data from "../OlapData/Data";
import Tool from "../Tool/Tool";
import Sql from "../SqlDatabase/Sql";
import Table from "../TableData/Table";
import Box from "../Box/Box";
import Live from "../LiveData/Live";
import Testimonial from "../Testimonial/Testimonial";
import Material from "../Material/Material";

const Home = () => {
  return (
    <>
      <Hero />
      <Team />
      <Data />
      <Tool />
      <Sql />
      <Table />
      <Box />
      <Live />
      <Testimonial />
      <Material />
    </>
  );
};

export default Home;
