import {Card, CardContent, CardMedia, Divider, Typography} from "@mui/material";
import {Box} from "@mui/system";

export const LessonCard = ({ title, time, price, path, name }): JSX.Element => (
  <Card data-testid={`lessonCard_${name}`}>
    <CardMedia component="img" image={`./images/${path}`} alt={name} />
    <Divider />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2" color="text.secondary">
          {time}分/1回
        </Typography>
        <Typography variant="h6" color="#F06292">
          {new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(price)}~
        </Typography>
      </Box>
    </CardContent>
  </Card>
);