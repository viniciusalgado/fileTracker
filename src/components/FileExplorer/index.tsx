import React from 'react'
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

const sampleData = [
  { id: 1, type: 'folder', name: 'Documents', size: null, modified: '2023-05-07' },
  { id: 2, type: 'folder', name: 'Images', size: null, modified: '2023-05-02' },
  { id: 3, type: 'file', name: 'file1.txt', size: '1.2 MB', modified: '2023-05-05' },
  // Add the rest of your data here...
]

const FileExplorer = () => {
  return (
    <Container container>
      <Grid item>
        <DataGrid
          rows={sampleData}
          columns={columns}
          pageSize={5}
          onRowDoubleClick={(params) => {
            console.log('Double clicked row:', params)
          }}
        />
      </Grid>
    </Container>
  )
}

export default FileExplorer
