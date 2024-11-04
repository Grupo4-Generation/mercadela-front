import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:8080/'
})

export const CreateWithoutToken = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const CreateWithToken = async (url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.post(url, dados, header)
  setDados(resposta.data)
}

export const FindWithoutToken = async (url: string, setDados: Function) => {
  const resposta = await api.get(url)
  setDados(resposta.data)
}

export const FindWithToken = async (url: string, setDados: Function, header: Object) => {
  const resposta = await api.get(url, header)
  setDados(resposta.data)
}

export const Login = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const Update = async (url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.put(url, dados, header)
  setDados(resposta.data)
}

export const Delete = async (url: string, header: Object) => {
  await api.delete(url, header)
}
