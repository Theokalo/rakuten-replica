import React from 'react'
import './menu.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../home_dir/Home'
import Movie from '../movie_dir/movie'
import RakutenLogo from '../../assets/rakutenTv.png'

const menu = () => {
    const Show = () => {
        document.querySelector("#nav-lists").classList.add("_Menus-show");
    }
    const Hide = () => {
        document.querySelector("#nav-lists").classList.remove("_Menus-show");
    }
    return (
        <Router>
            <div className="container">
                <div className="logo">
                    <Link to='/'><img src={RakutenLogo} width="140" height="35" alt="rakuten logo"/></Link>
                </div>
                <div className="navbar">

                <div className="icon-bar" onClick={Show}>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>

                <ul id="nav-lists">
                    <li className="close"><span onClick={()=>{Hide()}}>×</span></li>
                    <li onClick={()=>{Hide()}}><Link to='/'>Home</Link></li>
                </ul>

                </div>
            </div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/movie' component={Movie} />
              {/* <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} /> */}
          </Switch>
        </Router>
    )
}

export default menu;