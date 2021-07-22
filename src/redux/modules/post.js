import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { config } from "../../shared/API";
import axios from "axios";

// Action
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const SEARCH_POST = "SEARCH_POST";

// Action Creator
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const searchPost = createAction(SEARCH_POST, (search_result) => ({
  search_result,
}));

// InitialState
const initialState = {
  list: [],
  search_list: [],
};

// middleware
const addPostAX = (post) => {
  return function (dispatch, getState, { history }) {
    const user = getState().user.user;
    const user_info = {
      user_id: 1,
      user_email: "user_email",
      user_nickname: "user_nickname",
    };
    // const min = Math.ceil(0);
    // const max = Math.floor(1000);
    // const user_id = Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함

    let form = new FormData();
    form.append("title", post.title);
    form.append("file", post.image);
    form.append("user_id", 1);
    // form.append('user_id', user.user_id);

    const headers = {
      "Content-Type": "multipart/form-data",
      // ProcessData: false,
      // "Content-Type": false,

      // contentType: false
      // "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    };

    axios
      .post(`http://34.64.109.170:8080/api/photos`, form, { headers: headers })

      .then(function (res) {
        console.log(res);
        const post = {
          ...user_info,
          post_id: res.data.id,
          title: res.data.title,
          image_url: `${config}/image/${res.data.fname}`,
          // user_id: res.data.user_id,
        };
        dispatch(addPost(post));
        window.alert("게시글 작성 완료");
        window.location.replace("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const getPostAX = () => {
  return function (dispatch, getState, { history }) {
    const user = getState().user.user;
    const user_info = {
      user_id: 1,
      user_email: "user_email",
      user_nickname: "user_nickname",
    };

    axios
      // .get("http://localhost:4000/photos")
      .get("http://34.64.109.170:8080/api/photos")

      .then((res) => {
        console.log(res);

        let post_list = [];

        res.data.forEach((_post) => {
          let post = {
            ...user_info,
            post_id: _post.id,
            image_url: `${config}/image/${_post.fname}`,
            title: _post.title,
          };
          post_list.push(post);
        });
        dispatch(setPost(post_list));
      })
      .catch((e) => {
        console.log("불러오기 에러", e);
      });
  };
};

const searchPostAX = (searchTitle) => {
  return function (dispatch, getState, { history }) {
    axios
      .get(`http://34.64.109.170:8080/api/search?words=${searchTitle}`)
      .then((res) => {
        let search_result = [];

        if (res.data.length === 0) {
          window.alert("찾으시는 이미지가 없습니다");
          history.replace("/");
          return;
        } else {
          res.data.forEach((_item) => {
            let search_item = {
              post_id: _item.id,
              title: _item.title,
              image_url: `${config}/image/${_item.fname}`,
            };
            search_result.push(search_item);
          });
          dispatch(searchPost(search_result));
          history.push(`/search/${searchTitle}`)
          console.log(search_result);
        }
      })
      .catch((e) => {
        console.log("검색 결과 찾기 에러", e);
      });
  };
};

// Reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.post_list);

        // draft.list = draft.list.reduce((acc, cur) => {
        //   if (acc.findIndex((a) => a.id === cur.id) === -1) {
        //     return [...acc, cur];
        //   } else {
        //     acc[acc.findIndex((a) => a.id === cur.id)] = cur;
        //     return acc;
        //   }
        // }, []);
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),

    [SEARCH_POST]: (state, action) =>
      produce(state, (draft) => {
        if (draft.search_list.length === 0) {
          draft.search_list.push(...action.payload.search_result);
        } else {
          draft.search_list = [];
          draft.search_list.push(...action.payload.search_result);
        }
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  addPostAX,
  getPostAX,
  searchPostAX,
};

export { actionCreators };
