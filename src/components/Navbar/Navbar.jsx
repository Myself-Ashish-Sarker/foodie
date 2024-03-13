import './Navbar.css'
import cartImage from '../../assets/cart.png'

const Navbar = () => {
    return (
        <div className="nav-component">
            <div className="nav-head">
                <h2>Foodie.</h2>
            </div>
            <div className="nav-sections">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Testimonial</a></li>
                    <li><a href="#">Contact</a></li>
                    <a href="#"><img src={cartImage} alt="" /></a>
                    <button>Order Now</button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar