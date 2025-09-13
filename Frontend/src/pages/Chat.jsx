import React from 'react'
import { BsLayoutSidebar } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


const SideBar = React.lazy(() => import('../components/SideBar'));
const ChatArea = React.lazy(() => import('../components/ChatArea'));
const MapBar = React.lazy(() => import('../components/MapBar'));

const Chat = () => {
  const navigate = useNavigate();
  const [ IsSideBarOpen, setIsSideBarOpen ] = React.useState(false);
  const [ IsMapBarOpen, setIsMapBarOpen ] = React.useState(false);
  const [ IsDepth, setIsDepth ] = React.useState(null);

  function toggleButton() {
    setIsSideBarOpen(prev => !prev);
  }

  const toggleHome = () => navigate('/');

  function toggleMapBar() {
    setIsMapBarOpen(prev => !prev);
  }

  return (
    <div className="flex w-full min-h-screen">
      {/* Sidebar */}
      <div className="flex flex-shrink-0 flex-col text-white bg-[#121212] border-r border-[#9B170B] border-dashed">
        {IsSideBarOpen ? (
          <SideBar
            toggleButton={toggleButton}
            IsOpen={IsSideBarOpen}
            setIsDepth={setIsDepth}
            setIsMapBarOpen={setIsMapBarOpen}
          />
        ) : (
          <button className="p-2 mt-2 text-2xl" onClick={toggleButton}>
            <BsLayoutSidebar />
          </button>
        )}

        <button className="p-2 mt-2 text-2xl" onClick={toggleHome}>
          <RiHome2Line/>
        </button>
        {/* <h1>jnkjnkjnkjn</h1>/ */}
      </div>

      {/* Main area */}
      <div className="flex flex-1 relative">
        <ChatArea
          IsSideBarOpen={IsSideBarOpen}
          IsMapBarOpen={IsMapBarOpen}
          setIsMapBarOpen={setIsMapBarOpen}
          setIsDepth={setIsDepth}
        />

        {/* MapBar container */}
        {IsMapBarOpen && (
          <div className="absolute right-0 top-0 h-full">
            <MapBar onClose={toggleMapBar} setIsDepth={setIsDepth} IsDepth={IsDepth} />
          </div>
        )}

        {/* Open Map button (independent positioning) */}
        {!IsMapBarOpen && (
          <button
            onClick={toggleMapBar}
            className=" absolute top-[22.7rem] left-[12rem] flex items-center justify-center gap-2 px-5 py-2 bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-400 focus:outline-none transition-colors duration-300 rounded-lg shadow-lg text-white"
          >
            Open Map
            <IoIosArrowForward className="text-xl" />
          </button>

        )}
      </div>
    </div>
  );
};

export default Chat;
