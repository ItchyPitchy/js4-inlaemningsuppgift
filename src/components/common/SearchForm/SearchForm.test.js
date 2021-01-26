import SearchContextProvider, {
  SearchContext,
} from "../../../contexts/SearchContextProvider/SearchContextProvider";
import SearchForm from "./SearchForm";
import { mount } from "enzyme/build";
import { fetchJobs } from "../../../API";
import React from "react";

jest.mock("../../../API");

describe("test SearchForm.jsx", () => {
  let wrapper;
  const setJobList = jest.fn();
  const defaultContextValues = {
    searchData: {
      "string-2": [],
    },
  };

  beforeAll(() => {
    fetchJobs.mockImplementation(() => {});
  });

  beforeEach(() => {
    wrapper = mount(
      <SearchContext.Provider value={defaultContextValues}>
        <SearchForm setJobList={setJobList} />
      </SearchContext.Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe("test handleSubmit", () => {
    it("should call fetchJobs if searchData from context doesn't contain input value", () => {
      wrapper
        .find("input")
        .simulate("change", { target: { value: "string-1" } });
      wrapper.find("form").simulate("submit");
      expect(fetchJobs).toHaveBeenCalledTimes(1);
    });

    it("should call setJobList if searchData from context contain input value", () => {
      wrapper
        .find("input")
        .simulate("change", { target: { value: "string-2" } });
      wrapper.find("form").simulate("submit");
      expect(setJobList).toHaveBeenCalledTimes(1);
    });
  });

  describe("renders correctly", () => {
    it("should render button correctly", () => {
      expect(wrapper.find("button").text()).toEqual("Sök");
    });
  });
});
