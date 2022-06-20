import React, {useState, useEffect} from 'react'
import { Viewer, Worker, TextDirection, } from '@react-pdf-viewer/core';
import { getFilePlugin, } from '@react-pdf-viewer/get-file';
import { pageNavigationPlugin, } from '@react-pdf-viewer/page-navigation'
import { thumbnailPlugin } from '@react-pdf-viewer/thumbnail';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';
import { useRouter } from 'next/router';
import {MdOutlineFindInPage} from 'react-icons/md'
import { books } from '../../utils/airTable';


const Books = () => {
  const router = useRouter();
  const id =  router.query.book
  console.log("pdf:", id)
  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { GoToFirstPage, GoToLastPage, GoToNextPage, GoToPreviousPage, CurrentPageLabel } = pageNavigationPluginInstance;
  const thumbnailPluginInstance = thumbnailPlugin();
  const { Thumbnails } = thumbnailPluginInstance;
  const [showThumbnail, setShowThumbnail ] = useState(false)
  const toggleThumbnail= ()=>{
    setShowThumbnail(!showThumbnail)
  }
  const setToStorage = (key,value) => {
    if(typeof window !== 'undefined'){
         return window.localStorage.setItem(key,value)
    }
    }

    const getFromStorage = (key) => {
      if(typeof window !== 'undefined'){
          return window.localStorage.getItem(key)
      }
      }
  useEffect(()=>{
   id && books.find(id, function(err, record) {
    if (err) { console.error(err); return; }
    setToStorage("url", record.fields.Book_Links[0].url )
})
},[])


const link = getFromStorage("url")
  return (
    
      <div className="max-w-[900px] h-[750px] mx-auto mb-28 mt-10 ">
        <button className="absolute top-50 left-5 bg-[#357edd] text-[#fff] cursor-pointer py-2 px-4 rounded-lg" onClick={() => {
          router.push({
            pathname: '/bookList'
          })
          localStorage.clear();
        }}> برگشت</button>
        <div className="flex flex-row-reverse justify-center items-center bg-[#eee] border-1 border-[gray] p-1 relative">
        <MdOutlineFindInPage onClick={()=>toggleThumbnail()} className="absolute right-0  bg-[#357edd] p-1 rounded-lg text-[#fff] text-3xl"/>
          <div className='px-1'>
            <GoToFirstPage>
              {(props) => (
                <button
                  style={{
                    backgroundColor: '#357edd',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#ffffff',
                    cursor: 'pointer',
                    padding: '8px',
                  }}
                  onClick={props.onClick}
                >
                  صفحه اول
                </button>
              )}
            </GoToFirstPage>
          </div>
          <div style={{ padding: '0 2px' }}>
            <GoToPreviousPage>
              {(props) => (
                <button
                  style={{
                    backgroundColor: props.isDisabled ? '#96ccff' : '#357edd',
                    border: 'none',
                    borderRadius: '4px',
                    color: '#ffffff',
                    cursor: props.isDisabled ? 'not-allowed' : 'pointer',
                    padding: '8px',
                  }}
                  disabled={props.isDisabled}
                  onClick={props.onClick}
                >
                  صفحه قبلی
                </button>
              )}
            </GoToPreviousPage>
          </div>
          <CurrentPageLabel >

            {(props) => (
              <span style={{
                backgroundColor: '#fff',
                border: "2px #357edd",
                borderRadius: '4px',
                color: '#357edd',
                cursor: 'pointer',
                padding: '8px',
              }}>  {props.currentPage + 1} </span>
              // <span>{`${props.currentPage + 1} of ${props.numberOfPages}`}</span>
            )}

          </CurrentPageLabel>
          <div style={{ padding: '0 2px' }}>
            <GoToNextPage>
              {(props) => (
                <button
                  style={{
                    backgroundColor: props.isDisabled ? '#96ccff' : '#357edd',
                    border: 'none',
                    borderRadius: '4px',
                    color: '#ffffff',
                    cursor: props.isDisabled ? 'not-allowed' : 'pointer',
                    padding: '8px',
                  }}
                  disabled={props.isDisabled}
                  onClick={props.onClick}
                >
                  صفحه بعدی
                </button>
              )}
            </GoToNextPage>
          </div>
          <div style={{ padding: '0 2px' }}>
            <GoToLastPage>
              {(props) => (
                <button
                  style={{
                    backgroundColor: '#357edd',
                    border: 'none',
                    borderRadius: '4px',
                    color: '#ffffff',
                    cursor: 'pointer',
                    padding: '8px',
                  }}
                  onClick={props.onClick}
                >
                  صفحه اخیر
                </button>
              )}
            </GoToLastPage>
          </div>

          <div className='absolute left-0'>
            <Download>
              {(props) => (
                <button
                  style={{
                    backgroundColor: '#357edd',
                    border: 'none',
                    borderRadius: '4px',
                    color: '#ffffff',
                    cursor: 'pointer',
                    padding: '8px',
                  }}
                  onClick={props.onClick}
                >
                  داونلود
                </button>
              )}
            </Download>
          </div>
        </div>
         <div
          style={{
            borderRight: '1px solid rgba(0, 0, 0, 0.3)',
            overflow: 'scroll',
            width: '100%',
            height: '200px',
            display: showThumbnail ? "block":"none"
          }}
        >
          <Thumbnails />
        </div> 

        <Viewer
          fileUrl={link}
          plugins={[getFilePluginInstance, pageNavigationPluginInstance, thumbnailPluginInstance]}
          theme={{ direction: TextDirection.RightToLeft, }}
        />
      </div>
  );
};

export default Books;

