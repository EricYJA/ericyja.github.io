export type Internship = {
  company: string;
  location?: string;
  role: string;
  period: string;
  description: string;
};

export const internships: Internship[] = [
  {
    company: "Pony.AI",
    location: "Guangzhou, China",
    role: "Software Engineer Intern",
    period: "Jun. 2019 - Sept. 2019",
    description:
      "Built a Linux C++/OpenGL dashboard for map and lane rendering, sensor overlays, and interactive controls, and implemented an i18n module with smart language-file loading and unloading to reduce runtime resource usage.",
  },
];
