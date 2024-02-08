"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Errors = void 0;
exports.Errors = {
    Http: {
        401: 'Không được phép',
        403: 'Không có quyền hạn',
        404: 'Không tìm thấy',
        500: 'Lỗi máy chủ',
    },
    Common: {
        isNotEmpty: {
            code: 'E1000',
            message: 'Không được để trống'
        },
        maxLength: {
            code: 'E1001',
            message: 'Giá trị không vượt quá độ dài {valueNumber}',
        },
        min: {
            code: 'E1002',
            message: 'Giá trị phải lớn hơn hoặc bằng {valueNumber}'
        },
        max: {
            code: 'E1003',
            message: 'Giá trị phải nhỏ hơn hoặc bằng {valueNumber}',
        },
        isNumber: {
            code: 'E1004',
            message: 'Giá trị phải là kiểu số'
        },
        isIn: {
            code: 'E1005',
            message: 'Giá trị phải thuộc 1 trong các giá trị sau:{valueIn}'
        },
        isBoolean: {
            code: 'E1006',
            message: 'Giá trị phải là kiểu boolean'
        },
        isDate: {
            code: 'E1007',
            message: 'Giá trị phải là kiểu DateTime'
        },
        accountExisted: {
            code: 'E2000',
            message: 'Tài khoản đã tồn tại'
        },
        imgMaxSize: (maxSizeMb) => ({
            code: 'E2001',
            message: `Ảnh phải dưới hoặc bằng ${maxSizeMb}mb`
        }),
        imgNotType: {
            code: 'E2002',
            message: 'Ảnh phải là jpg, jpeg hoặc png'
        },
    }
};
//# sourceMappingURL=error.constant.js.map