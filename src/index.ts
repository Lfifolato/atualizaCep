import { AtualizaCep } from "./controller/atualizacepController";

setInterval(async function () {
  await AtualizaCep(500);
}, 10 * 1000);
