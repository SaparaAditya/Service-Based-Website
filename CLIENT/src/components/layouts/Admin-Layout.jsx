import { NavLink, Navigate, Outlet} from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdContacts } from "react-icons/md";

import { FaHome } from "react-icons/fa";
import { useAuth } from "../../store/auth";
// import { Navigate } from "react-router-dom";
const AdminLayout =()=>{
    const {a} = useAuth();
    // console.log(user);
    // if(isLoading){
    //     return <h1>Loading...</h1>;
    // }
    console.log(a);
    let k = a;
    return <>
    {
       k == "true" ? (
       <>
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><NavLink to="/admin/users"><FaUser /> users</NavLink></li>
                        <li><NavLink to="/admin/contacts"><MdContacts /> contacts</NavLink></li>
                        <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                        
                    </ul>    
                </nav>    
            </div>    
        </header>  
        <Outlet/>  
    </>
    ):( 
        <Navigate to="/"/>
       )
    };
    </>
    
    // return <>
    //     <header>
    //         <div className="container">
    //             <nav>
    //                 <ul>
    //                     <li><NavLink to="/admin/users"><FaUser /> users</NavLink></li>
    //                     <li><NavLink to="/admin/contacts"><MdContacts /> contacts</NavLink></li>
    //                     <li><NavLink to="/admin/services"><MdMiscellaneousServices /> services</NavLink></li>
    //                     <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                        
    //                 </ul>    
    //             </nav>    
    //         </div>    
    //     </header>  
    //     <Outlet/>  
    // </>
}
export default AdminLayout;