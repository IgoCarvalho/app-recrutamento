import { database } from "./firebase";

export async function getOcorrencias() {
  try {
    const result = await database.collection('ocorrencias').get();

    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function createOcorrencia(ocorrenciaData) {
  try {
    const result = await database.collection('ocorrencias').add(ocorrenciaData);

    return result;
  } catch (error) {
    console.log(error);
  }

}