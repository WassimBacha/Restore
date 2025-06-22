
import type { Product } from '../../models/product'
import { Card, CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material'

type Props = {
      product : Product
}

export default function ProductCard ({product}: Props) {
  return (
     <Card
      elevation={3}
      sx={{
        width: { xs: '100%', sm: 280 },
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <CardMedia
        component="img"
        src={product.pictureURL}       // use `src` alias in v7
        alt={product.name}
        sx={{
          aspectRatio: '4/3',
          objectFit: 'cover',          // ensure full coverage
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          sx={{ textTransform: 'uppercase' }}
          variant="subtitle2"
        >
          {product.name}
        </Typography>
        <Typography
            variant="h6"
            sx={{ color: 'secondary.main' }}
          >
            ${(product.price / 100).toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button variant="contained" size="small">
          Add to cart
        </Button>
        <Button variant="outlined" size="small">
          View
        </Button>
      </CardActions>
    </Card>
  )
}

