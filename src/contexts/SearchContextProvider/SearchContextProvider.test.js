import { mount } from "enzyme/build";
import SearchContextProvider from "./SearchContextProvider";

describe("test SearchContextProvider", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<SearchContextProvider children={<div></div>}/>)
  });

  afterAll(() => {
    wrapper.unmount();
  });

  it("should render children", () => {
    expect(wrapper.find("div").exists()).toEqual(true);
  })
})