import './Features.css';
import BestPrices from '../Components/Svgs/BestPrices';
import CovidSafe from '../Components/Svgs/CovidSafe';
import FlexiblePayment from '../Components/Svgs/FlexiblePayment';
import BestNearby from '../Components/Svgs/BestNearby';

const Features = () => {
    return (
        <section className="features">
            <div className="features-container">
                <div className="features-wrapper">
                    <div className="features-wrapper-svg">
                        <BestPrices />
                    </div>
                    <h2 className="features-wrapper-heading">Get Best Prices</h2>
                    <p>Pay through our application and save thousands and get amazing rewards </p>
                </div>
                <div className="features-wrapper">
                    <div className="features-wrapper-svg">
                        <CovidSafe />
                    </div>
                    <h2 className="features-wrapper-heading">Covid Safe</h2>
                    <p>We have all the curated hotels that have all the precaution for a corvid safe environment</p>
                </div>
            

                <div className="features-wrapper">
                    <div className="features-wrapper-svg">
                        <FlexiblePayment />
                    </div>
                    <h2 className="features-wrapper-heading">Flexible Payment</h2>
                    <p>Enjoy the flexible payment through our app and get rewards on every payment </p>
                </div>
                <div className="features-wrapper">
                    <div className="features-wrapper-svg">
                        <BestNearby />
                    </div>
                    <h2 className="features-wrapper-heading">Find The Best Near You</h2>
                    <p>Find the best hotels and places to visit near you in a single click </p>
                </div>    
            </div>
        </section>
    )
}

export default Features
