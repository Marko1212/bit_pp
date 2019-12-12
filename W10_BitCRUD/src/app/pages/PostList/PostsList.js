import React, {Component} from 'react';
import CardPost from '../../components/CardPost/CardPost';
import './postsList.css';
import {getPosts} from "../../../services/postService";


class PostsList extends Component {
    constructor(props){
        super(props);

        this.state={
            posts: []
        }
    }

    componentDidMount(){
        getPosts().then(posts => this.setState({ posts : posts }))
    }
       

    render() {  
        console.log(this.state.posts)
        return ( 
            <div className="postList">
                {this.state.posts.map((post, i) => 
                    <CardPost key={i} {...post} />
                )}
                
            </div>
         );
    }
}
 
export default PostsList;