import React from "react"
import * as ReactDOM from "react-dom/client"
// When using React 16 and 17 import ReactDom with the commented statement below instead:
// import ReactDom from "react-dom"

const Greeting = ({name}) => {
  return (
    <h1>Hello, {name}</h1>
  )
}