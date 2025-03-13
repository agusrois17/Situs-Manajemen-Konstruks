document.addEventListener("DOMContentLoaded", function () {
    let totalDocs = 180;
    let progressPercentage = 65;
    let pendingApproval = 10;

    document.getElementById("totalDocs").textContent = totalDocs;
    document.getElementById("progressPercentage").textContent = progressPercentage + "%";
    document.getElementById("pendingApproval").textContent = pendingApproval;

    let ctx1 = document.getElementById("projectProgressChart").getContext("2d");
    new Chart(ctx1, {
        type: "doughnut",
        data: {
            labels: ["Selesai", "Dalam Proses", "Pending"],
            datasets: [{
                data: [65, 25, 10],
                backgroundColor: ["#28a745", "#ffc107", "#dc3545"]
            }]
        }
    });

    let ctx2 = document.getElementById("documentStatusChart").getContext("2d");
    new Chart(ctx2, {
        type: "bar",
        data: {
            labels: ["Disetujui", "Pending", "Ditolak"],
            datasets: [{
                label: "Jumlah Dokumen",
                data: [120, 45, 15],
                backgroundColor: ["#28a745", "#ffc107", "#dc3545"]
            }]
        }
    });
});
