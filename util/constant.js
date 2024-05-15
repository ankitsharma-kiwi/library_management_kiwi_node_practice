const CONSTANTS = {};

CONSTANTS.MESSAGE = {
  REGISTER_SUCCESS: 'You registered successfully.',
  INVALID_ROLE: 'Please pass a valid role.',
  UPLOAD_FILE_ERROR: 'Unable to upload files. Please try again.',
  INVALID_MIME_TYPE: 'Please upload either jpeg or png file.',
  PASSWORD_SAME_AS_EARLIER: 'Old password can not be same as new password.',
  EMAIL_EXIST: 'This email already exists.',
  INVALID_PASSWORD: 'Incorrect password.',
  ACCOUNT_INACTIVE: 'Your account has been deactivated by Admin.',
  EMAIL_NOT_VERIFIED: 'Please verify your email and create your password.',
  ACCOUNT_DELETE: 'Your account is removed by super admin.',
  INVALID_EMAIL: 'Please enter a valid email and password.',
  LOGIN_SUCCESSFUL: 'Login successfully.',
  TOKEN_ACCEPTED: 'Token Accepted.',
  INVALID_TOKEN: 'Invalid Token.',
  PASSWORD_CREATED_SUCCESS: 'You have created a new password.',
  CREATE_ADMIN: 'Super admin created successfully.',
  NO_SUCH_EMAIL: 'No such email is registered with us. Please check again.',
  RESET_PASSWORD_LINK: 'Link has been sent to the registered email address.',
  NOT_EMAIL_VERIFICATION_YET:
    "Looks like you haven't verified your email. Please check again.",
  EXPIRED_RESET_PASSWORD_TOKEN_LINK:
    "We're sorry, your password reset link has expired, please attempt to reset your password again.",
  VALID_VARIFICATION_LINK: 'User verification link valid.',
  TOKEN_NOT_FOUND: 'Please pass token to access this request',
  INCORRECT_PASSWORD_FORMAT: 'The password must contain at least: one uppercase letter, one number, and one special character (E.g. !@#$ etc).',
  NEW_PASS_SAME_AS_LAST: 'Old password can not be same as new password.',
  PASSWORD_NOT_MATCH: 'Old password did\'t match.',
  PASSWORD_UPDATED: 'Your password has been updated successfully.',
  PROFILE_UPDATE_SUCCESS: 'Your profile has been updated successfully.',
  USER_PROFILE: 'User profile data.',
};
CONSTANTS.MATCH_ROLE = ['artist', 'manager'];

CONSTANTS.ROLE = ['admin', 'sub-admin', 'user'];

CONSTANTS.BOOK_STATUS = ['available', 'assigned'];

CONSTANTS.NUMBER = {
  ONE: 1,
  EIGHT: 8,
  SIXTEEN: 16,
  ZERO: 0,
  TWENTY: 20,
  THOUSAND: 1000,
  TWO: 2,
  HUNDRED: 100,
};

CONSTANTS.MODEL = {
  TYPE_STRING_INDEX: {
    type: String, default: null, trim: true, index: true,
  },
};

CONSTANTS.EMAIL_SENDER = {};

CONSTANTS.KEYS = {
};

CONSTANTS.ERROR_TYPE = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: {
    message: 'Payment Required',
    statusCode: 402,
  },
  FORBIDDEN: {
    message: 'Forbidden',
    statusCode: 403,
  },
  NOT_FOUND: {
    message: 'Not Found',
    statusCode: 404,
  },
  METHOD_NOT_ALLOWED: {
    message: 'Method Not Allowed',
    statusCode: 405,
  },
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: {
    message: 'Proxy Authentication Required',
    statusCode: 407,
  },
  REQUEST_TIMEOUT: {
    message: 'Request Timeout',
    statusCode: 408,
  },
  CONFLICT: 409,
  GONE: {
    message: 'Gone',
    statusCode: 410,
  },
  LENGTH_REQUIRED: {
    message: 'Length Required',
    statusCode: 411,
  },
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: {
    message: 'Payload Too Large',
    statusCode: 413,
  },
  URI_TOO_LONG: {
    message: 'URI Too Long',
    statusCode: 414,
  },
  UNSUPPORTED_MEDIA_TYPE: {
    message: 'Unsupported Media Type',
    statusCode: 415,
  },
  RANGE_NOT_SATISFIABLE: {
    message: 'Range Not Satisfiable',
    statusCode: 416,
  },
  EXPECTATION_FAILED: {
    message: 'Expectation Failed',
    statusCode: 417,
  },
  IM_A_TEAPOT: {
    message: 'I\'m a teapot',
    statusCode: 418,
  },
  MISDIRECTED_REQUEST: {
    message: 'Misdirected Request',
    statusCode: 421,
  },
  UNPROCESSABLE_ENTITY: {
    message: 'Unprocessable Entity',
    statusCode: 422,
  },
  LOCKED: {
    message: 'Locked',
    statusCode: 423,
  },
  FAILED_DEPENDENCY: {
    message: 'Failed Dependency',
    statusCode: 424,
  },
  UNORDERED_COLLECTION: {
    message: 'Unordered Collection',
    statusCode: 425,
  },
  UPGRADE_REQUIRED: {
    message: 'Upgrade Required',
    statusCode: 426,
  },
  PRECONDITION_REQUIRED: {
    message: 'Precondition Required',
    statusCode: 428,
  },
  TOO_MANY_REQUESTS: {
    message: 'Too Many Requests',
    statusCode: 429,
  },
  REQUEST_HEADER_FIELDS_TOO_LARGE: {
    message: 'Request Header Fields Too Large',
    statusCode: 431,
  },
  UNAVAILABLE_FOR_LEGAL_REASONS: {
    message: 'Unavailable For Legal Reasons',
    statusCode: 451,
  },
  INTERNAL_SERVER_ERROR: {
    message: 'Internal Server Error',
    statusCode: 500,
  },
  NOT_IMPLEMENTED: {
    message: 'Not Implemented',
    statusCode: 501,
  },
  BAD_GATEWAY: {
    message: 'Bad Gateway',
    statusCode: 502,
  },
  SERVICE_UNAVAILABLE: {
    message: 'Service Unavailable',
    statusCode: 503,
  },
  GATEWAY_TIMEOUT: {
    message: 'Gateway Timeout',
    statusCode: 504,
  },
  HTTP_VERSION_NOT_SUPPORTED: {
    message: 'HTTP Version Not Supported',
    statusCode: 505,
  },
  VARIANT_ALSO_NEGOTIATES: {
    message: 'Variant Also Negotiates',
    statusCode: 506,
  },
  INSUFFICIENT_STORAGE: {
    message: 'Insufficient Storage',
    statusCode: 507,
  },
  LOOP_DETECTED: {
    message: 'Loop Detected',
    statusCode: 508,
  },
  BANDWIDTH_LIMIT_EXCEEDED: {
    message: 'Bandwidth Limit Exceeded',
    statusCode: 509,
  },
  NOT_EXTENDED: {
    message: 'Not Extended',
    statusCode: 510,
  },
  NETWORK_AUTHENTICATION_REQUIRED: {
    message: 'Network Authentication Required',
    statusCode: 511,
  },
};

export default CONSTANTS;
