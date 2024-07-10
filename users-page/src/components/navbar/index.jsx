import { Button } from '@material-tailwind/react'
import './style.scss'

export default function Navbar(){
    return <div className="nav">
        <a href="#">
            <div className="logo">
                <img src="/fazsho.png" alt="" />
            </div>
        </a>
        <div className="btns">
            <Button variant='outlined'>Avaible Models</Button>
            <Button>Order Your Own Car</Button>
        </div>

    </div>
}