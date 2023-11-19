export type McqTypes = {
  question: string;
  answer_index: number;
  explain?: string;
  option1: string;
  option2: string;
  option3?: string;
  option4?: string;
  option5?: string;
  option6?: string;
};
export type McqList = {
  title: string;
  subtitle: string;
  list: McqTypes[];
};

export type Tags = {
  title: string;
  subtitle?: string;
};
