import Image from "next/image";
import React from "react";
import Bio from "../bio";
import Footer from "../page/Footer";
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
    <div className="flex w-full bg-banner bg-cover min-h-screen">
      <div className="flex container gap-4 m-4 justify-between md:flex-col">
        <div className="grid gap-2">
          <div className="text-left">
            <Image
              alt="Avatar"
              className="aspect-square rounded-full overflow-hidden object-cover border-4 border-orange-500 duration-1000 animate-rotate-x hover:animate-rotate-y"
              height="160"
              src={image}
              priority
              blurDataURL="placeholder.svg"
              width="160"
            />
            <h1 className=" max-w-[600px] bg-gradient-to-b from-rose-500 to-blue-700 text-transparent bg-clip-text flex flex-col text-3xl font-bold sm:text-5xl md:text-6xl">
              <span className="animate-out"> {name}</span>
              <span className="text-base text-right p-2 text-white animate-pulse">
                {city}
              </span>
            </h1>
       <div className="flex gap-4 ">
          <div className="bg-black/80 hover:bg-black p-4 max-h-48 rounded-lg max-w-[600px] border-2 border-solid border-red-500 transition-all duration-500 hover:shadow-red-600 shadow-xl hover:cursor-pointer hover:rotate-6">
          <p className=" mt-2 bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {bio}
          </p>
          </div>
            
       </div>
          </div>
        </div>
       
      </div>   
      <Bio/>
      <div className="flex flex-col">
      <div className="flex flex-1 h-full">
   
      </div>
        <Footer />
      </div>
    </div>
  );
}
