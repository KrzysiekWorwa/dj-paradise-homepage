import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const Gallery = ({ title, images }) => (

    <GalleryWrapper>
        <GalleryHeader>{title}</GalleryHeader>
        <GalleryGrid>
            {displayedImages.map((img, index) => (
                <GalleryImage
                    key={index}
                    src={img}
                    loading="lazy"
                    alt={`img ${index}`}
                    onClick={() => setIndex(index)}
                />
            ))}
        </GalleryGrid>

        {images.length > 4 && (
            <ButtonDiv>
                <ShowMoreButton onClick={handleToggle} ref={buttonRef}>
                    {showAll ? "Ukryj więcej zdjęć" : "Pokaż więcej zdjęć"}
                </ShowMoreButton>
            </ButtonDiv>
        )}

        <Lightbox
            open={index >= 0}
            close={() => setIndex(-1)}
            index={index}
            slides={images.map((src) => ({ src }))}
            plugins={[Zoom]}
            zoom={{
                maxZoomPixelRatio: 1.5,
                zoomInMultiplier: 1,
            }}
            onBackdropClick={() => setIndex(-1)}
        />
    </GalleryWrapper>
);

export default Gallery;