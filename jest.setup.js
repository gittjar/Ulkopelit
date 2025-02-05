const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const { enableFetchMocks } = require('jest-fetch-mock');
require('@testing-library/jest-dom');

enableFetchMocks();