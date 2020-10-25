import React, { Component } from 'react';

//import axios from 'axios';
import Instance from '../../axios'; // i could hve used same name i.e axios

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.module.css';

class Blog extends Component {
    state ={
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        Instance.get('/posts') // executes asynchronously
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
                //console.log(error);
            this.setState({error: true})
        });
    }

    postSelectedHandler = (id) =>{
        this.setState({selectedPostId: id})
    }

    render () {
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
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;