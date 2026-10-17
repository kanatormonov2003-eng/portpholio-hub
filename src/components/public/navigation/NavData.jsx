import React from "react";
import { CiUser, CiHome, CiShoppingTag, CiSettings, CiStar, CiGlobe, } from "react-icons/ci";


import { Pages as ProjectPages } from "./../../../pages/projects/index";
import { Home, Profile, Settings } from "./../../../pages/index";

const NavData = [
    // {
    //     title: "Pages",
    //     linkPrefix: "/pages",
    //     subMenu: [
    //         {
    //             subtitle: "Home",
    //             icon: <CiHome />,
    //             link: '/',
    //             element: <Home />,
    //             idkey: 101,
    //         },
    //         // {
    //             //     subtitle: "Account",
    //             //     icon: <CiStar />,
    //             //     link: '/account', // internal link
    //             // },
    //             // {
    //                 //     subtitle: "Pricing",
    //                 //     icon: <CiShoppingTag />,
    //                 //     link: '/pricing', // internal link
    //                 // },
    //                 {
    //                     subtitle: "Settings",
    //                     icon: <CiSettings />,
    //                     link: '/settings', 
    //                     element: <Settings />,
    //                     idkey: 102,
    //                 },
    //                 {
    //                     subtitle: "Profile",
    //                     icon: <CiUser />,
    //                     link: '/profile', 
    //                     element: <Profile />,
    //                     idkey: 103,
    //                 },
    //             ],
    // },
    {
        title: "Мои сайты",
        // linkPrefix: "/projects", 
        subMenu: [
            {
                subtitle: "AI Lead Hunter",
                icon: <CiGlobe />,
                link: '/lead-hunter',
                element: <ProjectPages />,
                idkey: 201,
            },
        ],
        breakline: <hr className="bg-maxDark dark:text-textMild" />,
    },
];

export default NavData;