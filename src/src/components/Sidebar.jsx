import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <aside>
            <nav>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/students">Students</Link></li>
                    <li><Link to="/results">Results</Link></li>
                    <li><Link to="/reports">Reports</Link></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;