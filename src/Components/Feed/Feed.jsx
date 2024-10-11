import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const Feed = ({user}) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages,setPages] = React.useState([1])

  React.useEffect(() => {
    function infiniteScroll() {
      console.log(1)
    }

    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)

    return () => {
      console.log(2)
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }  
    
  })

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {[pages.map((page,i) => {
        return <FeedPhotos key={i} user={user} paginas={page} setModalPhoto={setModalPhoto} />
      })]}
    </div>
  );
};

export default Feed;