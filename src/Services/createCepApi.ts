import { cepApi } from "../Model/cepApi";

import { PrismaClient } from "@prisma/client";

import { removeAcento } from "./removeAcento";

const prisma = new PrismaClient();
/**
 * @param  {string} cep
 * @param  {cepApi} data
 */
export async function createCepApi(cep: string, data: cepApi) {
  try {
    if (data.status == "404") {
      await prisma.cepApi.create({
        data: {
          cep: cep,
          status: data.status,
          error: data.error,
        },
      });
    }

    await prisma.cepApi.create({
      data: {
        cep: cep,
        address_type: removeAcento(data.address_type),
        address_name: removeAcento(data.address_name),
        address: removeAcento(data.address),
        state: removeAcento(data.state),
        district: removeAcento(data.district),
        city: removeAcento(data.city),
        city_ibge: data.city_ibge,
        ddd: data.ddd,
        status: data.status,
        error: data.error,
      },
    });
  } catch (error) {}
}
