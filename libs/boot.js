module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get("port", () => {
            console.log(`NTASK API - porta ${app.get("port")}`);
        }));
    });
}