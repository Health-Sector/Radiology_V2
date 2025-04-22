import axios from 'axios';

// Create axios instance with relative base URL
const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: false,  // Changed to false since we're using * for CORS
  timeout: 10000
});

// Add a request interceptor for debugging
api.interceptors.request.use(request => {
  console.log('Starting Request:', request)
  return request
})

// Add a response interceptor for debugging
api.interceptors.response.use(
  response => {
    console.log('Response:', response)
    return response
  },
  error => {
    console.log('Response Error:', error)
    return Promise.reject(error)
  }
);

// Add request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle network errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      // Network error
      return Promise.reject(new Error('Network Error: Unable to connect to the server. Please check your internet connection.'));
    }
    return Promise.reject(error);
  }
);

// Test OpenAI connection
export const testOpenAIConnection = async () => {
    try {
        const response = await api.get('/api/test-openai');
        return response.data;
    } catch (error) {
        console.error('OpenAI connection test failed:', error);
        throw error;
    }
};

// Authentication
export const login = async (loginId, password) => {
  try {
    const formData = new URLSearchParams();
    formData.append('username', loginId); // Backend expects 'username' field for both gmail and username
    formData.append('password', password);

    const response = await api.post('/token', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    if (response.data.access_token) {
      localStorage.setItem('token', response.data.access_token);
    }
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error.response?.data || error.message;
  }
};

export const register = async (username, gmail, password) => {
  try {
    const response = await api.post('/register', {
      username,
      gmail,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error);
    if (error.response?.data?.detail) {
      throw { detail: error.response.data.detail };
    } else if (!error.response) {
      throw { detail: 'Network Error: Unable to connect to the server. Please check your internet connection.' };
    } else {
      throw { detail: 'Registration failed. Please try again.' };
    }
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const getCurrentUser = async () => {
  try {
    const response = await api.get('/me');
    return response.data;
  } catch (error) {
    console.error('Failed to get current user:', error);
    throw error.response?.data || error.message;
  }
};

// Report Correction
export const analyzeReport = async (reportText, file = null) => {
  try {
    console.log('Starting report analysis...');
    const formData = new FormData();
    const username = localStorage.getItem('username') || 'default_user';
    formData.append('username', username);
    
    if (file) {
      console.log('Uploading file...');
      formData.append('uploaded_file', file);
    } else {
      console.log('Sending report text...');
      formData.append('report_text', reportText);
    }

    console.log('Making API request...');
    const response = await api.post('/analyze_report', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout: 60000, // 60 seconds timeout
    });

    console.log('Got response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Report analysis failed:', error);
    console.error('Error details:', {
      response: error.response,
      request: error.request,
      message: error.message,
    });

    if (error.response?.data?.detail) {
      throw { detail: error.response.data.detail };
    } else if (error.code === 'ECONNABORTED') {
      throw { detail: 'Request timed out. Please try again.' };
    } else if (!error.response) {
      throw { detail: 'Network Error: Unable to connect to the server. Please check your internet connection.' };
    } else {
      throw { detail: error.message || 'Report analysis failed. Please try again.' };
    }
  }
};

// Test Analysis (doesn't use OpenAI)
export const testAnalyzeReport = async (reportText, file = null) => {
  try {
    console.log('Starting test analysis...');
    const formData = new FormData();
    const username = localStorage.getItem('username') || 'default_user';
    formData.append('username', username);
    
    if (file) {
      console.log('Uploading file for test...');
      formData.append('uploaded_file', file);
    } else {
      console.log('Sending report text for test...');
      formData.append('report_text', reportText);
    }

    console.log('Making test API request...');
    const response = await api.post('/test_analyze', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Got test response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Test analysis failed:', error);
    console.error('Error details:', {
      response: error.response,
      request: error.request,
      message: error.message,
    });

    throw { detail: error.message || 'Test analysis failed' };
  }
};

// Report History
export const getUserHistory = async () => {
  try {
    const response = await api.get('/history');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch history:', error);
    throw { detail: error.response?.data?.detail || 'Failed to fetch history' };
  }
};

// Save Report
export const saveReport = async (reportText) => {
  try {
    const formData = new FormData();
    formData.append('report_text', reportText);
    
    const response = await api.post('/save_report', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to save report:', error);
    throw { detail: error.response?.data?.detail || 'Failed to save report' };
  }
};

// Delete History
export const deleteHistory = async () => {
  try {
    const response = await api.delete('/history');
    return response.data;
  } catch (error) {
    console.error('Failed to delete history:', error);
    throw { detail: error.response?.data?.detail || 'Failed to delete history' };
  }
};

export const viewReport = async (fileKey) => {
  try {
    const response = await api.get('/report', {
      params: { file_key: fileKey }
    });
    return response.data;
  } catch (error) {
    console.error('Failed to view report:', error);
    throw { detail: error.response?.data?.detail || 'Failed to view report' };
  }
};
