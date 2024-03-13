import axios from 'axios';


const tasksApi = axios.create({
  baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})


export const getAllTasks = () => {
  //return axios.get('http://localhost:8000/tasks/api/v1/tasks/')  // sirve para hacer peticiones a la API
  return tasksApi.get('/')
}

export const createTask = (task) => {
  //return axios.post('http://localhost:8000/tasks/api/v1/tasks/', task)  //post sirve para enviar datos a la API
  return tasksApi.post('/', task)
}