import { assets } from './../assets/assets';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='bg-[#000000] min-h-screen p-[3vw] border-red-200'>
            <img src={assets.GITI_logo} className='mt-5 w-[max(15vw,100px)] hidden sm:block' alt="GITI_logo" />
            <img src={assets.mini_logo} className='mt-5 w-[max(10vw,10px)] mr-5 block sm:hidden' alt="mini_logo" />
            <div className="flex flex-col gap-5 mt-10">
                <NavLink to={"/add-song"} className="flex items-center gap-2.5 text-gray-800 bg-white border border-black rounded-lg p-2 pr-[max(8vw,10px)] text-sm font-medium">
                    <img src={assets.add_song} className='w-5' alt="Add Song" />
                    <p className='hidden sm:block'>Add Song</p>
                </NavLink>
                <NavLink to={"/list-song"} className="flex items-center gap-2.5 text-gray-800 bg-white border border-black rounded-lg p-2 pr-[max(8vw,10px)] text-sm font-medium">
                    <img src={assets.song_icon} className='w-5' alt="List Song" />
                    <p className='hidden sm:block'>List Song</p>
                </NavLink>
                <NavLink to={"/add-album"} className="flex items-center gap-2.5 text-gray-800 bg-white border border-black rounded-lg p-2 pr-[max(8vw,10px)]  text-sm font-medium">
                    <img src={assets.add_album} className='w-5' alt="Add Album" />
                    <p className='hidden sm:block'>Add Album</p>
                </NavLink>
                <NavLink to={"/list-album"} className="flex items-center gap-2.5 text-gray-800 bg-white border border-black rounded-lg p-2 pr-[max(8vw,10px)] text-sm font-medium">
                    <img src={assets.album_icon} className='w-5' alt="List Album" />
                    <p className='hidden sm:block'>List Album</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar