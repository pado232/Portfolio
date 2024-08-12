// ProjectControlPanel.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjectData } from "../../root/actions/projectActions";

const ProjectControlPage = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  const [selectedProject, setSelectedProject] = useState("RealMoment");
  const [newTitle, setNewTitle] = useState("");
  const [newSummary, setNewSummary] = useState("");

  const handleUpdateProject = () => {
    const updatedData = {
      ...projects[selectedProject],
      title: newTitle,
      summary: newSummary,
    };
    dispatch(setProjectData(selectedProject, updatedData));
  };

  return (
    <div>
      <h3>Project Control</h3>
      <select
        value={selectedProject}
        onChange={(e) => setSelectedProject(e.target.value)}
      >
        {Object.keys(projects).map((projectKey) => (
          <option key={projectKey} value={projectKey}>
            {projectKey}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="New Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="New Summary"
        value={newSummary}
        onChange={(e) => setNewSummary(e.target.value)}
      />
      <button onClick={handleUpdateProject}>Update Project</button>
    </div>
  );
};

export default ProjectControlPage;
