import React from "react";

function Article({
    keyval,
    title,
    date="January 1, 1970",
    preview   
}){
    return (
        <article key={keyval}>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>

    )
}

export default Article