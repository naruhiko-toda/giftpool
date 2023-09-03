import { LessonCard } from "./components/lessonCard";
import { Lesson } from "./types/lesson";

const Page = (): JSX.Element => {
  const lessons: Lesson[] = [
    {
      title: "コーチングレッスン",
      time: 90,
      price: 6000,
      path: "coaching.png",
      name: "coaching",
    },
    {
      title: "ES添削レッスン",
      time: 60,
      price: 5000,
      path: "entry_sheet.png",
      name: "entrySheet",
    },
  ];
  return (
    <>
      <h1>レッスン予約</h1>
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.name}
          title={lesson.title}
          time={lesson.time}
          price={lesson.price}
          path={lesson.path}
          name={lesson.name}
        />
      ))}
    </>
  );
};
export default Page;
