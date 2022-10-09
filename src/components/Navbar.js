import logo from '../logo.svg';

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className='nav--icon'/>
            <h3 className='nav--logo_text'>Life Support System Suite on React</h3>
            <h4 className='nav--title'>Project 2: Dummy UI</h4>
        </nav>
    )
}