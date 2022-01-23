import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    console.log(posts)

    const allPosts = posts.map((prop) => {
        return <Article 
        key={prop.id}
        title={prop.title}
        date={prop.date}
        preview={prop.preview}
        minutes={prop.minutes}
        />
    })


    return (
        <main>
            {allPosts}
        </main>

    )
};

export default ArticleList;