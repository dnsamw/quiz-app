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

        {isLastQuestion && <button className="control-button">Submit</button>}
      </div>
    </>
  );
};

export default QuizControls;
