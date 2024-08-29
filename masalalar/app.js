// 1 - masala
{
  console.log(`1 - masala`);
  let a = 5;
  switch (a) {
    case 1:
      day = "Monday";
      console.log(day);
      break;
    case 2:
      day = "Tuesday";
      console.log(day);
      break;
    case 3:
      day = "Wednesday";
      console.log(day);
      break;
    case 4:
      day = "Thursday";
      console.log(day);
      break;
    case 5:
      day = "Friday";
      console.log(day);
      break;
    case 6:
      day = "Saturday";
      console.log(day);
      break;
    case 7:
      day = "Sunday";
      console.log(day);
      break;

    default:
      console.log("1- oraligida son kirit");
      break;
  }
}
// 2 - masala
{
  console.log(`2 - masala`);

  let k = 8;
  switch (k) {
    case 1:
      console.log(`Yomon`);
      break;
    case 2:
      console.log(`Qoniqarsiz`);
      break;
    case 3:
      console.log(`Qoniqarli`);
      break;
    case 4:
      console.log(`Yahshi`);
      break;
    case 5:
      console.log(`A'lo`);
      break;

    default:
      console.log(`1 -  5 oraligida son kirir . Xato`);
      break;
  }
}
// 3 - masala
{
  console.log(`3 - masala`);

  let a = 11;
  switch (a) {
    case 1:
    case 2:
    case 12:
      console.log(`qish`);
      break;
    case 3:
    case 4:
    case 5:
      console.log(`Bahor`);
      break;
    case 6:
    case 7:
    case 8:
      console.log(`yoz`);
      break;
    case 9:
    case 10:
    case 11:
      console.log(`Kuz`);
      break;

    default:
      console.log(`xato`);
      break;
  }
}

// 4 - masala
{
  console.log(`4 - masala`);

  let a = 8;
  switch (a) {
    case 1:
      console.log(`Yanvarda 31 kun bor`);
      break;
    case 2:
      console.log(`Fevralda 28(29 - kabisa yilida) kun bor`);
      break;
    case 3:
      console.log(`Martda 31 kun bor`);
      break;
    case 4:
      console.log(`Apreldada 30 kun bor`);
      break;
    case 5:
      console.log(`Mayda 31 kun bor`);
      break;
    case 6:
      console.log(`Iyunda 30 kun bor`);
      break;
    case 7:
      console.log(`Iyulda 31 kun bor`);
      break;
    case 8:
      console.log(`Avgustda 31 kun bor`);
      break;
    case 9:
      console.log(`Sentabrda 30 kun bor`);
      break;
    case 10:
      console.log(`Oktabrda 31 kun bor`);
      break;
    case 11:
      console.log(`Noyabrda 30 kun bor`);
      break;
    case 12:
      console.log(`Dekabrda 31 kun bor`);
      break;

    default:
      console.log(`Xato`);
      break;
  }
}
// 5 - masala
{
  console.log(`5 - masala`);
  let a = 5;
  let b = 6;
  let amal = 4;
  // 1 = qoshish
  // 2 = ayirish
  // 3 = bo'lish
  // 4 = ko'paytirish
  switch (amal) {
    case 1:
      console.log(`${a} + ${b} = ${a + b}`);
      break;
    case 2:
      console.log(`${a} - ${b} = ${a - b}`);
      break;
    case 3:
      console.log(`${a} / ${b} = ${a / b}`);
      break;
    case 4:
      console.log(`${a} * ${b} = ${a * b}`);

    default:
      break;
  }
}
// 6 - masala
{
  console.log(`6 - masala`);
  // 1 - detsimetr
  // 2 - kilometr
  // 3 - metr
  // 4 - millimetr
  // 5 - santimetr
  let uzunlikBirligi = 5;
  let kesmaUzunligi = 30;
  switch (uzunlikBirligi) {
    case 1:
      console.log(`Kesma uzunligi ${kesmaUzunligi / 10} metr`);

      break;
    case 2:
      console.log(`Kesma uzunligi ${kesmaUzunligi * 1000} metr`);
      break;
    case 3:
      console.log(`Kesma uzunligi ${kesmaUzunligi} metr`);
      break;
    case 4:
      console.log(`Kesma uzunligi ${kesmaUzunligi / 1000} metr`);
      break;
    case 5:
      console.log(`Kesma uzunligi ${kesmaUzunligi / 100} metr`);
      break;

    default:
      console.log(`xato`);
      break;
  }
}
// 7 - masala
{
  console.log(`7 - masala`);
  // 1 - kilogramm
  // 2 - milligramm
  // 3 - gramm
  // 4 - tonna
  // 5 - sentner
  let ogirlikBirligi = 2;
  let berilganOgirlik = 3;
  switch (ogirlikBirligi) {
    case 1:
      console.log(`Berilgan Ogirlik ${berilganOgirlik} kilogramm`);
      break;
    case 2:
      console.log(`Berilgan Ogirlik ${berilganOgirlik / 1_000_000} kilogramm`);
      break;
    case 3:
      console.log(`Berilgan Ogirlik ${berilganOgirlik / 1_000} kilogramm`);
      break;
    case 4:
      console.log(`Berilgan Ogirlik ${berilganOgirlik * 1000} kilogramm`);
      break;
    case 5:
      console.log(`Berilgan Ogirlik ${berilganOgirlik * 100} kilogramm`);
      break;

    default:
      break;
  }
}
// 8 - masala

{
  console.log(`8 - masala`);
  // sanani chiqarish
  let d = 30; // kun
  let m = 11; // oy

  if (d > 0 && d < 32) {
    switch (m) {
      case 1:
        console.log(`${d} - Yanvar , yilning ${d} kuni`);

        break;
      case 2:
        if (d != 29 && d != 30 && d != 31) {
          console.log(`${d} - Fevral,Yilning ${31 + d} kuni`);
        } else console.log(`bu oyda unaqa kun yoq`);

        break;
      case 3:
        console.log(`${d} - Mart, Yilning ${31 + 28 + d} kuni`);

        break;
      case 4:
        if (d != 31)
          console.log(`${d} - Aprel, Yilning ${31 + 28 + 31 + d} kuni`);
        else console.log(`bu xato`);
        break;
      case 5:
        console.log(`${d} - May, Yilning ${31 + 28 + 31 + 30 + d} kuni`);

        break;

      case 6:
        if (d != 31)
          console.log(
            `${d} - June, Yilning ${31 + 28 + 31 + 30 + 31 + d} kuni`
          );
        else console.log(`bu xato`);
        break;
      case 7:
        console.log(
          `${d} - Iyul, Yilning ${31 + 28 + 31 + 30 + 31 + 30 + d} kuni`
        );

        break;
      case 8:
        console.log(
          `${d} - Avgust, Yilning ${31 + 28 + 31 + 30 + 31 + 30 + 31 + d} kuni`
        );

        break;
      case 9:
        if (d != 31)
          console.log(
            `${d} - Sentabr, Yilning ${
              31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + d
            } kuni`
          );
        else console.log(`bu xato`);

        break;
      case 10:
        console.log(
          `${d} - Oktabr, Yilning ${
            31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + d
          } kuni`
        );

        break;
      case 11:
        if (d != 31)
          console.log(
            `${d} - Noyabr, Yilning ${
              31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + d
            } kuni`
          );
        else console.log(`bu xato`);
        break;
      case 12:
        console.log(
          `${d} - dekabr, Yilning ${
            31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + d
          } kuni`
        );

        break;

      default:
        console.log(`xato `);
        break;
    }
  } else console.log(`xato 1-31 orasida son kirit`);
}
// 9 - masala
{
  console.log(`9 - masala`);
  let d = 30; // kun
  let m = 11; // oy
  if (d > 0 && d < 32) {
    switch (m) {
      case 1:
        if (d === 31) console.log(`Ertaga 1 - Fevral yilning 32 - kuni`);
        else console.log(`Ertaga ${d + 1} - yanvar,yilning ${d + 1} kuni`);

        break;
      case 2:
        if (d != 30 && d != 31 && d != 29) {
          if (d === 28) {
            console.log(`Ertaga 1- mart,Yilning ${31 + 28 + 1} - kuni`);
          } else {
            console.log(
              `Ertaga ${d + 1} - Fevral,yilning ${31 + d + 1} - kuni`
            );
          }
        } else {
          console.log(`bu xato`);
        }
        break;
      case 3:
        if (d === 31)
          console.log(`Ertaga 1 - aprel,yilning ${31 + 28 + 31 + 1} - kuni`);
        else
          console.log(
            `Ertaga ${d + 1} - mart , yolning ${31 + 28 + d + 1} - kuni`
          );
        break;
      case 4:
        if (d === 30)
          console.log(`Ertaga 1 - may,yilning ${31 + 28 + 31 + 30 + 1} - kuni`);
        else if (d !== 31) {
          console.log(
            `Ertaga ${d + 1} - aprel , yilning ${31 + 28 + 31 + d + 1} - kuni`
          );
        } else console.log(`bu hato`);
        break;
      case 5:
        if (d === 31)
          console.log(
            `Ertaga 1 - iyun,yilning ${31 + 28 + 31 + 30 + 31 + 1} - kuni`
          );
        else
          console.log(
            `Ertaga ${d + 1} - may , yilning ${
              31 + 28 + 31 + 30 + d + 1
            } - kuni`
          );
        break;
      case 6:
        if (d === 30)
          console.log(
            `Ertaga 1 - iyul,yilning ${31 + 28 + 31 + 30 + 31 + 30 + 1} - kuni`
          );
        else if (d !== 31) {
          console.log(
            `Ertaga ${d + 1} - iyun , yilning ${
              31 + 28 + 31 + 30 + 31 + d + 1
            } - kuni`
          );
        } else console.log(`bu xato`);
        break;
      case 7:
        if (d === 31)
          console.log(
            `Ertaga 1 - Avgust,yilning ${
              31 + 28 + 31 + 30 + 31 + 30 + 31 + 1
            } - kuni`
          );
        else
          console.log(
            `Ertaga ${d + 1} - iyul , yilning ${
              31 + 28 + 31 + 30 + 31 + 30 + d + 1
            } - kuni`
          );
        break;
      case 8:
        if (d === 31)
          console.log(
            `Ertaga 1 - sentabr,yilning ${
              31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 1
            } - kuni`
          );
        else
          console.log(
            `Ertaga ${d + 1} - avgust , yilning ${
              31 + 28 + 31 + 30 + 31 + 30 + 31 + d + 1
            } - kuni`
          );
        break;
      case 9:
        if (d === 30)
          console.log(
            `Ertaga 1 - oktabr,yilning ${
              31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 1
            } - kuni`
          );
        else if (d !== 31) {
          console.log(
            `Ertaga ${d + 1} - sentabr , yilning ${
              31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + d + 1
            } - kuni`
          );
        } else console.log(`bu xato`);
        break;
      case 10:
        if (d === 31)
          console.log(
            `Ertaga 1 - Noyabr,yilning ${
              31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 1
            } - kuni`
          );
        else
          console.log(
            `Ertaga ${d + 1} - oktabr , yilning ${
              31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + d + 1
            } - kuni`
          );
        break;
      case 11:
        if (d === 30)
          console.log(
            `Ertaga 1 - Dekabr,yilning ${
              31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 1
            } - kuni`
          );
        else if (d !== 31) {
          console.log(
            `Ertaga ${d + 1} - noyabr , yilning ${
              31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + d + 1
            } - kuni`
          );
        } else console.log(`bu hato`);
        break;
      case 12:
        if (d === 31) console.log(`Bugun 31- dekabr yilning ohirgi 365 - kuni`);
        else
          console.log(
            `Ertaga ${d + 1} - dekabr , yilning ${
              31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + d + 1
            } - kuni`
          );
        break;
      default:
        break;
    }
  } else console.log(`togri son kirit`);
}
// 10 - masalani shartni tushunmadim
