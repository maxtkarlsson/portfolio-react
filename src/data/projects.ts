import { Project } from "../models/Project";

export const projectList: Project[] = [
  new Project(
    "/src/assets/img_placeholder_w450.png",
    "geezer",
    "A webshop with our existing knowledge of HTML 5, SCSS and TypeScript.",
    "https://github.com/maxtkarlsson/geezer.git"
  ),
  new Project(
    "/src/assets/img_placeholder_w450.png",
    "Car mechanic review site",
    "A review application for car mechanics that uses a SQL REST-API. It is designed for both users to handle reviews and their account and for workshop owners to update their information about their store and keep track on their reviews.",
    "https://github.com/maxtkarlsson/API-SQL-Assignment-review-site.git"
  ),
];
