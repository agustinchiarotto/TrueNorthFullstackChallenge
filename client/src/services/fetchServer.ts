interface fetchResponse {
  success: boolean;
  payload: any;
  error: string;
}

export const fecthServer = async (url: string, options: any = {}): Promise<fetchResponse> => {
  let serviceResponse;
  try {
    const response = await fetch(url, options);
    const parsedResponse = await response.json();
    if (response.status === 200) {
      serviceResponse = {
        success: true,
        payload: parsedResponse,
        error: '',
      };
    } else {
      serviceResponse = createErrorResponse(parsedResponse.error);
    }
  } catch (error) {
    serviceResponse = createErrorResponse();
  }
  return serviceResponse;
};

const createErrorResponse = (message?: string) => {
  return {
    success: false,
    payload: undefined,
    error: message || 'An unknown error occurred.',
  };
};
