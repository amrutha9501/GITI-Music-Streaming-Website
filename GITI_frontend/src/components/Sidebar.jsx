import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

function Sidebar() {
    const navigate = useNavigate();
    return (
        <div className='w-[24%] h-full p-3 flex-col gap-2 text-white hidden lg:flex'>
            <div className="bg-[#121212] h-[30%] rounded flex flex-col justify-around items-center">
                <img src={assets.GITI_logo} className='mt-5 w-[max(15vw,100px)] hidden sm:block' alt="GITI_logo" />
            </div>
            <div className="bg-[#121212] h-[90%] rounded">
                <div className="flex flex-col gap-4 mt-4">
                    <div onClick={() => navigate("/")} className="flex items-center gap-3 pl-8 cursor-pointer">
                        <img className='w-6 transform -scale-x-100 filter invert' src={assets.home_icon} alt="home icon" />
                        <p className='font-bold'>Home</p>
                    </div>

                    <div className="flex items-center gap-3 pl-8 cursor-pointer">
                        <img className='w-6' src={assets.search_icon} alt="search icon" />
                        <p className='font-bold'>Search</p>
                    </div>
                    
                    {/* <div className="flex items-center gap-3 pl-8 cursor-pointer">
                        <img className='w-6' src={assets.search_icon} alt="search icon" />
                        <p className='font-bold'>Albums</p>
                    </div>
                    <div className="flex items-center gap-3 pl-8 cursor-pointer">
                        <img className='w-6' src={assets.search_icon} alt="search icon" />
                        <p className='font-bold'>Musics</p>
                    </div>  */}

                </div>
                <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
                    <h1>Create your first playlist</h1>
                    {/* <p className='font-light'>It&apos;s easy we will help you</p> */}
                    <button className='px-4 py-1.5 bg-[#e8e9d9] text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
                </div>

            </div>
        </div>
    )
}

export default Sidebar