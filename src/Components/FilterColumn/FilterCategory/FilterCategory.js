import React, { useEffect, useState } from "react";
import "./FilterCategory.css";

import { useSearchParams } from "react-router-dom";

const FilterCategory = ({ category }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (id) => {
    setSearchParams({ category: id });
  };

  return (
    <div className={"category-"}>
      <input
        type="checkbox"
        id={category.id}
        onChange={() => handleClick(category.id)}
      />
      <label>{category.data.name}</label>
    </div>
  );
};

export default FilterCategory;
