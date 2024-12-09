import { useAppDispatch } from '../../app/store';
import {setQuizLoading} from '../../features/quiz/questionReducer';
import '../../styles/quiz-controls.css';
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

  const handleAnwerCheck = () => {
    dispatch(setQuizLoading(true));
  };

  return (
    <>
      <div className="quiz-controls">
        <button
          disabled={isFirstQuestion}
          onClick={onPrev}
          className="control-button"
        >
          Prev
        </button>
        {!isLastQuestion && (
          <button
            disabled={isLastQuestion}
            onClick={onNext}
            className="control-button"
          >
            Next
          </button>
        )}

        {isLastQuestion && <button onClick={handleAnwerCheck} className="control-button">Submit</button>}
      </div>
    </>
  );
};

export default QuizControls;
