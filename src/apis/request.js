import axios from "axios";
export const get_one = async () => {
  const res = await axios.get("https://api.xygeng.cn/openapi/one");
  return res;
};
export const get_img = async () => {
  const res = await axios.get("/api/random.php?return=json");
  return res;
};
