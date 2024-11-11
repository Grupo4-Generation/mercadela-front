import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

export const CreateWithoutToken = async (
  url: string,
  dados: Object,
  setDados: Function
) => {
  console.log(`Creating data at URL: ${url} without token`);
  const resposta = await api.post(url, dados);
  console.log("Data created successfully:", resposta.data);
  setDados(resposta.data);
};

export const CreateWithToken = async (
  url: string,
  dados: Object,
  setDados: Function,
  header: Object
) => {
  console.log(`Creating data at URL: ${url} with token`);
  const resposta = await api.post(url, dados, header);
  console.log("Data created successfully with token:", resposta.data);
  setDados(resposta.data);
};

export const FindWithoutToken = async (url: string, setDados: Function) => {
  console.log(`Fetching data from URL: ${url} without token`);
  const resposta = await api.get(url);
  console.log("Data fetched successfully:", resposta.data);
  setDados(resposta.data);
};

export const FindWithToken = async (
  url: string,
  setDados: Function,
  header: Object
) => {
  console.log(`Fetching data from URL: ${url} with token`);
  const resposta = await api.get(url, header);
  console.log("Data fetched successfully with token:", resposta.data);
  setDados(resposta.data);
};

export const Login = async (url: string, dados: Object, setDados: Function) => {
  console.log(`Logging in at URL: ${url}`);
  const resposta = await api.post(url, dados);
  console.log("Login successful:", resposta.data);
  setDados(resposta.data);
};

export const Update = async (
  url: string,
  dados: Object,
  setDados: Function,
  header: Object
) => {
  console.log(`Updating data at URL: ${url} with token`);
  const resposta = await api.put(url, dados, header);
  console.log("Data updated successfully:", resposta.data);
  setDados(resposta.data);
};

export const Delete = async (url: string, header: Object) => {
  console.log(`Deleting data at URL: ${url} with token`);
  await api.delete(url, header);
  console.log("Data deleted successfully");
};
