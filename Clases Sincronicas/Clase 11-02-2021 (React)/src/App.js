import SideBar from './components/SideBar'
import MainContent from './components/MainContent'

import './assets/css/app.css';

function App() {
  return (
    <body>
      <div id="wrapper">
        <SideBar></SideBar>
        <MainContent></MainContent>
      </div>
    </body>
  );
}

export default App;
