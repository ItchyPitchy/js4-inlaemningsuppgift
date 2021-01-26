import React from "react";
import Image from "../Image/Image";

export default function Details({ jobData }) {
  return (
    <>
      <strong>{jobData.type}</strong>
      <h2>{jobData.title}</h2>
      <a href="#">{jobData.company_url}</a>
      <div dangerouslySetInnerHTML={{ __html: jobData.description }} />
      <Image url={jobData.company_logo} />
    </>
  );
}
