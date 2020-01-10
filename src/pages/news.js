import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from '../components/article';
// import MoreResults from '../components/moreResults';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const News = () => {
    const [articleList, setArticleList ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ startIndex, setStartIndex ] = useState(1);

    //pagination
    let { id } = useParams();
    // let page = Number(id);

    const getPage = () => {
        let currentPage = Number(id);
        let start = currentPage * 30 - 29;
        setPage(currentPage);
        if (currentPage !== page) {
            // get_assets();
            if (isNaN(start)){
                setStartIndex(1);
            } else {
                // alert(start)
                setStartIndex(start);
            }
        }
    }

    //results range
    // let endIndex = page * 30;
    // let startIndex = endIndex - 29;

    const get_assets = () => {


        axios
        .get("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(res => {
            console.log(res.data)
            console.log(...[res.data])
            setArticleList(...[res.data])
        })
        .catch((err) => {
            console.log(err)
        });
    };

    useEffect(() => {
        //run code
        get_assets();
        getPage();
    }, []);

    useEffect(() => {
        getPage();
    });

    const ArticleList = ({list, start}) => {
        return (
            <React.Fragment>
                {list.slice(start - 1, start + 29).map( (item, index) => (
                    <Article 
                        item= {item}
                        index={index + startIndex}
                    />
                ))}
            </React.Fragment>
        )
    }

    return(
        <React.Fragment>
            <h2>News Page</h2>
            <ArticleList list={articleList} start={startIndex}/>
            {/* {articleList.slice(startIndex, startIndex + 30).map( (item, index) => (
                <Article 
                    item= {item}
                    index={index + startIndex}
                />
            ))} */}
            <Link to={`/${isNaN(page)? 2 : page + 1}`}>More</Link>
        </React.Fragment>
    )
}

export default News;