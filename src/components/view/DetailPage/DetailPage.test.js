import DetailPage from "./DetailPage";
import { fetchJob } from "../../../API";
import { shallow } from "enzyme/build";
import Details from "../../common/Details/Details";
import React from "react";

jest.mock("../../../API");

describe("test DetailPage.jsx", () => {
  let wrapper;

  beforeAll(() => {
    fetchJob.mockImplementation(() => {});
  });

  beforeEach(() => {
    wrapper = shallow(<DetailPage match={{ params: { id: 3 } }} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  // it("should call fetchJob", () => {
  //   expect(fetchJob).toHaveBeenCalledTimes(1);
  // })

  it("should render a Details component", () => {
    expect(wrapper.containsMatchingElement(<Details />)).toEqual(true);
  });
});
