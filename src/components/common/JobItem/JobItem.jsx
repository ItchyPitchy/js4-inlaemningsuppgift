import React from "react";
import { useHistory } from "react-router-dom";
import Details from "../Details/Details";

export default function JobItem({ jobData }) {
  const history = useHistory();

  function handleClick() {
    history.push(`./jobs/${jobData.id}`);
  }

  return (
    <li onClick={handleClick}>
      <Details jobData={jobData} />
    </li>
  );
}
