const dev = {
    BASE_URL: "http://localhost:3333"
};

const prod = {
    BASE_URL: "...",
};

const config = process.env.NODE_ENV === "development" ? dev : prod;

export default {
    // Adicionar valores comuns aqui
    ...config,
};
