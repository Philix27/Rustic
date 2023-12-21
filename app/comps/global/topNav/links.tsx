import { AppLinks, AppStyles } from "@/lib";
import { FaBlog, FaBook } from "react-icons/fa";
import { MdHome, MdAdminPanelSettings, MdQuiz } from "react-icons/md";

export const navLinkList: {
  title: string;
  desc: string;
  color: string;
  link: string;
  icon: JSX.Element;
}[] = [
  {
    title: "Home",
    desc: "Welcome to Rustic guide community",
    icon: <MdHome />,
    color: AppStyles.colors.home,
    link: AppLinks.home.index,
  },
  {
    title: "Books",
    desc: "All courses organised as books for easy study",
    icon: <FaBook />,
    color: AppStyles.colors.book,
    link: AppLinks.books,
  },
  {
    title: "Blogs",
    desc: "All blog contents",
    icon: <FaBlog />,
    color: AppStyles.colors.blogs,
    link: AppLinks.blogs,
  },
  {
    title: "Quiz",
    desc: "Practice questions on various topics",
    icon: <MdQuiz />,
    color: AppStyles.colors.quiz,
    link: AppLinks.quiz,
  },
  {
    title: "Admin",
    desc: "Content management system",
    icon: <MdAdminPanelSettings />,
    color: AppStyles.colors.admin,
    link: AppLinks.admin,
  },
];
