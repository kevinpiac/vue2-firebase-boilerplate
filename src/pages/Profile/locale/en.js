export default {
  title: 'My Profile Informations',
  tabs: {
    profile: {
      paneLabel: 'My profile',
      profileForm: {
        fullNameLabel: 'Full name',
        fullNamePlaceholder: 'your full name',
        phoneLabel: 'Phone Number',
        phonePlaceholder: '+33(6) 50 50 50 32',
        updateProfile: 'Update',
        onProfileUpdated: 'Your profile has been updated',
        rules: {
          requiredField: 'The {fieldName} value is required',
        },
      },
    },
    credentials: {
      paneLabel: 'My credentials',
      credentialsForm: {
        submit: 'Update',
        reset: 'Reset',
        emailLabel: 'Email',
        emailPlaceholder: 'your new email',
        passwordLabel: 'New Password',
        passwordPlaceholder: 'your new password',
        passwordConfirmationLabel: 'Confirmation',
        passwordConfirmationPlaceholder: 'confirm the new password',
        onPasswordUpdated: 'Your password has been updated',
        onEmailUpdated: 'Your email has been updated',
        rules: {
          requiredField: 'The {fieldName} value is required',
          typeEmail: 'The email format is not valid',
          sizeBetween: 'The {fieldName} must contain between {min} and {max} characters',
          passwordAreEqual: 'Password and confirmation must be equal',
        },
      },
    },
  },
};
