import { useState, useEffect } from 'react';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './App.module.css';
import Button from './components/Button/Button';
import fetchData from './services/api';
import Searchbar from './components/Searchbar/Searchbar';
import Modal from './components/Modal/Modal';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setError(null)
  };

  const onClickImage = largeImageURL => {
    // console.log(largeImageURL)
    setShowModal(showModal => !showModal)
    setLargeImageURL(largeImageURL );
  };

  useEffect(() => {
    if (query === '') {
      return;
    };
    
    setLoading(true);

    const fetchImages = () => {
      setLoading( true );
      fetchData
        .data(query, page)
        .then(({ total, hits }) => {
          if (total === 0) {
            toast.error(`По запросу ничего не найдено! Введите другой запрос`)
          }


          setImages(hits);
              
          window.scrollTo({
            top: document.documentElement.offsetHeight,
            behavior: 'smooth',
          });                  
        })

        .catch(error => setError( error.message ))
        .finally(setLoading(false));
    };

    fetchImages();

  }, [page, query]);

    const toggleModal = () => {
        setShowModal(!showModal)
    };



  return (
      <div className={s.App}>
        <Searchbar onSubmit={handleFormSubmit} />
        {error && <h1>{error}</h1>}   

        <ImageGallery images={images} onClick={onClickImage}/>
        
        {showModal && (
          <Modal imageURL={largeImageURL} toggleModal={toggleModal} />
        )}

        {images.length > 0 && (
        <Button onClick={() => {
          setPage(prevPage => prevPage + 1)
        }} />
        )}
      
        {loading && <Loader />}

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
  );
};

export default App;
