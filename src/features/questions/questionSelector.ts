import { useSelector } from "react-redux";
import { RootSliceType } from "../../app/rootReducer";

const useQuestionDataSelector = () => {
  return {
    questions: useSelector(
      (state: RootSliceType) => state?.questions?.questionData
    ),

    answers: useSelector(
      (state: RootSliceType) => state?.questions?.answerData
    ),

    error: useSelector((state: RootSliceType) => state?.questions?.error),

    loading: useSelector((state: RootSliceType) => state?.questions?.loading),
  };
};

export default useQuestionDataSelector;
