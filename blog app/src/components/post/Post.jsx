import './post.css'

export default function Post() {
    return (
        <div className='post'>
            <img src="../../public/assets/niclas-illg-wzVQp_NRIHg-unsplash.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet.
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className='postDesc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt ut quasi doloribus neque eum enim veritatis delectus aliquid dolores illum, temporibus dolorem. Possimus, rem a!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt ut quasi doloribus neque eum enim veritatis delectus aliquid dolores illum, temporibus dolorem. Possimus, rem a!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt ut quasi doloribus neque eum enim veritatis delectus aliquid dolores illum, temporibus dolorem. Possimus, rem a!

            </p>
        </div>
    )
}
