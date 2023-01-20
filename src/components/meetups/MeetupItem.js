const MeetupItem = (props) => {
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
                <button className='rounded-lg shadow-lg font-semibold border hover:bg-amber-400/50 active:bg-amber-400/50 p-1'>
                    To Favorites
                </button>
            </div>
        </li>
    );
};

export default MeetupItem;
