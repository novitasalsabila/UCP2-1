    document.addEventListener('DOMContentLoaded', function () {
        var form = document.getElementById('myForm');

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Mencegah form untuk melakukan submit defaultnya
            
            // Ambil nilai dari input
            var name = document.getElementById('inputName').value;
            var email = document.getElementById('inputEmail').value;
            var message = document.getElementById('inputMessage').value;
            
            // Tampilkan SweetAlert dengan nilai yang diambil
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                html: `
                    <div style="text-align: left;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Message:</strong> ${message}</p>
                    </div>
                `,
                confirmButtonColor: '#3C5B6F',
                confirmButtonText: 'OK'
            });
            
            // Optional: Reset form setelah SweetAlert ditampilkan
            // form.reset();
        });
    });
