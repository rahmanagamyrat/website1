import React, { useEffect, useState } from 'react'
import './Gallery.css'
import {SRLWrapper} from "simple-react-lightbox";

const images = [
    { id: '10', imageName: 'img10.jpg', tag: 'yemek' },
    { id: '11', imageName: 'img11.jpg', tag: 'yemek' },
    { id: '12', imageName: 'img12.jpg', tag: 'yemek' },
    { id: '13', imageName: 'img13.jpg', tag: 'yemek' },
    { id: '14', imageName: 'img14.jpg', tag: 'yemek' },
    { id: '16', imageName: 'img16.jpg', tag: 'yemek' },
    { id: '17', imageName: 'img17.jpg', tag: 'yemek' },
    { id: '18', imageName: 'img18.jpg', tag: 'yemek' },
    { id: '19', imageName: 'img19.jpg', tag: 'yemek' },
    { id: '20', imageName: 'img20.jpg', tag: 'yemek' },
    { id: '8', imageName: 'img8.jpg', tag: 'yemek' },
    { id: '9', imageName: 'img9.jpg', tag: 'yemek' },
    { id: '21', imageName: 'img21.jpg', tag: 'yemek' },
    { id: '22', imageName: 'img22.jpg', tag: 'yemek' },
    { id: '23', imageName: 'img23.jpg', tag: 'yemek' },
    { id: '24', imageName: 'img24.jpg', tag: 'yemek' },

]; 

export const Gallery = () => {
    const [tag, setTag] = useState('hepsi');
    const [filteredImages, setFilteredImages] = useState([]);

    useEffect(() => {
        tag === 'hepsi' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag))
    }, [tag])

    return (
        <div className='AppGallery'>
            <div className="tags">
                <TagButton name="hepsi" handleSetTag={setTag} tagActive={tag === 'hepsi' ? true : false} />
                <TagButton name="yemek" handleSetTag={setTag} tagActive={tag === 'yemek' ? true : false} />
            </div>
            <SRLWrapper  >
                <div className="container">
                    {filteredImages.map(image => (
                        <div key={image.id} className="image-card">
                            <a href={`/images/${image.imageName}`}>
                                <img className="image" src={`/images/${image.imageName}`} alt="" />
                            </a>
                        </div>
                    ))}
                </div>
            </SRLWrapper>
        </div>
    );
};

const TagButton = ({ name, handleSetTag, tagActive }) => {
    return <button className={`tag ${tagActive ? 'tactive' : null}`} onClick={() => handleSetTag(name)}>{name.toUpperCase()}</button>;
};
