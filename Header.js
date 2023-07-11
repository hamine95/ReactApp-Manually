import React from "react"
import { ReactDOM } from "react"
import logo from "./react-logo.png"
function MyHeader()
{
    return(
            <header>
                <nav>
                <img src={logo} className="logo"/>
                <ul className="menu-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </nav>
               
            </header>
    )
}
export default MyHeader;