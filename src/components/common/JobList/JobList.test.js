import { shallow } from "enzyme/build";
import JobItem from "../JobItem/JobItem";
import JobList from "./JobList";

describe("test JobList.jsx", () => {
  const defaultProps = ["job-item-1", "job-item-2", "job-item-3"];
  const wrapper = shallow(<JobList jobList={defaultProps} />);

  describe("test amount and passed props of JobItem-components rendered inside ul", () => {
    it("should render correct amount of JobItem-components", () => {
      expect(wrapper.find("ul").find(JobItem)).toHaveLength(3);
    });

    it("should pass correct props to JobItem-components", () => {
      const expectedElements = [
        <JobItem key={0} jobData="job-item-1" />,
        <JobItem key={1} jobData="job-item-2" />,
        <JobItem key={2} jobData="job-item-3" />,
      ];

      expect(
        wrapper.find("ul").containsAllMatchingElements(expectedElements)
      ).toEqual(true);
    });
  });
});
