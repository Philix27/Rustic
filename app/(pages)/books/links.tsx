import { AppLinks } from "@/lib";
import { FaBlog, FaBook } from "react-icons/fa";
import { MdHome, MdMore, MdAdminPanelSettings, MdQuiz } from "react-icons/md";

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
    color: "#2da02d",
    link: AppLinks.home.index,
  },
  {
    title: "Books",
    desc: "All courses organised as books for easy study",
    icon: <FaBook />,
    color: "#d9b205",
    link: AppLinks.books,
  },
  {
    title: "Blogs",
    desc: "All blog contents",
    icon: <FaBlog />,
    color: "#d70bee",
    link: AppLinks.blogs,
  },
  {
    title: "Quiz",
    desc: "Practice questions on various topics",
    icon: <MdQuiz />,
    color: "#ee790b",
    link: AppLinks.quiz,
  },
  {
    title: "Admin",
    desc: "Content management system",
    icon: <MdAdminPanelSettings />,
    color: "#0699a9",
    link: AppLinks.admin,
  },
];
