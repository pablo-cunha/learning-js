import react from "react";

function Articles({ posts }) {
    return (
        <section>
            <h2>Publicações</h2>
            {console.log(posts)}
            {posts.map((post) => (
            <article key={post.metadata.title}  className="articles-container">
                <a href="/">
                    <h2 className="article-title hyper-text">
                        {post.metadata.title}
                    </h2>
                </a>
                    <p className="article-date">{post.metadata.date}</p>
                <p className="article-description">
                    {post.metadata.description}
                </p>
            </article>
            ))}
        </section>
    )
}

export default Articles