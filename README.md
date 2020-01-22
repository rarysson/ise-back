# ISE

Este repositório é destinado para o desenvolvimneto da API back-end do projeto ISE (Informando Sobre Educação).

A API está sendo executada pelo [Heroku](https://api-infoedu.herokuapp.com/).

## Rotas

### Buscar dados IDEB do Brasil
rota: {rotabase}/brasil

### Buscar dados IDEB por Região/Estado
rota: {rotabase}/regiao/:regiao

### Buscar dados IDEB por Município por Código
rota: {rotabase}/municipio/:codigomunicipio

### Buscar dados IDEB por Município por Nome
rota: {rotabase}/municipio/:codigomunicipio

### Buscar dados IDEB por Escola
rota: {rotabase}/municipio/:escola

### Buscar melhor Escola por Município
rota: {rotabase}/escola/melhor/ideb/:municipio