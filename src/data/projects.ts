export type Project = {
  title: string;
  period?: string;
  stack?: string[];
  description: string;
  highlights?: string[];
  github?: string;
};

export const projects: Project[] = [
  {
    title: "GPU SpMM vs. GEMM Break-even",
    period: "Aug. 2025",
    stack: ["CUDA", "cuBLAS", "cuSPARSE"],
    description:
      "A performance study of sparse-dense matrix multiplication against dense GEMM baselines on GPU.",
    highlights: [
      "Implemented sparse-dense CUDA kernels and compared them with cuBLAS GEMM and cuSPARSE SpMM.",
      "Characterized sparsity break-even points and explored kernel improvements for coalescing and warp-level accumulation.",
    ],
  },
  {
    title: "2D Peridynamics GPU Simulator",
    period: "Jun. 2025 - Present",
    stack: ["CUDA", "MPI", "Multi-GPU"],
    description:
      "A GPU-accelerated 2D peridynamics simulator using BLAS-like primitives, tensor operations, and domain decomposition.",
    highlights: [
      "Achieved substantial speedups over a CPU baseline on an RTX 4070.",
      "Added multi-GPU execution with MPI and tiled data movement for larger simulations.",
    ],
    github: "https://github.com/EricYJA/2D_PD_GPU",
  },
  {
    title: "Multi-label Graph Mining System",
    period: "Sept. 2024 - Mar. 2025",
    stack: ["Graph mining", "Graph isomorphism", "MapReduce-style execution"],
    description:
      "A graph mining system for comparing heuristics, enumerating patterns, and deduplicating embeddings.",
    highlights: [
      "Implemented pattern enumeration and graph isomorphism checks for canonical forms.",
      "Introduced pruning and compact pattern storage to reduce memory use and improve runtime.",
    ],
    github: "https://github.com/EricYJA/Multi-Label-Graph-Mining",
  },
  {
    title: "SPGEMM Dataflow Analysis on GPU",
    period: "Oct. 2022",
    stack: ["GPU computing", "Sparse matrices", "Nsight Compute"],
    description:
      "An implementation and analysis of inner-product, outer-product, and row-wise SPGEMM dataflows on GPU.",
    highlights: [
      "Compared memory-access patterns, accumulation strategies, and symbolic versus numeric phases.",
      "Profiled kernels for occupancy, warp efficiency, cache behavior, and memory bandwidth.",
    ],
    github: "https://github.com/EricYJA/SpGEMM-Analysis",
  },
];
