import type { User } from "./types";

export const shortFormatBirthday = (birthDay: string): string => {
  const map = new Map<number, string>([
    [1, "янв"],
    [2, "фев"],
    [3, "мар"],
    [4, "апр"],
    [5, "май"],
    [6, "июн"],
    [7, "июл"],
    [8, "авг"],
    [9, "сен"],
    [10, "окт"],
    [11, "ноя"],
    [12, "дек"],
  ]);

  const [_, month, day] = birthDay.split("-");

  return `${day} ${map.get(parseInt(month))}`;
};

export const fullFormatBirthday = (birthDay: string): string => {
  const map = new Map<number, string>([
    [1, "января"],
    [2, "февраля"],
    [3, "марта"],
    [4, "апреля"],
    [5, "мая"],
    [6, "июня"],
    [7, "июля"],
    [8, "августа"],
    [9, "сентября"],
    [10, "октября"],
    [11, "ноября"],
    [12, "декабря"],
  ]);

  const [year, month, day] = birthDay.split("-");

  return `${day} ${map.get(parseInt(month))} ${year}`;
};

const getDiffYear = (birthday: string): number => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const [y, m, _] = birthday.split("-");
  const birthYear = parseInt(y);
  const birthMonth = parseInt(m) + 1; // getMonth считает месяцы с нуля

  let diffYears = currentYear - birthYear;

  if (birthMonth > currentMonth) {
    diffYears -= 1;
  }

  return diffYears;
};

export const getFullYearAge = (birthday: string): string => {
  const age = getDiffYear(birthday);

  const units = age % 10;
  let fullYearAge = "";
  if (units === 1) {
    fullYearAge = `${age} год`;
  } else if (units > 1 && units < 5) {
    fullYearAge = `${age} года`;
  } else {
    fullYearAge = `${age} лет`;
  }
  return fullYearAge;
};

export type usersObjectType = {
  currentYear: User[];
  nextYear: User[];
};

export const alphabeticSort = (user1: User, user2: User): -1 | 0 | 1 => {
  if (user1.firstName > user2.firstName) return 1;
  if (user2.firstName > user1.firstName) return -1;
  return 0;
};

export const birthdaySort = (users: User[] | undefined): usersObjectType => {
  if (users === undefined) {
    return { currentYear: [], nextYear: [] };
  }

  const today = new Date();
  const currentMonth = today.getMonth() + 1; // getMonth считает месяцы с нуля
  const currentDay = today.getDate();

  const acc: usersObjectType = { currentYear: [], nextYear: [] };

  const currentYearUsers: usersObjectType = users.reduce((acc, user) => {
    const [_, m, d] = user.birthday.split("-");
    const month = parseInt(m);
    const day = parseInt(d);

    if (month === currentMonth && day > currentDay) {
      acc.currentYear.push(user);
    } else if (month > currentMonth) {
      acc.currentYear.push(user);
    } else {
      acc.nextYear.push(user);
    }

    return acc;
  }, acc);

  return currentYearUsers;
};
