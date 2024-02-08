import { loggerInfo } from "@/lib/logger";
import Container from "@mui/material/Container";
import { Box, Button, CircularProgress, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ProjectRepository } from "@repositories/projectRepository";
import { Project } from "@type/project"

const ProjectPage = async ({params}: { params: { id: string }}) => {
  loggerInfo("Access Project");
  const project: Project = await new ProjectRepository().find(parseInt(params.id))
  return (
    <Container>
      <Box display="flex" justifyContent="space-between" my={4}>
        <Box width="50%">
          <img src="https://via.placeholder.com/150" alt="Profile" style={{borderRadius: '50%'}}/>
          <Box display="flex" justifyContent="flex-start">
            <Typography variant="h6" marginRight={"10px"}>欲しいもの:</Typography>
            <Typography variant="h5">{project.name}</Typography>
          </Box>

          <Button variant="contained" color="primary" style={{marginRight: 8}}>
            Poolする
          </Button>
          <Button variant="outlined">友達にシェア</Button>
        </Box>

        <Paper elevation={3} style={{padding: 16, width: '45%'}}>
          <Typography variant="subtitle1" gutterBottom>
            目標金額
          </Typography>
          <Typography variant="h4">{project.price}</Typography>
          <CircularProgress variant="determinate" value={50} style={{margin: '16px 0'}}/>
        </Paper>
      </Box>
    </Container>
  );
};

export default ProjectPage;
