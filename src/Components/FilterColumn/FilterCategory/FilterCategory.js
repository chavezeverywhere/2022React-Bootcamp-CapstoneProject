import React, { useEffect, useState } from "react";
import "./FilterCategory.css";

const FilterCategory = ({ category, filteringFunc }) => {
  return (
    <div className={"category-"}>
      <input
        type="checkbox"
        id={category.id}
        onChange={() => filteringFunc(category.id)}
      />
      <label>{category.data.name}</label>
    </div>
  );
};

export default FilterCategory;
