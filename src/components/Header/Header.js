import './header.css';
import { Component } from 'react'

class Header extends Component {

  render() {
    const { done , important } =this.props
    return (
      <div className='header'>
        <div>
          <h1>My Todo List </h1><span>Done: {done} Important:{important}</span>

        </div>
      </div>
    );
  }
}


// const Header = () => {
//   return 
// }

export default Header;