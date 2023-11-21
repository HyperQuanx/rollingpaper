import axios from "axios";

// 롤링페이퍼 목록 조회
const getPapers = async () => {
  const res = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/users`);
  console.log(res.data);
  return res.data;
}

// 코멘트 추가
const addCmt = async (newCmt) => {
  await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/users`, newCmt);
}

export { getPapers,addCmt }