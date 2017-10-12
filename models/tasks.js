module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                { title: "Fazer compras em miami" },
                { title: "Consertar o pc" }
            ]);
        }
    }
}