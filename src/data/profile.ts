export type SkillGroup = {
    category: string;
    skills: string[];
};

export const profile = {
    name: "Pham Viet Phuoc",
    title: "Backend-focused Fullstack Developer",
    location: "Ho Chi Minh City, Vietnam",

    summary:
    "IT student with a strong foundation in backend development, databases, and fullstack web application development. Experienced with .NET, Java, Node.js, React, and SQL-based systems.",

    education: {
    school: "Ho Chi Minh City University of Technology",
    degree: "Bachelor of Information Technology",
    period: "2022 – 2026",
    gpa: "3.61 / 4.00",
    },

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