'use client'

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export const ImageCarousel = ({ images }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        containScroll: "trimSnaps",
    });

    const scrollPrev = useCallback(() => {
        if(emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]);
    
    const scrollNext = useCallback(() => {
        if(emblaApi) emblaApi.scrollNext()
    }, [emblaApi]);

    return (
        <div className="embla__carousel">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {images.map((img, i) => (
                        <div className="embla__slide" key={i}>
                            <img src={img.url} alt={img.alt}className="embla__image" />
                        </div> 
                    ))}
                </div>
            </div>
            
            <div className="embla__button-container">
                <button className="embla__button prev" onClick={scrollPrev}>
                    <i className='bx bx-arrow-back'></i>
                </button>
                <button className="embla__button next" onClick={scrollNext}>
                    <i className='bx bx-arrow-back bx-flip-horizontal'></i>
                </button>
            </div>
        </div>
    )
}