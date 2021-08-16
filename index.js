// Information Security Project 2021

function passwordTests(password) {

    let passwordStrength = 1;
    let missings = '';

    let regExLowers = /[a-z]/;
    let regExUppers = /[A-Z]/;
    let regExNumbers = /\d+/;
    let regExSigns = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

    if (password != "") {
        if (password.length <= 5) {
            passwordStrength = 0;
            missings += 'Password has to be at least 6 charcters long. '
        }

        if (!password.match(regExLowers)) {
            passwordStrength = 0;
            missings += 'Password has to include lower case letters. '
        }

        if (!password.match(regExUppers)) {
            passwordStrength = 0;
            missings += 'Password has to include upper case letters. '
        }

        if (!password.match(regExNumbers)) {
            passwordStrength = 0;
            missings += 'Password has to include numbers. '
        }

        if (!password.match(regExSigns)) {
            passwordStrength = 0;
            missings += 'Password has to include special signs. '
        }

    }
    
}

passwordTests('asf')
passwordTests('7697')
passwordTests('HJYRTDFX')
passwordTests('%$#')
passwordTests('hfgrke5634')
passwordTests('GED&^%')
passwordTests('Aasf6534')
passwordTests('Aasf5fds53^%$')