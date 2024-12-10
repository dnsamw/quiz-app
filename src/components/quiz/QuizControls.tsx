import { useAppDispatch } from "../../app/store";
import {
  clearAnswerData,
  setCurrentQIndex,
  setQuizLoading,
  setResultData,
} from "../../features/quiz/questionReducer";
import useQuestionDataSelector from "../../features/quiz/questionSelector";
import "../../styles/quiz-controls.css";
import { Answer, Question } from "../../types/quiz";
interface Props {
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  onNext: () => void;
  onPrev: () => void;
}

const QuizControls = ({
  onNext,
  onPrev,
  isFirstQuestion,
  isLastQuestion,
}: Props) => {
  const dispatch = useAppDispatch();
  const { questions, answers, results } = useQuestionDataSelector();

  const handleAnwerCheck = () => {
    dispatch(setQuizLoading(true));
    const resultData = questions.map((question: Question) => {
      return {
        qId: question.id,
        question: question.question,
        isCorrect:
          question.correctAnswer ===
          answers.find((ans: Answer) => ans.qId === question.id)?.answer,
        correctAnswer: question.correctAnswer,
        userAnswer: answers.find((ans: Answer) => ans.qId === question.id)
          ?.answer,
      };
    });

    const correctAnswerCount = resultData.filter(
      (result: any) => result.isCorrect
    ).length;
    const incorrectAnswerCount = resultData.filter(
      (result: any) => !result.isCorrect
    ).length;

    dispatch(
      setResultData({
        resultData,
        correctAnswerCount,
        incorrectAnswerCount,
      })
    );

    setTimeout(() => {
      dispatch(setQuizLoading(false));
    }, 650);
    dispatch(clearAnswerData());
  };

  return (
    <>
      <div className="quiz-controls">
        {!results && (
          <button
            disabled={isFirstQuestion}
            onClick={onPrev}
            className="control-button"
          >
            Prev
          </button>
        )}
        {!isLastQuestion && (
          <button
            disabled={isLastQuestion}
            onClick={onNext}
            className="control-button"
          >
            Next
          </button>
        )}

        {isLastQuestion && answers.length > 0 && !results && (
          <button onClick={handleAnwerCheck} className="control-button">
            Check
          </button>
        )}

        {results && (
          <button
            onClick={() => {
              dispatch(clearAnswerData());
              dispatch(setResultData(null));
              dispatch(setCurrentQIndex(0));
            }}
            className="control-button"
          >
            Retry
          </button>
        )}
      </div>
    </>
  );
};

export default QuizControls;
