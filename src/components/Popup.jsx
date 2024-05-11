import { IoIosCloseCircleOutline } from 'react-icons/io';
import { usePopup } from '../context/PopupContext';

const Popup = () => {
  const { hidePopup, trailerData } = usePopup();

  const trailerUrl =
    trailerData && `https://www.youtube.com/embed/${trailerData.key}`;

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-black/60 flex justify-center items-center z-[1000]'>
      <div className='w-[1400px] h-[800px] bg-black flex flex-col relative overflow-hidden rounded-xl'>
        <div className='flex justify-between items-center bg-black py-3 px-5 text-white'>
          <div className='font-bold text-lg'>Trailer</div>
          <button onClick={hidePopup}>
            <IoIosCloseCircleOutline size={30} />
          </button>
        </div>
        <div className='w-full h-full relative'>
          {trailerData ? (
            <iframe
              className='w-full h-full rounded-xl'
              src={trailerUrl}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          ) : (
            <div className='text-white absolute font-bold text-2xl top-1/2 left-1/2 -translate-x-1/2'>
              No Trailer Available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
