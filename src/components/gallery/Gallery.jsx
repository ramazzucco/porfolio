import React, { useCallback, useEffect, useState } from "react";
import "./gallery.css";

export default function Gallery(props) {
    const [slideIndex, setSlideindex] = useState(1);

    const showSlides = useCallback((n) => {
        let i;
        const slides = document.querySelectorAll(`.gallery .mySlides`);
        const dots = document.querySelectorAll(`.gallery .demo`);
        const captionText = document.querySelector(`.gallery #caption`);

        if (n > slides.length) setSlideindex(1);
        if (n < 1) setSlideindex(slides.length);

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        if(n > 0 && n <= slides.length){
            slides[slideIndex - 1].style.display = "flex";
            dots[slideIndex - 1].className += " active";
            captionText.innerHTML = dots[slideIndex - 1].alt;
        }
    },[slideIndex]);

    useEffect(() => {
        showSlides(slideIndex);
    }, [props.images, slideIndex, showSlides]);

    return (
        <div className='container p-0 px-md-4 gallery'>
            {/* <!-- Full-width images with number text --> */}
            {props.images.map((img,i) => {
                return (
                    <div className="mySlides" key={i}>
                        <div className="numbertext bg-rgba3 rounded">
                            {img.id} / {props.images.length}
                        </div>
                        <img
                            src={img.url}
                            alt={img.name}
                        />
                    </div>
                );
            })}

            {/* <!-- Next and previous buttons --> */}
            <span
                className="prev text-success"
                onClick={() => setSlideindex(slideIndex - 1) }
            >
                &#10094;
            </span>
            <span
                className="next text-success"
                onClick={() =>  setSlideindex(slideIndex + 1) }
            >
                &#10095;
            </span>
            {/* <!-- Image text --> */}
            <div className="caption-container mb-5 mb-md-0">
                <p id="caption"></p>
            </div>

            {/* <!-- Thumbnail images --> */}
            <div className="row">
                {props.images.map((img, i) => {
                    return (
                        <div className="column" key={i}>
                            <img
                                className="demo cursor"
                                src={img.url}
                                onClick={() => setSlideindex(img.id)}
                                alt={img.name}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
