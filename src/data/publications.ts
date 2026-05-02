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
    note: "Accepted. arXiv preprint arXiv:2602.20366.",
    links: [
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2602.20366",
      },
      {
        label: "DOI",
        href: "https://doi.org/10.48550/arXiv.2602.20366",
      },
    ],
  },
  {
    title: "Fast Sparse Matrix Permutation for Mesh-Based Direct Solvers",
    authors: [
      "Behrooz Zarebavami",
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
    note: "Accepted to the conference track. arXiv preprint arXiv:2602.00898.",
    links: [
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2602.00898",
      },
    ],
  },
];
