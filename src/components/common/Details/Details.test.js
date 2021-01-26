import { shallow } from "enzyme/build";
import Image from "../Image/Image";
import Details from "./Details";

describe("test Detail.jsx", () => {
  const defaultProps = {
    type: "some type",
    title: "some title",
    company_url: "some url",
    description: "<p>some text</p>",
    company_logo: "some image-url",
  };
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Details jobData={defaultProps} />);
  });

  afterAll(() => {
    wrapper.unmount();
  });

  it("should render a strong-element with correct text content", () => {
    expect(wrapper.find("strong").text()).toEqual("some type");
  });

  it("should render a h2-element with correct text content", () => {
    expect(wrapper.find("h2").text()).toEqual("some title");
  });

  it("should render an a-element with correct text content", () => {
    expect(wrapper.find("a").text()).toEqual("some url");
  });

  it("should render a div-element with correct innerHTML", () => {
    expect(wrapper.find("div").html()).toContain("<p>some text</p>");
  });

  it("should render a Image component and pass correct data", () => {
    expect(
      wrapper.containsMatchingElement(<Image url={defaultProps.company_logo} />)
    ).toEqual(true);
  });
});
