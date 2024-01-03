import React, { useState, useCallback, useEffect } from "react";
import { SEARCH_FOOD_REQUEST } from "../../redux/foodRedux";
import { throttle } from "./throttle";
import { useDispatch, useSelector } from "react-redux";
export const useInfiniteScroll = (options) => {
  const dispatch = useDispatch();
  const { pagesize, onSuccess, onError, foodname, page } = options;
  const [foodData, setFooddata] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  const [isFetching, setFetching] = useState(false);
  const [hasNextPage, setNextPage] = useState(true);

  const executeFetch = useCallback(async () => {
    try {
      dispatch({
        type: SEARCH_FOOD_REQUEST,
        data: {
          size: pagesize,
          foodname: foodname,
          page: page,
        },
      });

      setFetching(false);
      onSuccess?.(); // undefined방지
    } catch (err) {
      console.log(err);
      onError?.();
    }
  }, [page]);

  useEffect(() => {
    const box = document.querySelector(".infinite");

    const handleScroll = throttle(() => {
      if (box.scrollTop + box.offsetHeight >= box.scrollHeight) {
        setFetching(true);
      }
    });

    setFetching(true);
    box.addEventListener("scroll", handleScroll);
    return () => box.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isFetching && hasNextPage) executeFetch();
    else if (!hasNextPage) setFetching(false);
  }, [isFetching]);

  return { isFetching };
};
