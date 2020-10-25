import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import classes from './Blog.module.css';
import Posts from "./Posts/Posts";

class Blog extends Component {
    render () {
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

                {/*<Route path="/" exact render={() => <h1>Home</h1>}/>*/}
                {/*<Route path="/" render={() => <h1>Home2</h1>}/>*/}
                <Route path="/" exact component={Posts} />

            </div>
        );
    }
}
//exact is used to tell to match that path, default true
//path where we intent to route to

export default Blog;