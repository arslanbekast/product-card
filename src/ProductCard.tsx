import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import styles from './ProductCard.module.css';

interface Props {
    title: string;
    origin: string;
    price: number;
    currency: 'RUB' | 'USD' | 'EUR';
    imageUrl: string;
}

export const ProductCard = ({ title, origin, price, currency, imageUrl }: Props) => {
    const formattedPrice = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
    }).format(price / 100);

    return (
        <Card className={styles.card}>
            <CardMedia
                component="img"
                image={imageUrl}
                alt={title}
                sx={{width: '160px', height: '160px', objectFit: 'cover', padding: '8px'}}
            />
            <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">{title}</Typography>
                <Typography color="text.secondary">Страна: {origin}</Typography>
                <Typography variant="h6" color="primary" mt={1}>
                    {formattedPrice}
                </Typography>
            </CardContent>
        </Card>
    );
};
