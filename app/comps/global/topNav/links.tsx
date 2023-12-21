import { AppLinks, AppStyles } from "@/lib";
import { FaBlog, FaBook, FaVideo } from "react-icons/fa";
import { MdHome, MdAdminPanelSettings, MdQuiz } from "react-icons/md";

export const navLinkList: {
  title: string;
  subtitle: string;
  story: string;
  color: string;
  link: string;
  icon: JSX.Element;
}[] = [
  {
    title: "Home",
    subtitle: "Welcome to Rustic guide community",
    story: "Easily write custom code without deploying or scaling servers.",
    icon: <MdHome />,
    color: AppStyles.colors.home,
    link: AppLinks.home.index,
  },
  {
    title: "Books",
    subtitle: "All courses organised as books for easy study",
    story: "Easily write custom code without deploying or scaling servers.",
    icon: <FaBook />,
    color: AppStyles.colors.book,
    link: AppLinks.books,
  },
  {
    title: "Blogs",
    subtitle: "All blog contents",
    story: "Easily write custom code without deploying or scaling servers.",
    icon: <FaBlog />,
    color: AppStyles.colors.blogs,
    link: AppLinks.blogs,
  },
  {
    title: "Quiz",
    subtitle: "Practice questions on various topics",
    story: "Easily write custom code without deploying or scaling servers.",
    icon: <MdQuiz />,
    color: AppStyles.colors.quiz,
    link: AppLinks.quiz,
  },
  {
    title: "Video",
    subtitle: "All rust related videos",
    story: "Easily write custom code without deploying or scaling servers.",
    icon: <FaVideo />,
    color: AppStyles.colors.video,
    link: AppLinks.videos,
  },
  {
    title: "Admin",
    subtitle: "Content management system",
    story: "Easily write custom code without deploying or scaling servers.",
    icon: <MdAdminPanelSettings />,
    color: AppStyles.colors.admin,
    link: AppLinks.admin,
  },
];
