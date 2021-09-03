import './Blogs.css';

const Blogs = () => {
    return (
        <section className="blogs">

            <h2 className="blogs-heading">Blogs</h2>
            <div className="blogs-img-cont1">
                <img src="./imgs/BlogsImgs/Kilimanjaro.png" alt="" />
                <h1 className="blogs-img-cont1-heading">
                    The Ultimate Guide to Climbing Mount Kilimanjaro
                </h1>
            </div>

            <div className="blogs-img-cont2">
                <div className="blogs-img-cont2-img1">
                    <img src="./imgs/BlogsImgs/Blog2.png" alt="" />
                    <h1 className="blogs-img-cont2-img1-heading">
                        12 Things I’d Tell Any New Traveler
                    </h1>
                </div>
                <div className="blogs-img-cont2-img2">
                    <img src="./imgs/BlogsImgs/Blog3.png" alt="" />
                    <h1 className="blogs-img-cont2-img2-heading">
                        The Ultimate Packing List for Female Travelers
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Blogs
