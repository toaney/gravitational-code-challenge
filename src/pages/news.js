import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from '../components/article';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const News = () => {
    const [articleList, setArticleList ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ startIndex, setStartIndex ] = useState(1);

    // useParams is a custom hook from react-router that gives access to the url id (page number)
    let { id } = useParams();

    // pagination logic - update page and startIndex state when url updates
    const getPage = () => {
        let currentPage = Number(id);
        let start = currentPage * 30 - 29;
        setPage(currentPage);
        if (currentPage !== page) {
            if (isNaN(start)){
                setStartIndex(1);
            } else {
                setStartIndex(start);
            }
        }
    }

    // API call to get intial HN Topstories on page load
    const get_assets = () => {
        axios
        .get("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(res => {
            setArticleList(...[res.data])
        })
        .catch((err) => {
            console.log(err)
        });
    };

    // get intial HN Topstories on page load
    useEffect(() => {
        get_assets();
    }, []);

    // getPage fires to ensure all content updates when page url changes
    useEffect(() => {
        getPage();
    });

    // ArticleList component 
    // Note: odd page reload behavior when this component gets imported from an external file
    // TODO: put ArticleList into its own file; 
    const ArticleList = ({list, start}) => {
        return (
            <React.Fragment>
                {list.slice(start - 1, start + 29).map( (item, index) => (
                    <Article 
                        item= {item}
                        index= {index + startIndex}
                        key= {index}
                    />
                ))}
            </React.Fragment>
        )
    }

    return(
        <React.Fragment>
            <ArticleList list={articleList} start={startIndex}/>
            <Link className="more-articles-link" to={`/${isNaN(page)? 2 : page + 1}`}>More</Link>
        </React.Fragment>
    )
}

export default News;