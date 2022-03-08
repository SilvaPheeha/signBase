export const validationMessages:  {[key: string]: { [key: string]: string } } = {
    password: {
      required: 'Password is required.',
      minlength: 'Password must be at least 8 characters.',
      maxlength: 'Password cannot exceed 16 characters.'
    },
    confirmPassword: {
      required: 'Confirm password is required.',
      minlength: 'Confirm password must be at least 8 characters.',
      maxlength: 'Confirm password cannot exceed 16 characters.',
      confirm: 'Passwords do not match.',
    },
    email: {
      required: 'Email is required.'
    },
  };