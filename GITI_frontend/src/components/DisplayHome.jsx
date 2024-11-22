import {  useContext, useRef } from "react"
import AlbumItem from "./AlbumItem"
import Navbar from "./Navbar"
import SongsItem from "./SongsItem"
import { PlayerContext } from './../context/PlayerContext';

function DisplayHome() {
    const { songsData, albumsData } = useContext(PlayerContext);

    const trendingTracksRef = useRef(null);

    // Function to scroll to the Trending Tracks section
    const scrollToTrendingTracks = () => {
        trendingTracksRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Navbar scrollToTrendingTracks={scrollToTrendingTracks} />
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl text-[#d15d2f]">Featured Albums</h1>
                <div className="flex overflow-auto">
                    {albumsData.map((item, index) => (<AlbumItem key={index} image={item.image} name={item.name} desc={item.desc} id={item._id} />))}
                </div>
            </div>
            <div ref={trendingTracksRef} className="mb-4">
                <h1 className="my-5 font-bold text-2xl text-[#d15d2f]">Trending Tracks</h1>
                <div className="flex overflow-auto">
                    {songsData.map((item, index) => (<SongsItem key={index} image={item.image} name={item.name} desc={item.desc} id={item._id} />))}
                </div>
            </div>
        </>
    )
}

export default DisplayHome