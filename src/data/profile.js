// ============================================================================
//  👋  PERSONAL DATA — auto-filled from Dhananjay's resume. Edit anything freely.
//  Everything shown on the site comes from this file.
// ============================================================================

export const profile = {
  // ---- Basic identity ----
  name: "Dhananjay Sitap",
  // Roles shown with the typing animation in the hero section:
  titles: [
    "Data Engineer",
    "ETL/ELT Pipeline Developer",
    "PySpark & Databricks Specialist",
    "AWS Data Lake Engineer",
    "Big Data Engineer",
  ],
  location: "Maharashtra, India",
  email: "dhananjay.sitap.data@gmail.com",
  phone: "+91 93255 38419",
  resumeUrl: "/resume.pdf", // save Dhananjay's resume as public/resume.pdf
  photo: "/profile.jpg", // save headshot as public/profile.jpg (falls back to initials)

  // ---- Social links ----
  socials: {
    github: "https://github.com/DHANANJAYSITAP01",
    linkedin: "https://linkedin.com/in/dhananjay-sitap", // TODO: confirm exact LinkedIn URL
    twitter: "",
  },
  githubUsername: "DHANANJAYSITAP01",

  // ---- Hero tagline & objective ----
  tagline:
    "Data Engineer with 1.5+ years building scalable ETL/ELT pipelines on Databricks, PySpark & AWS — turning massive datasets into production-ready, analytics-grade data.",
  objective:
    "Data Engineer with 1.5+ years of experience designing and implementing scalable ETL/ELT pipelines using Databricks, PySpark, SQL, and AWS. Experienced in building cloud-based data lake architectures, optimizing distributed data processing, and delivering production-ready analytical datasets in the Retail and Banking domains.",
};

// ---- About section ----
export const about = {
  intro:
    "I'm a Data Engineer who loves building the reliable data backbone that powers analytics at scale. I design and optimize ETL/ELT pipelines on Databricks and PySpark, architect cloud data lakes on AWS, and tune distributed processing to make large-scale data fast, clean, and production-ready.",
  highlights: [
    {
      title: "ETL/ELT Pipelines",
      text: "Build scalable pipelines on Databricks & PySpark processing 5M+ records daily.",
    },
    {
      title: "Cloud Data Lakes",
      text: "Architect AWS S3 data lakes integrated with Redshift & Athena for analytics.",
    },
    {
      title: "Orchestration & Automation",
      text: "Automate 20+ production workflows with Apache Airflow, cutting manual effort 40%.",
    },
    {
      title: "Performance Tuning",
      text: "Optimize Spark transformations and SQL, reducing execution time by 25–30%.",
    },
  ],
  // Quick stats shown as counters
  stats: [
    { label: "Experience", value: "1.5+ yrs" },
    { label: "Records / Day", value: "5M+" },
    { label: "Workflows Automated", value: "20+" },
    { label: "Manual Effort Cut", value: "40%" },
  ],
};

// ---- Skills (value = proficiency % for the progress bar) ----
export const skills = [
  {
    category: "Languages & Querying",
    items: [
      { name: "Python", value: 90 },
      { name: "SQL", value: 92 },
      { name: "PySpark", value: 90 },
      { name: "Spark SQL", value: 88 },
    ],
  },
  {
    category: "Big Data & Processing",
    items: [
      { name: "Databricks", value: 90 },
      { name: "Delta Lake", value: 85 },
      { name: "ETL / ELT Pipelines", value: 90 },
      { name: "Distributed Processing", value: 85 },
    ],
  },
  {
    category: "AI / ML & Generative AI",
    items: [
      { name: "Machine Learning", value: 82 },
      { name: "Artificial Intelligence", value: 80 },
      { name: "Generative AI", value: 78 },
      { name: "LLMs & Prompt Engineering", value: 75 },
    ],
  },
  {
    category: "Cloud & Data Lake",
    items: [
      { name: "AWS S3", value: 85 },
      { name: "AWS Redshift", value: 80 },
      { name: "AWS Athena", value: 80 },
      { name: "Microsoft Fabric", value: 72 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", value: 85 },
      { name: "SQL Server", value: 82 },
      { name: "Pandas", value: 82 },
    ],
  },
  {
    category: "Orchestration & DevOps",
    items: [
      { name: "Apache Airflow", value: 85 },
      { name: "Azure DevOps", value: 78 },
      { name: "CI/CD", value: 78 },
      { name: "Git & GitHub", value: 85 },
    ],
  },
  {
    category: "Practices & Tools",
    items: [
      { name: "Data Lake Architecture", value: 85 },
      { name: "Data Quality & Monitoring", value: 82 },
      { name: "Agile Scrum", value: 80 },
      { name: "VS Code / PyCharm", value: 88 },
    ],
  },
];

// ---- Projects (drawn from the Target Corporation engagement) ----
export const projects = [
  {
    name: "Scalable Retail ETL Pipelines — Target Corporation",
    problem:
      "A leading U.S. retailer (1,800+ stores, strong omnichannel presence) needed to process huge volumes of transactional and customer-behavior data reliably.",
    dataset: "5M+ transactional & customer-behavior records processed daily.",
    tech: ["Databricks", "PySpark", "SQL", "Python", "Delta Lake"],
    features: [
      "Built scalable ETL pipelines in Databricks using PySpark & SQL",
      "Implemented automated data-quality checks and a monitoring framework",
      "Optimized Spark transformations and SQL queries",
    ],
    results: "Processed 5M+ records daily with 30% improved availability and 25–30% faster execution.",
    impact: "Delivered dependable, analytics-ready datasets powering retail reporting at scale.",
    image: "",
    github: "",
    demo: "",
  },
  {
    name: "AWS Data Lake & Analytics Platform",
    problem:
      "Analysts needed a centralized, queryable store for large-scale retail data across the organization.",
    dataset: "Cloud data lake over retail transactional & behavioral data.",
    tech: ["AWS S3", "Redshift", "Athena", "PySpark", "Databricks"],
    features: [
      "Built & maintained an AWS S3-based Data Lake architecture",
      "Integrated the lake with Redshift and Athena for analytics",
      "Tuned partitioning & Spark configuration for large-scale processing",
    ],
    results: "Enabled fast, self-serve analytics on top of a governed cloud data lake.",
    impact: "Gave business teams a single, performant source of truth for decision-making.",
    image: "",
    github: "",
    demo: "",
  },
  {
    name: "Airflow Workflow Orchestration & Automation",
    problem:
      "Numerous data workflows were run and monitored manually, costing the team significant effort and risking errors.",
    dataset: "20+ production data workflows across the retail data platform.",
    tech: ["Apache Airflow", "Python", "Azure DevOps", "CI/CD"],
    features: [
      "Orchestrated 20+ production workflows with Apache Airflow",
      "Automated scheduling, dependencies and monitoring",
      "Collaborated with cross-functional teams on reporting datasets",
    ],
    results: "Reduced manual effort by 40% while improving reliability and observability.",
    impact: "Freed engineering time and made the data platform far more maintainable.",
    image: "",
    github: "",
    demo: "",
  },
];

// ---- Experience timeline ----
export const experience = [
  {
    role: "Data Engineer",
    org: "2GBR Software Pvt. Ltd · Client: Target Corporation",
    period: "Nov 2024 — Present",
    points: [
      "Built scalable ETL pipelines in Databricks using PySpark & SQL, processing 5M+ records daily with 30% improved availability.",
      "Built and maintained an AWS S3-based Data Lake integrated with Redshift & Athena for analytics.",
      "Orchestrated 20+ production workflows using Apache Airflow, reducing manual effort by 40%.",
      "Optimized distributed processing via partitioning & Spark tuning; cut execution time 25–30%.",
      "Implemented automated data-quality checks and a monitoring framework.",
      "Collaborated with cross-functional teams to deliver reporting and analytical datasets.",
    ],
  },
];

// ---- Certifications ----
export const certifications = [
  {
    name: "Python for Data Science",
    issuer: "NPTEL · IIT Madras — Silver Medalist 🥈",
    year: "2025",
  },
  {
    name: "AWS Certified Data Engineer – Associate",
    issuer: "Amazon Web Services (AWS)", // TODO: confirm exact AWS cert name & year
    year: "2025",
  },
  {
    name: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks", // TODO: confirm exact Databricks cert name & year
    year: "2025",
  },
];

// ---- Education timeline ----
export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    org: "SRTM University, Nanded, Maharashtra",
    period: "2025",
    points: ["Foundations in programming, databases, and software development."],
  },
];

// ---- Achievements ----
export const achievements = [
  "🥈 NPTEL (IIT Madras) Python for Data Science — Silver Medalist.",
  "Engineered pipelines processing 5M+ records daily with 30% improved availability.",
  "Automated 20+ Airflow workflows, reducing manual effort by 40%.",
  "Optimized Spark & SQL workloads, cutting execution time by 25–30%.",
  "1.5+ years delivering production data platforms in Retail & Banking domains.",
];

// ---- Blog (future articles) ----
export const blog = [
  { title: "Generative AI for Data Engineers", tag: "Gen AI", excerpt: "How LLMs and Generative AI are reshaping modern data workflows.", date: "Coming soon" },
  { title: "Machine Learning Pipelines at Scale", tag: "ML", excerpt: "Taking ML models from notebook to production data pipelines.", date: "Coming soon" },
  { title: "Working with LLMs & Prompt Engineering", tag: "AI", excerpt: "Practical patterns for building reliable LLM-powered apps.", date: "Coming soon" },
  { title: "PySpark Performance Tuning Tips", tag: "PySpark", excerpt: "Partitioning, caching and Spark config tricks that actually move the needle.", date: "Coming soon" },
  { title: "Building a Data Lake on AWS", tag: "AWS", excerpt: "S3 + Redshift + Athena: a practical lakehouse blueprint.", date: "Coming soon" },
];
