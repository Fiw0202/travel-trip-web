import { useState } from 'react'
import { Input, Typography } from "antd";
import './App.css'
import Blog from './component/blog/blog';

const { Title } = Typography;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title style={{color:"#66dcff"}}>เที่ยวไหนดี</Title>
      <Input placeholder="หาที่เที่ยวเเล้วไปกัน"/>
      <Blog/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
