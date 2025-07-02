// TODO: 테스트 시간에 nestjs/swagger로 수정하도록 설명하기
import { PartialType } from '@nestjs/swagger';
import { CreateCourseDto } from './create-course.dto';
import { CourseStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  @ApiProperty({ description: '코스 상태', required: false, enum: CourseStatus })
  status?: CourseStatus;
  
  @ApiProperty({ description: '코스 카테고리 ID 목록', required: false })
  categoryIds?: string[];
}