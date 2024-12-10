import { useSelector } from "react-redux";
import { RootSliceType } from "../../app/rootReducer";

const useQuestionDataSelector = () => {
  return {
    questions: useSelector(
      (state: RootSliceType) => state?.questions?.questionData
    ),

    currentQIndex: useSelector(
      (state: RootSliceType) => state?.questions?.currentQIndex
    ),

    answers: useSelector(
      (state: RootSliceType) => state?.questions?.answerData
    ),

    results: useSelector(
      (state: RootSliceType) => state?.questions?.resultData
    ),

    error: useSelector((state: RootSliceType) => state?.questions?.error),

    loading: useSelector((state: RootSliceType) => state?.questions?.loading),
  };
};

export default useQuestionDataSelector;
