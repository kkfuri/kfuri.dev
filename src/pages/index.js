import Presentation from "@/containers/presentation";
import Projects from "@/containers/projects";
import DarkModeButton from "@/components/dark-mode";
import Head from "next/head";
import SEO from "@/components/seo";

export default function Home() {
  return (
    <>
      <SEO />
      <div className="px-2">
        <DarkModeButton />
        <Presentation />
        <Projects />
      </div>
    </>
  );
}
