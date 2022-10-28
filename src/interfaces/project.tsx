import { badgeTitle } from "./badge";

export default interface project {
  id: Number;
  title: string;
  repo: string;
  description: string;
  image: string;
  type: badgeTitle;
  isLive?: boolean | false;
}
