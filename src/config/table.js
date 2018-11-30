export const columns = [
    {
        name: "Order Date",
        options: {
            filter: false
        }
    },
    {
        name: "Address",
        options: {
            display: 'false',
            filter: false
        }
    },
    {
        name: "Blockchain",
        options: {
            display: 'false',
            filter: false
        }
    },
    {
        name: "Contract Version",
        options: {
            display: 'false',
        }
    },
    {
        name: "Market"
    },
    {
        name: "Type"
    },
    {
        name: "Amount",
        options: {
            filter: false
        }
    },
    {
        name: "Order Price",
        options: {
            filter: false
        }
    },
    {
        name: "Current Price",
        options: {
            filter: false,
            display: 'false',
        }
    },
    {
        name: "Gains",
        options: {
            filter: false,
        }
    },
    {
        name: "Fee Token",
        options: {
            display: 'false'
        }
    },
    {
        name: "Fee Amount",
        options: {
            display: 'false',
            filter: false
        }
    },
    {
        name: "Total",
        options: {
            filter: false
        }
    },
    {
        name: "Status"
    }
];

export const options = {
    selectableRows: false,
    print: false,
    responsive: 'scroll',
    textLabels: {
        body: {
            noMatch: "Can't find any trades",
        }
    }
};
