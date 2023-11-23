import prisma from '@/lib/prisma'
import { Lesson } from '@type/lesson'

export class LessonRepository {
  getLessons = async (): Promise<Lesson[]> => {
    return prisma.lesson.findMany()
  }
}
