export const Errors = {
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
      message: 'Giá trị không vượt quá độ dài {value}',
    },
    min: {
      code: 'E1002',
      message: 'Giá trị phải lớn hơn hoặc bằng {value}'
    },
    max: {
      code: 'E1003',
      message: 'Giá trị phải nhỏ hơn hoặc bằng {value}',
    },
    isNumber: {
      code: 'E1004',
      message: 'Giá trị phải là kiểu số'
    },
    accountExisted: {
      code: 'E2000',
      message: 'Tài khoản đã tồn tại'
    },
    imgMaxSize: (maxSizeMb: number) => ({
      code: 'E2001',
      message: `Ảnh phải dưới hoặc bằng ${maxSizeMb}mb`
    }),
    imgNotType: {
      code: 'E2002',
      message: 'Ảnh phải là jpg, jpeg hoặc png'
    },
  }
}
