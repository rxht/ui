export type rType = 'info' | 'success' | 'warning' | 'error' | 'custom';

export const rMessageOption: { [key: string]: any } = {
  info: {
    icon: 'rxh-information_fill',
    color: '#909399',
    background: '#f4f4f5'
  },
  success: {
    icon: 'rxh-check_fill',
    color: '#09b63d',
    background: '#f0f9eb'
  },
  warning: {
    icon: 'rxh-warning_fill',
    color: '#e6a23c',
    background: '#fdf6ec'
  },
  error: {
    icon: 'rxh-close_fill',
    color: '#f56c6c',
    background: '#fef0f0'
  }
};
