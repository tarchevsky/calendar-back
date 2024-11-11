import { Role } from '@prisma/client';
import { applyDecorators, UseGuards } from '@nestjs/common';
import { OnlyAdminGuard } from '../guards/admin.guard';
import { JwtAuthGuard } from '../guards/jwt.guard';

export const Auth = (role: Role = Role.USER) => {
  if (role === Role.ADMIN) {
    return applyDecorators(UseGuards(JwtAuthGuard, OnlyAdminGuard))
  }
  return applyDecorators(UseGuards(JwtAuthGuard))
}