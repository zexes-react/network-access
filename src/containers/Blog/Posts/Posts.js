import React, {Component} from 'react';
import Post from "../../../components/Post/Post";
import axios from "../../../axios";
import { Route } from 'react-router-dom';

import classes from "./Posts.module.css";
import FullPost from "../FullPost/FullPost";


class Posts extends Component{
    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('/posts') // executes asynchronously
            .then(response => {
                //success
                if (response.status === 200) {
                    //get only first 4 posts
                    const posts = response.data.slice(0, 4);// axios converts json to js object here
                    const updatedPosts = posts.map(post => {
                        return {
                            ...post,
                            author: 'Ziko'
                        }
                    })
                    this.setState({posts: updatedPosts})
                    console.log(updatedPosts);
                }

                //console.log(response);
            }).catch(error => {
            console.log(error);
            //this.setState({error: true})
        });
    }


    postSelectedHandler = (id) => {
        // this.props.history.push({pathname: "/posts/" + id});
        this.props.history.push("/posts/" + id);
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={'/' + post.id} key={post.id}>
                        <Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}/>
                    // </Link>);
                );
            });

            return (
                <div>
                    <section className={classes.Posts}>
                        {posts}
                    </section>
                    <Route path={this.props.match.url + "/:id"}  exact component={FullPost} />
                </div>
            );
        }
    }
}

    export default Posts;