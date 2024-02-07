import { Body, Controller, Post } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { ApiErrorDocs } from "libs/share/src/core/decorators/swagger-error-docs.decorator";
import { BinhLuanService } from "./binh-luan.service";
import { CreateBinhLuanResDto } from "./dtos/create-binh-luan-res.dto";
import { CreateBinhLuanReqDto } from "./dtos/create-binh-luan-req.dto";
import { plainToInstance } from "class-transformer";

@ApiTags('BinhLuan')
@Controller('binh-luan')
export class BinhLuanController {
  constructor(private readonly binhLuanService: BinhLuanService) { }

  @Post('binh-luan')
  @ApiOperation({
    summary: 'API tạo bình luận',
    description: 'API tạo bình luận',
  })
  @ApiCreatedResponse({ type: CreateBinhLuanResDto })
  @ApiErrorDocs({
    exclude: ['notFound', 'unauthorized', 'forbidden'],
    badRequestTarget: [CreateBinhLuanReqDto],
  })
  async signup(
    @Body() createBinhLuanReqDto: CreateBinhLuanReqDto,
  ): Promise<CreateBinhLuanResDto> {
    const binhLuan = await this.binhLuanService.create(createBinhLuanReqDto);

    return plainToInstance(CreateBinhLuanResDto, binhLuan);
  }
}
