import { SettingsService } from './settings.service'
import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { Auth } from '../auth/decorators/auth.decorator'

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Auth('ADMIN')
  @Get(':key')
  getSetting(@Param('key') key: string) {
    return this.settingsService.getSettingByKey(key)
  }

  @Auth('ADMIN')
  @Post()
  setSettings(@Body() settingData: { key: string; value: string }) {
    return this.settingsService.setSetting(settingData.key, settingData.value)
  }
}