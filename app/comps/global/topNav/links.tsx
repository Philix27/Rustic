import { AppLinks } from "@/lib";
import { FaBlog, FaBook } from "react-icons/fa";
import { MdHome, MdQuiz } from "react-icons/md";

type NavListItem = {
  title: string;
  subtitle: string;
  story: string;
  color: string;
  link: string;
  icon: JSX.Element;
};

export function navLinkList(props: {
  homeColor: string;
  booksColor: string;
  blogsColor: string;
  quizColor: string;
}): NavListItem[] {
  return [
    {
      title: "Home",
      subtitle: "Welcome to Rusty guide community",
      story: "Easily write custom code without deploying or scaling servers.",
      icon: <MdHome />,
      color: props.homeColor,
      link: AppLinks.home.index,
    },
    {
      title: "Books",
      subtitle: "All courses organised as books for easy study",
      story: "Easily write custom code without deploying or scaling servers.",
      icon: <FaBook />,
      color: props.booksColor,
      link: AppLinks.books,
    },
    {
      title: "Blogs",
      subtitle: "All blog contents",
      story: "Easily write custom code without deploying or scaling servers.",
      icon: <FaBlog />,
      color: props.blogsColor,
      link: AppLinks.blogs,
    },
    {
      title: "Quiz",
      subtitle: "Practice questions on various topics",
      story: "Easily write custom code without deploying or scaling servers.",
      icon: <MdQuiz />,
      color: props.quizColor,
      link: AppLinks.quiz,
    },
  ];
}
