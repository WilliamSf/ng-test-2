import { Photo } from '../interfaces/photo';

export function buildPhotoList(): Photo[] {
  const photos: Photo[] = [];
  for (let index = 0; index < 8; index++) {
    photos.push({
      id: index + 1,
      description: '',
      url: ''
    });
  }
  return photos;
}
