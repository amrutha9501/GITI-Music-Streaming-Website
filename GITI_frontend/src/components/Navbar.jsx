import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

function Navbar({ scrollToTrendingTracks }) {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full flex justify-between items-center font-semibold">
                <div className="flex items-center gap-2">
                    <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="arrow_left" />
                    <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="arrow_right" />
                </div>
                <div className="flex items-center gap-4">
                    <p className='bg-[#e8e9d9] text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
                    <p className='bg-[#b4bc3b] text-black w-8 h-8 rounded-full flex items-center justify-center'>A</p>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <p className='bg-[#e8e9d9] text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
                <p onClick={scrollToTrendingTracks} className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
            </div>
        </>
    )
}

export default Navbar