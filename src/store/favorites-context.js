import { createContext, useState, useEffect } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    useEffect(() => {
        //getting data
        fetch(
            "https://myprojectname-8bdfe-default-rtdb.firebaseio.com/favs.json"
        )
            .then((responce) => {
                return responce.json();
            })
            .then((data) => {
                const meetups = [];

                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key],
                    };

                    meetups.push(meetup);
                }

                setUserFavorites(meetups);
            });
    }, []);

    useEffect(() => {
        fetch(
            "https://myprojectname-8bdfe-default-rtdb.firebaseio.com/favs.json",
            {
                method: "PUT",
                body: JSON.stringify(userFavorites),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }, [userFavorites]);

    const addFavoriteHandler = (favoriteMeetup) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
        // concat is like push but it returns a new array
    };

    const removeFavoriteHandler = (meetupId) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
        });
    };

    const itemIsFavoriteHandler = (meetupId) => {
        return userFavorites.some((meetup) => meetupId === meetup.id);
    };

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;
