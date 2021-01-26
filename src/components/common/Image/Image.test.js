import { mount } from "enzyme/build";
import Image from "./Image";

describe("test Image.jsx", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<Image url="test-url" />);
  });

  afterAll(() => {
    wrapper.unmount();
  });

  it("should render an img-element with correct src-value", () => {
    expect(wrapper.find("img").prop("src")).toEqual("test-url");
  });

  it("should render an img-element with correct alt-value", () => {
    expect(wrapper.find("img").prop("alt")).toEqual("company logo");
  });
});
