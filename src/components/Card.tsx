"use client"
import { ProjectsType } from "@/hello";
import Image from "next/image";
import { FC } from "react";



const Card:FC<{data:ProjectsType}> = ({data}) => {
  return (
    <div className="mx-auto w-80 ">

    <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100  bg-[#F5F5F7] dark:bg-neutral-800  transition duration-200 hover:shadow-xl">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-[#F5F5F7] dark:bg-neutral-800">
{
  data.images.length>0&&(
    <Image
    src={data.images[0]}
    alt="thumbnail"
    layout="fill"
    objectFit="cover"
    className={`transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl bg-[#F5F5F7] dark:bg-neutral-800`}
  />
  )
}
      </div>
      <div className="p-4">
        <h2 className="my-4 text-lg font-bold text-neutral-600 dark:text-neutral-200 capitalize">
          {data.name}
        </h2>
        <h2 className="my-4 text-sm font-normal text-neutral-600 dark:text-neutral-400">
          {data.description}
        </h2>
        <div className="mt-10 flex flex-row items-center justify-between">
          <span className="text-sm text-gray-500">{data.created_at}</span>
          <div className="relative z-10 block rounded-xl bg-black px-6 py-2 text-xs font-bold text-white">
            Read More
          </div>
        </div>
      </div>
    </div>

</div>
  )
}
export default Card



// const blogContent = {
//   slug: "amazing-tailwindcss-grid-layouts",
//   author: "Manu Arora",
//   date: "28th March, 2023",
//   title: "Amazing Tailwindcss Grid Layout Examples",
//   description:
//     "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
//   image: "https://fastly.picsum.photos/id/408/200/300.jpg?hmac=WHLCqIpd4lzmPZlRRMknXp1aOoOr7_qdtEUwozDmIWQ",
//   authorAvatar: "/manu.png",
// };



