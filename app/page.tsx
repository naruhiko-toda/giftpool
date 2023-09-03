import { LessonCard } from "./components/lessonCard";

const Page = (): JSX.Element => (
  <>
    <h1>レッスン予約</h1>
    <LessonCard
      title={"コーチングレッスン"}
      time={"90"}
      price={"6,000"}
      path={"./images/coaching.png"}
      name={"coaching"}
    />
    <LessonCard
      title={"ES添削レッスン"}
      time={"60"}
      price={"5,000"}
      path={"./images/entry_sheet.png"}
      name={"entrySheet"}
    />
  </>
);
export default Page
