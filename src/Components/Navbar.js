import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from './Button'

export default class Navbar extends Component {
    render() {
        return (
          

/* Navbar start.Logo */
<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">

<Link to  ='/'>
<img src ={logo} alt="store" className="navbar-brand" />
</Link>


<ul className="navbar-nav align-items-center">

<li className="nav-item ml-15">
<Link to ="/" className="nav-link">
Our Menu
</Link>
</li>

<li className="nav-item ml-15">
<Link to ="/" className="nav-link">
About
</Link>
</li>


<li className="nav-item ml-15">
<Link to ="/" className="nav-link">
Offer 
</Link>
</li>


<li className="nav-item ml-15">
<Link to ="/" className="nav-link">
News 
</Link>
</li>


</ul>
<Link to ='/Cart' className="ml-auto" >
 <ButtonContainer>
 <span className="mr-2">
<i className="fas fa-cart-plus">
My Cart
</i>
</span>

 </ButtonContainer>
</Link>

 </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);

.nav-link {
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize;
}


`


