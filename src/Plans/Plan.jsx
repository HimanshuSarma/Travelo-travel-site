import './Plan.css';

const Plan = (props) => {
    return (
        <div className="plan">
            <div className="plan-container">
                <div className="plan-img-wrapper">
                    <img src={props.imgSrc} alt="" />
                </div>

                <div className="plan-text">
                    <h2 className="plan-heading">
                        {props.heading}
                    </h2>
                    <p className="plan-desc">
                        {props.desc}
                    </p>
                </div>
            </div>

            <div className="plan-details">
                <div className="plan-details-icons">
                    <div className="plan-details-icons-container">
                        <img src={props.buildingIcon} alt="" />
                    </div>
                    <div className="plan-details-icons-container">
                        <img src={props.hotelIcon} alt="" />
                    </div>
                    <div className="plan-details-icons-container">
                        <img src={props.flightIcon} alt="" />
                    </div>
                </div>

                <p className="plan-details-price">{props.price}</p>

                <p className="plan-details-area">{props.area}</p>
                <p className="plan-details-duration">{props.duration}</p>
            </div>
        </div>
    )
}

export default Plan
