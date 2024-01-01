import React, { useState, useCallback, useEffect } from "react";
import { http } from "../../lib/http";
const TestPage = () => {
  const PAGE_SIZE = 10 * Math.ceil(visualViewport.width / 900);

  const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const [hasNextPage, setNextPage] = useState(true);

  const fetchUsers = useCallback(async () => {
    const { data } = await http.get("/food-server/food", {
      params: { page, pagesize: PAGE_SIZE, foodname: "라" },
    });
    console.log(data);
    setUsers(users.concat(data.body.content));
    setPage(data.body.pageable.pageNumber + 1);
    setNextPage(!data.body.last);
    setFetching(false);
    console.log(users);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, offsetHeight } = document.documentElement;
      if (window.innerHeight + scrollTop >= offsetHeight) {
        setFetching(true);
      }
    };
    setFetching(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (isFetching && hasNextPage) fetchUsers();
    else if (!hasNextPage) setFetching(false);
  }, [isFetching]);

  return (
    <div style={{ width: "500px", margin: "0 auto" }}>
      {users.map((user) => (
        <div
          key={user.id}
          name={user.id}
          style={{ width: "100%", height: "100px" }}
        >
          {user.id}
        </div>
      ))}
      {isFetching && <div>loading</div>}
    </div>
  );
};
export default TestPage;
