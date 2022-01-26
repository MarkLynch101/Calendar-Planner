
import React from "react";
import './ChangeEmail.css';
import { Link } from 'react-router-dom';
 
class ChangeEmail extends React.Component {
    render() {
        return (
            <div class="box">
                <h3 class="text">Change Alert Email</h3>
                <input class="enter-email" type="text" placeholder=" Enter new email"></input>
                <input class="enter-email" type="text" placeholder=" Confirm new email"></input>
                <Link to='/'>
                    <button class="submit-email"> Submit new Email</button>
                </Link>
            </div>
        )
    }
}
export default ChangeEmail