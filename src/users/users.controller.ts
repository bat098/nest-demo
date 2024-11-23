import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  // GET /USERS
  @Get()
  // eslint-disable-next-line
  findAll(@Query('role') role?: 'INTERN' | 'ADMIN') {
    return [];
  }

  //   GET /USERS/:ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  //   POST /USERS
  @Post()
  create(@Body() user: object) {
    return user;
  }

  // Patch /USERS/:ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: object) {
    return { id, ...userUpdate };
  }

  //   DELETE /USERS/:ID
  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
