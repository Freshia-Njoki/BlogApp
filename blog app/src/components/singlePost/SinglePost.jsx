import './singlePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="../../../public/assets/gabriel-beaudry-5X5dCf4Pp44-unsplash.jpg" alt="" />
                <h1 className="singlePostTitle" >Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-regular fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>Freshia</b></span>
                    <span className='singlePostDate'>1 hour ago </span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis molestias corporis quos minima amet aspernatur ut vitae at tenetur nemo, expedita ipsam fugit totam eius cumque commodi laborum consequuntur soluta ipsum nihil laboriosam.
                    Eos dolorem alias accusamus iure perspiciatis soluta distinctio veniam! Recusandae a voluptates eum cumque tempore deserunt qui adipisci facere fuga quisquam.
                    Suscipit natus dolorem voluptate, alias harum ut dolores ab quo. Porro doloribus dolorum magnam consequuntur, minima sint veritatis accusamus. Possimus rem quasi, ad amet adipisci est at tempore, enim beatae, nihil dolorem consectetur.
                    Illum quam accusamus voluptate repudiandae neque, dolore deleniti ab nesciunt minus voluptatum adipisci.</p>
            </div>
        </div>
    )
}
