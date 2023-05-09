export const REGEXP_EMAIL = /^[0-9a-zA-Z-_\.]*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

// 8자 이상 영문,숫자,특수문자를 모두 포함하는 정규식
export const REGEXP_PASSWORD = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,100}$/;
