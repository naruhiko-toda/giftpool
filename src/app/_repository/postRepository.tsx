import prisma from '@/lib/prisma'
import { Post } from '@type/post'

export class PostRepository {
  getPosts = async (): Promise<Post[]> => {
    return prisma.post.findMany()
  }
}
