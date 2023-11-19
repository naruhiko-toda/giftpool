import {Lesson} from "../types/lesson";
import {PrismaClient} from "@prisma/client";

export class LessonRepository {
  getLessons = async (): Lesson[] => {
    const prisma = new PrismaClient();
    return prisma.lesson.findMany();
  };
}
