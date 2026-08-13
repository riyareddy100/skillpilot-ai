import api from "../api/api";

export const searchSkill = async (query: string) => {
  const response = await api.get("/", {
    params: {
      query,
    },
  });

  return response.data;
};