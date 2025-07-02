import { Section } from './section';
import { Lecture } from './lecture';
import { CourseCategory } from './course_category';
import { CourseEnrollment } from './course_enrollment';
import { User } from './user';
import { CourseReview } from './course_review';
import { CourseQuestion } from './course_question';
import { CourseStatus } from '@prisma/client';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Course {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  slug: string;

  @ApiProperty({ type: String })
  title: string;

  @ApiPropertyOptional({ type: String })
  shortDescription?: string;

  @ApiPropertyOptional({ type: String })
  description?: string;

  @ApiPropertyOptional({ type: String })
  thumbnailUrl?: string;

  @ApiProperty({ type: Number })
  price: number;

  @ApiPropertyOptional({ type: Number })
  discountPrice?: number;

  @ApiProperty({ type: String })
  level: string = 'BEGINEER';

  @ApiProperty({ enum: CourseStatus, enumName: 'CourseStatus' })
  status: CourseStatus = CourseStatus.DRAFT;

  @ApiProperty({ type: String })
  instructorId: string;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiProperty({ isArray: true, type: () => Section })
  sections: Section[];

  @ApiProperty({ isArray: true, type: () => Lecture })
  lectures: Lecture[];

  @ApiProperty({ isArray: true, type: () => CourseCategory })
  categories: CourseCategory[];

  @ApiProperty({ isArray: true, type: () => CourseEnrollment })
  enrollments: CourseEnrollment[];

  @ApiProperty({ type: () => User })
  instructor: User;

  @ApiProperty({ isArray: true, type: () => CourseReview })
  reviews: CourseReview[];

  @ApiProperty({ isArray: true, type: () => CourseQuestion })
  questions: CourseQuestion[];
}
