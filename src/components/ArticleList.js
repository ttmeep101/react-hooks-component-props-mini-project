import React from 'react'
import Article from './Article'

function ArticleList({articles}) {
    return (
        <main>
            {articles.map((article, index) => (
                <Article 
                    key = {index}
                    date = {article.date}
                    title = {article.title}
                    preview = {article.preview}
                />
            ))}
        </main>
    )
}

export default ArticleList