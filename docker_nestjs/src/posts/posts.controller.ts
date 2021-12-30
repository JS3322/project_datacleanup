import {
    Controller,
    Get,
    Param,
    Post,
    Delete,
    Patch,
    Body,
    Query,
  } from '@nestjs/common';
  import { PostsService } from './posts.service';
import { HomePost } from './entities/homePost.entity';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

  @Get()
  getAll(): HomePost[] {
    return this.postsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') postId: string): HomePost {
    return this.postsService.getOne(postId);
  }

  @Post()
  create(@Body() postData) {
    return this.postsService.create(postData);
  }

  @Delete(':id')
  remove(@Param('id') postId: string) {
    return this.postsService.deleteOne(postId);
  }

  @Patch(':id')
  patch(@Param('id') postId: string, @Body() updateData) {
    return this.postsService.update(postId, updateData);
  }
}