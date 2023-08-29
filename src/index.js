import React from 'react';
import ReactDOM from 'react-dom/client'
import Search from './components/Search/Search'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))





const App = () => {


  return (
    <div className='block'>
      <Header />
      <Search />
      <TodoList />
    </div>
  )
}


root.render(<App />)