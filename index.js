import React from "react"
import ReactDom from "react-dom"
import MyHeader from "./Header"
import MainContent from "./MainContent"
import MyFooter from "./footer"
import  "./style.css"

function HomePage()
{
    return(
        <div>
           <MyHeader/>
            <MainContent/>
            <MyFooter/>
          
        </div>
    )
}
ReactDom.render(<HomePage/>,document.getElementById("root"))
