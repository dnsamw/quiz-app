import { useSelector } from "react-redux";
import { RootSliceType } from "../../app/rootReducer";

const useQuestionDataSelector = () => {
  return {
    selectQuestionData: useSelector(
      (state: RootSliceType) => state?.questions?.questionData
    ),

    error: useSelector((state: RootSliceType) => state?.questions?.error),

    loading: useSelector((state: RootSliceType) => state?.questions?.loading),
  };
};

export default useQuestionDataSelector;
