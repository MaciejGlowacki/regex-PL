window.addEventListener("load", function(event) {

  const regMail = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,13}$/i;
  const regName = /^[a-ząśżźćęółń]{2,20}$/i;
  const regSurname = /^[a-ząśżźćęółń]+(?:\s*-\s*)?\s?(\s\b[a-z]{3}\b\s)?[a-ząśżźćęółń]+$/i;
  const regPostCode = /^[0-9]{2}-[0-9]{3}$/;
  const regTel = /^(?:\(?\+?48)?(?:[-\.\(\)\s]*(\d)){9}\)?$/;

  const regPESEL = /^[0-9]{11}$/;
  // The above PESEL record provides for simplified validation, without checking the date of birth and the checksum
  // powyzszy zapis PESEL przewiduje walidacje uproszczoną, bez sprawdzania daty urodzenia i cyfry kontrolnej. Prawidłowa walidacja może być niemożliwa z powodu istniejących w ewidencji błędnie nadanych numerów


  // TESTS
  const validMail = [
             'andrzej@fipmopol.pl',
             'andrzej@firmopol.versicherung',
             'mikołaj.sochacki@firma.com',
             'Jerzy@urzad.gov.pl',
             'ToMeK@mennic.pl',
             'tomek123@domena111.pl',
             'tomek_123@domena.pl',
             '11zip@domena.pl'
  ];
  const invalidMail = [
             '-atomek@domena.net',
             '_atomek@domena.pl',
             'Wojtek@domena.netversicherung',
             'tomek.januszpol.pl',
             '@domena.pl',
             'anna@domena',
             'anna@domena.',
             'anna@-domena.pl',
             'anna@_domena.pl',
             'łukasz@górnik.gov',
             'lukasz@górnik.gov',
             'łukasz@gornik.gov'
  ];
  const validName = [
            'ula',
            'Anna',
            'grzEgorZ',
            'Staś',
            'Hermenegilda',
            'Żelisław'
  ];
  const invalidName = [
            'B3ata',
            '†omek',
            'Anna Kowalska'
  ];
  const validSurname = [
            'Ak',
            'Głowacki',
            'noWAk',
            'grześkowiak',
            'Kowalska Żądło',
            'Achmistrowicz-Wachmistrowicz',
            'Achmistrowicz - Wachmistrowicz',
            'Oreszczyk Oreszczyński',
            'Oreszczyk vel Oreszczyński',
            // 'Oreszczyk vel Oreszczyński' - probably the longest Polish surname ( http://www.polskieradio.pl/127,Lato-z-Radiem-2012/2194,NASI-REKORDZISCI )
            'Żyliński'
  ];
  const invalidSurname = [
            '-Kowalski',
            'Grześkowiak_Maryniarczyk',
            'Grześkowiak	Maryniarczyk',
            'K0WALSKI',
            'Mistrowicz-Wach-Nowak',
            'Mistrowicz Wach Nowak'
  ];
  const validPostCode = [
            '09-319'
  ];
  const invalidPostCode = [
            '09319',
            '09 319',
            '09_319',
            'O9-319',
  ];

  const validTel = [
            '908332456',
            '908 332 456',
            '908-332-456',
            '48908332456',
            '48-908-332-456',
            '+48-908-332-456',
            '48908 332 456',
            '48 908-332-456',
            '+48 908-332-456',
            '+48 908 332 456',
            '+48 908-332 456',
            '+48908332456',
            '453441923',
            '48453441923',
            '+48453441923',
            '45 344 19 23',
            '48 45 344 19 23',
            '(48) 45 344 19 23',
            '+48 45 344 19 23',
            '45-344-19-23',
            '48-45-344-19-23',
            '+48-45-344-19-23',
            '+48 45-344-19-23',
            '(+48) 45-344-19-23',
            '(22) 222 90 43'
  ];
  const invalidTel = [
            '344-33-021',
            '1234567890'
  ];
  const validPESEL = [
            '82114590765'
  ];
  const invalidPESEL = [
            '821145 90765',
            '8211459O765'
  ];



  console.log('EMAIL ADDRESS:');
  console.log('Positive tests (expected true):');
  validMail.forEach(v => {console.log(regMail.test(v),v);});
  console.log('Negaitive tests (expected false):');
  invalidMail.forEach(v => {console.log(regMail.test(v),v);});
  console.log('');
  console.log('NAME:');
  console.log('Positive tests (expected true):');
  validName.forEach(v => {console.log(regName.test(v),v);});
  console.log('Negaitive tests (expected false):');
  invalidName.forEach(v => {console.log(regName.test(v),v);});
  console.log('');
  console.log('SURNAME:');
  console.log('Positive tests (expected true):');
  validSurname.forEach(v => {console.log(regSurname.test(v),v);});
  console.log('Negaitive tests (expected false):');
  invalidSurname.forEach(v => {console.log(regSurname.test(v),v);});
  console.log('');
  console.log('POST CODE:');
  console.log('Positive tests (expected true):');
  validPostCode.forEach(v => {console.log(regPostCode.test(v),v);});
  console.log('Negaitive tests (expected false):');
  invalidPostCode.forEach(v => {console.log(regPostCode.test(v),v);});
  console.log('');
  console.log('PESEL:');
  console.log('Positive tests (expected true):');
  validPESEL.forEach(v => {console.log(regPESEL.test(v),v);});
  console.log('Negaitive tests (expected false):');
  invalidPESEL.forEach(v => {console.log(regPESEL.test(v),v);});
  console.log('');
  console.log('PHONE NUMBER:');
  console.log('Positive tests (expected true):');
  validTel.forEach(v => {console.log(regTel.test(v),v);});
  console.log('Negaitive tests (expected false):');
  invalidTel.forEach(v => {console.log(regTel.test(v),v);});
});
