import { AppLinks } from "@/lib";
import { FaBlog, FaBook } from "react-icons/fa";
import { MdHomeMini, MdMore } from "react-icons/md";

export const navLinkList: {
  title: string;
  desc: string;
  color?: string;
  link: string;
  icon: JSX.Element;
}[] = [
  {
    title: "Home",
    desc: "Welcome to Rustic guide community",
    icon: <MdHomeMini />,
    color: "#2da02d",
    link: AppLinks.home,
  },
  {
    title: "Books",
    desc: "All courses organised as books for easy study",
    icon: <FaBook />,
    color: "#11a58f",
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
    title: "Others",
    desc: "All blog contents",
    icon: <MdMore />,
    color: "#ee790b",
    link: AppLinks.explore,
  },
];
