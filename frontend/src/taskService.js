import axios from "axios";

export const fetching = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/tasks/");
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const adding = async (title, description) => {
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:3000/api/tasks/",
      data: {
        title: title,
        description: description,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updateUsingCheckBox = async (id, completed) => {
  try {
    console.log(completed);
    const response = await axios({
      method: "put",
      url: `http://localhost:3000/api/tasks/${id}`,
      data: {
        completed: completed,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updating = async (id, title, description) => {
  try {
    const response = await axios({
      method: "put",
      url: `http://localhost:3000/api/tasks/${id}`,
      data: {
        title: title,
        description: description,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleting = async (id) => {
  try {
    const response = await axios({
      method: "delete",
      url: `http://localhost:3000/api/tasks/${id}`,
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
