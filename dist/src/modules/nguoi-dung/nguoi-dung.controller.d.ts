import { NguoiDungService } from "./nguoi-dung.service";
import { CreateNguoiDungReqDto } from "./dtos/create-nguoi-dung-req.dto";
import { CreateNguoiDungResDto } from "./dtos/create-nguoi-dung-res.dto";
import { ListNguoiDungResDto } from "./dtos/list-nguoi-dung-res.dto";
import { ListNguoiDungReqDto } from "./dtos/list-nguoi-dung-req.dto";
import { DetailNguoiDungResDto } from "./dtos/detail-nguoi-dung-res.dto";
import { DetailNguoiDungReqDto } from "./dtos/detail-nguoi-dung-req.dto";
import { UpdateNguoiDungResDto } from "./dtos/update-nguoi-dung-res.dto";
import { UpdateNguoiDungReqDto } from "./dtos/update-nguoi-dung-req.dto";
import { DeleteNguoiDungResDto } from "./dtos/delete-nguoi-dung-res.dto";
import { DeleteNguoiDungReqDto } from "./dtos/delete-nguoi-dung-req.dto";
import { UploadHinhAnhNguoiDungResDto } from "./dtos/upload-hinh-anh-nguoi-dung-res.dto";
import { UploadHinhAnhNguoiDungReqDto } from "./dtos/upload-hinh-anh-nguoi-dung-req.dto";
export declare class NguoiDungController {
    private readonly nguoiDungService;
    constructor(nguoiDungService: NguoiDungService);
    create(createNguoiDungReqDto: CreateNguoiDungReqDto): Promise<CreateNguoiDungResDto>;
    list(params: ListNguoiDungReqDto): Promise<ListNguoiDungResDto>;
    detail(params: DetailNguoiDungReqDto): Promise<DetailNguoiDungResDto>;
    update(params: DetailNguoiDungReqDto, updateNguoiDungReqDto: UpdateNguoiDungReqDto): Promise<UpdateNguoiDungResDto>;
    uploadHinhAnh(params: DetailNguoiDungReqDto, uploadViTriHinhAnhResDto: UploadHinhAnhNguoiDungReqDto, hinhAnh: string): Promise<UploadHinhAnhNguoiDungResDto>;
    delete(params: DeleteNguoiDungReqDto): Promise<DeleteNguoiDungResDto>;
}
