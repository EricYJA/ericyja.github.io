export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  note?: string;
  links?: {
    label: string;
    href: string;
  }[];
};

export const publications: Publication[] = [
  {
    title: "KGCache: Amortized Subgraph Retrieval for KG Reasoning with LLMs",
    authors: ["Uros Stanic", "Changcheng Yuan", "Sabuj Laskar", "Ariful Azad"],
    venue: "Learning on Graphs Conference (LoG), poster",
    year: "2026",
    links: [
      {
        label: "OpenReview",
        href: "https://openreview.net/forum?id=uIgRVKiClT",
      },
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2608.07954",
      },
    ],
  },
  {
    title: "Frame-Theoretic Constructions of Analog Error-Correcting Codes",
    authors: [
      "Ziyuan Zhu",
      "Changcheng Yuan",
      "Ron M. Roth",
      "Paul H. Siegel",
      "Anxiao Jiang",
    ],
    venue: "IEEE Information Theory Workshop (ITW)",
    year: "2026",
    note: "Accepted",
  },
  {
    title: "On the Height Profile of Analog Error-Correcting Codes",
    authors: [
      "Ron M. Roth",
      "Ziyuan Zhu",
      "Changcheng Yuan",
      "Paul H. Siegel",
      "Anxiao Jiang",
    ],
    venue: "IEEE Transactions on Information Theory",
    year: "2026",
    note: "Accepted for publication",
  },
  {
    title: "On the Height Profile of Analog Error-Correcting Codes",
    authors: [
      "Ron M. Roth",
      "Ziyuan Zhu",
      "Changcheng Yuan",
      "Paul H. Siegel",
      "Anxiao Jiang",
    ],
    venue: "IEEE International Symposium on Information Theory (ISIT)",
    year: "2026",
    links: [
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2602.20366",
      },
      {
        label: "DOI",
        href: "https://doi.org/10.1109/ISIT62367.2026.11653716",
      },
    ],
  },
  {
    title: "Fast Sparse Matrix Permutation for Mesh-Based Direct Solvers",
    authors: [
      "Behrooz Zarebavani",
      "Ahmed H. Mahmoud",
      "Ana Dodik",
      "Changcheng Yuan",
      "Serban D. Porumbescu",
      "John D. Owens",
      "Maryam Mehri Dehnavi",
      "Justin Solomon",
    ],
    venue: "ACM SIGGRAPH",
    year: "2026",
    links: [
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2602.00898",
      },
      {
        label: "DOI",
        href: "https://doi.org/10.1145/3799902.3811189",
      },
      {
        label: "Code",
        href: "https://github.com/BehroozZare/fast-permute",
      },
    ],
  },
];
