import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { books } from '../../utils/airTable';


const Books = () => {
  const router = useRouter();
  const id = router.query.book
  const [bookURL, setBookURL] = useState('')



  useEffect(() => {
    id && books.find(id, function (err, record) {
      if (err) { console.error(err); return; }
      setBookURL(record.fields.Book_Links[0].url)
    })
  }, [id])


  return (
    <div className="flex justify-center my-10">
      <iframe
        title="books"
        src={bookURL}
        width="900"
        height="800"
        allowFullScreen={true}
        >
      </iframe>
    </div>
    
  );
};

export default Books;

