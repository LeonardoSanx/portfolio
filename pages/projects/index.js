import { projects } from "../../data";
import Project from "../../components/project";
import Head from "next/head";

export default function Projects() {
  return (
    <main
      className="py-20 sm:py-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 min-h-screen
     bg-gray-900 px-6 md:px-8 lg:px-12"
    >
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Frontend projects with html, css, react, tailwind"
        />
      </Head>
      {projects.map((project) => (
        <div key={project.id} className="">
          <Project project={project} />
        </div>
      ))}
    </main>
  );
}
