import { Controller, Get, Post, Param, Body, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {

  constructor(
    private readonly userService: UserService,
  ) { }

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.userService.getById(id);
  }

  @Post()
  create(@Body() userDto: UserDto) {
    return this.userService.create(userDto);
  }

  @Post('/login')
  login(@Body() userDto: UserDto) {
    return this.userService.login(userDto);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() userDto: UserDto) {
    return this.userService.update(id, userDto);
  }

}
