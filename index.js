const fs = require('fs');
const pg = require('pg');
const url = require('url');
console.log("connecting to aivens....");
const config = {
    user: "avnadmin",
    password: "AVNS_1WeRvXT_ytqART5ESFg",
    host: "pg-mc-mc-01.a.aivencloud.com",
    port: 26477,
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUYzUUBE/SMa8kC+8ZFeimVhoT4NkwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvOTcwNDVkZDktMTkyNC00N2Y0LTliNDMtYzQwNGNhNWM5
ODFhIFByb2plY3QgQ0EwHhcNMjQwMTE3MTcwMzEwWhcNMzQwMTE0MTcwMzEwWjA6
MTgwNgYDVQQDDC85NzA0NWRkOS0xOTI0LTQ3ZjQtOWI0My1jNDA0Y2E1Yzk4MWEg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAMCB0FNu
95CgCq9pT7IaVcSbkimupJMwtQYrTDUjYm03P+ydPPGO46xqv3Yv/u+0W+ckRn2v
mAQf9NkH0PV/HUebhB7pmlFzcboFFM/Y+A9mvJHtlAd7fwKLh+UV9zR/L/W8ISOn
Od2ANkPfcLXWECaOH4br6YPMufp9rIaT6r4FhHmN9svCQ5fZpkFT7YV5+zf4xKaf
qMwPnkVKYQrzhVWadW4DD0SF+VXtioSDKb5EomHEifF+uF5GkQ7ZD+zPzACUYmlX
9PR0Cd40xItkVtHyufPMbRBS/bdC4YluP+kWaQ7Ey45zb0gp/RShYfy8vXBL/kTU
G+w4xp9A/TEetBsfNZ2Z04uCYqsqZy10KmRZ6b4a1/KRhVqaxHyd/stQySSp+PCU
B0zGp7JK0n9Mh8nLE3ProzPNy43CmFBcyG/UEd7/4i469hGEWm5VtCNYhYHgYhg0
IYDPjkETVuvv6UQgdxUCK1JcMQ6DtIRh9yIIuOdgFwwGQZLFhMWVvwGdaQIDAQAB
oz8wPTAdBgNVHQ4EFgQUFguonql5nUR1N+EKUtFS1exCPuowDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAJOc++KtAfszwKAP
N+haCZ97av6SwnGN11jfosm/GxdhRaN1AqH82k6CGjmf3KfqLiw1RF/xmk/HJGKG
PhS9xNaA4N66KMFwbzYDzK6P+Ro3Wi+GQ9dg2EYoOXKecXFaXHuTxmw4y6eD7pmH
Mb4Rrhjwc/6UigpTAnyIglCVBLqQ69wYz6qrQ4jqLRBq73GVDa0k9cxqQKiLqPRL
jSXz00gIFeA2gOufTTyzyUubSeJy6nCilvi8uLXflGjHs3RbRMaGGmz5Ik+DxOyr
VZfj89VNNC1Q/Yv/5AhtsP8ib//b8txAMD7fobl51N8yU0e51Pf7BZ7+H+p9rsB3
GL2j2NRaieaYU6U4yYnk8ncHHs2V1FFRsTzBlCtstyoZ/5ef9oN+DjVbunHnF/h0
rF/FqL0ROSZs/TigxIPyLjqrnRykCSttwVUrV1VVL4LnObtcJbnXDqhQsB6+S0FS
dNpUmtnMCLIsfUbNN0iZsLMH5u7I1sCsCpJnpmUBVUC4T4mWfw==
-----END CERTIFICATE-----`,
    },
};

const client = new pg.Client(config);
client.connect(function (err) {
    if (err)
        throw err;
    client.query("SELECT * from maincharactors", [], function (err, result) {
        if (err)
            throw err;
        console.log(result.rows);
        client.end(function (err) {
            if (err)
                throw err;
        });
    });
});