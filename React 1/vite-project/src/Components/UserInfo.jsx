import StudentInfo from "./StudentInfo"
import '../App.css'

function UserInfo(props) 
{

    return (
<>

<div className="Box">
    <h1>User Information</h1>
    <br></br>
    <label>{props.firstName}</label> <label>{props.lastName}</label>

    {props.children}
</div>

<div style= {{color: 'pink', background:'aqua'}}>

    <StudentInfo schoolName = 'Holy Family'></StudentInfo>
</div>
</>
    )
}

export default UserInfo