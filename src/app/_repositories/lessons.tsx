import prisma from '@/lib/prisma'
import { Lesson } from '@types/lesson'

export class LessonRepository {
  getLessons = async (): Promise<Lesson[]> => {
    return prisma.lesson.findMany()
  }
}