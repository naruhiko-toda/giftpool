import { LessonCard } from "./components/lessonCard";

const Page = (): JSX.Element => (
  <>
    <h1>レッスン予約</h1>
    <LessonCard
      title={"コーチングレッスン"}
      time={90}
      price={6000}
      path={"coaching.png"}
      name={"coaching"}
    />
    <LessonCard
      title={"ES添削レッスン"}
      time={60}
      price={5000}
      path={"entry_sheet.png"}
      name={"entrySheet"}
    />
  </>
);
export default Page
