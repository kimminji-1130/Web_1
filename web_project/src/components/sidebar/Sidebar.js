import React from "react";
import './sidebar.css'

export default function sidebar() {
    
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <img src="https://item.kakaocdn.net/do/30492b0eb225427f966bf63d1dbfb017f43ad912ad8dd55b04db6a64cddaf76d"
                    className="cheeseduck"
                    />
                    <div>닉네임</div>
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sideList">
                        
                        <li href="pages/Home.js" className="sidebarListItem">Home</li>
                        <li className="sidebarListItem">Analystics</li>
                        <li className="sidebarListItem">Menu1</li>
                        <li className="sidebarListItem">Menu2</li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sideList">
                        <li className="sidebarListItem active">Home</li>
                        <li className="sidebarListItem">Analystics</li>
                        <li className="sidebarListItem">Menu1</li>
                        <li className="sidebarListItem">Menu2</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}