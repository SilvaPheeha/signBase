export const errorCodes : any = {
    'auth/claims-too-large': { header: 'Claims Too Large', message: 'The claims payload provided exceeds the maximum allowed size of 1000 bytes.' },
    'auth/email-already-exists': { header: 'Email Already Exist', message: 'The provided email is already in use by an existing user. Each user must have a unique email.' },
    'auth/id-token-expired': { header: 'Id Token Expired', message: 'The provided Firebase ID token is expired.' },
    'auth/id-token-revoked': { header: 'Id Token Revoked', message: 'The Firebase ID token has been revoked.' },
    'auth/insufficient-permission': { header: 'Insufficient Permission', message: 'The credential used to initialize the Admin SDK has insufficient permission to access the requested Authentication resource. Refer to Set up a Firebase project for documentation on how to generate a credential with appropriate permissions and use it to authenticate the Admin SDKs.' },
    'auth/internal-error': { header: 'Internal Error', message: 'The Authentication server encountered an unexpected error while trying to process the request. The error message should contain the response from the Authentication server containing additional information. If the error persists, please report the problem to our Bug Report support channel.' },
    'auth/invalid-argument': { header: 'Invalid Argument', message: 'An invalid argument was provided to an Authentication method. The error message should contain additional information.' },
    'auth/invalid-claims': { header: 'invalid-claims', message: '	The custom claim attributes provided are invalid.' },
    'auth/invalid-continue-uri': { header: 'Invalid-continue-uri', message: '	The continue URL must be a valid URL string.' },
    'auth/invalid-creation-time': { header: 'invalid-creation-time', message: '	The creation time must be a valid UTC date string.' },
    'auth/invalid-credential': { header: 'invalid-credential', message: 'The credential used to authenticate the Admin SDKs cannot be used to perform the desired action. Certain Authentication methods such as createCustomToken() and verifyIdToken() require the SDK to be initialized with a certificate credential as opposed to a refresh token or Application Default credential. See Initialize the SDK for documentation on how to authenticate the Admin SDKs with a certificate credential.' },
    'auth/invalid-disabled-field': { header: 'invalid-disabled-field', message: 'The provided value for the disabled user property is invalid. It must be a boolean.' },
    'auth/invalid-display-name': { header: 'invalid-display-name', message: 'The provided value for the displayName user property is invalid. It must be a non-empty string.' },
    'auth/invalid-dynamic-link-domain': { header: 'invalid-dynamic-link-domain', message: '	The provided dynamic link domain is not configured or authorized for the current project.' },
    'auth/invalid-email': { header: 'invalid-email', message: '	The provided value for the email user property is invalid. It must be a string email address.' },
    'auth/invalid-email-verified': { header: 'invalid-email-verified', message: 'The provided value for the emailVerified user property is invalid. It must be a boolean.' },
    'auth/invalid-hash-algorithm': { header: 'invalid-hash-algorithm', message: 'The hash algorithm must match one of the strings in the list of supported algorithms.' },
    'auth/invalid-hash-block-size': { header: 'invalid-hash-block-size', message: 'The hash block size must be a valid number.' },
    'auth/invalid-hash-derived-key-length': { header: 'invalid-hash-derived-key-length', message: 'The hash derived key length must be a valid number.' },
    'auth/invalid-hash-key': { header: 'invalid-hash-key', message: 'The hash key must a valid byte buffer.' },
    'auth/invalid-hash-memory-cost': { header: 'invalid-hash-memory-cost', message: 'The hash memory cost must be a valid number.' },
    'auth/invalid-hash-parallelization': { header: 'invalid-hash-parallelization', message: '	The hash parallelization must be a valid number.' },
    'auth/invalid-hash-rounds': { header: 'invalid-hash-rounds', message: '	The hash rounds must be a valid number.' },
    'auth/invalid-hash-salt-separator': { header: 'invalid-hash-salt-separator', message: '	The hashing algorithm salt separator field must be a valid byte buffer.' },
    'auth/invalid-id-token': { header: 'invalid-id-token', message: '	The provided ID token is not a valid Firebase ID token.' },
    'auth/invalid-last-sign-in-time	': { header: 'invalid-last-sign-in-time', message: 'The last sign-in time must be a valid UTC date string.' },
    'auth/invalid-page-token': { header: 'invalid-page-token', message: '	The provided next page token is invalid. It must be a valid non-empty string.' },
    'auth/invalid-password': { header: 'invalid-password', message: 'The provided value for the password user property is invalid. It must be a string with at least six characters.' },
    'auth/invalid-password-hash	': { header: 'invalid-password-hash', message: 'The password hash must be a valid byte buffer.' },
    'auth/invalid-password-salt': { header: 'invalid-password-salt', message: '	The password salt must be a valid byte buffer' },
    'auth/invalid-phone-number': { header: 'invalid-phone-number', message: '	The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.' },
    'auth/invalid-photo-url	': { header: 'invalid-photo-url', message: 'The provided value for the photoURL user property is invalid. It must be a string URL.' },
    'auth/invalid-provider-data': { header: 'invalid-provider-data', message: '	The providerData must be a valid array of UserInfo objects.' },
    'auth/invalid-provider-id': { header: 'invalid-provider-id', message: '	The providerId must be a valid supported provider identifier string.' },
    'auth/invalid-oauth-responsetype': { header: 'invalid-oauth-responsetype', message: '	Only exactly one OAuth responseType should be set to true.' },
    'auth/invalid-session-cookie-duration': { header: 'invalid-session-cookie-duration', message: 'The session cookie duration must be a valid number in milliseconds between 5 minutes and 2 weeks.' },
    'auth/invalid-uid': { header: 'invalid-uid', message: 'The provided uid must be a non-empty string with at most 128 characters.' },
    'auth/invalid-user-import': { header: 'invalid-user-import', message: '	The user record to import is invalid.' },
    'auth/maximum-user-count-exceeded': {header: 'maximum-user-count-exceeded', message: '	The maximum allowed number of users to import has been exceeded.' },
    'auth/missing-android-pkg-name': { header: 'missing-android-pkg-name', message: 'An Android Package Name must be provided if the Android App is required to be installed.' },
    'auth/missing-continue-uri': { header: 'missing-continue-uri', message: '	A valid continue URL must be provided in the request.' },
    'auth/missing-hash-algorithm': { header: 'missing-hash-algorithm', message: '	Importing users with password hashes requires that the hashing algorithm and its parameters be provided.' },
    'auth/missing-ios-bundle-id': { header: 'missing-ios-bundle-id', message: '	The request is missing a Bundle ID.' },
    'auth/missing-uid': { header: 'missing-uid', message: '	A uid identifier is required for the current operation.' },
    'auth/missing-oauth-client-secret': { header: 'missing-oauth-client-secret', message: '	The OAuth configuration client secret is required to enable OIDC code flow.' },
    'auth/operation-not-allowed	': { header: 'operation-not-allowed', message: 'The provided sign-in provider is disabled for your Firebase project. Enable it from the Sign-in Method section of the Firebase console.' },
    'auth/phone-number-already-exists': { header: 'phone-number-already-exists', message: 'The provided phoneNumber is already in use by an existing user. Each user must have a unique phoneNumber.' },
    'auth/project-not-found': { header: 'project-not-found', message: 'No Firebase project was found for the credential used to initialize the Admin SDKs. Refer to Set up a Firebase project for documentation on how to generate a credential for your project and use it to authenticate the Admin SDKs.' },
    'auth/reserved-claims': { header: 'reserved-claims', message: 'One or more custom user claims provided are reserved. For example, OIDC specific claims such as (sub, iat, iss, exp, aud, auth_time, etc) should not be used as keys for custom claims.' },
    'auth/session-cookie-expired': { header: 'session-cookie-expired', message: 'The provided Firebase session cookie is expired.' },
    'auth/session-cookie-revoked': { header: 'session-cookie-revoked', message: 'The Firebase session cookie has been revoked.' },
    'auth/uid-already-exists': { header: 'uid-already-exist', message: 'The provided uid is already in use by an existing user. Each user must have a unique uid.' },
    'auth/unauthorized-continue-uri': { header: 'unauthorized-continue-uri', message: 'The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase Console.' },
    'auth/user-not-found': { header: 'user-not-found', message: 'There is no existing user record corresponding to the provided identifier' },
}