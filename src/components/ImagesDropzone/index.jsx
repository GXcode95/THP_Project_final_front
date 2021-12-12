import React from 'react'
import {Box, Button} from '@mui/material'
import {useDropzone} from "react-dropzone"
import ImagesList from './ImagesList'
const ImagesDropzone = ({validate, files, setFiles}) => {

  const onDrop = React.useCallback(async (acceptedFiles) => {
    acceptedFiles.forEach(async (acceptedFile) => {
      setFiles(old => [...old, acceptedFile])
    })

  }, []);
  const {getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accepts: "images/*"
  })




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
    </Box>
  )
}

export default ImagesDropzone