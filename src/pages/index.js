import Presentation from "@/containers/presentation";
import Projects from "@/containers/projects";

export default function Home() {
  return (
    <div className="px-2">
      <Presentation />
      <Projects />
    </div>
  );
}
