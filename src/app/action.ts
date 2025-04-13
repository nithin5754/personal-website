"use server";

import { GitHubRepo } from "@/components/Projects";
import fs from "fs";

export async function getALL() {
  fetch("https://api.github.com/users/Nithin5754/repos")
    .then((res) => res.json())
    .then((data: GitHubRepo[]) => {
      const mapped = data.map((p) => ({
        id: p.id,
        name: p.name,
        html_url: p.html_url,
        description: p.description,
        language: p.language,
        created_at: p.created_at,
        updated_at: p.updated_at,
        stargazers_count: p.stargazers_count,
        forks_count: p.forks_count,
      }));

      console.log(JSON.stringify(mapped, null, 2));

      const content = `
      const data = ${JSON.stringify(mapped, null, 2)}
    `;

      fs.writeFileSync("./data.js", content, "utf-8");
    })
    .catch((err) => console.error(err));
}
