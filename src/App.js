import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Articles from './pages/Articles/Articles';
import Quizes from './pages/Quizes/Quizes';
import Quiz from './pages/Quiz/Quiz';
import Test from './pages/Test/Test';
import Article from './pages/Article/Article';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/articles" element={<Articles/>}/>
      <Route path='/quizes' element={<Quizes/>} />
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path='/test' element={<Test/>}/>
      <Route path="/article" element={<Article/>}/>
     </Routes>
    </div>
  );
}

export default App;
