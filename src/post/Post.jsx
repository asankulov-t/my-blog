import React from 'react';
import './Post.css';

const Post = () => {
    return (
        <div className={'post'}>
            <img className={'postImg'} src="https://cdn.pixabay.com/photo/2021/07/11/10/39/fantasy-6403406_960_720.jpg" alt=""/>
            <div className="postInfo">
                <div className="postCategory">
                    <span className="postCat">
                        Music
                    </span>
                    <span className="postCat">
                        Life
                    </span>
                    <br/>
                    <div className="titleGroup">
                        <span className="postTitle">
                        Как я провел лето
                    </span>
                       <div className="titleIcons">
                           <i className="far fa-edit edit"></i>
                           <i className="fas fa-trash-alt delete"></i>
                       </div>
                    </div>
                    <hr/>
                    <span className={'postDate'}>
                        1 hour age
                    </span>
                </div>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque labore magni nobis placeat quasi quo repellat t
                otam. Accusamus consequatur corporis fugiat magni odit saepe totam vel. Eius exercitationem quasi recusandae.
            </p>
        </div>
    );
};

export default Post;