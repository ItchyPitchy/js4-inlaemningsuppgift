import Image from "../../../src/components/common/Image/Image"


describe("test Image.jsx", () => {
  it("should render an img-element with correct src-value", () => {
    const wrapper = mount(<Image src={"test-url"} />);
    
    expect(wrapper.find("img").props().src).toEqual("test-url");
  })
})