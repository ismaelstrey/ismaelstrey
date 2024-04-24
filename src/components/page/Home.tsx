"use client";
import User from "../user";
import Projects from "../projects";
import Skills from "../skills";
import Contact from "../contact";
import Footer from "./Footer";
import Wrap from "./Wrap";
import { useEffect, useState } from "react";
import { getReadmeGit, infoUserGitHub } from "@/lib/apiGit";
import { userTypes } from "@/@types/userTypes";

export default function HomePage() {
  const [usuario, setUsuario] = useState<userTypes | any>({});
  const [readme, setReadme] = useState<string | any>('');
  useEffect(() => {
    infoUserGitHub().then((user) => setUsuario(user));
  }, []);
  useEffect(() => {
    getReadmeGit().then((read) => setReadme(read));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Wrap>
        {usuario && (
          <User
            name={usuario.name}
            image={usuario.avatar_url}
            city={usuario.location}
            bio={usuario.bio}
          />
        )}
        <Projects readme={readme} />
        <Skills />
        <Contact />
      </Wrap>
      <Footer />
    </div>
  );
}
