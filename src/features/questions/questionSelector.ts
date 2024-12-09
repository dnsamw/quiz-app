import { useSelector } from "react-redux";
import { RootSliceType } from "../../app/rootReducer";

const useQuestionDataSelector = () => {
  return {
    selectQuestionData: useSelector(
      (state: RootSliceType) => state?.questionData?.questionData
    ),

    error: useSelector((state: RootSliceType) => state?.questionData?.error),

    loading: useSelector((state: RootSliceType) => state.questionData?.loading),
  };
};

export default useQuestionDataSelector;
