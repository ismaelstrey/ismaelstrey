import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
interface Props {
  readme: string;
}

export default function Projects({ readme }: Props) {
  return (
    <div className="flex min-h-screen bg-main bg-cover duration-500 justify-center items-center">
      <div className="grid w-screen gap-4 p-4 md:grid-cols-2 md:gap-8 lg:p-12 bg-black/90">
        <div className="space-y-4">
          <h2 className="text-3xl text-white text-center font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Meus Projetos
          </h2>
          <p className="text-lime-600 custon-animate ">
            <ReactMarkdown>{readme}</ReactMarkdown>
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="p-4">
              <Image
                alt="Project"
                className="aspect-video overflow-hidden rounded-lg object-cover"
                height="180"
                src="/placeholder.svg"
                width="320"
              />
            </CardContent>
            <CardFooter className="flex items-center p-4">
              <h3 className="font-bold">Project One</h3>
              <p className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                Description of project one.
              </p>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Image
                alt="Project"
                className="aspect-video overflow-hidden rounded-lg object-cover"
                height="180"
                src="/placeholder.svg"
                width="320"
              />
            </CardContent>
            <CardFooter className="flex items-center p-4">
              <h3 className="font-bold">Project Two</h3>
              <p className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                Description of project two.
              </p>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Image
                alt="Project"
                className="aspect-video overflow-hidden rounded-lg object-cover"
                height="180"
                src="/placeholder.svg"
                width="320"
              />
            </CardContent>
            <CardFooter className="flex items-center p-4">
              <h3 className="font-bold">Project Three</h3>
              <p className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                Description of project three.
              </p>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Image
                alt="Project"
                className="aspect-video overflow-hidden rounded-lg object-cover"
                height="180"
                src="/placeholder.svg"
                width="320"
              />
            </CardContent>
            <CardFooter className="flex items-center p-4">
              <h3 className="font-bold">Project Four</h3>
              <p className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                Description of project four.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
