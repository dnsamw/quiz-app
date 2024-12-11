import { useSelector } from "react-redux";
import { RootSliceType } from "../../app/rootReducer";

const useQuestionDataSelector = () => {
  return {
    questions: useSelector(
      (state: RootSliceType) => state?.quiz?.questionData
    ),

    currentQIndex: useSelector(
      (state: RootSliceType) => state?.quiz?.currentQIndex
    ),

    answers: useSelector(
      (state: RootSliceType) => state?.quiz?.answerData
    ),

    results: useSelector(
      (state: RootSliceType) => state?.quiz?.resultData
    ),

    error: useSelector((state: RootSliceType) => state?.quiz?.error),

    loading: useSelector((state: RootSliceType) => state?.quiz?.loading),
  };
};

export default useQuestionDataSelector;
