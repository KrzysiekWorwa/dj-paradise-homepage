import { useState } from "react";
import {
    GalleryGrid,
    GalleryHeader,
    GalleryImage,
    GalleryWrapper,
} from "./styled";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { StaggeredContainer, StaggeredItem } from "../../animations/staggeredFadeIn";

const Gallery = ({ images }) => {
    const [index, setIndex] = useState(-1);

    return (
        <GalleryWrapper>
            <StaggeredContainer>
                <StaggeredItem>
                    <GalleryHeader>Portfolio</GalleryHeader>
                </StaggeredItem>

                <GalleryGrid>
                    {images.map((img, idx) => (
                        <StaggeredItem key={idx}>
                            <GalleryImage
                                src={img}
                                loading="lazy"
                                alt={`Zdjęcie ${idx}`}
                                onClick={() => setIndex(idx)}
                            />
                        </StaggeredItem>
                    ))}
                </GalleryGrid>
            </StaggeredContainer>

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
};

export default Gallery;
