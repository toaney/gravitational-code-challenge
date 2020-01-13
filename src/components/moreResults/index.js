import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const MoreResults = () => {
    let { id } = useParams();
    let page = Number(id);

    // component will link to '/2' if url id is not present
    // component will link to current url id + 1
    return (
        <Link to={`/${isNaN(page)? 2 : page + 1}`}>More</Link>
    )
}

export default MoreResults;