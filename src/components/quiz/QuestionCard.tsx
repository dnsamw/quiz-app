import { Answer, Question } from "../../types/quiz";
import useQuestionDataSelector from "../../features/quiz/questionSelector";
import { useAppDispatch } from "../../app/store";
import { updateAnswerData } from "../../features/quiz/questionReducer";
import "../../styles/question-card.css";

interface Props {
  question: Question | null;
  onSelectAnswer: () => void;
}

const QuestionCard = ({ question, onSelectAnswer }: Props) => {
  const { answers: quizAnswers, loading:isLoading } = useQuestionDataSelector();
  const dispatch = useAppDispatch();
  const handleSelectAnswer = (answer: Answer) => {
    dispatch(updateAnswerData(answer));
    setTimeout(() => {
      onSelectAnswer();
    }, 300);
  };

  if (!question) {
    return <div className="question-container">Nothing to show!</div>;
  }

  if(isLoading) {
    return(
      <div className="question-container">Loading...</div>
    );
  }

  return (
    <>
      <div className="question-container">
        <div className="question">{question?.number}. {question.question}</div>
        <div className="options">
          {question.options.map((option: string, index: number) => (
            <div
              onClick={() =>
                handleSelectAnswer({ qId: question.id, answer: option })
              }
              key={index}
              className={`option ${
                quizAnswers.find((ans: Answer) => ans.answer === option)
                  ? " active"
                  : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
