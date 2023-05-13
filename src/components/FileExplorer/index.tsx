import React, { useState } from 'react'
import { Box, Grid } from '@mui/material'
import FileItem from 'components/FileItem'

const sampleData = [
  { type: 'folder', name: 'Documents', size: null, modified: '2023-05-07' },
  { type: 'folder', name: 'Images', size: null, modified: '2023-05-02' },
  { type: 'file', name: 'file1.txt', size: '1.2 MB', modified: '2023-05-05' },
  { type: 'file', name: 'file2.pdf', size: '2.5 MB', modified: '2023-05-06' },
  { type: 'folder', name: 'Documents', size: null, modified: '2023-05-07' },
  { type: 'folder', name: 'Images', size: null, modified: '2023-05-02' },
  { type: 'file', name: 'file1.txt', size: '1.2 MB', modified: '2023-05-05' },
  { type: 'file', name: 'file2.pdf', size: '2.5 MB', modified: '2023-05-06' },
]

const FileExplorer: React.FC = () => {
  const [viewType, setViewType] = useState('details')

  return (
    <Box>
      <Grid container spacing={2}>
        {sampleData.map((item) => (
          <Grid
            item
            xs={12}
            sm={viewType === 'details' ? 12 : 6}
            md={viewType === 'largeIcons' ? 4 : 6}
          >
            <FileItem item={item} viewType={viewType} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default FileExplorer
