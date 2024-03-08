const baseUrl = "https://login-form-mu-silk.vercel.app/";

export const SUCCESS = "success";
export const ERROR = "error";

const onSuccess = (response) => {
  // console.log("ON SUCCESS CALL");
  return {
    status: SUCCESS,
    data: response,
  };
};
const onError = (response) => {
  // console.log("ON ERROR CALL");
  return {
    status: ERROR,
    data: response,
  };
};

export const getRequest = async (apiUrl) => {
  console.log("apiUrl", apiUrl);

  try {
    const response = await fetch(baseUrl + apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const result = await response.text();

    if (!response.ok) {
      return onError(JSON.parse(result));
    }

    return onSuccess(JSON.parse(result));
  } catch (error) {
    return onError(error);
  }
};

export const postRequest = async (apiUrl, body) => {
  console.log(apiUrl, body);

  try {
    const response = await fetch(baseUrl + apiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(body),
    });
    const result = await response.text();

    if (!response.ok) {
      return onError(JSON.parse(result));
    }

    return onSuccess(JSON.parse(result));
  } catch (error) {
    return onError(error);
  }
};

export const deleteRequest = async (apiUrl, body) => {
  // console.log('apiUrl', apiUrl)
  try {
    const response = await fetch(baseUrl + apiUrl, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(body),
    });
    const result = await response.text();

    if (!response.ok) {
      return onError(JSON.parse(result));
    }

    return onSuccess(JSON.parse(result));
  } catch (error) {
    return onError(error);
  }
};

export const multipartPostRequest = async (apiUrl, data) => {
  // console.log( 'data', data)
  const formData = new FormData();
  data.map((item) => formData.append("file", item));

  try {
    const response = await fetch(baseUrl + apiUrl, {
      method: "POST",
      body: formData,
    });
    const result = await response.text();

    if (!response.ok) {
      return onError(JSON.parse(result));
    }

    return onSuccess(JSON.parse(result));
  } catch (error) {
    return onError(error);
  }
};

const ApiProvider = {
  getRequest,
  postRequest,
  deleteRequest,
  multipartPostRequest,
};

export default ApiProvider;
