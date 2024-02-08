import { BinhLuanService } from "./binh-luan.service";
import { CreateBinhLuanReqDto } from "./dtos/create-binh-luan-req.dto";
import { CreateBinhLuanResDto } from "./dtos/create-binh-luan-res.dto";
import { ListBinhLuanResDto } from "./dtos/list-binh-luan-res.dto";
import { ListBinhLuanReqDto } from "./dtos/list-binh-luan-req.dto";
import { UpdateBinhLuanResDto } from "./dtos/update-binh-luan-res.dto";
import { IdBinhLuanReqDto, UpdateBinhLuanReqDto } from "./dtos/update-binh-luan-req.dto";
import { DeleteBinhLuanResDto } from "./dtos/delete-nguoi-dung-res.dto";
import { DeleteBinhLuanReqDto } from "./dtos/delete-nguoi-dung-req.dto";
export declare class BinhLuanController {
    private readonly binhLuanService;
    constructor(binhLuanService: BinhLuanService);
    create(createBinhLuanReqDto: CreateBinhLuanReqDto): Promise<CreateBinhLuanResDto>;
    list(params: ListBinhLuanReqDto): Promise<ListBinhLuanResDto>;
    update(params: IdBinhLuanReqDto, updateBinhLuanReqDto: UpdateBinhLuanReqDto): Promise<UpdateBinhLuanResDto>;
    delete(params: DeleteBinhLuanReqDto): Promise<DeleteBinhLuanResDto>;
}
