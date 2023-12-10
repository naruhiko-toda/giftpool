import { loggerInfo } from "@/lib/logger";
import { ProjectForm } from "@components/projectForm";
import { Container, Typography } from "@mui/material";
import React, { Suspense } from "react";

const Home = async (): Promise<React.JSX.Element> => {
  loggerInfo("Access Home");
  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h1" fontSize={"6vw"}>
          プロジェクトを登録しましょう
        </Typography>
        <Suspense>
          <ProjectForm />
        </Suspense>
      </Container>
    </>
  );
};
export default Home;
