import { useState } from 'react'
import { Input, Typography } from "antd";
import './App.css'
import Blog from './component/blog/blog';

const { Title } = Typography;

function App() {

  return (
    <>
      <Title style={{ color: "#66dcff" }}>เที่ยวไหนดี</Title>
      <Input placeholder="หาที่เที่ยวเเล้วไปกัน" />

      <div className="card">
        <Blog />
      </div>
    </>
  )
}

export default App
