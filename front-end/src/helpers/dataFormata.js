export const dataFormatada = (data) => {
    function pad(num, size) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }

    const date = new Date(data);
    const dia = date.getDate();
    const mes = pad(date.getMonth() + 1, 2);
    const ano = date.getFullYear();

    return `${dia}-${mes}`;
}
