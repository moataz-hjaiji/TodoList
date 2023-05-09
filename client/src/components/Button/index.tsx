import  {Button}  from '@mui/material'

import  {ButtonProps}  from './button.type'

const ButtonMui = ({text,variant="contained"}:ButtonProps) => {
  return (
    <Button variant={variant}>{text}</Button>
  )
}

export default ButtonMui