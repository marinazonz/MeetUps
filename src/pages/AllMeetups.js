import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            "https://myprojectname-8bdfe-default-rtdb.firebaseio.com/meetups.json"
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //this 'data' returns an object and we need an array here, there for we cant do
                //setLoadedMeetups(data);
                //instead we are looping through the nested object:
                const meetups = [];

                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key],
                    };

                    meetups.push(meetup);
                }

                setIsLoading(false);
                setLoadedMeetups(meetups);
            });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section className='mt-20 flex flex-col'>
            <h1 className='text-center font-bold text-2xl'>All Meetups</h1>
            <MeetupList meetup={loadedMeetups} />
        </section>
    );
};

export default AllMeetupsPage;
