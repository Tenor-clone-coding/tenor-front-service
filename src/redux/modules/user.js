import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { Kakao_auth_url } from "../../shared/OAuth";
import { setCookie, deleteCookie } from "../../shared/Cookie";
import { axiosInfo } from "../../shared/API";
import axios from "axios";

// Action
const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";
const GET_USER = "GET_USER";

// Action Creator
const setUser = createAction(SET_USER, (user_info) => ({ user_info }));
const logOut = createAction(LOGOUT, () => {});
const getUser = createAction(GET_USER, (user_cookie) => ({ user_cookie }));

// initial State
const initialState = {
  user: null,
  is_login: false,
  // is_cookie: false,
};

// middleware

const getUserAX = () => {
  return function (dispatch, getState, { history }) {
    console.log("getuser 들어옴");
    axios
      // (
      .get("http://34.64.109.170:8080/user/info")

      //   {
      //     method: "get",
      //     url: `${config.api}/user/info`,
      // //   }
      // )
      .then((res) => {
        console.log(res);
        let token = res.res;
        sessionStorage.setItem("token", token);

        // setCookie = (name, value, exp = 5)
        dispatch(
          setUser({
            is_res_token: res.res,
            user_id: res.user_id,
            user_email: res.user_email,
            user_nickname: res.user_nickname,
          })
        );
        history.replace("/");
        window.alert(`${res.user_nickname}님 환영합니다!`);
      })
      .catch((e) => {
        console.log("유저 정보 확인 에러", e);
      });
  };
};

// const loginAX = () => {
//   return function (dispatch, getState, { history }) {
//     let kakao = async () => {
//       return (window.location.href = `${Kakao_auth_url}`);
//       // let login_res = await Promise.resolve(window.location.href = `${Kakao_auth_url}`)
//     };
//     kakao().then((res) => {
//       console.log(res);
//       //   dispatch(getUserAX());
//       //   window.alert("로그인 됨");
//     });
//   };
// };

const kakaoLogin = (code) => {
  return function (dispatch, getState, { history }) {
    console.log("test");
    axios({
      method: "GET",

      //   url 수정 필요함 (?code 앞은 서버주소)
      url: `http://34.64.109.170:8080/user/kakao/callback?code=${code}`,
    })
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임
        const ACCESS_TOKEN = res.data.token;

        sessionStorage.setItem("token", ACCESS_TOKEN);

        const token = sessionStorage.getItem('token');

        const header = {
          "X-AUTH-TOKEN": `${token}`,
        };

        axios
          .get("http://34.64.109.170:8080/user/info", {
            headers: header,
          })
          .then((res) => {
            console.log(res);
            dispatch(
              setUser({
                is_login: res.data.res,
                user_id: res.data.user_id,
                user_email: res.data.user_email,
                user_nickname: res.data.user_nickname,
              })
            );

            window.alert(`${res.data.user_nickname}님 환영합니다.`);
            // history.replace('/');
            window.location.replace('/');
          })
          .catch((e) => {
            console.log("user 정보 조회 에러", e);
          });
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        history.replace("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  };
};

const loginCheck = () => {
  return function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    if (token) {
      const header = {
        "X-AUTH-TOKEN": `${token}`,
      };
      axios
        .get("http://34.64.109.170:8080/user/info", { headers: header })
        .then((res) => {
          if (res.data.res) {
            dispatch(
              setUser({
                is_login: res.data.res,
                user_id: res.data.user_id,
                user_email: res.data.user_email,
                user_nickname: res.data.user_nickname,
              })
            );
          } else {
            dispatch(logOut());
          }
        })
        .catch((e) => {
          console.log("에러발생", e);
        });
    }
  };
};

// Reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user_info;
        draft.is_login = true;
        console.log(draft.user);
      }),
    [LOGOUT]: (state, action) =>
      produce(state, (draft) => {
        sessionStorage.removeItem('token');
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        // let cookie = action.payload.user_cookie;
        // setCookie("JSESSIONID", cookie);
        // draft.is_cookie = true;
      }),
  },
  initialState
);

const actionCreators = {
  logOut,
  getUser,
  getUserAX,
  kakaoLogin,
  loginCheck,
};

export { actionCreators };