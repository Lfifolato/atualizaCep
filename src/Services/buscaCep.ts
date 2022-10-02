import { api } from "../api";
/**
 * @param  {string} cep
 */
export async function buscaCep(cep: string) {
  try {
    const { data, status } = await api.get(cep);

    if (status == 400) {
      return { cep: cep, status: "400", error: true };
    }

    const dataSuccess = {
      ...data,
      status: "200",
      error: false,
    };

    return dataSuccess;
  } catch (error) {
    return { cep: cep, status: "404", error: true };
  }
}
