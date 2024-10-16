async function handle() {
    let characteres = [];
    let password = "";
    const passwordLength = Number(process.env.PASSWORD_LENGTH) || 12;

    // Adiciona letras maiúsculas (A-Z)
    if (process.env.UPPERCASE_LETTERS === "true") {
        characteres.push(...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)));
    }

    // Adiciona letras minúsculas (a-z)
    if (process.env.LOWERCASE_LETTERS === "true") {
        characteres.push(...Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)));
    }

    // Adiciona números (0-9)
    if (process.env.NUMBERS === "true") {
        characteres.push(...'0123456789');
    }

    // Adiciona caracteres especiais
    if (process.env.SPECIAL_CHARACTERS === "true") {
        characteres.push(...'!@#$%^&*()-_');
    }

    // Verifica se há pelo menos um tipo de caractere disponível
    if (characteres.length === 0) {
        throw new Error("Nenhum tipo de caractere foi selecionado para gerar a senha.");
    }

    // Gera a senha aleatória
    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characteres.length);
        password += characteres[index];
    }

    return password;
}

export default handle;
