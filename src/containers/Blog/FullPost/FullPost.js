import React, { Component } from 'react';
import axios from 'axios';

import classes from './FullPost.module.css';

class FullPost extends Component {

    state={
        loadedPost: null
    }

    componentDidMount() {
        console.log(this.props)
        if(this.props.match.params.id){
            //if you don't do the below, u'll have an infinite loop
            //because calling setState in componentDidUpdate, updates the data, n will make componentDidUpdate to be called again and hence setState ...
            //however the below only runs if
            // we have a new post >>>>!this.state.loadedPost
            // and the new post id is not the same as the previous post id>>>> (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
            //if no id, we set a Key
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)){
                axios.get('/posts/' + this.props.match.params.id)
                    .then(response => {
                        this.setState({loadedPost: response.data})
                        console.log(response.data);
                    });
            }
        }
    }

    deletePostHandler =() =>{
        axios.delete('/posts/' + this.props.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.id){
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }

        //remember null is treated as false
        if(this.state.loadedPost){
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className={classes.Edit}>
                        <button className={classes.Delete} onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;