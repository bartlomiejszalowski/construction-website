import { PiPaintRollerFill, PiUserGearFill, PiWallFill } from "react-icons/pi";

import { ServiceDataType } from "@/@Types/general";

export const serviceData: ServiceDataType[] = [
  {
    name: "construction",
    icon: <PiWallFill />,
    title: "Construction",
    description:
      "We are a team of experienced professionals who are dedicated to providing the best possible service to our clients.",
    serviceList: [
      "New Construction",
      "Renovations",
      "Additions",
      "Remodeling",
      "Commercial Construction",
    ],
    thumbs: [
      {
        url: "/assets/img/services/thumb-1.jpg",
        alt: "thumb-1",
      },
      {
        url: "/assets/img/services/thumb-2.jpg",
        alt: "thumb-2",
      },
    ],
  },
  {
    name: "renovation",
    icon: <PiPaintRollerFill />,
    title: "Renovation services",
    description:
      "Revitalizing your space with expert craftsmanship and innovative design. Whether it's a kitchen, bathroom, or entire home renovation, we deliver exceptional results.",
    serviceList: [
      "Kitchen remodel",
      "Basemnt finish",
      "Additions",
      "Remodeling",
      "Commercial Construction",
    ],
    thumbs: [
      {
        url: "/assets/img/services/thumb-1.jpg",
        alt: "thumb-1",
      },
      {
        url: "/assets/img/services/thumb-2.jpg",
        alt: "thumb-2",
      },
    ],
  },
  {
    name: "restoration",
    icon: <PiPaintRollerFill />,
    title: "Restoration services",
    description:
      "Bringing damaged or aging structures back to their original glory. Our restoration services include water damage repair, fire damage restoration, and mold remediation.",
    serviceList: [
      "Historical Restore",
      "Water Damage",
      "Fire Repair",
      "Mold Remediation",
      "Structural Repair",
      "Roof Restoration",
    ],
    thumbs: [
      {
        url: "/assets/img/services/thumb-4.jpg",
        alt: "thumb-1",
      },
      {
        url: "/assets/img/services/thumb-5.jpg",
        alt: "thumb-2",
      },
    ],
  },
  {
    name: "consulting",
    icon: <PiUserGearFill />,
    title: "Consulting services",
    description:
      "Providing expert guidance for construction and renvation projects. Our consulting services include project management, cost estimation, and design consultation.",
    serviceList: [
      "Project Plans",
      "Costing",
      "Site Managment",
      "Permits",
      "Sustainability",
      "Safety",
    ],
    thumbs: [
      {
        url: "/assets/img/services/thumb-1.jpg",
        alt: "thumb-1",
      },
      {
        url: "/assets/img/services/thumb-3.jpg",
        alt: "thumb-2",
      },
    ],
  },
];
