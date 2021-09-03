import './Testimonials.css';
import QuoteSvg from '../Components/Svgs/QuoteSvg';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2 className="testimonials-heading">
                Happy Customers
            </h2>

            <div className="testimonials-container">
                <div className="testimonials-container-wrapper 
                testimonials-container-wrapper1">
                    <div className="testimonials-container-wrapper-svg">
                        <QuoteSvg />
                    </div>
                    <p className="testimonials-container-wrapper-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra. Amet risus nullam eget felis eget nunc lobortis. Purus in massa tempor nec. Porta nibh venenatis cras sed. Viverra ipsum nunc aliquet bibendum enim. Risus pretium quam 
                    </p>
                    <div className="testimonials-container-wrapper-avatar">
                        <img src="./imgs/ProfileImgs/ProfilePic.png" alt="" />
                        <div className="testimonials-container-wrapper-avatar-name">
                            <p className="testimonials-container-wrapper-avatar-name-username">
                                Shalini Singh
                            </p>
                            <p className="testimonials-container-wrapper-avatar-name-designation">
                                Project Manger flyhigh
                            </p>
                        </div>
                    </div>
                </div>
                <div className="testimonials-container-wrapper 
                testimonials-container-wrapper2">
                    <div className="testimonials-container-wrapper-svg">
                        <QuoteSvg />
                    </div>
                    <p className="testimonials-container-wrapper-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra. Amet risus nullam eget felis eget nunc lobortis. Purus in massa tempor nec. Porta nibh venenatis cras sed. 
                    </p>
                    <div className="testimonials-container-wrapper-avatar">
                        <img src="./imgs/ProfileImgs/ProfilePic.png" alt="" />
                        <div className="testimonials-container-wrapper-avatar-name">
                            <p className="testimonials-container-wrapper-avatar-name-username">
                                Shalini Singh
                            </p>
                            <p className="testimonials-container-wrapper-avatar-name-designation">
                                Project Manger flyhigh
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
