import React from "react";
import FilterCategory from "./FilterCategory/FilterCategory";
import "./FilterColumn.css";

const FilterColumn = ({ categories }) => {
  return (
    <>
      <div className="productGrid">
        {categories.map((category) => {
          return <FilterCategory category={category} />;
        })}
      </div>
    </>
  );
};

export default FilterColumn;
