export default {
  title: 'Mes informations personnelles',
  tabs: {
    profile: {
      paneLabel: 'Mon profil',
      profileForm: {
        fullNameLabel: 'Nom complet',
        fullNamePlaceholder: 'votre nom complet',
        phoneLabel: 'Numéro de téléphone',
        phonePlaceholder: '+33(6) 50 50 50 32',
        updateProfile: 'Mettre à jour',
        onProfileUpdated: 'Votre profil a été mis à jour',
        rules: {
          requiredField: 'Le champ {fieldName} est requis',
        },
      },
    },
    credentials: {
      paneLabel: 'Mes identifiants',
      credentialsForm: {
        submit: 'Mettre à jour',
        reset: 'Réinitialiser',
        emailLabel: 'Email',
        emailPlaceholder: 'votre nouvel email',
        passwordLabel: 'Nouveau mot de passe',
        passwordPlaceholder: 'votre nouveau mot de passe',
        passwordConfirmationLabel: 'Confirmation',
        passwordConfirmationPlaceholder: 'confirmez le nouveau mot de passe',
        onPasswordUpdated: 'Votre mot de passer a été mis à jour',
        onEmailUpdated: 'Votre email a été mis à jour',
        rules: {
          requiredField: 'Le champ {fieldName} est requis',
          typeEmail: "Le format d'email n'est pas valide",
          sizeBetween: 'Le champ {fieldName} doit contenir entre {min} et {max} caractères',
          passwordAreEqual: 'Les deux mots de passent doivent être identiques',
        },
      },
    },
  },
};
