import { NavigationLinkInterface } from "../../../types";
import Link from "next/link";
import content from "../../data/navigation.json";
const NavigationLink = ({ title, url, external }: NavigationLinkInterface) => {
  return external ? (
    <a href={url} className="px-6" target="_blank">
      {title}
    </a>
  ) : (
    <Link href={url} className="px-6">
      {title}
    </Link>
  );
};
export default NavigationLink;
