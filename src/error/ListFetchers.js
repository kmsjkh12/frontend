import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/public/Loading";
import { MY_DATA_REQUEST } from "../redux/userRedux";
//listFetcher
//error 핸들링 전 데이터를 받아오는 fetcher
//component로 에러 전달
function ListFetchers({ children }) {
  const dispatch = useDispatch();
  const { day } = useSelector((state) => state.foodRedux);
  const { user, my_data_error } = useSelector((state) => state.userRedux);

  useEffect(() => {
    dispatch({
      type: MY_DATA_REQUEST,
      data: {
        userid: user.id,
        mealdate: day,
      },
    });
  }, [day]);

  if (my_data_error) {
    throw my_data_error;
  }

  return children;
}

export default ListFetchers;
