import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const FavoritesPage = () => {
    const favoriteCtx = useContext(FavoritesContext);

    let content;

    if (favoriteCtx.totalFavorites === 0) {
        content = <p>You got no favorites yet</p>;
    } else {
        content = <MeetupList meetup={favoriteCtx.favorites} />;
    }

    return (
        <section className='mt-20 flex flex-col'>
            <h1 className='text-center font-bold text-2xl'>My Favorites</h1>
            {content}
        </section>
    );
};

export default FavoritesPage;
