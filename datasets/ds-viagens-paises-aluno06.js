function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();

    dataset.addColumn("codigo");
    dataset.addColumn("nome");
    dataset.addColumn("sigla");

    var paises = [
        ["BRA", "Brasil", "BR"],
        ["ARG", "Argentina", "AR"],
        ["CHL", "Chile", "CL"],
        ["COL", "Colômbia", "CO"],
        ["PER", "Peru", "PE"],
        ["URY", "Uruguai", "UY"],
        ["PRY", "Paraguai", "PY"],
        ["BOL", "Bolívia", "BO"],
        ["ECU", "Equador", "EC"],
        ["VEN", "Venezuela", "VE"],
        ["USA", "Estados Unidos", "US"],
        ["CAN", "Canadá", "CA"],
        ["MEX", "México", "MX"],
        ["PRT", "Portugal", "PT"],
        ["ESP", "Espanha", "ES"],
        ["FRA", "França", "FR"],
        ["DEU", "Alemanha", "DE"],
        ["ITA", "Itália", "IT"],
        ["GBR", "Reino Unido", "GB"],
        ["JPN", "Japão", "JP"]
    ];

    for (var i = 0; i < paises.length; i++) {
        dataset.addRow(paises[i]);
    }
log.info('')
    return dataset;
}
