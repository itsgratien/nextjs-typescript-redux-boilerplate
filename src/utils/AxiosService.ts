import axiosInstance from './AxiosSetup';
import { AxiosService } from '@/types/Axios';

const axiosService = async <Data>({
  method,
  uri,
  data,
  onError,
  onSuccess,
  onDownloadProgress,
  onUploadProgress,
  contentType,
}: AxiosService<Data>) => {
  try {
    const res = await axiosInstance({
      method,
      url: uri,
      data,
      headers: {
        'Content-Type': contentType ?? 'application/json',
      },
      onDownloadProgress: (evt) => {
        if (onDownloadProgress && evt.total) {
          const percentage = Math.round((evt.loaded / evt.total) * 100);
          onDownloadProgress(percentage);
        }
      },
      onUploadProgress: (evt) => {
        if (onUploadProgress && evt.total) {
          const percentage = Math.round((evt.loaded / evt.total) * 100);
          onUploadProgress(percentage);
        }
      },
    });
    return onSuccess(res);
  } catch (error: any) {
    return onError(error);
  }
};

export default axiosService;
