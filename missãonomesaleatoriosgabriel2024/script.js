// Função que retorna um nome aleatório da lista
export function aleatorio() {
    const nomes = ["João", "Maria", "Lucas", "Ana", "Carlos", "Sofia", "José", "Laura", "Pedro", "Julia"];
    const indiceAleatorio = Math.floor(Math.random() * nomes.length);
    return nomes[indiceAleatorio];
  }
  