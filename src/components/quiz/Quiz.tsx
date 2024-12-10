import QuizStatus from "./QuizStatus";
import QuestionCard from "./QuestionCard";
import QuizControls from "./QuizControls";
import { setCurrentQIndex } from "../../features/quiz/questionReducer";
import useQuestionDataSelector from "../../features/quiz/questionSelector";
import "../../styles/quiz.css";
import { useAppDispatch } from "../../app/store";
import ClipLoader from "react-spinners/ClipLoader";

const Quiz = () => {
  // const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const dispatch = useAppDispatch();
  const {
    questions: quizQuestions,
    loading: isLoading,
    currentQIndex,
    error,
  } = useQuestionDataSelector();

  // Improved navigation logic
  const handleNext = () => {
    dispatch(
      setCurrentQIndex(
        currentQIndex < quizQuestions.length - 1
          ? currentQIndex + 1
          : currentQIndex
      )
    );
  };

  const handlePrev = () => {
    dispatch(
      setCurrentQIndex(currentQIndex > 0 ? currentQIndex - 1 : currentQIndex)
    );
  };

  // Handle quiz state when no questions or loading
  if (isLoading) {
    return <div className="quiz">
      <ClipLoader
        color={'#7fffd4'}
        loading={isLoading}
        // cssOverride={override}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (quizQuestions.length === 0) {
    return <div>No questions available</div>;
  }

  const currentQuestion = {
    ...quizQuestions[currentQIndex],
    number: currentQIndex + 1,
  };
  return (
    <>
      <div className="quiz">
        <h1>Quiz</h1>
        <QuizStatus
          qNumber={currentQIndex + 1}
          totalQuestions={quizQuestions.length}
        />
        <QuestionCard question={currentQuestion} onSelectAnswer={handleNext} />
        <QuizControls
          onNext={handleNext}
          onPrev={handlePrev}
          isFirstQuestion={currentQIndex === 0}
          isLastQuestion={currentQIndex === quizQuestions.length - 1}
        />
      </div>
    </>
  );
};

export default Quiz;
