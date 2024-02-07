import { Body, Controller, Delete, Get, Post, Put, Query, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { ApiBearerAuth, ApiConsumes, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { NguoiDungService } from "./nguoi-dung.service";
import { JwtAuthGuard } from "libs/share/src/core/guards/jwt-auth.guard";
import { RoleGuard } from "libs/share/src/core/guards/role.guard";
import { ApiErrorDocs } from "libs/share/src/core/decorators/swagger-error-docs.decorator";
import { CreateNguoiDungReqDto } from "./dtos/create-nguoi-dung-req.dto";
import { CreateNguoiDungResDto } from "./dtos/create-nguoi-dung-res.dto";
import { plainToInstance } from "class-transformer";
import { Errors } from "libs/share/src/core/constants/error.constant";
import { ListNguoiDungResDto } from "./dtos/list-nguoi-dung-res.dto";
import { ListNguoiDungReqDto } from "./dtos/list-nguoi-dung-req.dto";
import { DetailNguoiDungResDto } from "./dtos/detail-nguoi-dung-res.dto";
import { DetailNguoiDungReqDto } from "./dtos/detail-nguoi-dung-req.dto";
import { UpdateNguoiDungResDto } from "./dtos/update-nguoi-dung-res.dto";
import { UpdateNguoiDungReqDto } from "./dtos/update-nguoi-dung-req.dto";
import { DeleteNguoiDungResDto } from "./dtos/delete-nguoi-dung-res.dto";
import { DeleteNguoiDungReqDto } from "./dtos/delete-nguoi-dung-req.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { ImgValidationPipe } from "libs/share/src/core/pipes/file-validation.pipe";
import { UploadHinhAnhNguoiDungResDto } from "./dtos/upload-hinh-anh-nguoi-dung-res.dto";
import { UploadHinhAnhNguoiDungReqDto } from "./dtos/upload-hinh-anh-nguoi-dung-req.dto";

@ApiTags('NguoiDung')
@Controller('nguoi-dung')
export class NguoiDungController {
  constructor(private readonly nguoiDungService: NguoiDungService) { }

  @Post()
  @UseGuards(JwtAuthGuard, new RoleGuard(['admin']))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'API tạo người dùng',
    description: 'API tạo người dùng',
  })
  @ApiCreatedResponse({ type: CreateNguoiDungResDto })
  @ApiErrorDocs({
    exclude: ['notFound'],
    badRequestTarget: [CreateNguoiDungReqDto],
    badRequestFromService: [Errors.Common.accountExisted],
  })
  async create(@Body() createNguoiDungReqDto: CreateNguoiDungReqDto) {
    const nguoiDung = await this.nguoiDungService.create(createNguoiDungReqDto);

    return plainToInstance(CreateNguoiDungResDto, nguoiDung);
  }

  @Get()
  @ApiOperation({
    summary: 'API danh sách người dùng',
    description: 'API danh sách người dùng',
  })
  @ApiOkResponse({ type: ListNguoiDungResDto })
  @ApiErrorDocs({
    exclude: ['notFound', 'forbidden', 'unauthorized'],
    badRequestTarget: [ListNguoiDungReqDto]
  })
  async list(
    @Query() params: ListNguoiDungReqDto,
  ): Promise<ListNguoiDungResDto> {
    const result = await this.nguoiDungService.list(params);

    return plainToInstance(ListNguoiDungResDto, result);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'API chi tiết người dùng',
    description: 'API chi tiết người dùng',
  })
  @ApiOkResponse({ type: DetailNguoiDungResDto })
  @ApiErrorDocs({
    exclude: ['forbidden', 'unauthorized'],
    notFoundTarget: ['NguoiDung'],
    badRequestTarget: [DetailNguoiDungReqDto]
  })
  async detail(@Query() params: DetailNguoiDungReqDto): Promise<DetailNguoiDungResDto> {
    const result = await this.nguoiDungService.detail(params.id);

    return plainToInstance(DetailNguoiDungResDto, result);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, new RoleGuard(['admin']))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'API cập nhật người dùng',
    description: 'API cập nhật người dùng',
  })
  @ApiOkResponse({ type: UpdateNguoiDungResDto })
  @ApiErrorDocs({
    notFoundTarget: ['NguoiDung'],
    badRequestTarget: [DetailNguoiDungReqDto, UpdateNguoiDungReqDto],
  })
  async update(
    @Query() params: DetailNguoiDungReqDto,
    @Body() updateNguoiDungReqDto: UpdateNguoiDungReqDto,
  ): Promise<UpdateNguoiDungResDto> {
    const result = await this.nguoiDungService.update(params.id, updateNguoiDungReqDto);

    return plainToInstance(UpdateNguoiDungResDto, result);
  }

  @Put(':id/upload-hinh-anh')
  @UseGuards(JwtAuthGuard, new RoleGuard(['admin']))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'API cập nhật hình ảnh người dùng',
    description: 'API cập nhật hình ảnh người dùng',
  })
  @ApiOkResponse({ type: UploadHinhAnhNguoiDungResDto })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('hinhAnh'))
  @ApiErrorDocs({
    notFoundTarget: ['NguoiDung'],
    badRequestTarget: [DetailNguoiDungReqDto, UploadHinhAnhNguoiDungReqDto],
    badRequestFromService: [Errors.Common.imgMaxSize(5), Errors.Common.imgNotType]
  })
  async uploadHinhAnh(
    @Query() params: DetailNguoiDungReqDto,
    @Body() uploadViTriHinhAnhResDto: UploadHinhAnhNguoiDungReqDto,
    @UploadedFile(ImgValidationPipe) hinhAnh: string
  ): Promise<UploadHinhAnhNguoiDungResDto> {
    uploadViTriHinhAnhResDto.hinhAnh = hinhAnh;
    const result = await this.nguoiDungService.updateImg(params.id, uploadViTriHinhAnhResDto);

    return plainToInstance(UploadHinhAnhNguoiDungResDto, result);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, new RoleGuard(['admin']))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'API xoá người dùng',
    description: 'API xoá người dùng',
  })
  @ApiOkResponse({ type: DeleteNguoiDungResDto })
  @ApiErrorDocs({
    notFoundTarget: ['NguoiDung'],
    badRequestTarget: [DeleteNguoiDungReqDto]
  })
  async delete(@Query() params: DeleteNguoiDungReqDto): Promise<DeleteNguoiDungResDto> {
    return await this.nguoiDungService.delete(params.id);
  }
}
