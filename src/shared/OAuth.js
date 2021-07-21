const Client_id = "6151488d1d68378896af71b3912b5405";
// const Client_id = "8b35006e1ee289318fb8bf32c056ca85";

// const Redirection_url = "http://34.64.109.170:8080/user/kakao/callback";
// const Redirection_url = "http://localhost:3000/user/kakao/callback";
const Redirection_url = "http://tenor-test1.s3-website.ap-northeast-2.amazonaws.com/user/kakao/callback";



export const Kakao_auth_url = `https://kauth.kakao.com/oauth/authorize?client_id=${Client_id}&redirect_uri=${Redirection_url}&response_type=code`;

// https://kauth.kakao.com/oauth/authorize?client_id=8b35006e1ee289318fb8bf32c056ca85&redirect_uri=http://localhost:3000/user/kakao/callback&response_type=code