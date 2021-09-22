import React, { useReducer } from "react";
import css from "./SearchForm.module.css";
import { useLocation } from "wouter";

const RATINGS = ["g", "pg", "pp-13", "r"];

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATING: "update_rating",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1,
      };
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    default:
      return state;
  }
};

export default function SearchForm({
  initialKeyword = "",
  initialRating = "g",
}) {
  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    times: 0,
  });

  const [, pushLocation] = useLocation();

  const { keyword, rating, times } = state;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleChange = (evt) => {
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: evt.target.value });
  };

  const handleChangeRating = (evt) => {
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: evt.target.value });
  };

  return (
    <form className={css["c-search"]} onSubmit={handleSubmit}>
      <button className={css["c-search-btn"]}>Buscar</button>
      <input
        className={css["c-search-input"]}
        onChange={handleChange}
        placeholder="Search a Gif"
        type="text"
        value={keyword}
      />
      <select onChange={handleChangeRating} value={rating}>
        <option disabled> Rating Type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <small>{times}</small>
    </form>
  );
}
