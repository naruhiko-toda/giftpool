import {LessonCard} from "./components/lessonCard";
import {LessonRepository} from "./repositories/lessons";
import {Lesson} from "./types/lesson";

const Page = async (): Promise<JSX.Element> => {
  const lessons: Lesson[] = await new LessonRepository().getLessons();
  return (
    <>
      <h1>レッスン予約</h1>
      {lessons.map((lesson: Lesson) => (
        <LessonCard
          key={lesson.id}
          title={lesson.title}
          time={lesson.time}
          price={lesson.price}
          path={lesson.path}
          name={lesson.name}
          id={lesson.id}/>
      ))}
    </>
  );
};
export default Page;
