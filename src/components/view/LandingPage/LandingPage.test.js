import { shallow } from "enzyme/build";
import JobList from "../../common/JobList/JobList";
import SearchForm from "../../common/SearchForm/SearchForm";
import LandingPage from "./LandingPage";

describe("test LandingPage.jsx", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LandingPage />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should render correctly", () => {
    expect(
      wrapper.containsAllMatchingElements([<SearchForm />, <JobList />])
    ).toEqual(true);
  });
});
