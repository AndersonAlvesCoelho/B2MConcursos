import Routes from './Routes';
import { BackTop } from 'antd';

import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

function App() {
  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };

  return (
    <>
      <Routes />
{/* 
      <BackTop>
        <div style={style}>UP</div>
      </BackTop> */}
    </>
  );
}

export default App;
