import { Answer, Question } from "../../types/questions";
import useQuestionDataSelector from "../../features/questions/questionSelector";
import { useAppDispatch } from "../../app/store";
import { updateAnswerData } from "../../features/questions/questionReducer";
import "../../styles/question-card.css";

interface Props {
  question: Question | null;
  onSelectAnswer: () => void;
}

const QuestionCard = ({ question,onSelectAnswer }: Props) => {

  const { answers: quizAnswers} = useQuestionDataSelector();
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

  return (
    <>
      <div className="question-container">
        <div className="question">{question.question}</div>
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
