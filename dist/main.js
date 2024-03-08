const alunos = [{
  nome: 'Victor',
  nota: 4
}, {
  nome: 'Pedro',
  nota: 10
}, {
  nome: 'João',
  nota: 6
}, {
  nome: 'Antonio',
  nota: 7
}, {
  nome: 'Andre',
  nota: 9
}, {
  nome: 'Cacio',
  nota: 3
}];
const notasMaiorQueSeis = alunos.map(alunoAtual => {
  if (alunoAtual.nota >= 6) {
    return alunoAtual.nota;
  }
}).filter(Boolean); //Utilizado para fazer com que as notas que não foram selecionadas não apareçam undifined.

console.log(notasMaiorQueSeis);