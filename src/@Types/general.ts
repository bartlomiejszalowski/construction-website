export type LinkType = {
  name: string;
  path: string;
};

export type SocialType = {
  icon: React.ReactNode;
  path: string;
};

export type StatsType = {
  endCountNum: number;
  endCountText: string;
  text: string;
};

export type ServiceDataType = {
  name: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  serviceList: string[];
  thumbs: {
    url: string;
    alt: string;
  }[];
};

export type WorkDataType = {
  img: string;
  name: string;
  description: string;
  href: string;
};

export type OpinionType = {
  imageSrc: string;
  opinion: string;
  author: string;
};
