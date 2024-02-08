import { CreateViTriResDto } from "./dtos/create-vi-tri-res.dto";
import { CreateViTriReqDto } from "./dtos/create-vi-tri-req.dto";
import { ViTriService } from "./vi-tri.service";
import { ListViTriResDto } from "./dtos/list-vi-tri-res.dto";
import { ListViTriReqDto } from "./dtos/list-vi-tri-req.dto";
import { DetailViTriResDto } from "./dtos/detail-vi-tri-res.dto";
import { DetailViTriReqDto } from "./dtos/detail-vi-tri-req.dto";
import { UpdateViTriResDto } from "./dtos/update-vi-tri-res.dto";
import { UpdateViTriReqDto } from "./dtos/update-vi-tri-req.dto";
import { DeleteViTriResDto } from "./dtos/delete-vi-tri-res.dto";
import { DeleteViTriReqDto } from "./dtos/delete-vi-tri-req.dto";
import { UploadViTriHinhAnhResDto } from "./dtos/upload-vi-tri-hinh-anh-res.dto";
import { UploadViTriHinhAnhReqDto } from "./dtos/upload-vi-tri-hinh-anh-req.dto";
export declare class ViTriController {
    private readonly viTriService;
    constructor(viTriService: ViTriService);
    create(createViTriReqDto: CreateViTriReqDto, hinhAnh: string): Promise<CreateViTriResDto>;
    list(params: ListViTriReqDto): Promise<ListViTriResDto>;
    detail(params: DetailViTriReqDto): Promise<DetailViTriResDto>;
    update(params: DetailViTriReqDto, updateViTriReqDto: UpdateViTriReqDto, hinhAnh: string): Promise<UpdateViTriResDto>;
    uploadHinhAnh(params: DetailViTriReqDto, uploadViTriHinhAnhResDto: UploadViTriHinhAnhReqDto, hinhAnh: string): Promise<UploadViTriHinhAnhResDto>;
    delete(params: DeleteViTriReqDto): Promise<DeleteViTriResDto>;
}
