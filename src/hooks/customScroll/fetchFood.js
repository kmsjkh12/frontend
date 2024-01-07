import { http } from "../../lib/http";
import { useDispatch } from "react-redux";
export const fetchFood = (param) => {  

  return http.get("/food-server/food", {
    params: {
      foodname: param.foodname,
      pagesize: param.pagesize,
      page: param.page,
    },
  });
};
