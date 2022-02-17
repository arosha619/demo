import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CallIcon from '@mui/icons-material/Call';



export const SideBarData = [
    {
        title : "Home",
        icon : <HomeIcon/>,
        link : "/home"
    },

    {
        title : "Create Message",
        icon : <EmailIcon/>,
        link : "/create message"
    },

    {
        title : "Profile",
        icon : <PermIdentityIcon/>,
        link : "/profile"
    },
    {
        title : "Contacts",
        icon : <PersonIcon/>,
        link : "/contacts"
    },
    {
        title : "Settings",
        icon : <SettingsIcon/>,
        link : "/settings"
    },
    {
        title : "Purchase",
        icon : <LocalAtmIcon/>,
        link : "/purchase"
    },
    {
        title : "Contact us",
        icon : <CallIcon/>,
        link : "/contact us"
    }
];




