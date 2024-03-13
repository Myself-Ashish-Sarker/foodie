import bannerBackground from '../../assets/banner-background.png'
import homeDish from '../../assets/home-dish.png'
import arrow from '../../assets/arrow.png'

import '../Header/Header.css'

const Header = () => {
    return (
        <>
            <div className='header-container'>
                <img className='banner-background' src={bannerBackground} alt="" />
            </div>

            <div className='header-header'>
                <div className='header-el'>
                    <div className="header-head">
                        <h1>Your Favourite Food</h1>
                        <h1>Deliver Hot &</h1>
                        <h1>Fresh</h1>
                    </div>
                    <div className='header-para'>
                        <p>Healthy switcher chefs do all the prep work, like </p>
                        <p>peeding, chopping & marinating, so you can cook</p>
                        <p>a fresh food.</p>
                    </div>
                    <div className='header-btn'>
                        <button>Order Now &nbsp;<img className='arrow' src={arrow} alt="" /></button>
                    </div>
                </div>

                <div className='header-img-container'>
                    <img src={homeDish} alt="" />
                </div>
            </div>
        </>
    )
}

export default Header