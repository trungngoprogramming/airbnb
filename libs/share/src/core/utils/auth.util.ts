import * as crypto from 'crypto';
import { NguoiDung } from '@prisma/client';
import { ClsServiceManager } from 'nestjs-cls';

export const getCurrentUser = (): NguoiDung | undefined => {
  return ClsServiceManager.getClsService().get('currentUser') ?? undefined;
};

export const sha3512 = (plaintext: string) => {
  return crypto.createHash('sha3-512').update(plaintext).digest('hex');
};
