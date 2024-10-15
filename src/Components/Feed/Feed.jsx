import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import PropTypes from 'prop-types';

const Feed = ({user = 0}) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages,setPages] = React.useState([1])
  const [buscar,setBuscar] = React.useState(true)

  React.useEffect(() => {
    function infiniteScroll() {
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;

      if(scroll > height * 0.75 && buscar){
        setPages([...pages, pages.length + 1])
        setBuscar(false)
        // Valor FALSE para evitar q esse comando seja disparado toda a hora.
      }

    }

    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)

    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }  
    
  },[buscar])

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {[pages.map((page,i) => {
        return <FeedPhotos setBuscar={setBuscar} key={i} user={user} paginas={page} setModalPhoto={setModalPhoto} />
      })]}
    </div>
  );
};


Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
}

export default Feed;