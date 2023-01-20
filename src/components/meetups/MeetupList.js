import MeetupItem from "./MeetupItem";

const MeetupList = (props) => {
    return (
        <section>
            <ul className='text-center text-lg'>
                {props.meetup.map((meetup) => (
                    <MeetupItem
                        key={meetup.id}
                        id={meetup.id}
                        title={meetup.title}
                        address={meetup.address}
                        description={meetup.description}
                        image={meetup.image}
                    />
                ))}
            </ul>
        </section>
    );
};

export default MeetupList;
