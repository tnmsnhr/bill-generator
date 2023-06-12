import React from 'react'
import { MdHome, MdOutlineCropSquare, MdSupervisedUserCircle, MdOutlineDriveFileMoveRtl, MdOutlineCloudDownload, MdOutlineFilterBAndW, MdSettings, MdMail, MdDoorFront } from "react-icons/md";
// import { IconName } from "react-icons/fa6";
import './leftsidebar.styles.scss'

const LeftSidebar = () => {
    return (
        <div className='left-sidebar'>
            <div className='left-sidebar--brand'>
                <MdHome size={40} className='left-sidebar--brand-icon' />
            </div>
            <div className='left-sidebar--items'>
                <ul className='left-sidebar--items-container'>
                    <li className='left-sidebar--items-icon'><MdOutlineCropSquare size={30} className='left-icon' /></li>
                    <li className='left-sidebar--items-icon'><MdSupervisedUserCircle size={30} className='left-icon' /></li>
                    <li className='left-sidebar--items-icon'><MdOutlineDriveFileMoveRtl size={30} className='left-icon' /></li>
                    <li className='left-sidebar--items-icon'><MdOutlineCloudDownload size={30} className='left-icon' /></li>
                    <li className='left-sidebar--items-icon'><MdOutlineFilterBAndW size={30} className='left-icon' /></li>
                    <li className='left-sidebar--items-icon'><MdSettings size={30} className='left-icon' /></li>
                    <li className='left-sidebar--items-icon'><MdMail size={30} className='left-icon' /></li>
                </ul>
            </div>
            <div className='left-sidebar--bottom'>
                <MdDoorFront size={30} />
            </div>
        </div>
    )
}

export default LeftSidebar