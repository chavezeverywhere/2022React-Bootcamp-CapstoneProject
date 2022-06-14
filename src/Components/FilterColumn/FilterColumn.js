import React from "react";
import FilterCategory from "./FilterCategory/FilterCategory";
import "./FilterColumn.css";

const FilterColumn = ({ categories, filteringFunc }) => {
  return (
    <>
      <div className="productGrid">
        {categories.map((category) => {
          return (
            <FilterCategory category={category} filteringFunc={filteringFunc} />
          );
        })}
      </div>
    </>
  );
};

export default FilterColumn;
