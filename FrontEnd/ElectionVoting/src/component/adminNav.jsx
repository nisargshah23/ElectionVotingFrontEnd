import { useNavigate } from "react-router-dom"
import "./Admin/style/AdminNav.css"

export const AdminNav=()=>{
    let navigate=useNavigate()
    function navigateHandle(link){
        console.log(link)
        navigate(link)
    }
    return(
        <>
            <nav class="navbar">
        <div class="logo">MyWebsite</div>
        <ul class="nav-links">
        <li><a href="/admin">Home</a></li>
            <li ><  a href="/admin/partyVerification">Party Verification</a></li>
            <li><a href="/admin/voterVerification/">Voter Verification</a></li>
            <li><a href="#services">Banner Verification</a></li>
            <li><a href="#contact">Notification</a></li>
            <li><a href="">Result Declare Section</a></li>
        </ul>
    </nav>
        </>
    )
}