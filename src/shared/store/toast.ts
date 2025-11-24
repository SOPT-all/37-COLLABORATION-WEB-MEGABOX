import { create } from 'zustand';

type Toast = {
  id: number;
  message: string;
};

type ToastStore = {
  // TODO : 여러 토스트 동시 표시를 위해 배열 처리 검토, 현재는 단일 토스트만 관리
  toast: Toast | null;
  showToast: (_message: string) => void;
  hideToast: () => void;
};

export const useToastStore = create<ToastStore>(_set => ({
  toast: null,

  showToast: _message => {
    const id = Date.now();
    _set({ toast: { id, message: _message } });

    setTimeout(() => {
      _set({ toast: null });
    }, 3000);
  },

  hideToast: () => {
    _set({ toast: null });
  },
}));
