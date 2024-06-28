// document.getElementById('uploadImage').addEventListener('change', function(e) {
//     var reader = new FileReader();
//     reader.onload = function(event) {
//         var imgElement = document.createElement('img');
//         imgElement.src = event.target.result;
//         imgElement.style.left = '0px';
//         imgElement.style.top = '0px';
//         imgElement.style.cursor = 'move';
//         imgElement.draggable = true;

//         document.getElementById('shirtCanvas').appendChild(imgElement);
        
//         imgElement.addEventListener('dragstart', function(event) {
//             event.dataTransfer.setData('text/plain', null);
//             this.style.opacity = '0.5';
//         });
        
//         imgElement.addEventListener('dragend', function(event) {
//             this.style.opacity = '1';
//         });
        
//         imgElement.addEventListener('dragover', function(event) {
//             event.preventDefault();
//         });
        
//         imgElement.addEventListener('drop', function(event) {
//             event.preventDefault();
//             var x = event.clientX - this.offsetWidth / 2;
//             var y = event.clientY - this.offsetHeight / 2;
//             this.style.left = x + 'px';
//             this.style.top = y + 'px';
//         });
//     }
//     reader.readAsDataURL(e.target.files[0]);
// });

// document.getElementById('saveDesign').addEventListener('click', function() {
//     html2canvas(document.querySelector('#shirtCanvas')).then(canvas => {
//         canvas.toBlob(function(blob) {
//             var formData = new FormData();
//             formData.append('file', blob, 'design.png');
//             formData.append('name', document.getElementById('name').value);
//             formData.append('address', document.getElementById('address').value);
//             formData.append('phone', document.getElementById('phone').value);
            
//             axios.post('https://api.telegram.org/botYOUR_TELEGRAM_BOT_TOKEN/sendDocument', formData, {
//                 params: {
//                     chat_id: 'YOUR_TELEGRAM_CHAT_ID'
//                 }
//             }).then(response => {
//                 alert('Đơn hàng đã được gửi!');
//             }).catch(error => {
//                 alert('Có lỗi xảy ra. Vui lòng thử lại.');
//             });
//         });
//     });
// });
