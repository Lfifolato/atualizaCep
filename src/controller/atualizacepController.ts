import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//Import Services
import { buscaCep } from "../Services/buscaCep";
import { createCepApi } from "../Services/createCepApi";

export async function AtualizaCep(limit: number) {
  const data: [] = await prisma.$queryRaw`SELECT b.cep 
  FROM BaseCep b
  where 1=1
  and not EXISTS (select 1 from CepApi a
  where a.cep = b.cep)
  LIMIT ${limit};`;

  data.map(async function (item: any) {
    const resApi = await buscaCep(item.cep);
    await createCepApi(item.cep, resApi);
  });
}
