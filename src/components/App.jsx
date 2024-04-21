
import React, { useState } from 'react';
import Searchbar from './Serchbar/Serchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Spinner from './Loader/Loader';
import Modal from './Modal/Modal';
import axios from 'axios';

const apiKey = '42631072-6b0d19ed7a3e888324b209d49';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const fetchImages = async (query, page) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
      );
      setImages((prevImages) => [...prevImages, ...response.data.hits]);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    fetchImages(newQuery, 1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    fetchImages(query, page + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image.largeImageURL);
    setShowModal(true);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} onClick={handleImageClick} />
      {loading && <Spinner />}
      {images.length > 0 && !loading && <Button onClick={handleLoadMore} />}
      {showModal && <Modal onClose={() => setShowModal(false)} imageUrl={selectedImage} />}
    </div>
  );  


};

export default App;
 
