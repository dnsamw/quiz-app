import { GET_QUESTION_DATA } from "../http/endpoints";
import { axiosClient } from "../http/axiosClient";

export const QuestionsDataService = {
  getQuestionData: async () => {
    const res = await axiosClient.get(GET_QUESTION_DATA);
    return res?.data;
  },
};
