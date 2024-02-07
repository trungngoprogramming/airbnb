import { Body, Controller, Delete, Get, Post, Put, Query, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { ApiErrorDocs } from "libs/share/src/core/decorators/swagger-error-docs.decorator";
import { BinhLuanService } from "./binh-luan.service";
import { plainToInstance } from "class-transformer";
import { JwtAuthGuard } from "libs/share/src/core/guards/jwt-auth.guard";
import { CreateBinhLuanReqDto } from "./dtos/create-binh-luan-req.dto";
import { CreateBinhLuanResDto } from "./dtos/create-binh-luan-res.dto";
import { ListBinhLuanResDto } from "./dtos/list-binh-luan-res.dto";
import { ListBinhLuanReqDto } from "./dtos/list-binh-luan-req.dto";
import { UpdateBinhLuanResDto } from "./dtos/update-binh-luan-res.dto";
import { IdBinhLuanReqDto, UpdateBinhLuanReqDto } from "./dtos/update-binh-luan-req.dto";
import { DeleteBinhLuanResDto } from "./dtos/delete-nguoi-dung-res.dto";
import { DeleteBinhLuanReqDto } from "./dtos/delete-nguoi-dung-req.dto";

@ApiTags('BinhLuan')
@Controller('binh-luan')
export class BinhLuanController {
  constructor(private readonly binhLuanService: BinhLuanService) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'API tạo bình luận',
    description: 'API tạo bình luận',
  })
  @ApiCreatedResponse({ type: CreateBinhLuanResDto })
  @ApiErrorDocs({
    exclude: ['notFound'],
    badRequestTarget: [CreateBinhLuanReqDto],
  })
  async create(
    @Body() createBinhLuanReqDto: CreateBinhLuanReqDto,
  ): Promise<CreateBinhLuanResDto> {
    const result = await this.binhLuanService.create(createBinhLuanReqDto);

    return plainToInstance(CreateBinhLuanResDto, result);
  }

  @Get()
  @ApiOperation({
    summary: 'API danh sách bình luận',
    description: 'API danh sách vị trí',
  })
  @ApiOkResponse({ type: ListBinhLuanResDto })
  @ApiErrorDocs({
    exclude: ['notFound', 'forbidden', 'unauthorized'],
    badRequestTarget: [ListBinhLuanReqDto]
  })
  async list(
    @Query() params: ListBinhLuanReqDto,
  ): Promise<ListBinhLuanResDto> {
    const result = await this.binhLuanService.list(params);

    return plainToInstance(ListBinhLuanResDto, result);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'API cập nhật bình luận',
    description: 'API cập nhật bình luận',
  })
  @ApiOkResponse({ type: UpdateBinhLuanResDto })
  @ApiErrorDocs({
    notFoundTarget: ['ViTri'],
    badRequestTarget: [IdBinhLuanReqDto, UpdateBinhLuanReqDto],
  })
  async update(
    @Query() params: IdBinhLuanReqDto,
    @Body() updateBinhLuanReqDto: UpdateBinhLuanReqDto,
  ): Promise<UpdateBinhLuanResDto> {
    const result = await this.binhLuanService.update(params.id, updateBinhLuanReqDto);

    return plainToInstance(UpdateBinhLuanResDto, result);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'API xoá bình luận',
    description: 'API xoá bình luận',
  })
  @ApiOkResponse({ type: DeleteBinhLuanResDto })
  @ApiErrorDocs({
    notFoundTarget: ['ViTri'],
    badRequestTarget: [DeleteBinhLuanReqDto]
  })
  async delete(@Query() params: DeleteBinhLuanReqDto): Promise<DeleteBinhLuanResDto> {
    return await this.binhLuanService.delete(params.id);
  }
}
