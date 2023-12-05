import { db } from '@db/db'
import { posts } from '@db/schema'
import { Post } from '@type/post'

export class PostRepository {
  getPosts = async (): Promise<Post[]> => {
    return db.select().from(posts)
  }
}
