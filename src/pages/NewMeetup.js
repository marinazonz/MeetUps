import { useNavigate } from "react-router-dom";

import Layout from "../components/layout/Layout";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    const navigate = useNavigate();
    const addNewMeetupHandler = (meetupData) => {
        fetch(
            "https://myprojectname-8bdfe-default-rtdb.firebaseio.com/meetups.json",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(() => {
            navigate("/");
        });
    };

    return (
        <Layout>
            <div className='mt-20 text-xl font-bold'>Add New Meetup</div>
            <NewMeetupForm onAddMeetup={addNewMeetupHandler} />
        </Layout>
    );
};

export default NewMeetupPage;
