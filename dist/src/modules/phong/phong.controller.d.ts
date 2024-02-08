import { PhongService } from "./phong.service";
import { CreatePhongResDto } from "./dtos/create-phong-res.dto";
import { CreatePhongReqDto } from "./dtos/create-phong-req.dto";
import { ListPhongReqDto } from "./dtos/list-phong-req.dto";
import { ListPhongResDto } from "./dtos/list-phong-res.dto";
import { DetailPhongResDto } from "./dtos/detail-phong-res.dto";
import { DetailPhongReqDto } from "./dtos/detail-phong-req.dto";
import { DeletePhongReqDto } from "./dtos/delete-phong-req.dto";
import { DeletePhongResDto } from "./dtos/delete-phong-res.dto";
import { UploadHinhAnhPhongReqDto } from "./dtos/upload-hinh-anh-phong-req.dto";
import { UploadHinhAnhPhongResDto } from "./dtos/upload-hinh-anh-phong-res.dto";
export declare class PhongController {
    private readonly phongService;
    constructor(phongService: PhongService);
    create(createPhongReqDto: CreatePhongReqDto, hinhAnh: string): Promise<CreatePhongResDto>;
    list(params: ListPhongReqDto): Promise<ListPhongResDto>;
    detail(params: DetailPhongReqDto): Promise<DetailPhongResDto>;
    uploadHinhAnh(params: DetailPhongReqDto, uploadHinhAnhPhongReqDto: UploadHinhAnhPhongReqDto, hinhAnh: string): Promise<UploadHinhAnhPhongResDto>;
    delete(params: DeletePhongReqDto): Promise<DeletePhongResDto>;
}
