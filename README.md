[<img align="left" height="165px" width="135px" alt="Warpnet" src="https://ik.imagekit.io/e6khzhxvx/Group_3Valisk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672190456214"/>]()

## React Valisk

Trata-se de uma biblioteca com a finalidade de proporcionar máscaras e validações para os campos de texto, tudo por meio de `HOOKS`, visando as tipagens e variadas opções para personalização.

<br />

<div align="center">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/maumuller/react-valisk?color=%23ff1f3d&label=npm&style=for-the-badge" width="100">

  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/maumuller/react-valisk/publish-package-and-release.yml?color=black&style=for-the-badge" width="130">

  <img alt="GitHub" src="https://img.shields.io/github/license/maumuller/react-valisk?color=%23ff1f3d&style=for-the-badge" width="100">

  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/maumuller/react-valisk?color=black&style=for-the-badge" width="140">
</div>

<br />

<div align="center">

[<img width="500" src="https://ik.imagekit.io/e6khzhxvx/valisk-preview.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672165728023"/>]()

</div>

<br />

<div align="center">

> Essa é uma biblioteca feita em **REACT** e **TYPESCRIPT**, porém pode ser integrada com qualquer outra lib/framework, isso porque assim como os `hooks` do REACT, VALISK apenas utiliza `hooks` para controlar o campo de texto.

</div>

<br />

## Introdução

A ideia da construção da biblioteca já existia a muito tempo, porém, apenas depois de adquirir conhecimento das técnologias da modernidade que fui capaz de realiza-lá.

**Valisk** trabalha `hooks`, ou seja, funcionalidades que realizam algumas tarefas para facilitar o dia a dia do desenvolvedor, esses hooks são a essencia do React funcional, aqui está um link para entender melhor sobre o funcionamento -> [React Hooks](https://pt-br.reactjs.org/docs/hooks-reference.html#gatsby-focus-wrapper).

A biblioteca disponibiliza _métodos_, _hooks_ e _valores_ iniciais para deixar bem completo o desenvolvimento. Qualquer dúvida, basta navegar até a sessão -> [API de Referência](#api-de-referencia) e procurar pela questão em especial ou ainda, mandar uma issue.

Agora segue abaixo o menu para um **roadmap** de refencia sobre a Lib:

### Mapa da documentação

- Instalação

  - [NPM](#npm)
  - [Github](#github)
  - [Yarn](#yarn)

- [Casos de Uso](#casos-de-uso)
- [API de Referência](#api-de-referência)
  - [**useMaskCPF**](#usemaskcpf)
  - [**useMaskCNPJ**](#usemaskcnpj)
  - [**useMaskCEP**](#usemaskcep)

<br />

## Instalação

Para sua utilização é necessário a instalação do pacote, para isso existem algumas possibilidades até o momento, entre elas:

- ### NPM

  Através do gerenciador de pacotes mais utilizado entre o desenvolvimento, podendo assim, acessar o pacote no site oficial.

  **Repositório**:
  <https://www.npmjs.com/settings/mauricio_m_s/packages>

  ```shell
  npm i react-valisk
  ```

- ### Github

  Se preferir, é possível instalar pelo próprio GITHUB, acessando o pacote através do repositório, realizando o clone e instalando para a utilização.

  **Repositório**:
  <https://github.com/MauMuller/react-valisk/>

  ```shell
  Em breve...
  ```

- ### Yarn

  ```shell
  Em breve...
  ```

<br />

## Casos de uso

Aqui iremos entrar em alguns exemplos de uso, porém o foco é apenas o a apresentação do hook.

<br />

## API de Referência

Nessa sessão você poderá tirar todas suas dúvidas quanto a parametros ou retornos dos hooks, assim como ententer os tipos e até mesmo verificar a sintaxe de utilização para variados casos de uso.

Antes de olhar a documentação, é necessário ter em mente como que funciona de forma prática os principais conceitos da biblioteca.

Os principais conceitos são bem simples, básicamente `parametros` e `retornos`, eles são, respectivamente, valores de entrada e de saída.

Podemos ver abaixo de forma ilustrativa como que eles se moldam dentro do código:

```JS
import { useMasks } from "react-valisk";

// [values, setValues, isValid, setKey] - Valores de Retorno
// { cpf: { inicialValue: '0452' } } - Valor de Parâmetro

const [values, setValues, isValid, setKey] = useMasks({
  cpf: {
    inicialValue: '0452'
  }
});
```

Assim como desmonstrado no código acima, os valores de `retorno` são aqueles que são `desestruturados` a partir de um `array` _(Caso não saiba do que se trata a **"Desestruturação do ECMAScript"** -> [Desestruturação de Valores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment))_.

Já os valores de `parâmetro`, são aqueles passados através do `objeto` dentro da chamada do `hook`, a partir dele é posível saber quais propriedades são esperadas para cada mascará selecionada.

---

Com essa breve explicação, vamos aos tópicos de `cada um dos hooks`, mostrando um pouco das suas propriedades, retornos e possibilidades dentro do desenvolvimento:

<br />

- ## useMaskCPF

  - [x] Máscara Válida;
  - [x] Válidação ao completar a máscara;
  - [x] Funciona em conjunto com o `Auto-Complete do navegador`;
  - [x] `CTRL-C / CTRL-V` com ou sem máscara;

  Definições:
  : <details>
    <summary><b>Template</b></a></summary>

  ```TS
    //000.000.000-00
  ```

    </details>

    <details>
    <summary><b>Sintaxe</b></summary>

  ```Typescript
    import { useMaskCPF } from "react-valisk";

    ...

    const [value, setValue, isValid, setKey] = useMaskCPF({
      inicialValue: "4823",
      useExplictMask: true
    });

  ```

    </details>

    <details>
    <summary><b>Parâmetros</b></summary>
    <br />

  > OBS: É necessário passar um objeto inicial, mesmo que seja vázio.

  | Propriedade      | Tipos                 | Obrigatório | Descrição                                |
  | :--------------- | :-------------------- | :---------- | :--------------------------------------- |
  | `{}`             | Object                | Sim         | Objeto Vázio.                            |
  | `inicialValue`   | String _/_ Undefined  | Não         | Valor inicial para o campo de texto.     |
  | `useExplictMask` | Boolean _/_ Undefined | Não         | Utilização da máscara de forma explicita |

    </details>

    <details>
    <summary><b>Retornos</b></summary>
    <br />

  > OBS: Os nomes das váriaveis são apenas uma convenção, mude se necessário.

  | Propriedade | Tipos             | Obrigatório                                                                   | Descrição                                                                                                |
  | :---------- | :---------------- | :---------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
  | `[]`        | Array             | Sim                                                                           | Array para desestruturação dos valores.                                                                  |
  | `value`     | String            | Sim                                                                           | Valor para o campo de texto.                                                                             |
  | `setValue`  | Function<string\> | Sim                                                                           | Função para atualizar o valor dentro do estado do hook.                                                  |
  | `isValid`   | Boolean           | Sim/Não _(Se o retorno `setKey` é utilizada, é necessário declarar)_          | Verifica se o valor em específico satisfaz a máscara.                                                    |
  | `setKey`    | Function<string\> | Sim/Não _(Se a propriedade `useExplictMask` é `true`, é necessário utilizar)_ | Função para capturar a tecla digitada e apagar a máscara quando a propriedade `useExplictMask` é `true`. |

    </details>

<br />

- ## useMaskCNPJ

  Esse hook funciona a partir do `template` mostrado entre os tópicos abaixo.

  **Lista de Caracteristicas**

  - [x] Máscara Válida;
  - [x] Válidação ao completar a máscara;
  - [x] Funciona em conjunto com o `Auto-Complete do navegador`;
  - [x] `CTRL-C / CTRL-V` com ou sem máscara;

<dl>
  <!-- Template -->
  <dd>
  <details>
    <summary><b>Template</b></a></summary>

```TS
  //00.000.000/0000-00
```

  </details>
  </dd>

  <!-- Sintaxe -->
  <dd>  
  <details>
    <summary><b>Sintaxe</b></summary>

```Typescript
  import { useMaskCNPJ } from "react-valisk";

  ...

  const [value, setValue, isValid, setKey] = useMaskCNPJ({
    inicialValue: "4823",
    useExplictMask: true
  });

```

  </details>
  </dd>

  <!-- Parâmetros -->
  <dd>  
  <details>
    <summary><b>Parâmetros</b></summary>

<br />

> OBS: É necessário passar um objeto inicial, mesmo que seja vázio.

| Propriedade      | Tipos                 | Obrigatório | Descrição                                |
| :--------------- | :-------------------- | :---------- | :--------------------------------------- |
| `{}`             | Object                | Sim         | Objeto Vázio.                            |
| `inicialValue`   | String _/_ Undefined  | Não         | Valor inicial para o campo de texto.     |
| `useExplictMask` | Boolean _/_ Undefined | Não         | Utilização da máscara de forma explicita |

  </details>
  </dd>

  <!-- Retornos -->
  <dd>
  <details>
    <summary><b>Retornos</b></summary>

<br />

> OBS: Os nomes das váriaveis são apenas uma convenção, mude se necessário.

| Propriedade | Tipos             | Obrigatório                                                                   | Descrição                                                                                                |
| :---------- | :---------------- | :---------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| `[]`        | Array             | Sim                                                                           | Array para desestruturação dos valores.                                                                  |
| `value`     | String            | Sim                                                                           | Valor para o campo de texto.                                                                             |
| `setValue`  | Function<string\> | Sim                                                                           | Função para atualizar o valor dentro do estado do hook.                                                  |
| `isValid`   | Boolean           | Sim/Não _(Se o retorno `setKey` é utilizada, é necessário declarar)_          | Verifica se o valor em específico satisfaz a máscara.                                                    |
| `setKey`    | Function<string\> | Sim/Não _(Se a propriedade `useExplictMask` é `true`, é necessário utilizar)_ | Função para capturar a tecla digitada e apagar a máscara quando a propriedade `useExplictMask` é `true`. |

  </details>
  </dd>
</dl>

<br />

- ## useMaskCEP

  Esse hook funciona a partir do `template` mostrado entre os tópicos abaixo.

  **Lista de Caracteristicas**

  - [x] Máscara
  - [x] Válidação
  - [x] Auto-Complete do navegador
  - [x] CTRL-C / CTRL-V com ou sem máscara

<dl>
  <!-- Template -->
  <dd>
  <details>
    <summary><b>Template</b></a></summary>

```TS
  //00000-000
```

  </details>
  </dd>

  <!-- Sintaxe -->
  <dd>  
  <details>
    <summary><b>Sintaxe</b></summary>

```Typescript
  import { useMaskCEP } from "react-valisk";

  ...

  const [value, setValue, isValid, setKey] = useMaskCEP({
    inicialValue: "4823",
    useExplictMask: true
  });

```

  </details>
  </dd>

  <!-- Parâmetros -->
  <dd>  
  <details>
    <summary><b>Parâmetros</b></summary>

<br />

> OBS: É necessário passar um objeto inicial, mesmo que seja vázio.

| Propriedade      | Tipos                 | Obrigatório | Descrição                                |
| :--------------- | :-------------------- | :---------- | :--------------------------------------- |
| `{}`             | Object                | Sim         | Objeto Vázio.                            |
| `inicialValue`   | String _/_ Undefined  | Não         | Valor inicial para o campo de texto.     |
| `useExplictMask` | Boolean _/_ Undefined | Não         | Utilização da máscara de forma explicita |

  </details>
  </dd>

  <!-- Retornos -->
  <dd>
  <details>
    <summary><b>Retornos</b></summary>

<br />

> OBS: Os nomes das váriaveis são apenas uma convenção, mude se necessário.

| Propriedade | Tipos             | Obrigatório                                                                   | Descrição                                                                                                |
| :---------- | :---------------- | :---------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| `[]`        | Array             | Sim                                                                           | Array para desestruturação dos valores.                                                                  |
| `value`     | String            | Sim                                                                           | Valor para o campo de texto.                                                                             |
| `setValue`  | Function<string\> | Sim                                                                           | Função para atualizar o valor dentro do estado do hook.                                                  |
| `isValid`   | Boolean           | Sim/Não _(Se o retorno `setKey` é utilizada, é necessário declarar)_          | Verifica se o valor em específico satisfaz a máscara.                                                    |
| `setKey`    | Function<string\> | Sim/Não _(Se a propriedade `useExplictMask` é `true`, é necessário utilizar)_ | Função para capturar a tecla digitada e apagar a máscara quando a propriedade `useExplictMask` é `true`. |

  </details>
  </dd>
</dl>
