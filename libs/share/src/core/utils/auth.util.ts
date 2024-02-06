import { NguoiDung } from '@prisma/client';
import { ClsServiceManager } from 'nestjs-cls';

export const setCurrentUser = (user: NguoiDung): void => {
  ClsServiceManager.getClsService()?.set('currentUser', user);
};

export const getCurrentUser = (): NguoiDung | undefined => {
  return ClsServiceManager.getClsService().get('currentUser') ?? undefined;
};
