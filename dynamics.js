document.getElementById('signUpButton').addEventListener('click', function() {
    document.getElementById('dataUpload').style.display = 'block';
});

document.getElementById('uploadButton').addEventListener('click', function() {
    var file = document.getElementById('csvFile').files[0];
    // Add code here to handle the file upload
});