import React, { useEffect, useState } from "react";
import { fetchJob } from "../../../API";
import Details from "../../common/Details/Details";

export default function DetailPage(props) {
  const jobId = props.match.params.id;
  const [jobData, setJobData] = useState({});

  useEffect(() => {
    fetchJob(jobId, setJobData);
  }, []);

  return (
    <div>
      <Details jobData={jobData} />
    </div>
  );
}
