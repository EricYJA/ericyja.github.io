export type ProfileLink = {
  label: string;
  href: string;
};

export type InlineLink = {
  label: string;
  href: string;
};

export type IntroParagraph = Array<string | InlineLink>;

export const site = {
  name: "Changcheng Yuan",
  title: "Changcheng Yuan | Computer Science PhD Student",
  description:
    "Academic website for Changcheng Yuan, a PhD student in Computer Science working on GPU systems, sparse linear algebra, and graph mining.",
  profile: {
    name: "Changcheng Yuan",
    intro: [
      [
        "I am currently a Computer Science PhD student at Texas A&M University. My research interests sit at the intersection of theory and systems, and I am interested in building high-performance systems grounded in strong theoretical foundations.",
      ],
      [
        "I currently work on analog error-correcting codes (Analog ECC) for in-memory analog computing circuits under the supervision of ",
        {
          label: "Dr. Anxiao (Andrew) Jiang",
          href: "https://people.engr.tamu.edu/ajiang/index.html",
        },
        ". My work focuses on theory for Analog ECC design and algorithms for efficient code evaluation and decoding.",
      ],
      [
        "I am also interested in parallel computing, especially GPU based algorithms. I completed my M.S. in Computer Science at UC Davis, where I was advised by ",
        {
          label: "Dr. John Owens",
          href: "https://www.ece.ucdavis.edu/~jowens/home.html",
        },
        " and worked on GPU-based sparse direct solvers and graph partitioning algorithms.",
      ],
    ] satisfies IntroParagraph[],
    photoSrc: "/head_shot.png",
    photoAlt: "Portrait of Changcheng Yuan",
  },
  links: [
    {
      label: "GitHub",
      href: "https://github.com/EricYJA",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/cc-yuan/",
    },
    {
      label: "Email",
      href: "mailto:ericycc@tamu.edu",
    },
  ] satisfies ProfileLink[],
  researchInterests: [
    "Analog error-correcting codes",
    "Analog in-memory computing",
    "Frame theory",
    "GPU computing",
    "Sparse linear algebra",
    "Graph partitioning",
  ],
};
