import {Lesson} from "../types/lesson";
import {PrismaClient} from "@prisma/client";

export class LessonRepository {
  getLessons = async (): Promise<Lesson[]> => {
    const prisma = new PrismaClient();
    return await prisma.lesson.findMany();
  };
}
