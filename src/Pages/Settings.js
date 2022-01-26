import React from 'react'
import SettingsHeader from '../components/SettingsComponents/SettingsPageHeader'
import ChangeEmail from '../components/SettingsComponents/ChangeEmail'
import Logout from '../components/SettingsComponents/LogOut'
import { Link } from 'react-router-dom';

function Settings() {
    return (
        <>
            <SettingsHeader />
            
            <ChangeEmail />
            <Link to="/login">
                <Logout />   
            </Link>

        </>
    )
}

export default Settings
