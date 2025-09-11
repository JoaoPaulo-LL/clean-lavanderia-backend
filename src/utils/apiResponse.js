// utils/apiResponse.js

/**
 * Monta um objeto de resposta padronizado para a API
 * @param {any} data - Dados a serem retornados
 * @param {string} message - Mensagem de status
 * @returns {object}
 */
export function apiResponse(data, message = "Sucesso") {
  return {
    data,
    total: Array.isArray(data) ? data.length : undefined,
    message
  };
}
