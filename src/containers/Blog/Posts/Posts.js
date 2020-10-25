import React, { Component } from 'react';
import Post from "../../../components/Post/Post";
import axios from "../../../axios";

import classes from "./Posts.module.css";


class Posts extends Component{
    state ={
        posts: []
    }

    componentDidMount() {
        axios.get('/posts') // executes asynchronously
            .then(response => {
                //success
                if(response.status === 200){
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


    postSelectedHandler = (id) =>{
        this.setState({selectedPostId: id})
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}/>
            });
        }

        return (
            <section className={classes.Posts}>
                {posts}
            </section>
        );
    }
}

export default Posts;