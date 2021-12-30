import { Injectable, NotFoundException } from '@nestjs/common';
import { HomePost } from './entities/homePost.entity';

@Injectable()
export class PostsService {
  private posts: HomePost[] = [];

  getAll(): HomePost[] {
    return this.posts;
  }

  getOne(id: string): HomePost {
    const post = this.posts.find(post => post.id === +id);
    if (!post) {
      throw new NotFoundException(`post with ID ${id} not found.`);
    }
    return post;
  }

  deleteOne(id: string) {
    this.getOne(id);
    this.posts = this.posts.filter(post => post.id !== +id);
  }

  create(postData) {
    this.posts.push({
      id: this.posts.length + 1,
      ...postData,
    });
  }

  update(id: string, updateData) {
    const post = this.getOne(id);
    this.deleteOne(id);
    this.posts.push({ ...post, ...updateData });
  }
}