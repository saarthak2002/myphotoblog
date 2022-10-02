import { useState } from "react";
import { BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill } from 'react-icons/bs';


export function ImageCarousel({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderStyles = {
        height: '100%',
        position: 'relative',
        margin: '20px auto',
    }

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].image})`,
    }

    const leftArrowStyle= {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0,-50%)',
        left: '32px',
        fontSize: '55px',
        color: 'white',
        cursor: 'pointer',
        zIndex: '1',
    }

    const rightArrowStyle= {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0,-50%)',
        right: '32px',
        fontSize: '55px',
        color: 'white',
        cursor: 'pointer',
        zIndex: '1',
    }

    const goToPrevious = () => {
        const isFirst = currentIndex === 0;
        const newIndex = isFirst? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLast = currentIndex === slides.length - 1;
        const newIndex = isLast? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const captionStyle = {
        textAlign: 'center',
        fontSize: '15px',
        fontStyle: 'italic',
        marginTop: '0',
    }

    return(
        
        <div style={sliderStyles}>
            <h3 style={captionStyle}>{slides[currentIndex].title}</h3>
            <div style={leftArrowStyle} onClick={goToPrevious}><BsFillArrowLeftCircleFill /></div>
            <div style={slideStyles}></div>
            <div style={rightArrowStyle} onClick={goToNext}><BsFillArrowRightCircleFill /></div>
        </div>
            
    )
}