import { writeFile } from "fs";
import { exec } from "child_process";

exec("npm pkg get version", (err, output) => {
  if (err) return Error("Erro ao atualizar/criar a RELEASE\n");

  const version = output.replaceAll('"', "");

  const body = `# v${version} - Atualização da Lib

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor lobortis massa, nec consectetur lectus ultricies eu.

## Enredo

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor lobortis massa, nec consectetur lectus ultricies eu. Aenean lectus tellus, rhoncus at est ut, rutrum vulputate neque. Ut ultricies semper turpis at lobortis. Curabitur gravida, dui nec finibus aliquam, est nisi maximus libero, sed euismod diam turpis fringilla purus. Fusce vehicula tellus non urna tempus elementum. Aliquam non velit fermentum, gravida leo at, interdum sem. Maecenas sagittis diam non pharetra ultricies. Mauris lacinia at metus pulvinar tempor.

## Atualizações

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor lobortis massa, nec consectetur lectus ultricies eu. Aenean lectus tellus, rhoncus at est ut, rutrum vulputate neque. Ut ultricies semper turpis at lobortis. Curabitur gravida, dui nec finibus aliquam, est nisi maximus libero, sed euismod diam turpis fringilla purus. Fusce vehicula tellus non urna tempus elementum. Aliquam non velit fermentum, gravida leo at, interdum sem. Maecenas sagittis diam non pharetra ultricies. Mauris lacinia at metus pulvinar tempor.

### Lista de Atualizações

- Lorem ipsum dolor sit amet:

  aaaaaaaa

- Lorem ipsum dolor sit amet:

  bbbbbbbb

- Lorem ipsum dolor sit amet:

  cccccccc

## Bugs Corrigidos

us, rhoncus at est ut, rutrum vulputate neque. Ut ultricies semper turpis at lobortis. Curabitur gravida, dui nec finibus aliquam, est nisi maximus libero, sed euismod diam turpis fringilla purus. Fusce vehicula tellus non urna tempus elementum. Aliquam non velit fermentum, gravida leo at, interdum sem. Maecenas sagittis diam non pharetra ultrici

## Considerações Finais

us, rhoncus at est ut, rutrum vulputate neque. Ut ultricies semper turpis at lobortis. Curabitur gravida, dui nec finibus aliquam, est nisi maximus libero, sed euismod diam turpis fringilla purus. Fusce vehicula tellus non urna tempus elementum. Aliquam non velit fermentum, gravida leo at, interdum sem. Maecenas sagittis diam non pharetra ultrici`;

  writeFile("./.github/templates/RELEASE.md", body, "utf8", (err) =>
    err
      ? console.log("Ocorreu um erro ao criar/modificar a RELEASE.md\n")
      : console.log("RELEASE.md criada/modificada com sucesso!\n")
  );
});
