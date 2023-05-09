import queryString from 'query-string';

const secretKey = 'O-SEAN-SECRET-KEY';

export const queryStringify = (
  obj: any,
  options = {
    skipNull: true,
    skipEmptyString: true,
    encode: false,
  }
) => {
  return queryString.stringify(obj, options);
};

export const dialCodePrefix = (dialCode: string) => {
  if (typeof dialCode === 'string') {
    if (dialCode.includes('+')) {
      return dialCode;
    } else {
      return `+${dialCode}`;
    }
  } else {
    console.warn('dialCodePrefix: dialCode is not string');
    return dialCode;
  }
};

export const getImageExtension = (fileName: string) => {
  return fileName.split('.').pop();
};

export const maskString = (str: string, start: number, end: number) => {
  const mask = '...';
  if (!str) return '';
  return str.slice(0, start) + mask + str.slice(-end);
};

export const displayBalance = (amount, decimals = 18, dp = 4) => {
  return (amount / 10 ** decimals).toFixed(dp);
};

/* 문자열 암호화 */
function xorEncryptDecrypt(input) {
  let output = '';

  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i) ^ secretKey.charCodeAt(i % secretKey.length);
    output += String.fromCharCode(charCode);
  }

  return output;
}

function stringToHex(input) {
  let hex = '';

  for (let i = 0; i < input.length; i++) {
    const code = input.charCodeAt(i).toString(16);
    hex += code.padStart(4, '0');
  }

  return hex;
}

function hexToString(hex) {
  let str = '';

  for (let i = 0; i < hex.length; i += 4) {
    str += String.fromCharCode(parseInt(hex.substr(i, 4), 16));
  }

  return str;
}

export const encrypt = (input) => {
  const encrypted = xorEncryptDecrypt(input);
  return stringToHex(encrypted);
};

export const decrypt = (encrypted) => {
  const encryptedStr = hexToString(encrypted);
  return xorEncryptDecrypt(encryptedStr);
};
