// Function to simulate fetching available scanners
function getAvailableScanners() {
    // Simulate a delay in fetching scanners
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['VTWAIN2 FreeImage Software Scanner']);
        }, 1000);
    });
}

// Function to add an image to the viewer
function addImage(src) {
    const img = document.createElement('img');
    img.src = src;
    document.getElementById('imageViewer').appendChild(img);
}

// Populate the scanner dropdown
document.addEventListener('DOMContentLoaded', async () => {
    const scannerSelect = document.getElementById('selectSource');
    const scanners = await getAvailableScanners();
    scanners.forEach(scanner => {
        const option = document.createElement('option');
        option.text = scanner;
        scannerSelect.add(option);
    });
});

document.getElementById('scanSave1').addEventListener('click', function() {
    // Simulate scanning images and saving as a multi-page PDF
    alert('Scanned images saved as multi-page PDF.');
});

document.getElementById('scanSave2').addEventListener('click', function() {
    // Simulate scanning images and saving each as individual PDF
    alert('Scanned images saved as individual PDFs.');
});

document.getElementById('removeBlank').addEventListener('click', function() {
    // Simulate removing blank images from the viewer
    alert('Blank images removed.');
});

document.getElementById('removeAll').addEventListener('click', function() {
    // Remove all images from the viewer
    const imageViewer = document.getElementById('imageViewer');
    while (imageViewer.firstChild) {
        imageViewer.removeChild(imageViewer.firstChild);
    }
});

// Simulate adding some images on page load
window.onload = function() {
    addImage('https://via.placeholder.com/150');
    addImage('https://via.placeholder.com/150');
    addImage('https://via.placeholder.com/150');
    addImage('https://via.placeholder.com/150');
    addImage('https://via.placeholder.com/150'); // This will trigger the scroll
}
