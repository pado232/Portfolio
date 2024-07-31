import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element }) => {
  const isLocked = useSelector((state) => state.lock.isLocked);

  // 잠겨 있으면 접근 불가 페이지로 리다이렉트
  if (isLocked) {
    return (
      <div>
        <h1>접근 거부</h1>
        <p>이 페이지에 접근할 수 없습니다. 페이지가 잠겨있습니다.</p>
        <Link to="/">홈으로 돌아가기</Link>
      </div>
    );
  }

  // 잠겨 있지 않으면 요청한 페이지를 렌더링
  return element;
};

export default PrivateRoute;
