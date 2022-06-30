import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'

export default function DemoTable() {
  const navigate = useNavigate()

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/')}
      >
        Go back to login
      </Button>
    </>
  )
}
