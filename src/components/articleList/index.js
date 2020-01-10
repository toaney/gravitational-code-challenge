import React from 'react';
import Article from '../article';

const ArticleList = ({list, start}) => {
    return (
        <React.Fragment>
            {list.slice(start - 1, start + 29).map( (item, index) => (
                <Article 
                    item= {item}
                    index={index + start}
                />
            ))}
        </React.Fragment>
    )
}

export default ArticleList;