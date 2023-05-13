import { Drawer, ListItemButton, ListItemIcon } from '@mui/material'
import { tertiaryColor, quinaryColor } from 'theme/moreColors'
import { styled } from '@mui/system'

const DRAWER_WIDTH = 240

export const SideBar = styled(Drawer)(() => ({
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    backgroundColor: tertiaryColor,
    color: quinaryColor,
  },
}))

export const SideBarButton = styled(ListItemButton)`
  border-radius: 5px;
  margin: 5px;
  ${({ theme }) => `
    border-color: ${theme.palette.primary.main};
  `}
  ${`background-color: ${tertiaryColor};`}
  &:hover {
    ${({ theme }) => `
      background-color: ${theme.palette.primary.main};
    `}
  }
`

export const SideBarIcon = styled(ListItemIcon)`
  > svg {
    color: #FFFFFF;
  }
`
