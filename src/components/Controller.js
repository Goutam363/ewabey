import axios from "axios";

const FetchProjects = async (loggedin, setProjectsContext, tokenContext) => {
    // Make GET request to retrieve projects data
      if(loggedin) {
      const projectItemResponse = await axios.get(
        `${process.env.REACT_APP_EWABEY_BACKEND_URL}/project`,
        {
          headers: {
            Authorization: `Bearer ${tokenContext}`,
          },
        }
      );
        const projectTemp = projectItemResponse.data;
        await setProjectsContext(projectTemp);
    }
}

export { FetchProjects };