import { Module } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { SettingsService } from './settings.service'
import { SettingsController } from './settings.controller'

@Module({
  controllers: [SettingsController],
  providers: [SettingsService, SettingsService, PrismaService],
})
export class SettingsModule {}