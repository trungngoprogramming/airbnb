import { Body, Controller, Delete, Get, Post, Put, Query, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { DatPhongService } from "./dat-phong.service";
import { JwtAuthGuard } from "libs/share/src/core/guards/jwt-auth.guard";
import { ApiErrorDocs } from "libs/share/src/core/decorators/swagger-error-docs.decorator";
import { plainToInstance } from "class-transformer";
import { CreateDatPhongReqDto } from "./dtos/create-dat-phong-req.dto";
import { CreateDatPhongResDto } from "./dtos/create-dat-phong-res.dto";
import { ListDatPhongResDto } from "./dtos/list-dat-phong-res.dto";
import { ListDatPhongReqDto } from "./dtos/list-dat-phong-req.dto";
import { DetailDatPhongReqDto } from "./dtos/detail-dat-phong-req.dto";
import { DetailDatPhongResDto } from "./dtos/detail-dat-phong-res.dto";
import { UpdateDatPhongResDto } from "./dtos/update-dat-phong-res.dto";
import { UpdateDatPhongReqDto } from "./dtos/update-dat-phong-req.dto";
import { RoleGuard } from "libs/share/src/core/guards/role.guard";
import { DeleteDatPhongResDto } from "./dtos/delete-dat-phong-res.dto";
import { DeleteDatPhongReqDto } from "./dtos/delete-dat-phong-req.dto";

@ApiTags('DatPhong')
@Controller('dat-phong')
export class DatPhongController {
  constructor(
    private datPhongService: DatPhongService,
  ) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'API đặt phòng',
    description: 'API đặt phòng',
  })
  @ApiCreatedResponse({ type: CreateDatPhongResDto })
  @ApiErrorDocs({
    exclude: ['notFound'],
    badRequestTarget: [CreateDatPhongReqDto],
  })
  async create(
    @Body() createDatPhongReqDto: CreateDatPhongReqDto,
  ): Promise<CreateDatPhongResDto> {
    const viTri = await this.datPhongService.create(createDatPhongReqDto);

    return plainToInstance(CreateDatPhongResDto, viTri);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'API danh sách đặt phòng',
    description: 'API danh sách đặt phòng',
  })
  @ApiOkResponse({ type: ListDatPhongResDto })
  @ApiErrorDocs({
    exclude: ['notFound'],
    badRequestTarget: [ListDatPhongReqDto]
  })
  async list(
    @Query() params: ListDatPhongReqDto,
  ): Promise<ListDatPhongResDto> {
    const result = await this.datPhongService.list(params);

    return plainToInstance(ListDatPhongResDto, result);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'API chi tiết đặt phòng',
    description: 'API chi tiết đặt phòng',
  })
  @ApiOkResponse({ type: DetailDatPhongResDto })
  @ApiErrorDocs({
    exclude: ['forbidden', 'unauthorized'],
    notFoundTarget: ['DatPhong'],
    badRequestTarget: [DetailDatPhongReqDto]
  })
  async detail(@Query() params: DetailDatPhongReqDto): Promise<DetailDatPhongResDto> {
    const result = await this.datPhongService.detail(params.id);

    return plainToInstance(DetailDatPhongResDto, result);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'API cập nhật đặt phòng',
    description: 'API cập nhật đặt phòng',
  })
  @ApiOkResponse({ type: UpdateDatPhongResDto })
  @ApiErrorDocs({
    notFoundTarget: ['DatPhong'],
    badRequestTarget: [DetailDatPhongReqDto, UpdateDatPhongReqDto],
  })
  async update(
    @Query() params: DetailDatPhongReqDto,
    @Body() updateDatPhongReqDto: UpdateDatPhongReqDto,
  ): Promise<UpdateDatPhongResDto> {
    const result = await this.datPhongService.update(params.id, updateDatPhongReqDto);

    return plainToInstance(UpdateDatPhongResDto, result);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, new RoleGuard(['admin']))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'API xoá đặt phòng',
    description: 'API xoá đặt phòng',
  })
  @ApiOkResponse({ type: DeleteDatPhongResDto })
  @ApiErrorDocs({
    notFoundTarget: ['ViTri'],
    badRequestTarget: [DeleteDatPhongReqDto]
  })
  async delete(@Query() params: DeleteDatPhongReqDto): Promise<DeleteDatPhongResDto> {
    return await this.datPhongService.delete(params.id);
  }
}
