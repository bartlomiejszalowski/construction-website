import Link from "next/link";

import { SocialType } from "@/@Types/general";
import { socials } from "@/constants/socials";

interface Props {
  containerStyles?: string;
  iconStyles?: string;
}

const Socials: React.FC<Props> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((social: SocialType) => (
        <Link href={social.path} key={social.path} className={`${iconStyles}`}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
