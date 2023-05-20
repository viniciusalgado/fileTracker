import React, { useEffect, useState } from 'react'
import fs from 'fs'
import path from 'path'
import { Grid } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import FolderIcon from '@mui/icons-material/Folder'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import { Container } from './styles'

const columns = [
  { field: 'icon', headerName: 'Icon', width: 90, renderCell: (params) => {
    const IconComponent = params.row.type === 'folder' ? FolderIcon : InsertDriveFileIcon
    return <IconComponent />
  }},
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'type', headerName: 'Type', width: 150 },
  { field: 'size', headerName: 'Size', width: 110 },
  { field: 'modified', headerName: 'Modified', width: 150 },
]

const FileExplorer = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fs.readdir('C:\\', (err, files) => {
      if (err) {
        console.error(err)
        return
      }

      const arrayOfFiles = files.map((file, index) => {
        const stats = fs.statSync(path.join('C:\\', file))
        const isDirectory = stats.isDirectory()
        return {
          id: index,
          type: isDirectory ? 'folder' : 'file',
          name: file,
          size: isDirectory ? null : `${(stats.size / 1024 / 1024).toFixed(2)} MB`,
          modified: stats.mtime.toISOString().slice(0,10)
        }
      })

      setData(arrayOfFiles)
    })
  }, [])

  return (
    <Container container>
      <Grid item>
        <DataGrid
          rows={data}
          columns={columns}
          onRowDoubleClick={(params) => {
            console.log('Double clicked row:', params)
          }}
        />
      </Grid>
    </Container>
  )
}

export default FileExplorer
