export type SkillGroup = {
    category: string;
    skills: string[];
};

export const profile = {
    name: "Pham Viet Phuoc",
    title: "Backend-focused Fullstack Developer",
    location: "Ho Chi Minh City, Vietnam",

    summary:
    "Full-stack software engineer specializing in backend systems (.NET, Java, Node.js) and database management, with proven experience building robust web applications.",

    education: {
    school: "Ho Chi Minh City University of Technology",
    degree: "Bachelor of Information Technology",
    period: "2022 – 2026",
    gpa: "3.61 / 4.00",
    },

    experience: [
        {
          company: "TOT - Top On Tech",
          role: "Backend Developer Intern",
          period: "May 2026 – July 2026",
          location: "Ho Chi Minh City, Vietnam",
          description:
            "Developing backend services and contributing to fullstack features for enterprise web applications.",
          technologies: [
            ".NET",
            "ASP.NET Core",
            "SQL Server",
            "Dapper",
            "Next.js",
            "React",
            "TypeScript",
          ],
        },
      ],

    skills: [
    {
        category: "Languages",
        skills: [
        "C",
        "C++",
        "C#",
        "Java",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL",
        ],
    },

    {
        category: "Backend",
        skills: [
        ".NET",
        "ASP.NET Core",
        "Spring Boot",
        "Node.js",
        "Express.js",
        ],
    },

    {
        category: "Frontend",
        skills: [
        "React",
        "Next.js",
        "HTML",
        "CSS",
        ],
    },

    {
        category: "Database",
        skills: [
        "Microsoft SQL Server",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Firebase",
        ],
    },

    {
        category: "Tools",
        skills: [
        "Git",
        "GitHub",
        "Visual Studio",
        "Visual Studio Code",
        ],
    },
    ] as SkillGroup[],
};