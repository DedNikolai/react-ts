import { FC } from "react";
import {Link} from 'react-router-dom';

const Header: FC = () => {
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/todos'>Todos</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
        </ul>
    )
}

export default Header;