import { Typography } from "antd";
import './App.css'
import Blog from './component/blog/blog';

const { Title } = Typography;

function App() {

  return (
    <>
      <Title style={{ color: "#66dcff" }}>เที่ยวไหนดี</Title>
      <div className="card">
        <Blog />
      </div>
    </>
  )
}

export default App
