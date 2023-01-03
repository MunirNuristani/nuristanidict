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
    <div className="container my-10 mx-auto bg-white p-5 rounded-xl max-w-[1000px] md:max-w-[700px] sm:max-w-[360px] sm:mt-[20px]">
      <iframe 
      src={`${bookURL}#view=fitH`} 
      title="books" 
      height="100%" 
      width="100%"
      allowFullScreen={true} />
    </div>
  );
};
export default Books;