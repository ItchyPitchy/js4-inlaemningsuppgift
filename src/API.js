export function fetchJobs(inputValue, setNoJobsFound, setSearchData, setJobList) {
  fetch(
    `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${inputValue}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.length === 0) {
        setNoJobsFound(true);
      } else {
        setSearchData((prevState) => ({ ...prevState, [inputValue]: data }));
        setJobList(data);
        setNoJobsFound(false);
      }
    })
    .catch((err) => console.error(err));
}

export function fetchJob(jobId, setJobData) {
  fetch(
    `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=${jobId}`
  )
    .then((res) => res.json())
    .then((data) => setJobData(data))
    .catch((err) => console.error(err));
}