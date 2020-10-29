import React, { Component } from 'react';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import classes from './Blog.module.css';
import Posts from "./Posts/Posts";
//import NewPost from "./NewPost/NewPost";
import asyncComponent from "../../hoc/asyncComponent";

const AsyncNewPost =asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth : true
    }
    render () {
        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active" //does nothing
                                activeStyle={{color: '#fa923f', textDecoration: 'underline'}}>Posts</NavLink></li>
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
                <Switch> {/*loads the path that matches a given set of rout*/}
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not Found</h1>}/> {/*we can render a JSX(another component or page) here too === this works as below too as rendering from default / to any other unknown route will be caught*/}
                    {/*<Redirect from="/" to="/posts" /> /!*if used outside switch u can't use from*!/ */}
                    {/*<Route path="/" component={Posts} />*/}
                </Switch>

            </div>
        );
    }
}
//exact is used to tell to match that path, default true,
//path where we intent to route to, or sub path where other endpoints can be appended
//hash can be used to jump to any path of the page
/* <Redirect from="/" to="/posts" /> if used outside switch u can't use from*/

export default Blog;