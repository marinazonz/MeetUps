import { useContext, useEffect, useState } from "react";

import FavoritesContext from "../../store/favorites-context";

const MeetupItem = (props) => {
    const FavoriteCtx = useContext(FavoritesContext);

    // useEffect(() => {
    //     fetch(
    //         "https://myprojectname-8bdfe-default-rtdb.firebaseio.com/favs.json",
    //         {
    //             method: "PUT",
    //             body: JSON.stringify(FavoriteCtx.favorites),
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         }
    //     );
    //     console.log(FavoriteCtx.favorites);
    // }, [FavoriteCtx.totalFavorites]);

    const itemIsFavorite = FavoriteCtx.itemIsFavorite(props.id);

    const toggleFavoriteStatusHandler = () => {
        if (itemIsFavorite) {
            FavoriteCtx.removeFavorite(props.id);
        } else {
            FavoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            });
        }
    };

    return (
        <li className='sm:place-self-center my-8'>
            <div className='sm:flex sm:justify-center'>
                <img
                    src={props.image}
                    alt={props.title}
                    className='sm:rounded-xl sm:w-2/3'
                />
            </div>
            <h3 className='font-semibold'>{props.title}</h3>
            <address>{props.address}</address>
            <div>{props.description}</div>
            <div>
                <button
                    onClick={toggleFavoriteStatusHandler}
                    className='rounded-lg shadow-lg font-semibold border text-white hover:bg-cyan-500 hover:text-black active:bg-cyan-500/50 active:text-black p-1'
                >
                    {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
                </button>
            </div>
        </li>
    );
};

export default MeetupItem;
