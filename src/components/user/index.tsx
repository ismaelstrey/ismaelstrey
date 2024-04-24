import Image from "next/image";
import React from "react";
interface Props {
  image: string;
  name: string;
  bio: string;
  city: string;
}

export default function User({
  name,
  image = "placeholder.svg",
  bio,
  city,
}: Props) {
  return (
    <div className="bg-banner bg-cover dark:bg-gray-800/30">
      <div className="container grid gap-4 px-4 py-6 md:py-12 md:px-6">
        <div className="grid gap-2">
          <div className="text-center">
            <Image
              alt="Avatar"
              className="mx-auto aspect-square rounded-full overflow-hidden object-cover"
              height="160"
              src={image}
              priority
              blurDataURL="placeholder.svg"
              width="160"
            />
            <h1 className=" bg-gradient-to-b from-rose-500 to-blue-700 text-transparent bg-clip-text flex flex-col text-3xl font-bold sm:text-5xl md:text-6xl">
              {name}
              <span className="text-base">{city}</span>
            </h1>
            <p className="mx-auto max-w-[600px] text-rose-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
