import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Product() {
  return (
    <Box sx={{ display: "flex" }}>
      <Card sx={{ maxWidth: 345, mr: 2 }}>
        <CardMedia
          sx={{ height: 400 }}
          image="https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg"
          title="green iguana"
        />
        <CardContent sx={{ height: 160 }}>
          <Typography gutterBottom variant="h5" component="div">
            Iphone
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The iPhone is a smartphone made by Apple that combines a computer,
            iPod, digital camera and cellular phone into one device with a
            touchscreen interface.
          </Typography>
        </CardContent>
        <CardActions>
          <Box sx={{ display: "flex", width: "100%", justifyContent: "end" }}>
            <Button size="small">Add to cart</Button>
          </Box>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 400 }}
          image="https://cdn.tgdd.vn/Products/Images/42/322096/samsung-galaxy-a55-5g-blue-thumbnew-600x600.jpg"
          title="green iguana"
        />
        <CardContent sx={{ height: 160 }}>
          <Typography gutterBottom variant="h5" component="div">
            Samsung
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Samsung Group is a South Korean multinational manufacturing
            conglomerate headquartered in Samsung Digital City, Suwon, South
            Korea.
          </Typography>
        </CardContent>
        <CardActions>
          <Box sx={{ display: "flex", width: "100%", justifyContent: "end" }}>
            <Button size="small">Add to cart</Button>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
}
