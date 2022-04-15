import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios, {AxiosRequestTransformer, AxiosResponseTransformer} from "axios";
import axiosClient from "@aspida/axios"
import humps from "humps"
import applicationApi from "./lib/aspida/application/$api";
import authApi from "./lib/aspida/auth/$api";

const applicationAxiosApi = (() => {
  return applicationApi(axiosClient(axios, {
    baseURL: "http://localhost:3000/v1/",
    transformResponse: [
      ...(axios.defaults.transformResponse as AxiosResponseTransformer[]),
      data => humps.camelizeKeys(data)
    ],
    transformRequest: [
      ...(axios.defaults.transformRequest as AxiosRequestTransformer[]),
      data => {
        return data
      }
    ]
  }))
})()

const authAxiosApi = (() => {
  return authApi(axiosClient(axios, {
    baseURL: "http://localhost:3000/auth/v1/",
    transformResponse: [
      ...(axios.defaults.transformResponse as AxiosResponseTransformer[]),
      data => humps.camelizeKeys(data)
    ],
    transformRequest: [
      ...(axios.defaults.transformRequest as AxiosRequestTransformer[]),
      data => {
        return data
      }
    ]
  }))
})()

function App() {
  useEffect(() => {
    applicationAxiosApi.accounts._accountId("hoge").hopes.post({body: {hope: {
          timeToChangeJob: 3,
          annualIncome: 3,
          type: "career",
          workplaceId: "hoge",
          occupationIds: ["graduate_school"], employmentStatusIds: ["hoge"]}}
    })
    applicationAxiosApi.accounts._accountId("hoge").academicHistories.post({body: {academicHistory: {
          name: "hoge",
          sinceDate: "hoge",
          untilDate: "career",
          type: "graduate_school"
        }},
      headers: {authorization: "hoge"}
    })
    applicationAxiosApi.prefectures.get()
    authAxiosApi.signIn.post({body: {account: {email: "hoge@test.com", password: "password"}}})
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
