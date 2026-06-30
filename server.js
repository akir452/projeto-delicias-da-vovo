const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Permite receber dados do formulário
app.use(express.urlencoded({ extended: true }));

// Serve arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, "public")));

// Rota do formulário
app.post("/enviar", (req, res) => {
    const { nome, email, mensagem } = req.body;

    // Validação
    if (!nome || !email || !mensagem) {
        return res.send(`
            <h1>Erro</h1>
            <p>Todos os campos são obrigatórios.</p>
            <a href="/">Voltar</a>
        `);
    }

    // Página de sucesso
    return res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Sucesso</title>
            <style>
                body {
                    font-family: Arial;
                    text-align: center;
                    padding: 50px;
                }
                .box {
                    border: 1px solid #ddd;
                    padding: 20px;
                    border-radius: 10px;
                    max-width: 500px;
                    margin: auto;
                }
            </style>
        </head>
        <body>
            <div class="box">
                <h1>Mensagem enviada com sucesso!</h1>

                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensagem:</strong> ${mensagem}</p>

                <a href="/">Voltar ao site</a>
            </div>
        </body>
        </html>
    `);
});

// inicia servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});