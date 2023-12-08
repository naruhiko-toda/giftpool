import { loggerInfo } from "@/lib/logger";
import { ProjectForm } from "@components/projectForm";
import React, { Suspense } from "react";

const Home = async (): Promise<React.JSX.Element> => {
  loggerInfo("Access Home");
  return (
    <>
      <Suspense>
        <ProjectForm />
      </Suspense>
    </>
  );
};
export default Home;
