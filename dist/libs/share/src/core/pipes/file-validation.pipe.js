"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImgValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const error_constant_1 = require("../constants/error.constant");
class ImgValidationPipe {
    transform(value) {
        const fiveMb = 5 * 1024 * 1024;
        if (value.size > fiveMb)
            throw new common_1.BadRequestException(error_constant_1.Errors.Common.imgMaxSize(5));
        if (!value.mimetype.match(/\/(jpg|jpeg|png)$/))
            throw new common_1.BadRequestException(error_constant_1.Errors.Common.imgNotType);
        return 'data:image/png;base64,' + value.buffer.toString('base64');
    }
}
exports.ImgValidationPipe = ImgValidationPipe;
//# sourceMappingURL=file-validation.pipe.js.map