import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'

interface FileItemData {
  type: string;
  name: string;
  size: string | null;
  modified: string;
}

interface FileItemProps {
  item: FileItemData;
  viewType: string;
}

const FileItem: React.FC<FileItemProps> = ({ item, viewType }) => {
  const IconComponent =
    item.type === 'folder' ? FolderIcon : InsertDriveFileIcon

  return (
    <Button
      fullWidth
      sx={{
        display: 'flex',
        flexDirection: viewType === 'details' ? 'row' : 'column',
        justifyContent: viewType === 'details' ? 'flex-start' : 'center',
        alignItems: 'center',
        padding: viewType === 'details' ? '8px' : '16px',
        textAlign: viewType === 'details' ? 'left' : 'center',
      }}
    >
      <IconComponent fontSize={viewType === 'largeIcons' ? 'large' : 'small'} />
      <Box sx={{ marginLeft: viewType === 'details' ? '8px' : 0 }}>
        <Typography>{item.name}</Typography>
        {viewType === 'details' && (
          <>
            <Typography variant="body2">{item.type}</Typography>
            <Typography variant="body2">{item.size}</Typography>
            <Typography variant="body2">{item.modified}</Typography>
          </>
        )}
      </Box>
    </Button>
  )
}

export default FileItem
