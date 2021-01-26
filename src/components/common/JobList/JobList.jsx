import React from "react";
import JobItem from "../JobItem/JobItem";

export default function JobList({ jobList }) {
  return (
    <ul>
      {jobList.map((element, index) => (
        <JobItem key={index} jobData={element} />
      ))}
    </ul>
  );
}
