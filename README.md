PAINEL METEOROLÓGICO — DESAFIO CIAG

Descrição:
Este projeto foi desenvolvido para o desafio técnico do CIAg.
O sistema permite consultar informações climáticas de uma cidade e registrar observações em um diário meteorológico.
As principais funcionalidades são:
•	Busca de clima por cidade
•	Exibição de latitude e longitude
•	Exibição de temperatura, velocidade do vento e direção do vento
•	Registro de notas com data
•	Armazenamento local das notas (LocalStorage)
•	Edição das Notas
•	Exclusão de notas
________________________________________
Tecnologias Utilizadas
•	HTML5 — estrutura
•	CSS3 — estilização
•	JavaScript — lógica, requisições, DOM e LocalStorage
•	Nominatim API — consulta de coordenadas
•	Open-Meteo API — consulta climática
________________________________________
Como Executar
1.	Faça o download ou clone o repositório:
2.	git clone https://github.com/GustavosJesusSec/painel-meteorologico
3.	Acesse a pasta do projeto:
4.	cd painel-meteorologico
5.	Abra o arquivo index.html no navegador.
Não é necessário instalar dependências.
________________________________________
Estrutura do Projeto
index.html   → Interface principal
style.css    → Estilos
script.js    → Lógica, APIs e diário
________________________________________
APIs Utilizadas
1. Nominatim (OpenStreetMap)
Retorna latitude e longitude com base no nome da cidade.
2. Open-Meteo
Retorna temperatura, velocidade do vento e direção do vento.
________________________________________
Status
Projeto finalizado e funcionando conforme os requisitos principais.
