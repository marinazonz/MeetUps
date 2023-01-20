import { NavLink } from "react-router-dom";

const MainNavigation = (props) => {
    return (
        <header className='text-lg md:text-xl font-semibold flex flex-row justify-between items-center rounded-lg shadow-lg fixed bg-cyan-500 h-20 top-0 w-full'>
            <div className='rounded-full text-center self-center border border-slate-300 p-1 py-3'>
                (logo)
            </div>
            <nav>
                <ul className='flex flex-row justify-between text-center '>
                    <li className='min-[390px]:m-1 min-[424px]:m-4 sm:m-10 lg:m-16'>
                        <NavLink to='/'>All Mitups</NavLink>
                    </li>
                    <li className='min-[390px]:m-1 min-[424px]:m-4 sm:m-10 lg:m-16'>
                        <NavLink to='/new-meetup'>Add New Meetup</NavLink>
                    </li>
                    <li className='min-[390px]:m-1 min-[424px]:m-4 sm:m-10 lg:m-16'>
                        <NavLink to='/favorites'>My Favorites</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
