import React from 'react'
import {Box, Button} from '@mui/material'
import {useDropzone} from "react-dropzone"
import ImagesList from './ImagesList'
const ImagesDropzone = () => {
  const [files,setFiles] = React.useState([])

  const onDrop = React.useCallback(async (acceptedFiles) => {
    acceptedFiles.forEach(async (acceptedFile) => {
      setFiles(old => [...old, acceptedFile])
    })

  }, []);
  const {getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accepts: "images/*"
  })

  const handleUpload = () => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`

    files.forEach(
      async (acceptedFile) => {
        console.log("accpet", acceptedFile)
        const formData = new FormData();
        formData.append("file", acceptedFile);
        formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET)
  
        const response = await fetch(url, {
          method: "post",
          body: formData,
        })
        const data = await response.json()
        console.log(data)
      }
    )
  }


  return (
    <Box 
      display="flex" 
      flexDirection="column"    
      alignItems="center"
      padding="1em"
    >
      <Box padding="1em" sx={{border: "1px dashed red"}}  {...getRootProps()} >
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </Box>
      <ImagesList files={files} setFiles={setFiles} />
      <Button onClick={handleUpload}>Valider</Button>
    </Box>
  )
}

export default ImagesDropzone