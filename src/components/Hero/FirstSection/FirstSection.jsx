import sideImage from '../../../assets/side-image.png';
import veggies from '../../../assets/veggies.png';
import play from '../../../assets/play.png';

import '../../Hero/FirstSection/FirstSection.css';

const FirstSection = () => {
    return (
        <div>
            <div className='side-image'>
                <img src={sideImage} alt="" />
            </div>

            <div className='hero-container'>
                <div className='img-container'>
                    <img src={veggies} alt="" />
                </div>
                <div className='el-container'>
                    <p className='para-about'>About</p>
                    <h1>Food Is an Important</h1>
                    <h1>Part of A Balanced</h1>
                    <h1>Diet</h1>
                    <div className='dummy-text-container'>
                        <p className='dummy-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum </p>
                        <p className='dummy-text'>id quisquam et quidem doloribus facilis quos mollitia</p>
                        <p className='dummy-text'>  quia rem itaque atque animiarchitecto illum possimus,</p>
                        <p className='dummy-text'>quaerat ad aliquid labore molestias.</p>
                    </div>
                    <div className='stage-container'>
                        <button>Learn more</button>
                        <div className='play-container'>
                            <img src={play} alt="" />
                            <h4>Watch Now</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstSection