// backend/src/posts/posts.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PostsInterface } from './interfaces/post.interface';

@Injectable()
export class PostsService {
  private posts: PostsInterface[] = [
    { userId: 1, id: 1, title: 'Kullanıcı 1 için ilk gönderi' },
    { userId: 1, id: 2, title: 'Kullanıcı 1 için ikinci gönderi' },
    { userId: 2, id: 3, title: 'Kullanıcı 2 için ilk gönderi' },
    { userId: 1, id: 4, title: 'Kullanıcı 1 için üçüncü gönderi' },
    { userId: 3, id: 5, title: 'Kullanıcı 3 için ilk gönderi' },
    { userId: 2, id: 6, title: 'Kullanıcı 2 için ikinci gönderi' },
    { userId: 4, id: 7, title: 'Kullanıcı 4 için ilk gönderi' },
    { userId: 1, id: 8, title: 'Kullanıcı 1 için dördüncü gönderi' },
    { userId: 5, id: 9, title: 'Kullanıcı 5 için ilk gönderi' },
    { userId: 2, id: 10, title: 'Kullanıcı 2 için üçüncü gönderi' },
    { userId: 6, id: 11, title: 'Kullanıcı 6 için ilk gönderi' },
    { userId: 1, id: 12, title: 'Kullanıcı 1 için beşinci gönderi' },
    { userId: 3, id: 13, title: 'Kullanıcı 3 için ikinci gönderi' },
    { userId: 7, id: 14, title: 'Kullanıcı 7 için ilk gönderi' },
    { userId: 2, id: 15, title: 'Kullanıcı 2 için dördüncü gönderi' },
  ];

  findAll(): PostsInterface[] {
    return this.posts;
  }

  findOne(id: number): PostsInterface {
    const post = this.posts.find(post => post.id === id);
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  create(post: Omit<PostsInterface, 'id'>): PostsInterface {
    const newId = this.posts.length > 0 ? Math.max(...this.posts.map(p => p.id)) + 1 : 1;
    const newPost: PostsInterface = { id: newId, ...post };
    this.posts.push(newPost);
    return newPost;
  }

  update(id: number, updatePost: Partial<PostsInterface>): PostsInterface {
    const index = this.posts.findIndex(post => post.id === id);
    if (index === -1) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    this.posts[index] = { ...this.posts[index], ...updatePost, id: id }; 
    return this.posts[index];
  }

  delete(id: number): void {
    const initialLength = this.posts.length;
    this.posts = this.posts.filter(post => post.id !== id);
    if (this.posts.length === initialLength) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
  }

}