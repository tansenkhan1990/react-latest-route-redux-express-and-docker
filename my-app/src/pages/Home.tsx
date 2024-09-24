import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <h2>Home Page</h2>
            <nav>
                <ul>
                    <li><Link to="/public1">Public Page 1</Link></li>
                    <li><Link to="/public2">Public Page 2</Link></li>
                    <li><Link to="/protected/page1">Protected Page 1</Link></li>
                    <li><Link to="/protected/page2">Protected Page 2</Link></li>
                    <li><Link to="/protected/page3">Protected Page 3</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;