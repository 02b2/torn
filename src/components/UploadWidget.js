import { useRef, useEffect } from "react";
import './hero.css'

const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
      useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
          cloudName: 'dauzhbiu6',
          uploadPreset: 'dzjuw6gr'
        }, function(error, result){
          console.log(result)
        });
      },[])
      return (
        <button onClick={() => widgetRef.current.open()}>Upload</button>
      )
  }

  export default UploadWidget;