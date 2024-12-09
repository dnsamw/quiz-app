import { GET_QUESTION_DATA } from "../http/endpoints";
import { axiosClient } from "../http/axiosClient";

export const QuestionsDataService = {
  getQuestionData: async () => {
    // console.log("getQuestionData - SERVICE");
    
    const res = await axiosClient.get(GET_QUESTION_DATA);
    // console.log("service-res",res?.data);
    return res?.data;
  },
};
