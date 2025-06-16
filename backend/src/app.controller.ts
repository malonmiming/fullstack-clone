import { Controller, Get,  Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
//import { PrismaClient } from 'generated/prisma';
import { AccessTokenGuard } from './auth/guards/access-token.guard';
import { Request } from 'express';
import { ApiBearerAuth } from '@nestjs/swagger';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // const prisma = new PrismaClient();

    // prisma.test.create({
    //   data: {
    //     id:'1',
    //   }
    // })
    return this.appService.getHello();
  }
  @Get('user-test')
    @UseGuards(AccessTokenGuard) //AccessTokenGuard를 사용하여 접근을 제한.
    @ApiBearerAuth('access-token') //@ApiBearerAuth('access-token')을 추가하여 Swagger 문서에서 인증이 필요하다는 것을 명시.
    testUser(@Req() req: Request) {
      console.log(req.user);
      return `유저 이메일: ${req.user?.email}`;
    }
}
