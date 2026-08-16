    export type Project = {
        title: string;
        slug: string;
        period: string;
        role: string;
        description: string;
        technologies: string[];
        features: string[];
        github?: string;
    };

    export const projects: Project[] = [
        {
            title: "F&B Ordering System",
            slug: "fnb-ordering-system",
            period: "November 2024 – January 2025",
            role: "Fullstack Developer",
            description:
            "A QR-based food ordering application with real-time data synchronization, a dynamic menu system, drag-and-drop functionality, and fuzzy search.",
        technologies: ["Spring Boot", "React", "PostgreSQL", "Firebase"],
        features: [
            "QR-based food ordering",
            "Real-time data synchronization",
            "Dynamic menu system",
            "Drag-and-drop functionality",
            "Fuzzy search",
        ],
        github:
            "https://github.com/PerryPhuoc/restaurant-management-system",
        },
    
        {
        title: "Task Management System",
        slug: "task-management",
        period: "December 2025 – February 2026",
        role: "Backend & Database Developer",
        description:
            "A Trello-like task management system with backend APIs for task and workflow management, database relationships, and core task organization features.",
        technologies: ["Node.js", "Express", "React", "PostgreSQL"],
        features: [
            "Backend APIs for task and workflow management",
            "Database schema and relationships",
            "Task organization and tracking",
        ],
        github:
            "https://github.com/DoThanhLoc2334/task-management",
        },
    
        {
        title: "Social Media Platform",
        slug: "social-media-platform",
        period: "March 2023 – June 2024",
        role: "Fullstack Developer",
        description:
            "A social media web application built with .NET, including relational database design, SQL query optimization, and UI development.",
        technologies: [".NET", "Java", "HTML", "CSS", "SQL Server"],
        features: [
            "Social media web application",
            "Relational database management",
            "SQL query optimization",
            "UI development",
        ],
        github:
            "https://github.com/PerryPhuoc/UrDoggyApp",
        },
    ];