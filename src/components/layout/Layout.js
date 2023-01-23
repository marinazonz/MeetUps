import MainNavigation from "./MainNav";

const Layout = (props) => {
    return (
        <div className='flex justify-center text-center'>
            <MainNavigation />
            <main className='w-9/12'>{props.children}</main>
        </div>
    );
};

export default Layout;
