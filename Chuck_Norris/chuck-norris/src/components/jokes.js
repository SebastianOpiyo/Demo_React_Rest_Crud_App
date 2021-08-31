import React,{ useState, useEffect } from 'react';

const Joke = props => {

    var id = props.match.params.category;
    console.log(id);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${id}`)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setJokes(data);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }  
    
    if (jokes) {
        return (
            <div>
                <h1>ID: {jokes.id}</h1>
                <div>
                    Icon: {jokes.icon_url}
                </div>
                <div>
                    Value: {jokes.value}
                </div>
            </div>
        );
    }

}
export default Joke;