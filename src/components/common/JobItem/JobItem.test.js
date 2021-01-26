import { shallow } from "enzyme/build";
import Details from "../Details/Details";
import JobItem from "./JobItem";

describe("test JobItem.jsx", () => {
  let wrapper;
  const defaultProps = {
    id: 3,
  };

  beforeEach(() => {
    wrapper = shallow(<JobItem jobData={defaultProps} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe("renders correctly", () => {
    it("should render an li-element", () => {
      expect(wrapper.find("li").exists()).toEqual(true);
    });

    it("should render Details component and pass correct props", () => {
      expect(
        wrapper.containsMatchingElement(<Details jobData={defaultProps} />)
      );
    });
  });
});
