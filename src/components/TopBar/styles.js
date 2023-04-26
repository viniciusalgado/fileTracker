import { Grid, styled } from '@mui/material'

const TopBarGrid = styled(Grid)`
  ${({ theme }) => `
    & .MuiGrid-item {
      padding-top: ${theme.spacing(0)};
      padding-left: ${theme.spacing(1)};
      padding-right: ${theme.spacing(1)};
      padding-bottom: 0;
    }
  `}
  display: flex;
  justify-content: flex-end;
  background-color: #ffffff;
  padding: 1rem;
`

export default TopBarGrid
