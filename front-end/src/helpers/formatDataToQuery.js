/* Descrição: 
* Arquivo do tipo helper
* Esse arquivo tem como objetico, facilitar o filtro de dados no back-end.
* As funções abixo, compara o valoar selecionado pelo usuario com o valoar do campo correspondende,
* retornando somente o id de cada valor. 
*/

export const formatDefault = (value, data) => {
    const id = [];
    console.log('id 1 ', data);

    if (value && typeof value !== String ) {
        data.map(e => {
            if (value === e.value) {
                return id.push(e.title);
            }
        })
    } else if (value) {
        value.forEach((e) => {
            data.map(evnt => {
                if (e === evnt.value) {
                    return id.push(evnt.title);
                }
            })
        });
    }

    console.log('id 2 ', data);
    return id;
};


export const formatDefaultRegister = (value, data) => {
    var id;

    if (value && typeof value !== String ) {
        data.map(e => {
            if (value === e.value) {
                return id = e.id;
            }
        })
    } else if (value) {
        value.forEach((e) => {
            data.map(evnt => {
                if (e === evnt.value) {
                    return id.push(evnt.td);
                }
            })
        });
    }
    return id;
};

export const formataOffice = (office, data) => {
    const id = [];
    const idOffice01 = [];
    const idOffice02 = [];
    const idOffice03 = [];
    const idOffice04 = [];

    if (office) {
        const valueOffice01 = office.filter(e01 => e01.length === 3);
        const valueOffice02 = office.filter(e02 => e02.length === 5);
        const valueOffice03 = office.filter(e03 => e03.length === 7);
        const valueOffice04 = office.filter(e04 => e04.length === 9);

        // return id office niv 01
        valueOffice01.forEach((e) => {
            data.map(evnt => {
                if (e === evnt.value) {
                    return idOffice01.push(evnt.id);
                }
            })
        });
        // return id office niv 02
        valueOffice02.forEach((e) => {
            data.map(evnt => {
                evnt.children.map(evnt02 => {
                    if (e === evnt02.value) {
                        return idOffice02.push(evnt02.id);
                    }
                })
            })
        });
        // return id office niv 03
        valueOffice03.forEach((e) => {
            data.map(evnt => {
                evnt.children.map(evnt02 => {
                    evnt02.children.map(evnt03 => {
                        if (e === evnt03.value) {
                            return idOffice03.push(evnt03.id);
                        }
                    })
                })
            })
        });
        // return id office niv 04
        valueOffice04.forEach((e) => {
            data.map(evnt => {
                evnt.children.map(evnt02 => {
                    evnt02.children.map(evnt03 => {
                        evnt03.children.map(evnt04 => {
                            if (e === evnt04.value) {
                                return idOffice04.push(evnt04.id);
                            }
                        })
                    })
                })
            })
        });

        id.push(idOffice01, idOffice02, idOffice03, idOffice04);
    }

    return id;
};

export const formataDicipline = (dicipline, data) => {
    const id = [];

    const idDicipline = [];
    const idSubject01 = [];
    const idSubject02 = [];
    const idSubject03 = [];

    if (dicipline) {
        const valueDicipline = dicipline.filter(e => e.length === 3);
        const valueSubject01 = dicipline.filter(e01 => e01.length === 5);
        const valueSubject02 = dicipline.filter(e02 => e02.length === 7);
        const valueSubject03 = dicipline.filter(e03 => e03.length === 9);

        // return id dicipline niv 01
        valueDicipline.forEach((e) => {
            data.map(evnt => {
                if (e === evnt.value) {
                    return idDicipline.push(evnt.id);
                }
            })
        });
        // return id Subject niv 02
        valueSubject01.forEach((e) => {
            data.map(evnt => {
                evnt.children.map(evnt02 => {
                    if (e === evnt02.value) {
                        return idSubject01.push(evnt02.id);
                    }
                })
            })
        });
        // return id Subject niv 03
        valueSubject02.forEach((e) => {
            data.map(evnt => {
                evnt.children.map(evnt02 => {
                    evnt02.children.map(evnt03 => {
                        if (e === evnt03.value) {
                            return idSubject02.push(evnt03.id);
                        }
                    })
                })
            })
        });
        // return id Subject niv 04
        valueSubject03.forEach((e) => {
            data.map(evnt => {
                evnt.children.map(evnt02 => {
                    evnt02.children.map(evnt03 => {
                        evnt03.children.map(evnt04 => {
                            if (e === evnt04.value) {
                                return idSubject03.push(evnt04.id);
                            }
                        })
                    })
                })
            })
        });

        id.push(idDicipline, idSubject01, idSubject02, idSubject03);
    }

    return id;
};