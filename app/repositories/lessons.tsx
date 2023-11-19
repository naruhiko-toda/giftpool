import {Lesson} from "../types/lesson";
import prisma from "../../lib/prisma";

export class LessonRepository {
  getLessons = async (): Lesson[] => {
    return prisma.lesson.findMany();
  };
}
