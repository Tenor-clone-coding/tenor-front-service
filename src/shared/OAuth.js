const Client_id = "6151488d1d68378896af71b3912b5405";
const Redirection_url = "http://34.64.109.170:8080/user/kakao/callback";

export const Kakao_auth_url = `https://kauth.kakao.com/oauth/authorize?client_id=${Client_id}&redirect_uri=${Redirection_url}&response_type=code`;

