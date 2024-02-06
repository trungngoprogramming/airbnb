export const Errors = {
  Http: {
    401: 'Không được phép',
    403: 'Cấm thực hiện',
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
      message: 'Giá trị không vượt quá {value}',
    },
    accountExisted: {
      code: 'E2000',
      message: 'Tài khoản đã tồn tại'
    }
  }
}
