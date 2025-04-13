import { GitHubRepo } from "./components/Projects";

import freelanceImage1 from "./images/jobber-marketplace.png";
import appleImage2 from "./images/apple.png";
import phaseexImage3 from "./images/phaseex.png";
import connectionTinder from './images/connectionTinder.png'
import { StaticImageData } from "next/image";

export interface ProjectsType {
  id: number;
  name: string;
  images: StaticImageData[];
  description: string;
  live_url?: string;
  created_at: string;
  repositories: GitHubRepo[];
}

export const ProjectsData: ProjectsType[] = [
  {
    id: 0,
    name: "apple.in",
    live_url: "https://nithin5754.github.io/apple.in/",
    description: "using html tailwindcss javascript we creating apple.in clone",
    images: [appleImage2],
    created_at: "2023-05-13T10:42:32Z",
    repositories: [
      {
        id: 640209147,
        name: "apple.in",
        html_url: "https://github.com/nithin5754/apple.in",
        description:
          "using html tailwindcss javascript we creating apple.in clone",
        language: "JavaScript",
        created_at: "2023-05-13T10:42:32Z",
        updated_at: "2023-05-13T10:42:43Z",
        stargazers_count: 0,
        forks_count: 0,
      },
    ],
  },

  {
    id: 1,
    name: "connection-tinder",
    description: "using html tailwindcss javascript we creating apple.in clone",
    created_at: "2023-05-13T10:42:32Z",
    live_url: "",
    images: [connectionTinder],
    repositories: [
      {
        id: 923684115,
        name: "connection-web-frontned",
        html_url: "https://github.com/nithin5754/connection-web-frontned",
        description: null,
        language: "JavaScript",
        created_at: "2025-01-28T17:21:42Z",
        updated_at: "2025-04-04T17:15:41Z",
        stargazers_count: 0,
        forks_count: 0,
      },
      {
        id: 917265438,
        name: "connection-website",
        html_url: "https://github.com/nithin5754/connection-website",
        description: "using express node js react js",
        language: "JavaScript",
        created_at: "2025-01-15T17:03:01Z",
        updated_at: "2025-04-04T17:15:12Z",
        stargazers_count: 0,
        forks_count: 0,
      },
    ],
  },

  {
    id: 2,
    name: "freelance marketplace website",
    description: "using html tailwindcss javascript we creating apple.in clone",
    created_at: "2023-05-13T10:42:32Z",
    live_url: "https://jobber-client.vercel.app/",
    images: [freelanceImage1],
    repositories: [
      {
        id: 880202932,
        name: "jobber-client",
        html_url: "https://github.com/nithin5754/jobber-client",
        description:
          "using react and typescript building freelance market place for job hunt",
        language: "TypeScript",
        created_at: "2024-10-29T10:02:47Z",
        updated_at: "2025-03-15T07:52:46Z",
        stargazers_count: 0,
        forks_count: 0,
      },
      {
        id: 881807265,
        name: "jobber-server",
        html_url: "https://github.com/nithin5754/jobber-server",
        description: null,
        language: "TypeScript",
        created_at: "2024-11-01T09:20:31Z",
        updated_at: "2025-02-15T11:26:38Z",
        stargazers_count: 0,
        forks_count: 0,
      },
    ],
  },

  {
    id: 3,
    name: "Project Management Tool Website",
    description: "using html tailwindcss javascript we creating apple.in clone",
    created_at: "2023-05-13T10:42:32Z",
    live_url: "https://jobber-client.vercel.app/",
    images: [phaseexImage3],
    repositories: [
      {
        id: 880202939,
        name: "phaseex-frontend",
        html_url: "https://github.com/nithin5754/phaseex-frontend-react",
        description:
          "using react and typescript building freelance market place for job hunt",
        language: "TypeScript,React Js",
        created_at: "2024-10-29T10:02:47Z",
        updated_at: "2025-03-15T07:52:46Z",
        stargazers_count: 0,
        forks_count: 0,
      },
      {
        id: 881807267,
        name: "phaseex-server",
        html_url: "https://github.com/nithin5754/Phaseex-server",
        description: null,
        language: "TypeScript,Express Js,Node Js",
        created_at: "2024-11-01T09:20:31Z",
        updated_at: "2025-02-15T11:26:38Z",
        stargazers_count: 0,
        forks_count: 0,
      },
    ],
  },
];
