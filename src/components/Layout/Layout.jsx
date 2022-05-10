import './Layout.scss';
import {Outlet} from 'react-router-dom'

import Sidebar from '../sidebar/Sidebar'



const Layout = () =>{
return (
    <div className="App"> 
        <Sidebar/>

        <div className="page">
            <span className="tags top-tags">&lt;body&gt;</span>
         
            <Outlet />
        
        <span className="tags bottom-tags">
            <span className="bottom-tag-html">&lt;body&gt;</span>
        </span>
        </div>         
    </div>
)

}
export default Layout

 