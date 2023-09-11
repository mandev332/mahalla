import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { FuqarolarService } from './fuqarolar.service';
import { CreateFuqarolarDto } from './dto/create-fuqarolar.dto';
import { UpdateFuqarolarDto } from './dto/update-fuqarolar.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Fuqaro')
@Controller('fuqarolar')
export class FuqarolarController {
  constructor(private readonly fuqarolarService: FuqarolarService) {}

  @Post()
  @UsePipes(ValidationPipe)
  @ApiBody({ type: CreateFuqarolarDto })
  create(@Body() createFuqarolarDto: CreateFuqarolarDto) {
    return this.fuqarolarService.create(createFuqarolarDto);
  }
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.fuqarolarService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fuqarolarService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFuqarolarDto: UpdateFuqarolarDto,
  ) {
    return this.fuqarolarService.update(id, updateFuqarolarDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fuqarolarService.remove(id);
  }
}
