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
    @UseGuards(AccessTokenGuard)
    @ApiBearerAuth('access-token')
    testUser(@Req() req: Request) {
      console.log("req.user::", req.user);
      if(req.statusCode === 401) {
         console.log("error::", req.user);
         alert("error");
      }
      return 'test completed';
    }
}
