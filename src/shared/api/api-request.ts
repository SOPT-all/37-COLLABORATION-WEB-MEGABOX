type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

type Primitive = string | number | boolean;
export type ParamValue = Primitive | Primitive[] | null | undefined;

export interface ApiRequestProps {
  endPoint: string;
  method?: RequestMethod;
  data?: unknown;
  headers?: Record<string, string>;
  params?: Record<string, ParamValue>;
}

const SERVER_API_BASE_URL = import.meta.env.VITE_API_SERVER_URL;

class ApiRequestError extends Error {
  public status: number;
  public code?: string;

  constructor(message: string, status: number, code?: string) {
    super(message);
    this.name = 'ApiRequestError';
    this.status = status;
    this.code = code;
  }
}

export const apiRequest = async <T = unknown>({
  endPoint,
  method = 'GET',
  data,
  headers,
  params,
}: ApiRequestProps): Promise<T> => {
  if (!SERVER_API_BASE_URL) {
    throw new ApiRequestError(
      'API 서버 URL이 설정되지 않았습니다.',
      500,
      'MISSING_API_URL'
    );
  }

  try {
    let requestUrl = `${SERVER_API_BASE_URL}${endPoint}`;
    if (params && Object.keys(params).length > 0) {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (Array.isArray(value)) {
            searchParams.append(key, value.map(String).join(','));
          } else {
            searchParams.append(key, String(value));
          }
        }
      });
      requestUrl += `?${searchParams.toString()}`;
    }

    const requestHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      ...headers,
    };

    const fetchOptions: globalThis.RequestInit = {
      method,
      headers: requestHeaders,
    };
    if (data && method !== 'GET') {
      fetchOptions.body = JSON.stringify(data);
    }

    const response = await fetch(requestUrl, fetchOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new ApiRequestError(
        errorText || 'API 요청에 실패했습니다.',
        response.status
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiRequestError) {
      throw error;
    }
    throw new ApiRequestError(
      error instanceof Error
        ? error.message
        : '알 수 없는 오류가 발생했습니다.',
      0,
      'NETWORK_ERROR'
    );
  }
};

export { ApiRequestError };
