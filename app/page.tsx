import {Card, CardContent, CardMedia, Divider, Typography} from "@mui/material";
import {Box} from "@mui/system";

export default function Page() {
  return (
    <>
      <h1>レッスン予約</h1>
      <Card data-testid={"lessonCard_coaching"}>
        <CardMedia
          component="img"
          image="./images/coaching.png"
          alt="Coaching"
        />
        <Divider />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">コーチングレッスン</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" color="text.secondary">
              90分/1回
            </Typography>
            <Typography variant="h6" color="#F06292">
              ￥6,000~
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Card data-testid={"lessonCard_entrySheet"}>
        <CardMedia
          component="img"
          image="./images/entry_sheet.png"
          alt="Coaching"
        />
        <Divider />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">ES添削レッスン</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" color="text.secondary">
              60分/1回
            </Typography>
            <Typography variant="h6" color="#F06292">
              ￥5,000~
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
