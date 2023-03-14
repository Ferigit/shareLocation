import Api from "../index";

const fakeApiCall = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve({}), 250);
  });

export const shareLocationApi = async (url: string, payload: Object) => {
  try {
    // const res = await Api.post(`/`);
    const res = await fakeApiCall();

    return {
      data: "ok",
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};
