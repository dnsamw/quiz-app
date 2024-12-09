import { useEffect } from "react";
import { getQuestionData } from "./features/quiz/questionActions";
import { setQuizError, setQuizLoading } from "./features/quiz/questionReducer";
import { useAppDispatch } from "./app/store";
import Quiz from "./components/quiz/Quiz";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const loadQuestionData = async () => {
    dispatch(setQuizLoading(true));
    try {
      await dispatch(getQuestionData());
    } catch (err: any) {
      console.log(err);
      dispatch(setQuizError(err));
      dispatch(setQuizLoading(false));
    } finally {
      dispatch(setQuizLoading(false));
    }
  };

  useEffect(() => {
    loadQuestionData();
  }, []);

  return (
    <>
      <div className="main">
        <Quiz />
      </div>
    </>
  );
}

export default App;
