import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as TbIcons from 'react-icons/tb';
import * as GrIcons from 'react-icons/gr';

export const SidebarData = [

    {
        title : 'Home',
        path : '/',
        icon : <AiIcons.AiFillHome />,
        cName : 'nav-text'
    },

    {
        title : 'About',
        path : '/about',
        icon : <FaIcons.FaInfoCircle/>,
        cName : 'nav-text'
    },

    {
        title : 'Services',
        path : '/services',
        icon : <FaIcons.FaServicestack />,
        cName : 'nav-text'
    },

    {
        title : 'Gallery',
        path : '/gallery',
        icon : <GrIcons.GrGallery  />,
        cName : 'nav-text'
    },

    {
        title : 'Booking',
        path : '/appointments',
        icon : <TbIcons.TbBrandBooking  />,
        cName : 'nav-text'
    },

    {
        title : 'Contact',
        path : '/contact',
        icon : <AiIcons.AiFillContacts  />,
        cName : 'nav-text'
    },

    {
        title : 'Products',
        path : '/products',
        icon : <FaIcons.FaCartPlus />,
        cName : 'nav-text'
    },

]