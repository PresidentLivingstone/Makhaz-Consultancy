import { useEffect } from 'react';

const FILE_SIZE_LIMIT = 5 * 1024 * 1024; // 5 MB

export const useFileValidation = () => {
  useEffect(() => {
    const form = document.querySelector('form');
    const fileInput = document.getElementById('file') as HTMLInputElement;
    const errorDisplay = document.getElementById('file-error');

    if (form && fileInput && errorDisplay) {
      form.addEventListener('submit', (event) => {
        errorDisplay.textContent = ''; // Clear previous errors

        const file = fileInput.files?.[0];
        if (file && file.size > FILE_SIZE_LIMIT) {
          event.preventDefault();
          errorDisplay.textContent = `File size exceeds the 5 MB limit. Please upload a smaller file.`;
        }
      });
    }
  }, []);
};