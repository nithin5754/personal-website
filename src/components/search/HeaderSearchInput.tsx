"use client";
import { ChangeEvent, FC, FormEvent, ReactElement, useState } from "react";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { ProjectsData, ProjectsType } from "@/hello";

const HeaderSearchInput: FC<{
  handleProjects: (data: ProjectsType[]) => void;
}> = ({ handleProjects }): ReactElement => {
  const [searchItem, setSearchItem] = useState<string>("");

  const navigateSearchPage = (): void => {
    try {
      const search = searchItem.trim().toLowerCase();
      if (search) {
        const filteredProject = ProjectsData.filter((project) => {
          return (
            project.name.toLowerCase().includes(search) ||
            project.description?.toLowerCase().includes(search) ||
            project.repositories.some(
              (repo) =>
                repo.name.toLowerCase().includes(search) ||
                repo.description?.toLowerCase().includes(search)
            )
          );
        });
        if (filteredProject.length > 0) {
          handleProjects(filteredProject);
        } else {
          handleProjects([]);
        }
      } else {
        handleProjects(ProjectsData);
      }
    } finally {
      setSearchItem("");
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-2 md:mt-0">
      <form
        onSubmit={(event: FormEvent) => {
          event.preventDefault();
          navigateSearchPage();
        }}
        className="flex items-center w-full rounded-full bg-white/10 backdrop-blur-sm border border-white/20 focus-within:ring-2 focus-within:ring-white/40 transition"
      >
        <Input
          type="text"
          name="search"
          value={searchItem}
          aria-label="Search websites"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSearchItem(event.target.value)
          }
          placeholder="What type of project are you looking for?"
          className="flex-1 px-4 py-2 text-sm text-white bg-transparent border-none focus:outline-none placeholder:text-white/60"
        />
        <Button
          type="submit"
          variant="ghost"
          className="p-2 rounded-full text-white hover:bg-white/10"
        >
          <SearchIcon className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
};

export default HeaderSearchInput;
