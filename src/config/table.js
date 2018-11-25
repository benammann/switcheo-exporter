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
        name: "Price",
        options: {
            filter: false
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
    textLabels: {
        body: {
            noMatch: "Sorry, no trades have been made with this address yet",
        }
    }
};
