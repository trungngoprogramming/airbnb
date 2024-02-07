import { Body, Controller, Delete, Get, Post, Put, Query, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { ApiBearerAuth, ApiConsumes, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { plainToInstance } from "class-transformer";
import { ApiErrorDocs } from "libs/share/src/core/decorators/swagger-error-docs.decorator";
import { CreateViTriResDto } from "./dtos/create-vi-tri-res.dto";
import { CreateViTriReqDto } from "./dtos/create-vi-tri-req.dto";
import { ViTriService } from "./vi-tri.service";
import { JwtAuthGuard } from "libs/share/src/core/guards/jwt-auth.guard";
import { ListViTriResDto } from "./dtos/list-vi-tri-res.dto";
import { ListViTriReqDto } from "./dtos/list-vi-tri-req.dto";
import { DetailViTriResDto } from "./dtos/detail-vi-tri-res.dto";
import { DetailViTriReqDto } from "./dtos/detail-vi-tri-req.dto";
import { UpdateViTriResDto } from "./dtos/update-vi-tri-res.dto";
import { UpdateViTriReqDto } from "./dtos/update-vi-tri-req.dto";
import { DeleteViTriResDto } from "./dtos/delete-vi-tri-res.dto";
import { DeleteViTriReqDto } from "./dtos/delete-vi-tri-req.dto";
import { RoleGuard } from "libs/share/src/core/guards/role.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { Errors } from "libs/share/src/core/constants/error.constant";
import { ImgValidationPipe } from "libs/share/src/core/pipes/file-validation.pipe";
import { UploadViTriHinhAnhResDto } from "./dtos/upload-vi-tri-hinh-anh-res.dto";
import { UploadViTriHinhAnhReqDto } from "./dtos/upload-vi-tri-hinh-anh-req.dto";

@ApiTags('ViTri')
@Controller('vi-tri')
export class ViTriController {
  constructor(private readonly viTriService: ViTriService) { }

  @Post()
  @UseGuards(JwtAuthGuard, new RoleGuard(['admin']))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'API tạo vị trí',
    description: 'API tạo vị trí',
  })
  @ApiCreatedResponse({ type: CreateViTriResDto })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('hinhAnh'))
  @ApiErrorDocs({
    exclude: ['notFound'],
    badRequestTarget: [CreateViTriReqDto],
    badRequestFromService: [Errors.Common.imgMaxSize(5), Errors.Common.imgNotType]
  })
  async create(
    @Body() createViTriReqDto: CreateViTriReqDto,
    @UploadedFile(ImgValidationPipe) hinhAnh: string,
  ): Promise<CreateViTriResDto> {
    createViTriReqDto.hinhAnh = hinhAnh;
    const viTri = await this.viTriService.create(createViTriReqDto);

    return plainToInstance(CreateViTriResDto, viTri);
  }

  @Get()
  @ApiOperation({
    summary: 'API danh sách vị trí',
    description: 'API danh sách vị trí',
  })
  @ApiOkResponse({ type: ListViTriResDto })
  @ApiErrorDocs({
    exclude: ['notFound', 'forbidden', 'unauthorized'],
    badRequestTarget: [ListViTriReqDto]
  })
  async list(
    @Query() params: ListViTriReqDto,
  ): Promise<ListViTriResDto> {
    const result = await this.viTriService.list(params);

    return plainToInstance(ListViTriResDto, result);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'API chi tiết vị trí',
    description: 'API chi tiết vị trí',
  })
  @ApiOkResponse({ type: DetailViTriResDto })
  @ApiErrorDocs({
    exclude: ['forbidden', 'unauthorized'],
    notFoundTarget: ['ViTri'],
    badRequestTarget: [DetailViTriReqDto]
  })
  async detail(@Query() params: DetailViTriReqDto): Promise<DetailViTriResDto> {
    const result = await this.viTriService.detail(params.id);

    return plainToInstance(DetailViTriResDto, result);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, new RoleGuard(['admin']))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'API cập nhật vị trí',
    description: 'API cập nhật vị trí',
  })
  @ApiOkResponse({ type: UpdateViTriResDto })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('hinhAnh'))
  @ApiErrorDocs({
    notFoundTarget: ['ViTri'],
    badRequestTarget: [DetailViTriReqDto, UpdateViTriReqDto],
    badRequestFromService: [Errors.Common.imgMaxSize(5), Errors.Common.imgNotType]
  })
  async update(
    @Query() params: DetailViTriReqDto,
    @Body() updateViTriReqDto: UpdateViTriReqDto,
    @UploadedFile(ImgValidationPipe) hinhAnh: string,
  ): Promise<UpdateViTriResDto> {
    updateViTriReqDto.hinhAnh = hinhAnh;
    const result = await this.viTriService.update(params.id, updateViTriReqDto);

    return plainToInstance(UpdateViTriReqDto, result);
  }

  @Put(':id/upload-hinh-anh')
  @UseGuards(JwtAuthGuard, new RoleGuard(['admin']))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'API cập nhật vị trí hình ảnh',
    description: 'API cập nhật vị trí hình ảnh',
  })
  @ApiOkResponse({ type: UploadViTriHinhAnhResDto })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('hinhAnh'))
  @ApiErrorDocs({
    notFoundTarget: ['ViTri'],
    badRequestTarget: [DetailViTriReqDto, UploadViTriHinhAnhReqDto],
    badRequestFromService: [Errors.Common.imgMaxSize(5), Errors.Common.imgNotType]
  })
  async uploadHinhAnh(
    @Query() params: DetailViTriReqDto,
    @Body() uploadViTriHinhAnhResDto: UploadViTriHinhAnhReqDto,
    @UploadedFile(ImgValidationPipe) hinhAnh: string
  ): Promise<UploadViTriHinhAnhResDto> {
    uploadViTriHinhAnhResDto.hinhAnh = hinhAnh;
    const result = await this.viTriService.updateImg(params.id, uploadViTriHinhAnhResDto);

    return plainToInstance(UploadViTriHinhAnhResDto, result);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, new RoleGuard(['admin']))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'API xoá vị trí',
    description: 'API xoá vị trí',
  })
  @ApiOkResponse({ type: DeleteViTriResDto })
  @ApiErrorDocs({
    notFoundTarget: ['ViTri'],
    badRequestTarget: [DeleteViTriReqDto]
  })
  async delete(@Query() params: DeleteViTriReqDto): Promise<DeleteViTriResDto> {
    return await this.viTriService.delete(params.id);
  }
}
