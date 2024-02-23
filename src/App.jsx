import { useState } from "react";

import DefaultPage from "./DefaultPage/DefaultPage";
import NewProject from "./NewProject/NewProject";
import SelectedProject from "./select/SelectedProject";
import SideBar from "./SideBar/Sidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text:text,
        id: taskId,
        projectId: prevState.selectedProject
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  }

  function handleAddNewProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  function handleCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
  }

  function handleDelete() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProject
        ),
      };
    });
  }

  let project = projectState.projects.find(
    (project) => project.id === projectState.selectedProject
  );
  let content = <SelectedProject tasks={projectState.tasks} project={project} onDelete={handleDelete} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}/>;

  if (projectState.selectedProject === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (projectState.selectedProject === undefined) {
    content = <DefaultPage onLoadPage={handleAddNewProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onSelect={handleSelectProject}
        onLoadPage={handleAddNewProject}
        projects={projectState.projects}
        id={projectState.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;
