let button =  document.getElementById('hitungBMI');

button.addEventListener('click', () => {
    const inputBerat = parseInt(document.getElementById('inputBerat').value);
    const inputTinggi = parseInt(document.getElementById('inputTinggi').value);
    const hasil = document.getElementById('hasil');
    let status_berat = false, status_tinggi = false;
    
    if(inputBerat == '' || isNaN(inputBerat) || (inputBerat <= 0)){
        document.getElementById('berat_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('berat_error').innerHTML = '';
        status_berat = true;
    }

    if(inputTinggi == '' || isNaN(inputTinggi) || (inputTinggi <= 0)){
        document.getElementById('tinggi_error').innerHTML = 'Please provide a valid height';        
    }else{
        document.getElementById('tinggi_error').innerHTML = '';
        status_tinggi = true;
    }

    if(status_berat && status_tinggi){
        const bmi = (inputBerat/((inputTinggi*inputTinggi)/1000)).toFixed(2);
    
        if(bmi < 18.5){
            hasil.innerHTML = 'Kekurangan berat badan : ' + bmi;
        }else if(bmi >= 18.5 && bmi < 24.9){
            hasil.innerHTML = 'Normal(ideal) : ' + bmi;
        }else{
            hasil.innerHTML = 'Kelebihan berat badan' + bmi;
        }
    }else{
        alert('Data belum dimasukkan');
        hasil.innerHTML = '';
    }
});

