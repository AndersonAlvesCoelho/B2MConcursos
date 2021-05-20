export const dataFormatada = (data) => {

    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    let dt = new Date(data);
    return ((dt.getDate() + " " + meses[(dt.getMonth())] + " " + dt.getFullYear()));

}


export const formatDate = (dt, s = "/") => {
    const date = new Date(dt),

        day = date.getDate().toString(),

        dayF = day.length === 1 ? "0" + day : day,
        month = (date.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        monthF = month.length === 1 ? "0" + month : month,
        yearF = date.getFullYear();

    return dayF + s + monthF + s + yearF;
};
