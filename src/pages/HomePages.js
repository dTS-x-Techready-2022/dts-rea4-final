import React, { useEffect, useState } from 'react';
import Results from 'components/Results';

const HomePages = () => {
    useEffect(() => {
        fetchGames();
    }, []);

    const [games, setGames] = useState([]);

    const fetchGames = () => {
        fetch(
            'https://api.rawg.io/api/games' +
                '?key=13ccf08eedbc418cbe4a4ac4a7dc751b' +
                '&page_size=9'
        )
            .then((resp) => resp.json())
            .then(({ results }) => setGames(results));
    };

    return (
        <div className="pt-20 bg-gray-900">
            <Results gameResults={games} />
        </div>
    );
};

export default HomePages;
