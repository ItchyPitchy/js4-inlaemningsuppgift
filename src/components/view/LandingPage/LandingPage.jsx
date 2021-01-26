import React, { useState } from "react";
import JobList from "../../common/JobList/JobList";
import SearchForm from "../../common/SearchForm/SearchForm";

export default function LandingPage() {
  const [jobList, setJobList] = useState([]);
  const [noJobsFound, setNoJobsFound] = useState(false);

  return (
    <div>
      <SearchForm setJobList={setJobList} setNoJobsFound={setNoJobsFound} />
      {noJobsFound ? <i>No jobs found</i> : <JobList jobList={jobList} />}
    </div>
  );
}
