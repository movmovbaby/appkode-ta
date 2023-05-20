import type { User } from "./types";

export const formatBirthday = (birthDay: string) => {
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
