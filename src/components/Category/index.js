import React from "react";
import { Link } from "wouter";

import "./category.css";

export default function Category({ name, options = [] }) {
  return (
    <div className='Category'>
      <h3 className="Category-title">{name}</h3>
      <ul className="Category-list">
        {options.map((singleOption) => (
          <li className="Category-list-item" key={singleOption}>
            <Link className="Category-link" to={`/search/${singleOption}`}>
              {singleOption}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}