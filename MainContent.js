import React from "react"
import { ReactDOM } from "react"
function MainContent()
{
    return(
        
        <div className="MainContent">
            <h1>How to setup a React project manually:</h1>
            <ul>
                <li>Setup nodejs project with npm init</li>
                <li>Installed the necessary react packages :
                    <ul>
                        <li>react</li>
                        <li>react-dom</li>
                    </ul>
                </li>
                <li>Installed the necessary babel packages that responsible for rendering jsx and modern javascript:
                    <ul>
                        <li>babel/core</li>
                        <li>babel/preset-env</li>
                        <li>babel/preset-react</li>
                        <li></li>
                    </ul>
                </li>
                <li>Installed the necessary webpack packages that responsible for bundling and packaging all the project files into a single file:
                    <ul>
                        <li>webpack</li>
                        <li>webpack-cli</li>
                        <li>webpack-dev-server</li>
                    </ul>
                </li>
                <li>Create a babel file to set your presets</li>
                <li>create a webpack file configuration</li>
                <li>setup start command for development and production in package.json</li>
            </ul>
    
        </div>
    )
}
export default MainContent;