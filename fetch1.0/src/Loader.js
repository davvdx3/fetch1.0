import { useEffect, useState } from 'react'

const Loader = () => {

    const [articles, setArticles] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(resp => resp.json())
            .then(data => {
                setIsLoading(false)
                setArticles(data)
            })
            .catch(e => {
                setIsLoading(false)
                setError(e.message)
                console.log(e.message);
            })
        setIsLoading(true)

    }, [])

    if (isLoading) {
        return <p className='section'>loading...</p>
    }

    if (error) {
        return <p className='section'>{error}</p>
    }

    if (articles.length > 1) {
        return (
            <section className="section">
                {articles && articles.map(({ id, title, body }) => (
                    <article key={id}>
                        <h1>{title}</h1>
                        <p>{body}</p>
                    </article>
                ))}
            </section>
        );
    }
}

export default Loader;