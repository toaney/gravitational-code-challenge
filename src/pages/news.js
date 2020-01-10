import React, { useState, useEffect } from 'react';
import firebase from '../firebase.js';
import axios from 'axios';
import Article from '../components/article';

const News = () => {
    const [articleList, setArticleList ] = useState([]);

    const get_assets = () => {
        axios
        .get("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(res => {
            console.log(res.data)
            setArticleList(res.data)
        })
        .catch((err) => {
            console.log(err)
        });
    };

    useEffect(() => {
        //run code
        get_assets();
    }, []);

    return(
        <React.Fragment>
            <h2>News Page</h2>
            {articleList.slice(0, 5).map( (item, index) => (
                <Article 
                    item= {item}
                    index={index + 1}
                />
            ))}
        </React.Fragment>
    )
}

export default News;