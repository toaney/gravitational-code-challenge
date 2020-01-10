import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const MoreResults = () => {
    let { id } = useParams();
    let page = Number(id);
    alert(page)

    return (
        <Link to={`/${isNaN(page)? 2 : page + 1}`}>More</Link>
        // <Link to={`/2`}>More</Link>
    )

}

export default MoreResults;