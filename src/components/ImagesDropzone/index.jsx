import React from 'react'
import { Box } from '@mui/material'
import { useDropzone } from "react-dropzone"
import ImagesList from './ImagesList'
const ImagesDropzone = ({ validate, files, setFiles }) => {

  const onDrop = React.useCallback(async (acceptedFiles) => {
    acceptedFiles.forEach(async (acceptedFile) => {
      setFiles(old => [...old, acceptedFile])
    })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
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
      <Box padding="1em" sx={{ border: "1px dashed red" }}  {...getRootProps()} >
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Clicker pour ajouter des fichier</p> :
            <p>Glisser / déposer ou cliquer pour ajouter des fichiers</p>
        }
      </Box>
      <ImagesList files={files} setFiles={setFiles} />
    </Box>
  )
}

export default ImagesDropzone