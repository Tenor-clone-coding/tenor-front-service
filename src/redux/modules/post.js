import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { config } from "../../shared/API";
import axios from "axios";

// Action
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

// Action Creator
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

// InitialState
const initialState = {
  list: [],
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
        console.log('불러오기 에러', e);
      });
  };
};

// Reducer
export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {
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
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  addPostAX,
  getPostAX,
};

export { actionCreators };
