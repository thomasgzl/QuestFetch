import  React  from  'react';
import './DisplayEmployee.css';

const  DisplayEmployee = ({ employee }) => {
    return (
        <div  className="DisplayEmployee">
            <img  src={employee.image}  alt="picture"  />
            <ul>
                <li> <h3>Quote :</h3> {employee.quote}</li>
                <li> <h3 className="lala">Character :</h3> {employee.character} </li>
                <li> <h3 className="lolo">Character Direction :</h3> {employee.characterDirection} </li>
            </ul>
        </div>
    );
};

export  default  DisplayEmployee;