const alunos = [
  {
    nome: "João",
    nota: 5,
    turma: "1B"
  },
  {
    nome: "Sofia",
    nota: 9,
    turma: "1B"
  },
  {
    nome: "Paulo",
    nota: 6,
    turma: "2C"
  },
  {
    nome: "Maurício",
    nota: 8,
    turma: "2C"
  },
  {
    nome: "Ana Clara",
    nota: 7,
    turma: "3A"
  },
  {
    nome: "Humberto",
    nota: 4,
    turma: "3A"
  },
  {
    nome: "Beatriz",
    nota: 10,
    turma: "3A"
  }
]

function alunosAprovados(arrayAlunos, mediaFinal) {
  let aprovados = []

  for(i = 0; i < arrayAlunos.length; i++) {
    const { nota, nome } = arrayAlunos[i]

    if (nota >= mediaFinal) {
      aprovados.push(nome)
    }
  }
  
  return aprovados
}

console.log(alunosAprovados(alunos, 6))