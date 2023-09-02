import './header.css';
import {Component} from 'react'

class Header extends Component {

  render(){
    return (
    <div className='header'>
      <div>
        <h1>My Todo List </h1><span>Done: 12 Important:34</span>
        
      </div>
    </div>
  );
  }
} 


// const Header = () => {
//   return 
// }

export default Header;