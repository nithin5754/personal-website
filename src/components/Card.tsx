"use client";
import { ProjectsType } from "@/hello";
import { dateConvertorFunc } from "@/lib/data.constant";
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import { FC } from "react";

const Card: FC<{ data: ProjectsType }> = ({ data }) => {
  return (
    <div className="mx-auto ">
      <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100  bg-[#F5F5F7] dark:bg-neutral-800  transition duration-200 hover:shadow-xl">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-[#F5F5F7] dark:bg-neutral-800">
          {data.images.length > 0 && (
            <Image
              src={data.images[0]}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className={`transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl bg-[#F5F5F7] dark:bg-neutral-800`}
            />
          )}
        </div>
        <div className="p-4">
          <h2 className="my-4 text-lg font-bold text-neutral-600 dark:text-neutral-200 capitalize">
            {data.name}
          </h2>
          <h2 className="my-4 text-sm font-normal text-neutral-600 dark:text-neutral-400">
            {data.description}
          </h2>
          <div className="mt-10 space-y-3">
            {/* Date */}
            <div className="text-start">
              <span className="text-sm text-gray-500">
                {dateConvertorFunc(data.created_at)}
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 flex-wrap">
              {data.live_url && (
                <>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data.live_url}
                    className="cursor-pointer"
                  >
                    {" "}
                    <span className="rounded-sm bg-green-600 px-4 py-1 text-xs font-semibold text-white shadow-sm">
                      Live
                    </span>
                  </a>
                </>
              )}

              <button
                className="flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-xs font-semibold text-white hover:bg-gray-800 transition"
                aria-label="View on GitHub"
              >
                <IconBrandGithub size={16} />
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
