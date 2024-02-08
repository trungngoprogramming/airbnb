import { DatPhongService } from "./dat-phong.service";
import { CreateDatPhongReqDto } from "./dtos/create-dat-phong-req.dto";
import { CreateDatPhongResDto } from "./dtos/create-dat-phong-res.dto";
import { ListDatPhongResDto } from "./dtos/list-dat-phong-res.dto";
import { ListDatPhongReqDto } from "./dtos/list-dat-phong-req.dto";
import { DetailDatPhongReqDto } from "./dtos/detail-dat-phong-req.dto";
import { DetailDatPhongResDto } from "./dtos/detail-dat-phong-res.dto";
import { UpdateDatPhongResDto } from "./dtos/update-dat-phong-res.dto";
import { UpdateDatPhongReqDto } from "./dtos/update-dat-phong-req.dto";
import { DeleteDatPhongResDto } from "./dtos/delete-dat-phong-res.dto";
import { DeleteDatPhongReqDto } from "./dtos/delete-dat-phong-req.dto";
export declare class DatPhongController {
    private datPhongService;
    constructor(datPhongService: DatPhongService);
    create(createDatPhongReqDto: CreateDatPhongReqDto): Promise<CreateDatPhongResDto>;
    list(params: ListDatPhongReqDto): Promise<ListDatPhongResDto>;
    detail(params: DetailDatPhongReqDto): Promise<DetailDatPhongResDto>;
    update(params: DetailDatPhongReqDto, updateDatPhongReqDto: UpdateDatPhongReqDto): Promise<UpdateDatPhongResDto>;
    delete(params: DeleteDatPhongReqDto): Promise<DeleteDatPhongResDto>;
}
