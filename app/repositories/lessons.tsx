import { Lesson } from "../types/lesson";

export class LessonRepository {
  getLessons = (): Lesson[] => {
    return [
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
  };
}
