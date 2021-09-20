module.exports = {
    
    before: function (browser) {
        browser.globals.waitForConditionTimeout = 7000
    },
    'First GET request': function(browser) {
        let apiUrl = 'https://tubular.azurewebsites.net/api/orders/1';
        browser
        .apiGet(apiUrl, function (response) {
            let data = JSON.parse(response.body)
            browser
            .assert.equal(response.statusCode,'200')
            .assert.equal(data.OrderID,1)
            .assert.equal(data.CustomerName,'Oxxo')
            .assert.equal(data.ShipperCity,'Guadalajara, JAL, Mexico')
            .assert.equal(data.Details,0)
        })
    },
    'Second GET request': function(browser) {
        let apiUrl = 'https://tubular.azurewebsites.net/api/orders/500'
        browser
        .apiGet(apiUrl, function (response) {
            let data = JSON.parse(response.body)
            browser
            .assert.equal(response.statusCode,'200')
            .assert.equal(data.OrderID,500)
            .assert.equal(data.CustomerName,'Oxxo')
            .assert.equal(data.ShipperCity,'Guadalajara, JAL, Mexico')
            .assert.equal(data.Details,0)
        })
    },
    'Third GET request': function(browser) {
        let apiUrl = 'https://tubular.azurewebsites.net/api/orders/500'
        browser
        .apiGet(apiUrl, function (response) {
            let data = JSON.parse(response.body)
            browser
            .assert.equal(response.statusCode,'200')
            .assert.equal(data.OrderID,500)
            .assert.equal(data.CustomerName,'Oxxo')
            .assert.equal(data.ShipperCity,'Guadalajara, JAL, Mexico')
            .assert.equal(data.Details,0)
        })
    },
    'Fourth GET request': function(browser) {
        let apiUrl = 'https://tubular.azurewebsites.net/api/orders/500'
        browser
        .apiGet(apiUrl, function (response) {
            let data = JSON.parse(response.body)
            browser
            .assert.equal(response.statusCode,'200')
        })
    },
    'First POST request': function(browser) {
        let apiUrl = 'https://tubular.azurewebsites.net/api/orders/paged'
        var postData = 
            {
                "columns": [
                    {
                        "aggregate": "None",
                        "dataType": "numeric",
                        "dateDisplayFormat": "YYYY-MM-DD",
                        "dateOriginFormat": "YYYY-MM-DD",
                        "dateTimeDisplayFormat": "YYYY-MM-DDTHH:mm:ss",
                        "dateTimeOriginFormat": "YYYY-MM-DDTHH:mm:ss",
                        "isKey": true,
                        "isComputed": false,
                        "label": "Id",
                        "name": "OrderID",
                        "searchable": false,
                        "sortDirection": "Ascending",
                        "sortOrder": 1,
                        "sortable": true,
                        "visible": true,
                        "filterable": true,
                        "exportable": true
                    },
                    {
                        "aggregate": "Count",
                        "dataType": "string",
                        "dateDisplayFormat": "YYYY-MM-DD",
                        "dateOriginFormat": "YYYY-MM-DD",
                        "dateTimeDisplayFormat": "YYYY-MM-DDTHH:mm:ss",
                        "dateTimeOriginFormat": "YYYY-MM-DDTHH:mm:ss",
                        "isKey": false,
                        "isComputed": false,
                        "label": "Customer Name",
                        "name": "CustomerName",
                        "searchable": true,
                        "sortDirection": "None",
                        "sortOrder": -1,
                        "sortable": true,
                        "visible": true,
                        "filterable": true,
                        "exportable": true
                    },
                    {
                        "aggregate": "None",
                        "dataType": "datetimeutc",
                        "dateDisplayFormat": "YYYY-MM-DD",
                        "dateOriginFormat": "YYYY-MM-DD",
                        "dateTimeDisplayFormat": "YYYY-MM-DDTHH:mm:ss",
                        "dateTimeOriginFormat": "YYYY-MM-DDTHH:mm:ss",
                        "isKey": false,
                        "isComputed": false,
                        "label": "Shipped Date",
                        "name": "ShippedDate",
                        "searchable": false,
                        "sortDirection": "None",
                        "sortOrder": -1,
                        "sortable": true,
                        "visible": true,
                        "filterable": true,
                        "exportable": true
                    },
                    {
                        "aggregate": "None",
                        "dataType": "string",
                        "dateDisplayFormat": "YYYY-MM-DD",
                        "dateOriginFormat": "YYYY-MM-DD",
                        "dateTimeDisplayFormat": "YYYY-MM-DDTHH:mm:ss",
                        "dateTimeOriginFormat": "YYYY-MM-DDTHH:mm:ss",
                        "isKey": false,
                        "isComputed": false,
                        "label": "Shipper City",
                        "name": "ShipperCity",
                        "searchable": false,
                        "sortDirection": "None",
                        "sortOrder": -1,
                        "sortable": false,
                        "visible": true,
                        "filterable": false,
                        "exportable": true
                    },
                    {
                        "aggregate": "None",
                        "dataType": "numeric",
                        "dateDisplayFormat": "YYYY-MM-DD",
                        "dateOriginFormat": "YYYY-MM-DD",
                        "dateTimeDisplayFormat": "YYYY-MM-DDTHH:mm:ss",
                        "dateTimeOriginFormat": "YYYY-MM-DDTHH:mm:ss",
                        "isKey": false,
                        "isComputed": false,
                        "label": "Amount",
                        "name": "Amount",
                        "searchable": false,
                        "sortDirection": "None",
                        "sortOrder": -1,
                        "sortable": true,
                        "visible": true,
                        "filterable": false,
                        "exportable": true
                    },
                    {
                        "aggregate": "None",
                        "dataType": "boolean",
                        "dateDisplayFormat": "YYYY-MM-DD",
                        "dateOriginFormat": "YYYY-MM-DD",
                        "dateTimeDisplayFormat": "YYYY-MM-DDTHH:mm:ss",
                        "dateTimeOriginFormat": "YYYY-MM-DDTHH:mm:ss",
                        "isKey": false,
                        "isComputed": false,
                        "label": "Is Shipped",
                        "name": "IsShipped",
                        "searchable": false,
                        "sortDirection": "None",
                        "sortOrder": -1,
                        "sortable": true,
                        "visible": true,
                        "filterable": true,
                        "exportable": true
                    },
                    {
                        "aggregate": "None",
                        "dataType": "string",
                        "dateDisplayFormat": "YYYY-MM-DD",
                        "dateOriginFormat": "YYYY-MM-DD",
                        "dateTimeDisplayFormat": "YYYY-MM-DDTHH:mm:ss",
                        "dateTimeOriginFormat": "YYYY-MM-DDTHH:mm:ss",
                        "isKey": false,
                        "isComputed": false,
                        "label": "Actions",
                        "name": "Actions",
                        "searchable": false,
                        "sortDirection": "None",
                        "sortOrder": -1,
                        "sortable": false,
                        "visible": true,
                        "filterable": false,
                        "exportable": true
                    }
                ],
                "searchText": "",
                "skip": 0,
                "take": 5,
                "counter": 1,
                "timezoneOffset": 180
            }
        browser.apiPost(apiUrl, postData, null, null, function (response) {
            browser
            .assert.equal(response.statusCode, '200')
            .assert.equal(response.body.Counter, 1)
            .assert.equal(response.body.Counter, 1)
            .assert.equal(response.body.CurrentPage, 1)
            .assert.equal(response.body.Payload[0][0], 1)
        })
    },
    'Second POST request': function(browser) {
        let apiUrl = 'https://tubular.azurewebsites.net/api/orders/paged'
        var postData = 
        {
            "columns": [
                {
                    "aggregate": "None",
                    "dataType": "numeric",
                    "dateDisplayFormat": "YYYY-MM-DD",
                    "dateOriginFormat": "YYYY-MM-DD",
                    "dateTimeDisplayFormat": "YYYY-MM-DDTHH:mm:ss",
                    "dateTimeOriginFormat": "YYYY-MM-DDTHH:mm:ss",
                    "isKey": true,
                    "isComputed": false,
                    "label": "Id",
                    "name": "OrderID",
                    "searchable": false,
                    "sortDirection": "Ascending",
                    "sortOrder": 1,
                    "sortable": true,
                    "visible": true,
                    "filterable": true,
                    "exportable": true
                },
                {
                    "aggregate": "Count",
                    "dataType": "string",
                    "dateDisplayFormat": "YYYY-MM-DD",
                    "dateOriginFormat": "YYYY-MM-DD",
                    "dateTimeDisplayFormat": "YYYY-MM-DDTHH:mm:ss",
                    "dateTimeOriginFormat": "YYYY-MM-DDTHH:mm:ss",
                    "isKey": false,
                    "isComputed": false,
                    "label": "Customer Name",
                    "name": "CustomerName",
                    "searchable": true,
                    "sortDirection": "None",
                    "sortOrder": -1,
                    "sortable": true,
                    "visible": true,
                    "filterable": true,
                    "exportable": true
                },
                {
                    "aggregate": "None",
                    "dataType": "datetimeutc",
                    "dateDisplayFormat": "YYYY-MM-DD",
                    "dateOriginFormat": "YYYY-MM-DD",
                    "dateTimeDisplayFormat": "YYYY-MM-DDTHH:mm:ss",
                    "dateTimeOriginFormat": "YYYY-MM-DDTHH:mm:ss",
                    "isKey": false,
                    "isComputed": false,
                    "label": "Shipped Date",
                    "name": "ShippedDate",
                    "searchable": false,
                    "sortDirection": "None",
                    "sortOrder": -1,
                    "sortable": true,
                    "visible": true,
                    "filterable": true,
                    "exportable": true
                },
                {
                    "aggregate": "None",
                    "dataType": "string",
                    "dateDisplayFormat": "YYYY-MM-DD",
                    "dateOriginFormat": "YYYY-MM-DD",
                    "dateTimeDisplayFormat": "YYYY-MM-DDTHH:mm:ss",
                    "dateTimeOriginFormat": "YYYY-MM-DDTHH:mm:ss",
                    "isKey": false,
                    "isComputed": false,
                    "label": "Shipper City",
                    "name": "ShipperCity",
                    "searchable": false,
                    "sortDirection": "None",
                    "sortOrder": -1,
                    "sortable": false,
                    "visible": true,
                    "filterable": false,
                    "exportable": true
                },
                {
                    "aggregate": "None",
                    "dataType": "numeric",
                    "dateDisplayFormat": "YYYY-MM-DD",
                    "dateOriginFormat": "YYYY-MM-DD",
                    "dateTimeDisplayFormat": "YYYY-MM-DDTHH:mm:ss",
                    "dateTimeOriginFormat": "YYYY-MM-DDTHH:mm:ss",
                    "isKey": false,
                    "isComputed": false,
                    "label": "Amount",
                    "name": "Amount",
                    "searchable": false,
                    "sortDirection": "None",
                    "sortOrder": -1,
                    "sortable": true,
                    "visible": true,
                    "filterable": false,
                    "exportable": true
                },
                {
                    "aggregate": "None",
                    "dataType": "boolean",
                    "dateDisplayFormat": "YYYY-MM-DD",
                    "dateOriginFormat": "YYYY-MM-DD",
                    "dateTimeDisplayFormat": "YYYY-MM-DDTHH:mm:ss",
                    "dateTimeOriginFormat": "YYYY-MM-DDTHH:mm:ss",
                    "isKey": false,
                    "isComputed": false,
                    "label": "Is Shipped",
                    "name": "IsShipped",
                    "searchable": false,
                    "sortDirection": "None",
                    "sortOrder": -1,
                    "sortable": true,
                    "visible": true,
                    "filterable": true,
                    "exportable": true
                },
                {
                    "aggregate": "None",
                    "dataType": "string",
                    "dateDisplayFormat": "YYYY-MM-DD",
                    "dateOriginFormat": "YYYY-MM-DD",
                    "dateTimeDisplayFormat": "YYYY-MM-DDTHH:mm:ss",
                    "dateTimeOriginFormat": "YYYY-MM-DDTHH:mm:ss",
                    "isKey": false,
                    "isComputed": false,
                    "label": "Actions",
                    "name": "Actions",
                    "searchable": false,
                    "sortDirection": "None",
                    "sortOrder": -1,
                    "sortable": false,
                    "visible": true,
                    "filterable": false,
                    "exportable": true
                }
            ],
            "searchText": "",
            "skip": 5,
            "take": 5,
            "counter": 2,
            "timezoneOffset": 180
        }
        browser.apiPost(apiUrl, postData, null, null, function (response) {
            browser
            .assert.equal(response.statusCode, '200')
            .assert.equal(response.body.Counter, 2)
            .assert.equal(response.body.CurrentPage, 2)
        })
    },
}