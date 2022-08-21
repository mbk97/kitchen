import { AiFillHome, AiOutlineInfoCircle } from "react-icons/ai";
import { GiCook } from "react-icons/gi";
import { RiGalleryLine } from "react-icons/ri";
import { MdContactPage } from "react-icons/md";

export const data = [
  {
    id: 1,
    text: "Home",
    path: "home",
    Img: AiFillHome,
  },
  {
    id: 2,
    text: "Chef",
    path: "chef",
    Img: GiCook,
  },
  {
    id: 3,
    text: "About Us",
    path: "about",
    Img: AiOutlineInfoCircle,
  },
  {
    id: 4,
    text: "Gallery",
    path: "gallery",
    Img: RiGalleryLine,
  },
  {
    id: 5,
    text: "Contact Us",
    path: "contact",
    Img: MdContactPage,
  },
];
