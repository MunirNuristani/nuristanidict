import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import PictureModal from "../Modal/PictureModal";
import Image from "next/image"


export default function GridGallery({ images }) {
    const [imagesShownArray, setImagesShownArray] = useState(
        Array(images.length).fill(false)
    );

    const imageVisibleChange = (index, isVisible) => {
        if (isVisible) {
            setImagesShownArray(currentImagesShownArray => {
                currentImagesShownArray[index] = true;
                return [...currentImagesShownArray];
            });
        }
    };

    return (
        <div className="grid grid-cols-3 gap-5">
            {images &&
                images.map((imageUrl, index) =>
                    <VisibilitySensor
                        key={index}
                        partialVisibility={true}
                        offset={{ bottom: 80 }}
                        onChange={isVisible => imageVisibleChange(index, isVisible)}
                    >
                        <div className="flex justify-center items-center">
                            <GridGalleryCard
                                imageUrl={imageUrl}
                                show={imagesShownArray[index]}
                            />
                        </div>
                    </VisibilitySensor>
                )}
        </div>
    );
}

function GridGalleryCard({ imageUrl, show }) {
    const [showPictureModal, setShowPictureModal] = useState(false)
    const [modalUrl, setModalUrl] = useState('/logo_original.png')
    const hidePictureModal = () => setShowPictureModal(false)
    const showImageinModal = (link, e) => {
        e.preventDefault()
        setShowPictureModal(true)
        setModalUrl(link)
    }

    return (
        <>    
        <div
            className={`relative transition ease-in duration-300 transform ${show
                ? ""
                : "translate-y-16 opacity-0"} h-[200px] w-[350px]`}
        >
            <div className="absolute inset-0 hover:cursor-pointer z-10 flex transition duration-200 hover:bg-gray-300 ease-in hover:opacity-25 " onClick={(e) => showImageinModal(imageUrl, e)} />
            <Image src={imageUrl} alt="" layout='fill' />
        </div>
            <PictureModal showPictureModal={showPictureModal} hidePictureModal={hidePictureModal} linkurl={modalUrl} />
        </>
    );
}
