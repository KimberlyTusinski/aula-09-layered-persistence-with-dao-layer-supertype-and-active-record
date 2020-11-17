# Aula #09 Arquitetura em Camadas, Persistência com DAO, Layer Supertype e Active Record

## Lições/Vídeo-aulas

Playlist: <https://www.youtube.com/playlist?list=PLLkaWLH9A_QUttQd35uGp4_rq7BTZBtgq>

### 09.01 Intro Semana [3m]

<https://youtu.be/NdzPl1DFBxs>

### 09.02 Os Três Principais _Concerns_ [17m]

<https://youtu.be/UisMbwnvtZk>

### 09.03 As Três Camadas Fundamentais [20m]

<https://youtu.be/SxwHOQHIdCM>

### 09.04 Camadas de Persistência e Estratégias para Implementação [19m]

<https://youtu.be/Fvm3KFi0EZ4>

### 09.05 Migrando da _lib_ `sqlite3` (assíncrona) para `better-sqlite3` (síncrona) [22m]

<https://youtu.be/L_24FsJWyKk>

### 09.06 Camadas com Pacotes/Pastas e o Padrão Data Access Object (DAO / Genérico) [19m]

<https://youtu.be/m0hthmQOUCA>

### 09.07 DAO Genérico, Métodos e Testagem [17m]

<https://youtu.be/zIa_6XloVLk>

### 09.08 DAO Específico [17m]

<https://youtu.be/wILo5wQSB14>

### 09.09 Padrão de Arquitetura Layer Supertype [24m]

<https://youtu.be/gi7KE8sJ3Ko>

### 09.10 Camadas das Regras de Negócio (Domínio ou Modelo) [15m]

<https://youtu.be/v9NQ1OJA_r4>

### 09.11 Padrão de Arquitetura Active Record [11m]

<https://youtu.be/rIBT3Co2ao4>

### 09.12 Considerações e Atividade [6m]

<https://youtu.be/uLPPV1Arzas>

## Recursos e Links

[Chapter 1. Layered Architecture - Software Architecture by Mark Richards - O'Reilly](https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch01.html)

[Microsoft Application Architecture Guide, 2nd Edition](https://docs.microsoft.com/en-us/previous-versions/msp-n-p/ff650706(v=pandp.10))

[Core J2EE Patterns](http://www.corej2eepatterns.com)

[Data Access Object (DAO) - Core J2EE Patterns](http://www.corej2eepatterns.com/DataAccessObject.htm) e [Table Data Gateway  - P of EAA Catalog](https://martinfowler.com/eaaCatalog/tableDataGateway.html)

[Active Record - P of EAA Catalog](https://martinfowler.com/eaaCatalog/activeRecord.html)

[Layer Supertype  - P of EAA Catalog](https://martinfowler.com/eaaCatalog/layerSupertype.html)

[Query Object - P of EAA Catalog](https://martinfowler.com/eaaCatalog/queryObject.html)

[Active Record - Ruby on Rails](https://guides.rubyonrails.org/active_record_basics.html)

[HTTP Status 400 - Bad Request](https://http.cat/400)

## Teoria

### As três principais **camadas**

Seguindo o princípio _Separation of Concerns (SoC)_

#### Apresentação

- Interface do Usuário
- Apresentação (_presentation_)
- Visão (_view_)

#### Lógica

- Lógica do Domínio (_Domain Logic_)
- Regras de Negócio (_Business Rules_)

#### Persistência

- Persistência de Dados (_Persistence_)
- Data Source Patterns
- Camada de Integração (_Integration Tier_)
- ORM - Object-Relation Mapping
- RDBMS (Relation Data Base Management System - SGBDR)

## Estratégias para camada de persistência

O que será feito primeiro após os requisitos serem levantados?

- _Database First_ (primeiro o banco - diagrama ER, conceitual, schema)
- _Model First_ (primeiro a modelagem - diagrama classes)
- _Code First_ (sair codando as classes e métodos, diagramas e banco vêm depois)
