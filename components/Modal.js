import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Player } from "./Player";
import movieTrailer from "movie-trailer";

export default function Modal({ isOpen, onClose, movie }) {
  const [trailerUrl, setTrailerUrl] = useState(null);

  useEffect(async () => {
    // use movie-trailer to get the trailer url
    if (isOpen === true) {          
      try {
        const url = await movieTrailer(`${movie.title}`);
        console.log(url);
        setTrailerUrl(url ?? "https://www.youtube.com/watch?v=Ebv9_rNb5Ig");
      } catch (err) {
        console.log(err);
      }
    } else {
      setTrailerUrl(null);
    }
  }, [isOpen, movie]);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0  overflow-y-scroll m-4 scroll-smooth no-scrollbar"
        // initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <div className="flex  justify-center items-center min-h-screen text-center sm:block ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all  sm:align-middle sm:max-w-lg ">
              <div className="bg-black ">
                <div className="sm:flex sm:items-start">
                  {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <XIcon
                      className="h-6 w-6 text-red-600"
                      aria-hidden="true"
                      onClick={onClose}
                    />
                  </div> */}
                  <div className=" text-center ">
                    <Player url={trailerUrl} />

                    {/* Style a title here */}
                    <h1 className="text-lg font-bold mt-3 uppercase text-white">
                      {movie?.title}
                    </h1>

                    <div className=" m-3 mb-5">
                      <p className="text-sm text-gray-300">
                        {movie?.overview ?? movie?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
