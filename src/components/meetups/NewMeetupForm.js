import { useRef } from "react";

const NewMeetupForm = (props) => {
    const titleInputRef = useRef();
    const imgInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredName = titleInputRef.current.value;
        const enteredImg = imgInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredName,
            image: enteredImg,
            address: enteredAddress,
            description: enteredDescription,
        };

        props.onAddMeetup(meetupData);
    };

    return (
        <form className='text-left font-semibold' onSubmit={submitHandler}>
            <div>
                <label>Meetup Title</label>
                <input
                    type='text'
                    required
                    className='rounded w-full px-1'
                    ref={titleInputRef}
                />
            </div>
            <div>
                <label>Meetup Image</label>
                <input
                    type='url'
                    className='rounded w-full px-1'
                    ref={imgInputRef}
                />
            </div>
            <div>
                <label>Address</label>
                <input
                    type='text'
                    required
                    className='rounded w-full px-1'
                    ref={addressInputRef}
                />
            </div>
            <div>
                <label>Description</label>
                <textarea
                    required
                    rows={5}
                    className='rounded w-full px-1'
                    ref={descriptionInputRef}
                ></textarea>
            </div>
            <div className='text-right'>
                <button className='rounded bg-cyan-500 w-28 shadow-lg'>
                    Add meetup
                </button>
            </div>
        </form>
    );
};

export default NewMeetupForm;
