import { NavBar } from "./Navbar";
import { Footer } from './Footer';
import { ImageCarousel } from './ImageCarousel';
import './YosemiteHeading.css';

import image1 from './Images/Yosemite/img-1.png';
import image2 from './Images/Yosemite/img-2.png';
import image3 from './Images/Yosemite/img-3.png';
import image4 from './Images/Yosemite/img-4.png';
import image5 from './Images/Yosemite/img-5.png';
import image6 from './Images/Yosemite/img-6.png';
import image7 from './Images/Yosemite/img-7.png';


const slides = [
    { 'image': image1, 'title': 'Yosemite Valley' },
    { 'image': image2, 'title': 'Merced River' },
    { 'image': image3, 'title': 'El Capitan' },
    { 'image': image4, 'title': 'Mirror Lake' },
    { 'image': image5, 'title': 'Norhtside- Merced River' },
    { 'image': image6, 'title': 'Yosemite Falls' },
    { 'image': image7, 'title': 'Rockface with Yosemite Falls' },
];

export function Yosemite() {
    const containerStyle = {
        width: '960px',
        height: '560px',
        margin: '0 auto',
    }
    return (
        <div>
            <NavBar />
            <h1 className="yosemiteHeading">Yosemite National Park</h1>
            <div style={containerStyle}>
                <ImageCarousel slides={slides} />
            </div>
            <div style={{ margin: "60px"}}><h1></h1></div>
            <Footer />
        </div>
    )
}