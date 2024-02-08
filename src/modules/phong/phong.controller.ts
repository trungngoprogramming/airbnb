import { Body, Controller, Delete, Get, Post, Put, Query, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { ApiBearerAuth, ApiConsumes, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { PhongService } from "./phong.service";
import { RoleGuard } from "libs/share/src/core/guards/role.guard";
import { JwtAuthGuard } from "libs/share/src/core/guards/jwt-auth.guard";
import { ApiErrorDocs } from "libs/share/src/core/decorators/swagger-error-docs.decorator";
import { FileInterceptor } from "@nestjs/platform-express";
import { Errors } from "libs/share/src/core/constants/error.constant";
import { ImgValidationPipe } from "libs/share/src/core/pipes/file-validation.pipe";
import { CreatePhongResDto } from "./dtos/create-phong-res.dto";
import { CreatePhongReqDto } from "./dtos/create-phong-req.dto";
import { plainToInstance } from "class-transformer";
import { ListPhongReqDto } from "./dtos/list-phong-req.dto";
import { ListPhongResDto } from "./dtos/list-phong-res.dto";
import { DetailPhongResDto } from "./dtos/detail-phong-res.dto";
import { DetailPhongReqDto } from "./dtos/detail-phong-req.dto";
import { DeletePhongReqDto } from "./dtos/delete-phong-req.dto";
import { DeletePhongResDto } from "./dtos/delete-phong-res.dto";
import { UploadHinhAnhPhongReqDto } from "./dtos/upload-hinh-anh-phong-req.dto";
import { UploadHinhAnhPhongResDto } from "./dtos/upload-hinh-anh-phong-res.dto";

@ApiTags('Phong')
@Controller('phong')
export class PhongController {
  constructor(private readonly phongService: PhongService) { }

  @Post()
  @UseGuards(JwtAuthGuard, new RoleGuard(['admin']))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'API tạo phòng',
    description: 'API tạo phòng',
  })
  @ApiCreatedResponse({ type: CreatePhongResDto })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('hinhAnh'))
  @ApiErrorDocs({
    exclude: ['notFound'],
    badRequestTarget: [CreatePhongReqDto],
    badRequestFromService: [Errors.Common.imgMaxSize(5), Errors.Common.imgNotType]
  })
  async create(
    @Body() createPhongReqDto: CreatePhongReqDto,
    @UploadedFile(ImgValidationPipe) hinhAnh: string,
  ): Promise<CreatePhongResDto> {
    createPhongReqDto.hinhAnh = hinhAnh;
    const viTri = await this.phongService.create(createPhongReqDto);

    return plainToInstance(CreatePhongResDto, viTri);
  }

  @Get()
  @ApiOperation({
    summary: 'API danh sách phòng',
    description: 'API danh sách phòng',
  })
  @ApiOkResponse({ type: ListPhongResDto })
  @ApiErrorDocs({
    exclude: ['notFound', 'forbidden', 'unauthorized'],
    badRequestTarget: [ListPhongReqDto]
  })
  async list(
    @Query() params: ListPhongReqDto,
  ): Promise<ListPhongResDto> {
    const listViTri = await this.phongService.list(params);

    return plainToInstance(ListPhongResDto, listViTri);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'API chi tiết phòng',
    description: 'API chi tiết phòng',
  })
  @ApiOkResponse({ type: DetailPhongResDto })
  @ApiErrorDocs({
    exclude: ['forbidden', 'unauthorized'],
    notFoundTarget: ['Phong'],
    badRequestTarget: [DetailPhongReqDto]
  })
  async detail(@Query() params: DetailPhongReqDto): Promise<DetailPhongResDto> {
    const phong = await this.phongService.detail(params.id);

    return plainToInstance(DetailPhongResDto, phong);
  }

  @Put(':id/upload-hinh-anh')
  @UseGuards(JwtAuthGuard, new RoleGuard(['admin']))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'API cập nhật hình ảnh phòng',
    description: 'API cập nhật hình ảnh phòng',
  })
  @ApiOkResponse({ type: UploadHinhAnhPhongResDto })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('hinhAnh'))
  @ApiErrorDocs({
    notFoundTarget: ['Phong'],
    badRequestTarget: [DetailPhongReqDto, UploadHinhAnhPhongReqDto],
    badRequestFromService: [Errors.Common.imgMaxSize(5), Errors.Common.imgNotType]
  })
  async uploadHinhAnh(
    @Query() params: DetailPhongReqDto,
    @Body() uploadHinhAnhPhongReqDto: UploadHinhAnhPhongReqDto,
    @UploadedFile(ImgValidationPipe) hinhAnh: string
  ): Promise<UploadHinhAnhPhongResDto> {
    uploadHinhAnhPhongReqDto.hinhAnh = hinhAnh;
    const result = await this.phongService.updateImg(params.id, uploadHinhAnhPhongReqDto);

    return plainToInstance(UploadHinhAnhPhongResDto, result);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, new RoleGuard(['admin']))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'API xoá phòng',
    description: 'API xoá phòng',
  })
  @ApiOkResponse({ type: DeletePhongResDto })
  @ApiErrorDocs({
    notFoundTarget: ['ViTri'],
    badRequestTarget: [DeletePhongReqDto]
  })
  async delete(@Query() params: DeletePhongReqDto): Promise<DeletePhongResDto> {
    return await this.phongService.delete(params.id);
  }


}
