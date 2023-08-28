import React from 'react';
import ReactDOM from 'react-dom/client'
import Search from './components/Search'
import Header from './components/Header'
import TodoList from './components/TodoList'

const root = ReactDOM.createRoot(document.getElementById('root'))





const App = () => {


  return (
    <div>
      <Header />
      <Search />
      <TodoList />
    </div>
  )
}


root.render(<App />)