export default interface QuestionInterface {
    question: string;
    possible_answers: (string | number)[];
    correct_answer: string | number | (string | number)[];
}