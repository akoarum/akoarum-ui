export const FORM_VALIDATE_ERRORS = {
  REQUIRED: 'この項目は入力必須です。',
  EMAIL: {
    regex: /^[-a-zA-Z0-9!#$%&'*+\-/=?^_`.{|}~]+@[-a-zA-Z0-9]+(\.[-a-zA-Z0-9]+)*\.[a-zA-Z]{2,6}$/,
    message: 'メールアドレスの形式になっていません。'
  },
  TEL: {
    regex: /^\d{2,5}-?\d{1,4}-?\d{4}$/,
    message: '電話番号（半角数字）で入力してください。'
  }
}
