document.addEventListener("DOMContentLoaded", function () {
    let table = new DataTable("#documentTable");

    document.getElementById("uploadForm").addEventListener("submit", function (e) {
        e.preventDefault();
        let docName = document.getElementById("docName").value;
        let docCategory = document.getElementById("docCategory").value;

        let newRow = table.row.add([
            docName,
            docCategory,
            '<span class="text-warning">Pending</span>',
            new Date().toLocaleDateString(),
            '<button class="btn btn-primary btn-sm">Download</button> ' +
            '<button class="btn btn-success btn-sm">Approve</button> ' +
            '<button class="btn btn-danger btn-sm">Reject</button>'
        ]).draw().node();

        document.getElementById("uploadForm").reset();
    });
});
