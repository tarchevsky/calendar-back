import {
  Controller,
  HttpCode,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common'
import { FilesInterceptor } from '@nestjs/platform-express'
import { FolderValidationPipe } from './pipes/folder.validation.pipe'
import { FileValidationPipe } from './pipes/file.validation.pipe'
import { IFile } from './media.interface'
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @HttpCode(200)
  @Post()
  @UseInterceptors(FilesInterceptor('media'))
  @UsePipes(new FolderValidationPipe())
  async uploadMediaFile(
    @UploadedFiles(FileValidationPipe) mediaFiles: IFile | IFile[],
    @Query('folder') folder?: string,
  ) {
    return this.mediaService.saveMedia(mediaFiles, folder)
  }
}