import prisma from '../../lib/prisma'
import { Lesson } from '../types/lesson'

export class LessonRepository {
  getLessons = async (): Lesson[] => {
    return prisma.lesson.findMany()
  }
}
