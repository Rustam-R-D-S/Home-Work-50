import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div className='SideBar'>
            <nav>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
            </nav>
        </div>
    );
};

export default Sidebar;