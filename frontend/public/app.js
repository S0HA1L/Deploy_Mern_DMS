function placeholderIsSupported() {
    test = document.createElement('input');
    return ('placeholder' in test);
}

$(document).ready(function () {
    placeholderSupport = placeholderIsSupported() ? 'placeholder' : 'no-placeholder';
    $('html').addClass(placeholderSupport);
});

let saveFile = () => {

    // Get the data from each element on the form.
    const name = document.getElementsByClassName('formdata1');
    const age = document.getElementsByClassName('formdata2');
    const email = document.getElementsByClassName('formdata3');
    const country = document.getElementsByClassName('formdata4');
    const msg = document.getElementsByClassName('formdata5');
    const pin = document.getElementsByClassName('formdata6');

    // This variable stores all the data.
    let data =
        '\r Name: ' + name.value + ' \r\n ' +
        'Age: ' + age.value + ' \r\n ' +
        'Email: ' + email.value + ' \r\n ' +
        'Country: ' + country.value + ' \r\n ' +
        'Pincode: ' + pin.value + ' \r\n ' +
        'Message: ' + msg.value;

    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
}