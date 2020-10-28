import React, { Component } from 'react';

import { Route, NavLink } from 'react-router-dom';

import classes from './Blog.module.css';
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {
        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/"
                                exact
                                activeClassName="my-active" //does nothing
                                activeStyle={{color: '#fa923f', textDecoration: 'underline'}}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                {/*<Route path="/" exact render={() => <h1>Home</h1>}/>*/}
                {/*<Route path="/" render={() => <h1>Home2</h1>}/>*/}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
                <Route path="/:id" exact component={FullPost} />

            </div>
        );
    }
}
//exact is used to tell to match that path, default true,
//path where we intent to route to, or sub path where other endpoints can be appended
//hash can be used to jump to any path of the page

export default Blog;