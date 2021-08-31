import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/categories")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setCategories(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])

      if (error) {
        return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <ul>
                        {categories.map(category => (
                        <li>
                            <Link to={`/categories/${category}`}>{category}</Link>
                        </li>
                        ))}
                    </ul>
                </div>
            );
        }
}
export default Categories;