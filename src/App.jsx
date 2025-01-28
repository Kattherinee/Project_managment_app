import React from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projects, setProjects] = React.useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleSelectProject(id) {
    setProjects((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }

  function handleStartNewProject() {
    setProjects((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelNewProject() {
    setProjects((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjects((prev) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prev,
        selectedProjectId: projectId,
        projects: [...prev.projects, newProject],
      };
    });
  }

  console.log(projects);

  let content;

  if (projects.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelNewProject} />
    );
  } else if (projects.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartNewProject={handleStartNewProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          onStartNewProject={handleStartNewProject}
          projects={projects.projects}
          onSelectProject={handleSelectProject}
        />
        {content}
      </main>
    </>
  );
}

export default App;
