import React from "react";
import { useDispatch } from "react-redux";
import Spinner from "../shared/Spinner";
import { actionCreators as userActions } from "../redux/modules/user";

const KakaoRedirection = (props) => {
  const dispatch = useDispatch();
  
  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  React.useEffect(async () => {
      console.log(code);
    await dispatch(userActions.kakaoLogin(code));
  }, []);

  return <Spinner />;
};

export default KakaoRedirection;
